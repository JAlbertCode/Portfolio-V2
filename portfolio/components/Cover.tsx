'use client'

import Image from 'next/image'
import { useState } from 'react'
import CoverTile from './CoverTile'
import { tileFor } from '@/lib/content'
import type { Entry } from '@/lib/content'

/**
 * V2 autoplayed ten muted videos in the project grid, several of them over
 * 50MB. That is most of a gigabyte pushed at anyone who opened the home page
 * on a phone. Here the poster image is what loads, and the video is only
 * fetched when someone asks to watch it.
 */
export default function Cover({
  entry,
  priority = false,
  sizes = '(min-width: 1024px) 360px, (min-width: 640px) 45vw, 92vw',
}: {
  entry: Entry
  priority?: boolean
  sizes?: string
}) {
  const [playing, setPlaying] = useState(false)
  const cover = entry.cover

  // Six entries have no usable source. They get type rather than a stretched
  // 246px export or a thumbnail hotlinked from someone else's CDN.
  if (!cover) return <CoverTile />

  if (cover.video && playing) {
    return (
      <div className="relative aspect-16/10 overflow-hidden bg-black">
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          src={cover.video}
          controls
          autoPlay
          playsInline
          className="size-full object-contain"
        />
      </div>
    )
  }

  return (
    <div className="relative aspect-16/10 overflow-hidden bg-surface">
      <Image
        src={tileFor(cover.src)}
        alt={cover.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      {cover.video ? (
        <button
          type="button"
          onClick={(e) => {
            // The cover usually sits inside a link to the project. Watching the
            // clip should not also navigate away from it.
            e.preventDefault()
            e.stopPropagation()
            setPlaying(true)
          }}
          className="absolute inset-0 z-10 grid place-items-center bg-black/25 opacity-0 transition-opacity hover:opacity-100 focus-visible:opacity-100"
        >
          <span className="flex items-center gap-2 rounded-full bg-black/75 px-4 py-2 text-sm font-medium text-white">
            <svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor" aria-hidden="true">
              <path d="M0 0v14l12-7z" />
            </svg>
            Play clip
          </span>
        </button>
      ) : null}
    </div>
  )
}
