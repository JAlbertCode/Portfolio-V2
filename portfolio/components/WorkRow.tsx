import Link from 'next/link'
import { entryYear, isExternal, MEDIUM_LABELS } from '@/lib/content'
import type { Entry } from '@/lib/content'

/**
 * A row, not a card. Fifty-six entries as cards is a wall nobody reads and a
 * megabyte of thumbnails nobody looks at; as rows the list scans in one pass,
 * weighs almost nothing, and stays real crawlable text.
 *
 * The cover appears on hover, following the pointer. On touch it sits in the
 * row instead.
 */
export default function WorkRow({ entry, href }: { entry: Entry; href: string }) {
  const external = isExternal(href)

  return (
    <Link
      href={href}
      data-peek={entry.slug}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="work-row"
    >
      <span className="row-thumb">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={entry.cover.src}
          alt=""
          loading="lazy"
          decoding="async"
          className="size-full object-cover"
        />
      </span>

      <span className="min-w-0">
        <span className="row-title block">{entry.title}</span>
        <span className="row-sum block">{entry.summary}</span>
        <span className="label mt-1.5 flex flex-wrap gap-3.5">
          <span>{MEDIUM_LABELS[entry.medium].singular}</span>
          <span>{entry.domains.join(', ')}</span>
        </span>
      </span>

      <span className="label row-year">{entryYear(entry.date)}</span>
    </Link>
  )
}
