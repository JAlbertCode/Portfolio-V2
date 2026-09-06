import Link from 'next/link'
import Cover from './Cover'
import { formatDate, isExternal, MEDIUM_LABELS, STATUS_NOTES } from '@/lib/content'
import type { Entry } from '@/lib/content'
import { writeupFor } from '@/lib/content/writeups'

/**
 * Where a card should send someone: the write-up if one has been written, and
 * otherwise straight out to the project. An entry can name a `detail` slug
 * before its write-up exists, and this keeps that from producing a card that
 * links to a 404 in the meantime.
 */
export function entryHref(entry: Entry): string | undefined {
  if (entry.detail && writeupFor(entry.detail)) return `/work/${entry.detail}`
  return entry.href
}

export function hasWriteup(entry: Entry): boolean {
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
          <span className="label whitespace-nowrap">{formatDate(entry.date)}</span>
          {entry.org ? (
            <>
              <span aria-hidden="true" className="text-faint">
                ·
              </span>
              <span className="label truncate">{entry.org}</span>
            </>
          ) : null}
        </div>

        <h3 className="mt-2.5 font-display text-xl leading-snug text-text">
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

        {/* Same treatment the work rows use. These were bordered chips here and
            plain text there, which made one list look like two systems. */}
        <p className="mt-4 font-mono text-[0.6875rem] tracking-[0.08em] text-faint">
          {entry.domains.join(', ')}
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
