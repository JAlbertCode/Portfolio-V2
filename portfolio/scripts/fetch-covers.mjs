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

/**
 * --frames: replace the cover of entries that already have one with a still
 * from inside the video rather than its thumbnail.
 *
 * Eighteen of the hangouts are one recurring show, so all eighteen ship the
 * same green title card. Eighteen near-identical tiles is most of what makes
 * the catalogue feel like one thing repeated. YouTube exposes three frames
 * taken from within every video at roughly a quarter, half and three quarters
 * through, and those differ episode to episode because the footage does.
 *
 * Defaults to the Fireside episodes. Pass slugs to pick your own.
 */
const FRAMES = process.argv.includes('--frames')
const FRAME_SLUGS = process.argv.slice(process.argv.indexOf('--frames') + 1).filter((a) => !a.startsWith('--'))

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

/**
 * Image URLs resolved by hand, for pages whose HTML this script cannot get.
 *
 * The five below all publish a perfectly good og:image, and every one of them
 * refused a plain fetch even with browser headers. The tags were read out of
 * the live DOM instead, so the URLs are the same ones the page declares, they
 * just skip the step that keeps failing. The image hosts themselves serve
 * these without complaint.
 *
 * Delete an entry here the moment its page starts answering normally.
 */
const OG_OVERRIDES = {
  'mlh-midnight-july-hack-winners':
    'https://cdn.sanity.io/images/330xhmya/production/3b105228d6e8fee0afbd6a48107e59d1bad7a0a4-1920x1080.jpg',
  'midnight-improvement-proposal-process':
    'https://cdn.sanity.io/images/330xhmya/production/f1d5099719381a196fbb07cc95a2866a43a88524-1920x1080.jpg',
  'night-and-dust-for-developers':
    'https://cdn.sanity.io/images/330xhmya/production/6c7db093bb8dd865a53394b55cc5665e25c25793-3840x2160.png',
  // Both docs.midnight.network posts declare the same house banner. Real, and
  // the same picture twice, so swap one out if two identical tiles bother you.
  'partner-sprints-on-midnight': 'https://docs.midnight.network/img/blog/ecosystem.jpg',
  'hacktoberfest-contributor-guide': 'https://docs.midnight.network/img/blog/ecosystem.jpg',
  'internet-is-the-new-culture':
    'https://miro.medium.com/v2/resize:fit:1024/1*HRRSZBxUeG8wLTujSZYysg.png',
}

const src = await readFile(ENTRIES, 'utf8')

/** Entry objects, in the shape this file is written in. */
const blocks = src.split(/\n  \},\n/)

const wanted = []
for (const block of blocks) {
  const slug = block.match(/slug: '([^']+)'/)?.[1]
  if (!slug) continue
  const href = block.match(/href: '([^']+)'/)?.[1]
  const title = block.match(/title: '([^']*)'/)?.[1] ?? block.match(/title: "([^"]*)"/)?.[1] ?? slug
  const hasCover = block.includes('cover: {')

  if (FRAMES) {
    const chosen = FRAME_SLUGS.length
      ? FRAME_SLUGS.includes(slug)
      : title.startsWith('Fireside Dev Hang')
    if (chosen && youtubeId(href)) wanted.push({ slug, href, title, replace: true })
    continue
  }

  if (!hasCover) wanted.push({ slug, href, title })
}

if (wanted.length === 0) {
  console.log(FRAMES ? 'Nothing matched. Nothing to do.' : 'Every entry already has a cover. Nothing to do.')
  process.exit(0)
}

console.log(
  FRAMES
    ? `${wanted.length} covers to replace with a still from inside the video.\n`
    : `${wanted.length} entries without a cover.\n`,
)

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

/** Returns the saved extension, or null. Never throws: one unreachable host
 *  used to take the whole run down with an unhandled rejection. */
async function download(url, slug) {
  let res
  try {
    res = await fetch(url, { headers: HEADERS })
  } catch (e) {
    lastReason = `could not reach ${new URL(url).host}: ${e.cause?.code ?? e.message}`
    return null
  }
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
for (const { slug, href, title, replace } of wanted) {
  if (!href) {
    console.log(`${slug.padEnd(34)} no link to look at`)
    continue
  }

  if (!replace) {
    try {
      await access(join(IMAGES, `${slug}.jpg`))
      console.log(`${slug.padEnd(34)} already downloaded`)
      found.set(slug, { ext: 'jpg', title })
      continue
    } catch {}
  }

  const id = youtubeId(href)
  let candidates
  if (id && replace) {
    // Half way in first: a quarter is often still the title card, and three
    // quarters is often the sign-off.
    candidates = [2, 1, 3].map((n) => `https://i.ytimg.com/vi/${id}/hq${n}.jpg`)
  } else if (id) {
    candidates = [
      `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
      `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    ]
  } else if (OG_OVERRIDES[slug]) {
    candidates = [OG_OVERRIDES[slug]]
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
// Patch entries.ts one entry at a time.
//
// This used to run two regexes over the whole file, both starting at a slug
// and scanning forward with [\s\S]*?. That is unbounded: on an entry with no
// cover the scan ran straight past the end of it and rewrote the cover of some
// later entry instead, so a downloaded image landed on the wrong piece of work
// and the entry it belonged to still had none. Splitting on the entry boundary
// first makes that impossible, because no pattern can see outside its own
// block.
const parts = src.split('\n  },\n')
let patched = 0
for (let i = 0; i < parts.length; i++) {
  const slug = parts[i].match(/slug: '([^']+)'/)?.[1]
  if (!slug || !found.has(slug)) continue

  const { ext, title } = found.get(slug)
  const want = `/images/${slug}.${ext}`
  const alt = title.replace(/'/g, "\\'")
  const current = parts[i].match(/cover: \{[\s\S]*?src: '([^']+)'/)

  if (current) {
    parts[i] = parts[i].replace(current[1], want)
  } else if (/\n    href: '/.test(parts[i])) {
    parts[i] = parts[i].replace(/\n(    href: ')/, `\n    cover: { src: '${want}', alt: '${alt}' },\n$1`)
  } else {
    console.log(`${slug.padEnd(34)} downloaded, but the entry has no href to sit before`)
    continue
  }
  patched++
}
const out = parts.join('\n  },\n')

await writeFile(ENTRIES, out)

console.log(`\nDownloaded ${found.size}, wrote ${patched} covers into entries.ts.`)
if (FRAMES) console.log('Those are stills from inside the videos, not the thumbnails.')
console.log('Alt text is the entry title for now. Anything worth describing better, describe.')
console.log('\nNext: python3 scripts/build-covers.py --all')
