'use client'

import { useMemo, useState } from 'react'
import EntryCard from '@/components/EntryCard'
import Reveal from '@/components/Reveal'
import {
  allEntries,
  DOMAINS,
  emptyFacets,
  facetCounts,
  filterEntries,
  MEDIUMS,
  MEDIUM_LABELS,
} from '@/lib/content'
import type { Domain, Facets, Medium } from '@/lib/content'

/**
 * The whole catalogue, as cards, newest first.
 *
 * It went to rows for a while on the theory that eighty-six of anything wants
 * a dense list. It does not: the work is visual, and a list of titles throws
 * away the only thing that makes a portfolio worth opening.
 *
 * One treatment for everything. There used to be a grid of cards above a list
 * of rows, split by a `featured` flag, which meant the biggest things on the
 * page differed from the smallest for a reason held in the data and invisible
 * on the screen. Everything is a card now and the order is the date.
 *
 * Everything is on the page. It used to show eighteen and hide the rest
 * behind a button, which is a strange thing to do on a page whose whole
 * purpose is the catalogue: the count in the heading says eighty-nine and then
 * the page shows you a fifth of it. Images below the fold are lazy anyway.
 *
 * Filter state is local rather than in the URL: on a single page the URL is
 * carrying the section anchor, and a filter competing for the same address
 * scrolls the reader somewhere they did not ask to go.
 */
export default function WorkSection() {
  const [facets, setFacets] = useState<Facets>(emptyFacets)

  const filtering = facets.medium.length > 0 || facets.domain.length > 0
  const results = useMemo(() => filterEntries(allEntries, facets), [facets])
  const counts = useMemo(() => facetCounts(allEntries, facets), [facets])

  const toggle = (key: 'medium' | 'domain', value: string) => {
    setFacets((prev) => {
      const current = prev[key] as string[]
      return {
        ...prev,
        [key]: current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value],
      } as Facets
    })
  }

  // Every field, always, in the same order. Filtering used to drop the ones
  // that had fallen to zero, which made the row change length under the
  // cursor; they are dimmed instead. See `chip-out` in globals.css.
  const fields = DOMAINS

  return (
    <section id="work" className="scroll-mt-20 pt-4 sm:pt-6">
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
        <h2 className="font-display text-2xl text-text sm:text-3xl">Work</h2>
        <p aria-live="polite" className="label">
          {filtering ? `${results.length} of ${allEntries.length}` : `${allEntries.length} pieces`}
        </p>
        {filtering ? (
          <button type="button" onClick={() => setFacets(emptyFacets)} className="clear-btn">
            Clear
          </button>
        ) : null}
      </div>

      <div className="mt-6 grid gap-x-5 gap-y-3 sm:grid-cols-[auto_minmax(0,1fr)]">
        <p className="label flex min-h-[30px] items-center">Form</p>
        <div className="flex flex-wrap gap-2">
          {MEDIUMS.map((m) => (
            <Chip
              key={m}
              label={MEDIUM_LABELS[m].singular}
              count={counts.medium(m as never)}
              active={facets.medium.includes(m as Medium)}
              onClick={() => toggle('medium', m)}
            />
          ))}
        </div>

        <p className="label flex min-h-[30px] items-center">Field</p>
        <div className="flex flex-wrap gap-2">
          {fields.map((d) => (
            <Chip
              key={d}
              label={d}
              count={counts.domain(d as never)}
              active={facets.domain.includes(d as Domain)}
              onClick={() => toggle('domain', d)}
            />
          ))}
        </div>
      </div>

      {results.length === 0 ? (
        <p className="mt-10 border-t border-line py-16 text-center text-sm text-muted">
          Nothing matches that combination. The count on each chip shows what is still reachable.
        </p>
      ) : (
        <div
          key={filtering ? `f-${facets.medium.join()}-${facets.domain.join()}` : 'all'}
          className="results mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {results.map((entry, i) => (
            // The stagger restarts every third card so it runs across a row
            // rather than counting all the way down the page.
            <Reveal key={entry.slug} delay={(i % 3) * 70} className="flex">
              <EntryCard entry={entry} priority={i < 3} />
            </Reveal>
          ))}
        </div>
      )}

    </section>
  )
}

function Chip({
  label,
  count,
  active,
  onClick,
}: {
  label: string
  count: number
  active: boolean
  onClick: () => void
}) {
  // Zero and not already chosen means the current selection has ruled it out.
  // A selected chip is never out, even at zero, or there would be no way to
  // undo the click that emptied the grid.
  const out = count === 0 && !active

  return (
    <button
      type="button"
      aria-pressed={active}
      disabled={out}
      onClick={onClick}
      className={`chip ${active ? 'chip-on' : ''} ${out ? 'chip-out' : ''}`}
    >
      {label}
      <span className="chip-count">{count}</span>
    </button>
  )
}
