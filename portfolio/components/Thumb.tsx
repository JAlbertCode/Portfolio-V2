'use client'

import { useState } from 'react'

/**
 * A cover that degrades to a blank tile instead of a broken-image glyph.
 *
 * Four covers are still served from YouTube's CDN rather than from public/, so
 * a URL change on their side would otherwise put a broken icon in the middle of
 * the catalogue. Failing to an empty tile is invisible; failing to a glyph is
 * the first thing a visitor sees.
 */
export default function Thumb({ src, className }: { src: string; className?: string }) {
  const [failed, setFailed] = useState(false)
  if (failed) return null

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
    />
  )
}
