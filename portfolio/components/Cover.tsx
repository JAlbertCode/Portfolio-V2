'use client'

import Image from 'next/image'
import { useState } from 'react'
import CoverTile from './CoverTile'
import { tileFor, youtubeEmbed, youtubeId, youtubeStart } from '@/lib/content'
import type { Entry } from '@/lib/content'

/**
 * V2 autoplayed ten muted videos in the project grid, several of them over
 * 50MB. That is most of a gigabyte pushed at anyone who opened the home page
 * on a phone. Here the poster image is what loads, and the player, whether it
 * is a file or a YouTube iframe, is only fetched when someone asks for it.
 *
 * Two sources, one behaviour. `cover.video` is a file this site hosts; a
 * YouTube id is read straight out of `entry.href`, so every talk and hangout
 * in the catalogue plays in the card without a single data change. Nothing is
 * requested from Google until the play button is pressed.
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

  // A hosted file wins over the link. Where an entry has both, the file is
  // the thing Jay cut for this site and the href is where the work lives.
  const embed = cover.video ? null : youtubeId(entry.href)
  const playable = Boolean(cover.video || embed)

  if (playable && playing) {
    return (
      // z-20 is load-bearing. The card's title link is stretched over the
      // whole card with an ::after pseudo-element, so without a stacking
      // context above it that invisible anchor sits on top of the player and
      // swallows every click on the control bar: pressing pause navigated to
      // the project instead. The play button already had z-10 for the same
      // reason, which is why starting a clip worked and stopping one did not.
      <div className="relative z-20 aspect-16/10 overflow-hidden bg-black">
        {cover.video ? (
          // eslint-disable-next-line jsx-a11y/media-has-caption
          <video
            src={cover.video}
            controls
            autoPlay
            playsInline
            className="size-full object-contain"
          />
        ) : (
          <iframe
            src={youtubeEmbed(embed!, youtubeStart(entry.href))}
            title={entry.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="size-full border-0"
          />
        )}
        {/* Controls can pause but never get back to the card, and YouTube's
            chrome has no way out of an embed at all. Closing returns the
            poster, which is also the only exit on a touch device where the
            control bar auto-hides. */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            setPlaying(false)
          }}
          aria-label="Close the player"
          className="absolute right-2 top-2 z-10 grid size-8 place-items-center rounded-full bg-black/70 text-white transition-colors hover:bg-black/90 focus-visible:bg-black/90"
        >
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M4 4l8 8M12 4l-8 8"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
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
      {playable ? (
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
            {cover.video ? 'Play clip' : 'Watch here'}
          </span>
        </button>
      ) : null}
    </div>
  )
}
