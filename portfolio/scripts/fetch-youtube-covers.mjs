/**
 * Pull the thumbnail for every YouTube entry that has no cover.
 *
 * These cannot be hotlinked: an i.ytimg.com URL in the data is what put a
 * broken image on the home page once already, and YouTube reserves the right
 * to move them. So the thumbnail is downloaded once, committed like any other
 * asset, and then normalised by build-covers.py along with everything else.
 *
 * Run from portfolio/:
 *   node scripts/fetch-youtube-covers.mjs
 *   python3 scripts/build-covers.py --all
 *
 * It needs network, which the sandbox this was written in does not have. It is
 * deliberately dependency-free so it runs from a bare checkout.
 */

import { readFile, writeFile, access } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const ENTRIES = join(ROOT, 'lib/content/entries.ts')
const IMAGES = join(ROOT, 'public/images')

// maxres does not exist for every upload. hq always does, at 480x360, which
// build-covers.py fits rather than upscales, so it stays sharp.
const QUALITIES = ['maxresdefault', 'hqdefault']

const src = await readFile(ENTRIES, 'utf8')

/** Split on the closing brace of each entry object, same shape the file is written in. */
const blocks = src.split(/\n  \},\n/)

const wanted = []
for (const block of blocks) {
  const slug = block.match(/slug: '([^']+)'/)?.[1]
  if (!slug || block.includes('cover: {')) continue
  const id = block.match(/youtube\.com\/watch\?v=([\w-]+)/)?.[1]
    ?? block.match(/youtu\.be\/([\w-]+)/)?.[1]
  if (id) wanted.push({ slug, id })
}

if (wanted.length === 0) {
  console.log('Every YouTube entry already has a cover. Nothing to do.')
  process.exit(0)
}

console.log(`${wanted.length} entries without a cover.\n`)

const got = []
for (const { slug, id } of wanted) {
  const out = join(IMAGES, `${slug}.jpg`)
  try {
    await access(out)
    console.log(`${slug.padEnd(34)} already downloaded`)
    got.push(slug)
    continue
  } catch {}

  let saved = false
  for (const quality of QUALITIES) {
    const res = await fetch(`https://i.ytimg.com/vi/${id}/${quality}.jpg`)
    // A missing maxres is served as a 120x90 placeholder with a 200, so size
    // is the only reliable test.
    if (!res.ok) continue
    const buf = Buffer.from(await res.arrayBuffer())
    if (buf.length < 6000) continue
    await writeFile(out, buf)
    console.log(`${slug.padEnd(34)} ${quality} ${(buf.length / 1024).toFixed(0)} KB`)
    got.push(slug)
    saved = true
    break
  }
  if (!saved) console.log(`${slug.padEnd(34)} no usable thumbnail`)
}

console.log(`\nDownloaded ${got.length} of ${wanted.length} into public/images.`)
console.log('Now add the cover to each entry in lib/content/entries.ts:\n')
for (const slug of got) {
  console.log(`  cover: { src: '/images/${slug}.jpg', alt: '<what the thumbnail shows>' },`)
}
