import Link from 'next/link'
import Thumb from './Thumb'
import { entryYear, isExternal, MEDIUM_LABELS, tileFor } from '@/lib/content'
import type { Entry } from '@/lib/content'

/**
 * A row in the catalogue, in one of two sizes.
 *
 * The large size is for entries that open into a write-up on this site rather
 * than bouncing straight out to someone else's page. That is a real difference
 * to a reader, it is the difference Jay said nobody would have guessed at, and
 * it gives a list of eighty-six things a rhythm without inventing a rule.
 *
 * It replaced a grid of "featured" cards above the list, which looked
 * different for a reason held in a boolean nobody could see, and which by then
 * was showing 2023 work at three times the size of last month's.
 */
export default function WorkRow({
  entry,
  href,
  feature = false,
  onFocus,
}: {
  entry: Entry
  href: string
  feature?: boolean
  onFocus?: () => void
}) {
  return (
    <Link
      href={href}
      {...(isExternal(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`work-row ${feature ? 'work-row-feature' : ''} ${
        entry.cover ? '' : 'work-row-flat'
      }`}
      onMouseEnter={onFocus}
      onFocus={onFocus}
    >
      {/* Omitted rather than left empty when there is no cover: an empty
          bordered square on every row reads as an image that failed. Above
          1100px the preview frame carries the image and this is hidden for
          every row alike. */}
      {entry.cover ? (
        <span className="row-thumb">
          <Thumb src={tileFor(entry.cover.src)} className="size-full object-cover" />
        </span>
      ) : null}

      <span className="min-w-0">
        <span className="row-title">{entry.title}</span>
        {entry.summary ? <span className="row-sum">{entry.summary}</span> : null}
        <span className="row-fields">{entry.domains.join(', ')}</span>
      </span>

      <span className="row-meta">
        <span className="row-medium">{MEDIUM_LABELS[entry.medium].singular}</span>
        <span>{entryYear(entry.date)}</span>
        {/* The one thing a row cannot show by looking at it: whether the click
            stays here or leaves. */}
        {feature ? <span className="row-flag">Write-up</span> : null}
      </span>
    </Link>
  )
}
