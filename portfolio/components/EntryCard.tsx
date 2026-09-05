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
      className={`group relative flex flex-col overflow-hidden card-interactive ${
        unavailable ? 'opacity-75' : ''
      }`}
    >
      <Cover cover={entry.cover} priority={priority} />

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

        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{entry.summary}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {entry.domains.slice(0, 3).map((domain) => (
            <span
              key={domain}
              className="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] tracking-wide text-faint"
            >
              {domain}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-4">
          {unavailable ? (
            <span className="text-xs leading-relaxed text-faint">{statusNote}</span>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent">
              {hasWriteup(entry) ? 'Read the write-up' : 'View'}
              <svg
                width="12"
                height="12"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5"
              >
                <path
                  d={external ? 'M5 11L11 5M11 5H6M11 5v5' : 'M3 8h10M9 4l4 4-4 4'}
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
