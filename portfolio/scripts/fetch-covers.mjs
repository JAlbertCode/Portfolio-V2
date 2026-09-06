/**
 * Find a cover for every entry that has none, and write it into the data.
 *
 * Two sources, both the artifact's own published image rather than anything
 * invented:
 *
 *   YouTube  -> the video's thumbnail
 *   anything -> the page's og:image
 *
 * Neither is hotlinked. An i.ytimg.com URL in entries.ts is what put a broken
 * image on the home page once already, and other people's CDNs move. Each file
 * is downloaded into public/images, committed like any other asset, and then
 * normalised by build-covers.py along with everything else.
 *
 * Run from portfolio/:
 *   node scripts/fetch-covers.mjs          # download and patch entries.ts
 *   node scripts/fetch-covers.mjs --dry    # report what it would do
 *   python3 scripts/build-covers.py --all  # then rebuild the tiles
 *
 * Needs network, which the sandbox this was written in does not have, so it
 * runs on Jay's machine. Dependency-free so it works from a bare checkout.
 */

import { readFile, writeFile, access, mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const ENTRIES = join(ROOT, 'lib/content/entries.ts')
const IMAGES = join(ROOT, 'public/images')
const DRY = process.argv.includes('--dry')

// A bare fetch gets a bot challenge from some hosts. These are the headers a
// browser actually sends, and they are what got midnight.network to serve the
// same HTML to node that it serves to Chrome.
const HEADERS = {
  'user-agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36',
  accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
  'accept-language': 'en-US,en;q=0.9',
  'sec-fetch-dest': 'document',
  'sec-fetch-mode': 'navigate',
  'sec-fetch-site': 'none',
  'upgrade-insecure-requests': '1',
}
const MIN_BYTES = 6000 // YouTube serves a 120x90 placeholder with a 200 for a missing maxres

const src = await readFile(ENTRIES, 'utf8')

/** Entry objects, in the shape this file is written in. */
const blocks = src.split(/\n  \},\n/)

const wanted = []
for (const block of blocks) {
  const slug = block.match(/slug: '([^']+)'/)?.[1]
  if (!slug || block.includes('cover: {')) continue
  const href = block.match(/href: '([^']+)'/)?.[1]
  const title = block.match(/title: '([^']*)'/)?.[1] ?? block.match(/title: "([^"]*)"/)?.[1] ?? slug
  wanted.push({ slug, href, title })
}

if (wanted.length === 0) {
  console.log('Every entry already has a cover. Nothing to do.')
  process.exit(0)
}

console.log(`${wanted.length} entries without a cover.\n`)

function youtubeId(href = '') {
  return href.match(/youtube\.com\/watch\?v=([\w-]+)/)?.[1] ?? href.match(/youtu\.be\/([\w-]+)/)?.[1]
}

/** Returns the image URL, or a string starting with '!' explaining why not. */
async function ogImage(pageUrl) {
  let res
  try {
    res = await fetch(pageUrl, { headers: HEADERS, redirect: 'follow' })
  } catch (e) {
    return `!fetch failed: ${e.message}`
  }
  if (!res.ok) return `!page returned ${res.status}`

  const html = await res.text()
  const m =
    html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i) ??
    html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i) ??
    html.match(/<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i) ??
    html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+name=["']twitter:image["']/i)
  if (!m) return '!page has no og:image or twitter:image'
  return new URL(m[1], pageUrl).href
}

/** Returns the saved extension, or null. */
async function download(url, slug) {
  const res = await fetch(url, { headers: HEADERS })
  if (!res.ok) {
    lastReason = `image returned ${res.status}`
    return null
  }
  const buf = Buffer.from(await res.arrayBuffer())
  if (buf.length < MIN_BYTES) {
    lastReason = `image was only ${buf.length} bytes`
    return null
  }
  const type = res.headers.get('content-type') ?? ''
  const ext = type.includes('png') ? 'png' : type.includes('webp') ? 'webp' : 'jpg'
  if (!DRY) await writeFile(join(IMAGES, `${slug}.${ext}`), buf)
  return { ext, bytes: buf.length }
}

await mkdir(IMAGES, { recursive: true })

// Set by download() so a failure can say what actually went wrong instead of
// reporting "nothing usable published" for every cause alike.
let lastReason = ''

const found = new Map()
for (const { slug, href, title } of wanted) {
  if (!href) {
    console.log(`${slug.padEnd(34)} no link to look at`)
    continue
  }

  try {
    await access(join(IMAGES, `${slug}.jpg`))
    console.log(`${slug.padEnd(34)} already downloaded`)
    found.set(slug, { ext: 'jpg', title })
    continue
  } catch {}

  const id = youtubeId(href)
  let candidates
  if (id) {
    candidates = [
      `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
      `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    ]
  } else {
    const og = await ogImage(href)
    if (og.startsWith('!')) {
      console.log(`${slug.padEnd(34)} ${og.slice(1)}`)
      continue
    }
    candidates = [og]
  }

  lastReason = 'no candidate worked'
  let saved = null
  for (const url of candidates) {
    saved = await download(url, slug)
    if (saved) break
  }

  if (saved) {
    console.log(`${slug.padEnd(34)} ${(saved.bytes / 1024).toFixed(0).padStart(5)} KB  ${saved.ext}`)
    found.set(slug, { ext: saved.ext, title })
  } else {
    console.log(`${slug.padEnd(34)} ${lastReason}`)
  }
}

if (DRY) {
  console.log(`\n--dry: would have added ${found.size} covers.`)
  process.exit(0)
}

// Patch entries.ts. The cover goes immediately before href, which every entry
// reached here has, so the field order stays the same as the hand-written ones.
let out = src
let patched = 0
for (const [slug, { ext, title }] of found) {
  const re = new RegExp(`(slug: '${slug}',[\\s\\S]*?\\n)(    href: ')`)
  if (!re.test(out)) continue
  const alt = title.replace(/'/g, "\\'")
  out = out.replace(re, `$1    cover: { src: '/images/${slug}.${ext}', alt: '${alt}' },\n$2`)
  patched++
}
await writeFile(ENTRIES, out)

console.log(`\nDownloaded ${found.size}, wrote ${patched} covers into entries.ts.`)
console.log('Alt text is the entry title for now. Anything worth describing better, describe.')
console.log('\nNext: python3 scripts/build-covers.py --all')
