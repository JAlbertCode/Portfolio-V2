import Link from 'next/link'
import Thumb from './Thumb'
import { entryYear, isExternal, MEDIUM_LABELS, tileFor } from '@/lib/content'
import type { Entry } from '@/lib/content'

/**
 * A row carries its own thumbnail at every width.
 *
 * The earlier version showed the cover only on hover, which meant the filtered
 * state had no imagery at all and read like a different, poorer site than the
 * unfiltered one. It also let the year drift eight hundred pixels from the
 * title it belonged to. Three columns fix both: the image anchors the left, the
 * text is held to a readable measure, and the metadata closes the right edge.
 */
export default function WorkRow({ entry, href }: { entry: Entry; href: string }) {
  return (
    <Link
      href={href}
      {...(isExternal(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="work-row"
    >
      <span className="row-thumb">
        {entry.cover ? (
          <Thumb src={tileFor(entry.cover.src)} className="size-full object-cover" />
        ) : null}
      </span>

      <span className="min-w-0">
        <span className="row-title">{entry.title}</span>
        {entry.summary ? <span className="row-sum">{entry.summary}</span> : null}
        <span className="row-fields">{entry.domains.join(', ')}</span>
      </span>

      <span className="row-meta">
        <span className="row-medium">{MEDIUM_LABELS[entry.medium].singular}</span>
        <span>{entryYear(entry.date)}</span>
      </span>
    </Link>
  )
}
