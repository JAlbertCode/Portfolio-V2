import Link from 'next/link'
import Cover from './Cover'
import { formatDateShort, isExternal, MEDIUM_LABELS, STATUS_NOTES } from '@/lib/content'
import type { Entry } from '@/lib/content'
import { writeupFor } from '@/lib/content/writeups'

/**
 * Where a card should send someone: the write-up if one has been written, and
 * otherwise straight out to the project. An entry can name a `detail` slug
 * before its write-up exists, and this keeps that from producing a card that
 * links to a 404 in the meantime.
 */
function entryHref(entry: Entry): string | undefined {
  if (entry.detail && writeupFor(entry.detail)) return `/work/${entry.detail}`
  return entry.href
}

function hasWriteup(entry: Entry): boolean {
  return Boolean(entry.detail && writeupFor(entry.detail))
}

/**
 * The whole card is clickable, but the only anchor is the one around the
 * title, stretched over the card with a pseudo-element. That keeps the play
 * button on video covers as a real sibling button rather than a button nested
 * inside a link, which is invalid markup and confuses screen readers.
 */
export default function EntryCard({
  entry,
  priority = false,
}: {
  entry: Entry
  priority?: boolean
}) {
  const href = entryHref(entry)
  const external = isExternal(href)
  const unavailable = entry.status === 'offline'
  const statusNote = entry.status ? STATUS_NOTES[entry.status] : null
  const linkable = Boolean(href) && !unavailable

  return (
    <article
      className={`group relative flex w-full flex-col overflow-hidden card-interactive ${
        unavailable ? 'opacity-75' : ''
      }`}
    >
      <Cover entry={entry} priority={priority} />

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="label whitespace-nowrap">{MEDIUM_LABELS[entry.medium].singular}</span>
          <span aria-hidden="true" className="text-faint">
            ·
          </span>
          {/* The date shown is the one the catalogue is ordered by. Short,
              because this line already carries the form and the organisation
              and the full date pushed all three into an ellipsis. */}
          <span className="label whitespace-nowrap">
            {formatDateShort(entry.updated ?? entry.date)}
          </span>
          {entry.org ? (
            <>
              <span aria-hidden="true" className="text-faint">
                ·
              </span>
              <span className="label truncate">{entry.org}</span>
            </>
          ) : null}
        </div>

        {/* Two lines, always. A three-line title used to push the summary
            under it down and take the whole card out of step with its
            neighbours. */}
        <h3 className="mt-2.5 line-clamp-2 font-display text-xl leading-snug text-text">
          {linkable ? (
            <Link
              href={href!}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="after:absolute after:inset-0 after:content-['']"
            >
              {entry.title}
            </Link>
          ) : (
            entry.title
          )}
        </h3>

        {entry.summary ? (
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{entry.summary}</p>
        ) : null}

        {/* mt-auto pins this to the bottom of the card. Clamping the title and
            the summary makes every card the same shape, but a two-line summary
            still leaves a gap a three-line one does not, and without this the
            fields line floats up with it and the row loses its baseline. */}
        <p className="mt-auto flex flex-wrap items-center gap-x-2 pt-4 font-mono text-[0.6875rem] tracking-[0.08em] text-faint">
          <span>{entry.domains.join(', ')}</span>
          {/* This line once also said "Updated" next to the date. It told a
              reader nothing they could act on: the catalogue is ordered by
              last change either way, and whether a date is a publish date or
              a revision date does not change whether the work is worth
              opening. The ordering still uses `updated`; the card no longer
              narrates it. */}
          {hasWriteup(entry) ? (
            <>
              <span aria-hidden="true">·</span>
              <span className="text-accent">Write-up</span>
            </>
          ) : null}
        </p>

        {unavailable ? (
          <div className="mt-auto pt-4">
            <span className="text-xs leading-relaxed text-faint">{statusNote}</span>
          </div>
        ) : null}
      </div>
    </article>
  )
}
