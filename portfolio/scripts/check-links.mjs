#!/usr/bin/env node
/**
 * Link and asset checker for the portfolio.
 *
 * Walks every source file under the scanned roots and pulls out three kinds of
 * reference, then verifies each one:
 *
 *   external   http(s) URLs                -> HTTP request, follow redirects
 *   asset      /images/... /videos/... etc -> must exist under public/
 *   internal   ./route or /route           -> must resolve to an app/ route
 *
 * YouTube gets special handling: a 200 from youtube.com/watch is not proof a
 * video is alive, because removed and private videos still return 200 with an
 * error page. We check the oEmbed endpoint instead, which 404s for anything
 * that is not publicly playable.
 *
 * Usage:
 *   node scripts/check-links.mjs                 # check everything
 *   node scripts/check-links.mjs --external-only # only http(s) URLs
 *   node scripts/check-links.mjs --offline       # only assets and routes, no network
 *   node scripts/check-links.mjs --extract-only  # dump the reference list as JSON, check nothing
 *   node scripts/check-links.mjs --json report.json
 *   node scripts/check-links.mjs --markdown report.md
 *   node scripts/check-links.mjs --check-list urls.json   # check URLs from a prior --extract-only
 *
 * Exits 1 if anything is broken, 0 otherwise. Redirects and warnings do not
 * fail the run; they are reported so they can be cleaned up deliberately.
 */

import { readFile, readdir, stat, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

const SCAN_ROOTS = ['app', 'lib', 'components']
const SCAN_EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.jsx', '.mdx', '.md'])
const PUBLIC_DIR = path.join(ROOT, 'public')
const APP_DIR = path.join(ROOT, 'app')

const CONCURRENCY = 8
const TIMEOUT_MS = 20000
const USER_AGENT =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 ' +
  '(KHTML, like Gecko) Chrome/126.0 Safari/537.36 portfolio-link-checker'

/**
 * Hosts that reliably block or throttle automated HEAD/GET requests. A failure
 * here is reported as a warning rather than a break, because the checker
 * cannot tell a bot wall apart from a dead page. Check these by hand.
 */
const BOT_WALLED_HOSTS = [
  'x.com',
  'twitter.com',
  'www.instagram.com',
  'instagram.com',
  'www.tiktok.com',
  'tiktok.com',
  'www.facebook.com',
  'facebook.com',
  'www.linkedin.com',
  'linkedin.com',
  'medium.com',
  // Every *.medium.com publication is its own subdomain, and the host match
  // below is exact, so the bare domain never covered jonathan-albert.medium.com.
  'jonathan-albert.medium.com',
  // Both Midnight sites sit behind a bot wall. Verified by hand on 2026-09-07:
  // every one of the six URLs the checker called broken renders fine in a
  // browser, including the two docs.midnight.network posts with Jay's byline.
  'midnight.network',
  'docs.midnight.network',
  'chatgpt.com',
  'discordapp.com',
  'discord.com',
  't.me',
]

/** Skipped entirely: analytics and other non-content endpoints. */
const IGNORED_URL_PATTERNS = [
  /googletagmanager\.com/,
  /^https?:\/\/localhost/,
  /^https?:\/\/127\.0\.0\.1/,
  /example\.com/,
]

// ---------------------------------------------------------------- extraction

async function walk(dir) {
  const out = []
  let entries
  try {
    entries = await readdir(dir, { withFileTypes: true })
  } catch {
    return out
  }
  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) out.push(...(await walk(full)))
    else if (SCAN_EXTENSIONS.has(path.extname(entry.name))) out.push(full)
  }
  return out
}

const URL_RE = /https?:\/\/[^\s"'`)<>\\]+/g
const ASSET_RE = /["'`](\/(?:images|videos|documents|fonts)\/[^"'`]+)["'`]/g
const INTERNAL_RE = /(?:href|link)\s*[:=]\s*["'`](\.\/[^"'`]+|\/(?!\/)[a-z0-9][^"'`]*)["'`]/gi
const EMBED_ID_RE = /embedId=["'{`]+\s*["'`]?([A-Za-z0-9_-]{11})["'`]/g

function cleanUrl(raw) {
  // Strip trailing punctuation that comes from prose or JSX, not the URL.
  let url = raw.replace(/[.,;:]+$/, '')
  // Balance a trailing paren only if it is unmatched.
  while (url.endsWith(')') && (url.match(/\(/g) || []).length < (url.match(/\)/g) || []).length) {
    url = url.slice(0, -1)
  }
  return url
}

async function collectReferences() {
  const files = []
  for (const root of SCAN_ROOTS) files.push(...(await walk(path.join(ROOT, root))))

  /** @type {Map<string, {type: string, target: string, sources: Set<string>}>} */
  const refs = new Map()

  const add = (type, target, source) => {
    // Targets built at runtime from a template literal cannot be checked
    // statically; the concrete values are picked up at their call sites.
    if (target.includes('${')) return
    const key = `${type}::${target}`
    if (!refs.has(key)) refs.set(key, { type, target, sources: new Set() })
    refs.get(key).sources.add(source)
  }

  for (const file of files) {
    const text = await readFile(file, 'utf8')
    const rel = path.relative(ROOT, file)
    const lines = text.split('\n')

    lines.forEach((line, i) => {
      const at = `${rel}:${i + 1}`

      for (const m of line.matchAll(URL_RE)) {
        const url = cleanUrl(m[0])
        if (IGNORED_URL_PATTERNS.some((p) => p.test(url))) continue
        add('external', url, at)
      }
      for (const m of line.matchAll(ASSET_RE)) add('asset', m[1], at)
      for (const m of line.matchAll(INTERNAL_RE)) {
        const target = m[1]
        if (target.startsWith('/images/') || target.startsWith('/videos/')) continue
        if (target.startsWith('/documents/') || target.startsWith('/fonts/')) continue
        add('internal', target, at)
      }
      for (const m of line.matchAll(EMBED_ID_RE)) {
        add('external', `https://www.youtube.com/watch?v=${m[1]}`, at)
      }
    })
  }

  return [...refs.values()].sort((a, b) => a.target.localeCompare(b.target))
}

// ----------------------------------------------------------------- checking

function withTimeout(ms) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), ms)
  return { signal: controller.signal, done: () => clearTimeout(timer) }
}

function youtubeId(url) {
  try {
    const u = new URL(url)
    if (u.hostname === 'youtu.be') return u.pathname.slice(1).split('/')[0] || null
    if (!u.hostname.endsWith('youtube.com')) return null
    if (u.pathname === '/watch') return u.searchParams.get('v')
    const m = u.pathname.match(/^\/(?:embed|live|shorts)\/([A-Za-z0-9_-]{11})/)
    return m ? m[1] : null
  } catch {
    return null
  }
}

/**
 * A YouTube watch page returns 200 for videos that are deleted, private, or
 * region-blocked, so status alone proves nothing. oEmbed 404s on all of those,
 * which makes it the actual liveness check.
 */
async function checkYouTube(url, id) {
  const oembed = `https://www.youtube.com/oembed?url=${encodeURIComponent(
    `https://www.youtube.com/watch?v=${id}`
  )}&format=json`
  const t = withTimeout(TIMEOUT_MS)
  try {
    const res = await fetch(oembed, { headers: { 'user-agent': USER_AGENT }, signal: t.signal })
    if (res.ok) {
      const data = await res.json().catch(() => null)
      return { status: 'ok', code: 200, note: data?.title ? `video: ${data.title}` : 'video is live' }
    }
    if (res.status === 404) {
      return { status: 'broken', code: 404, note: 'video removed, private, or ID is wrong' }
    }
    if (res.status === 401 || res.status === 403) {
      return { status: 'broken', code: res.status, note: 'video is not embeddable or is restricted' }
    }
    return { status: 'warning', code: res.status, note: 'oEmbed returned an unexpected status' }
  } catch (err) {
    return { status: 'warning', code: null, note: `oEmbed request failed: ${err.message}` }
  } finally {
    t.done()
  }
}

async function checkExternal(url) {
  const id = youtubeId(url)
  if (id) return checkYouTube(url, id)

  let host = ''
  try {
    host = new URL(url).hostname
  } catch {
    return { status: 'broken', code: null, note: 'malformed URL' }
  }
  const botWalled = BOT_WALLED_HOSTS.includes(host)

  // HEAD first (cheap), fall back to GET for the many servers that reject HEAD.
  for (const method of ['HEAD', 'GET']) {
    const t = withTimeout(TIMEOUT_MS)
    try {
      const res = await fetch(url, {
        method,
        redirect: 'follow',
        headers: { 'user-agent': USER_AGENT, accept: '*/*' },
        signal: t.signal,
      })
      t.done()

      if (method === 'HEAD' && (res.status === 405 || res.status === 403 || res.status === 501)) {
        continue // server dislikes HEAD; retry as GET
      }

      const redirected = res.url && res.url.replace(/\/$/, '') !== url.replace(/\/$/, '')
      const note = redirected ? `redirects to ${res.url}` : ''

      if (res.ok) return { status: redirected ? 'redirect' : 'ok', code: res.status, note }

      // 403, 401 and 429 mean "we will not tell you", not "this is gone". No
      // amount of retrying from CI distinguishes a bot wall from a dead page,
      // so these can never be a hard failure: they would fail the build for a
      // third party's WAF rule change, which nobody here can fix. 404 and 410
      // still break, because those are the codes that actually mean absent.
      if (res.status === 401 || res.status === 403 || res.status === 429) {
        return {
          status: 'warning',
          code: res.status,
          note: `${host} refused an automated request; verify by hand`,
        }
      }

      if (botWalled) {
        return {
          status: 'warning',
          code: res.status,
          note: `${host} blocks automated requests; verify by hand`,
        }
      }
      return { status: 'broken', code: res.status, note }
    } catch (err) {
      t.done()
      if (method === 'GET') {
        const note = err.name === 'AbortError' ? `no response within ${TIMEOUT_MS / 1000}s` : err.message
        if (botWalled) return { status: 'warning', code: null, note: `${note} (${host} blocks bots)` }
        return { status: 'broken', code: null, note }
      }
    }
  }
  return { status: 'broken', code: null, note: 'request failed' }
}

async function checkAsset(target) {
  const file = path.join(PUBLIC_DIR, decodeURIComponent(target))
  if (!existsSync(file)) return { status: 'broken', code: null, note: 'file is not in public/' }
  const info = await stat(file)
  if (info.size === 0) return { status: 'broken', code: null, note: 'file is empty' }
  if (info.size < 200) {
    return { status: 'warning', code: null, note: `only ${info.size} bytes, may be an LFS pointer` }
  }
  return { status: 'ok', code: null, note: `${(info.size / 1024).toFixed(0)} KB` }
}

function checkInternal(target) {
  const route = target.replace(/^\.\//, '').replace(/^\//, '').split(/[?#]/)[0]
  if (route === '') return { status: 'ok', code: null, note: 'home' }
  const candidates = [
    path.join(APP_DIR, route, 'page.tsx'),
    path.join(APP_DIR, route, 'page.jsx'),
    path.join(APP_DIR, route, 'page.ts'),
    path.join(APP_DIR, route, 'page.js'),
    path.join(APP_DIR, route, 'page.mdx'),
  ]
  if (candidates.some(existsSync)) return { status: 'ok', code: null, note: '' }
  return { status: 'broken', code: null, note: `no app/${route}/page.* route` }
}

async function runPool(items, worker, size) {
  const results = new Array(items.length)
  let cursor = 0
  const runners = Array.from({ length: Math.min(size, items.length) }, async () => {
    while (cursor < items.length) {
      const i = cursor++
      results[i] = await worker(items[i], i)
    }
  })
  await Promise.all(runners)
  return results
}

// ------------------------------------------------------------------ reporting

const ICON = { ok: 'ok', redirect: '->', warning: '!', broken: 'X' }

function toMarkdown(results, startedAt) {
  const counts = results.reduce((acc, r) => ((acc[r.status] = (acc[r.status] || 0) + 1), acc), {})
  const lines = []
  lines.push('# Link and asset report')
  lines.push('')
  lines.push(`Run ${startedAt.toISOString()} against ${results.length} references.`)
  lines.push('')
  lines.push('| Result | Count |')
  lines.push('| --- | --- |')
  lines.push(`| Broken | ${counts.broken || 0} |`)
  lines.push(`| Needs a human look | ${counts.warning || 0} |`)
  lines.push(`| Redirected | ${counts.redirect || 0} |`)
  lines.push(`| Fine | ${counts.ok || 0} |`)
  lines.push('')

  const section = (title, status, blurb) => {
    const rows = results.filter((r) => r.status === status)
    if (!rows.length) return
    lines.push(`## ${title} (${rows.length})`)
    lines.push('')
    if (blurb) {
      lines.push(blurb)
      lines.push('')
    }
    for (const r of rows) {
      const code = r.code ? ` [${r.code}]` : ''
      lines.push(`- \`${r.target}\`${code}${r.note ? ` - ${r.note}` : ''}`)
      for (const s of r.sources) lines.push(`  - ${s}`)
    }
    lines.push('')
  }

  section('Broken', 'broken', 'These resolve to nothing. Fix or remove them.')
  section(
    'Needs a human look',
    'warning',
    'The host blocks automated requests, or the response was ambiguous. Open these in a browser.'
  )
  section('Redirected', 'redirect', 'These work but land somewhere other than the URL in the code.')

  return lines.join('\n')
}

// ---------------------------------------------------------------------- main

async function main() {
  const args = process.argv.slice(2)
  const flag = (name) => (args.includes(name) ? args[args.indexOf(name) + 1] : undefined)
  const externalOnly = args.includes('--external-only')
  const offline = args.includes('--offline')
  const extractOnly = args.includes('--extract-only')
  const checkList = flag('--check-list')
  const jsonAt = flag('--json')
  const mdAt = flag('--markdown')
  const startedAt = new Date()

  // --check-list lets the extraction run somewhere without network (a sandbox,
  // a locked-down runner) and the HTTP checks run somewhere that has it.
  const refs = checkList
    ? JSON.parse(await readFile(path.resolve(ROOT, checkList), 'utf8')).map((r) => ({
        ...r,
        sources: new Set(r.sources),
      }))
    : await collectReferences()

  if (extractOnly) {
    const payload = refs.map((r) => ({ ...r, sources: [...r.sources] }))
    const out = JSON.stringify(payload, null, 2)
    if (jsonAt) await writeFile(path.resolve(ROOT, jsonAt), out)
    else process.stdout.write(out + '\n')
    process.stderr.write(`Extracted ${payload.length} references.\n`)
    return
  }

  let scope = refs
  if (externalOnly) scope = scope.filter((r) => r.type === 'external')
  if (offline) scope = scope.filter((r) => r.type !== 'external')
  process.stderr.write(`Checking ${scope.length} references...\n`)

  const results = await runPool(
    scope,
    async (ref) => {
      let outcome
      if (ref.type === 'external') outcome = await checkExternal(ref.target)
      else if (ref.type === 'asset') outcome = await checkAsset(ref.target)
      else outcome = checkInternal(ref.target)
      process.stderr.write(`  ${ICON[outcome.status]} ${ref.target}\n`)
      return { ...ref, sources: [...ref.sources], ...outcome }
    },
    CONCURRENCY
  )

  const markdown = toMarkdown(results, startedAt)
  if (mdAt) await writeFile(path.resolve(ROOT, mdAt), markdown)
  if (jsonAt) {
    await writeFile(
      path.resolve(ROOT, jsonAt),
      JSON.stringify({ startedAt: startedAt.toISOString(), results }, null, 2)
    )
  }
  if (!mdAt && !jsonAt) process.stdout.write(markdown + '\n')

  const broken = results.filter((r) => r.status === 'broken')
  const warnings = results.filter((r) => r.status === 'warning')
  process.stderr.write(`\n${broken.length} broken, ${warnings.length} to verify by hand.\n`)
  process.exit(broken.length > 0 ? 1 : 0)
}

main().catch((err) => {
  console.error(err)
  process.exit(2)
})
