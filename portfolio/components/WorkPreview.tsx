'use client'

import Image from 'next/image'
import { tileFor } from '@/lib/content'
import type { Entry } from '@/lib/content'

/**
 * The cover of whichever row the pointer is on, held beside the list.
 *
 * A row can only afford a thumbnail the size of a postage stamp, which is not
 * big enough to tell you anything. Putting the image here means the list stays
 * dense and readable and you still get to see the work, and it gives the page
 * something that answers you, which a wall of static rows does not.
 *
 * Only the active image is mounted. Mounting all fifty so they could
 * cross-fade would fire fifty requests on load to save a fade on first hover,
 * which is the wrong trade on a phone-first site. The image is keyed by slug
 * so React swaps the node and the fade restarts.
 *
 * No caption. The row the pointer is resting on is already showing the title,
 * two inches to the left.
 *
 * Pointer-only by construction: the panel is hidden below the large
 * breakpoint, which is also where rows keep their own inline thumbnail.
 */
export default function WorkPreview({ entry }: { entry: Entry | null }) {
  return (
    <div aria-hidden="true" className="work-preview">
      <div className="work-preview-frame">
        {entry?.cover ? (
          <Image
            key={entry.slug}
            src={tileFor(entry.cover.src)}
            alt=""
            fill
            sizes="352px"
            className="work-preview-img"
          />
        ) : null}
      </div>
    </div>
  )
}
