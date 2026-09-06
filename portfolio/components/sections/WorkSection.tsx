'use client'

import { useMemo, useState } from 'react'
import { entryHref, hasWriteup } from '@/components/EntryCard'
import Reveal from '@/components/Reveal'
import WorkPreview from '@/components/WorkPreview'
import WorkRow from '@/components/WorkRow'
import {
  allEntries,
  DOMAINS,
  emptyFacets,
  entryYear,
  facetCounts,
  filterEntries,
  MEDIUMS,
  MEDIUM_LABELS,
} from '@/lib/content'
import type { Domain, Entry, Facets, Medium } from '@/lib/content'

/**
 * The whole catalogue, on the page someone already landed on.
 *
 * One list, in date order, at two sizes: entries with a write-up on this site
 * are set large, the rest are compact. There used to be a grid of cards above
 * this driven by a `featured` flag, which meant the biggest things on the page
 * differed from the smallest for a reason that existed only in the data, and
 * which had gone stale: it was showing 2023 work while last month's sat in a
 * row underneath.
 *
 * Years are marked because eighty-six rows need somewhere to breathe, and a
 * year is the one division that needs no explaining.
 *
 * Filter state is local rather than in the URL: on a single page the URL is
 * carrying the section anchor, and a filter competing for the same address
 * scrolls the reader somewhere they did not ask to go.
 */
export default function WorkSection() {
  const [facets, setFacets] = useState<Facets>(emptyFacets)
  const [expanded, setExpanded] = useState(false)
  const [active, setActive] = useState<Entry | null>(null)

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
    setExpanded(true)
  }

  // Enough to cross into the previous year, so the marker that gives the list
  // its rhythm is visible before anyone decides whether to keep going.
  const visible = expanded || filtering ? results : results.slice(0, 22)

  // A chip nothing can reach is noise. Unfiltered every count is above zero, so
  // this only ever hides options the current selection has already ruled out.
  const fields = DOMAINS.filter((d) => counts.domain(d as never) > 0 || facets.domain.includes(d))

  return (
    <section id="work" className="scroll-mt-20 pt-10 sm:pt-14">
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

      <div className="mt-6 grid gap-3 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-x-5">
        <p className="label pt-1.5">Form</p>
        <div className="flex flex-wrap gap-1.5">
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

        <p className="label pt-1.5">Field</p>
        <div className="flex flex-wrap gap-1.5">
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
        <div className="work-layout mt-10" onMouseLeave={() => setActive(null)}>
          <div
            key={filtering ? `f-${facets.medium.join()}-${facets.domain.join()}` : 'all'}
            className="results border-t border-line"
          >
            {visible.map((entry, i) => (
              <div key={entry.slug}>
                {entryYear(entry.date) !== entryYear(visible[i - 1]?.date ?? '') ? (
                  <p className="work-year">{entryYear(entry.date)}</p>
                ) : null}
                <Reveal delay={(i % 6) * 45}>
                  <WorkRow
                    entry={entry}
                    href={entryHref(entry) ?? '#work'}
                    feature={hasWriteup(entry)}
                    onFocus={() => setActive(entry)}
                  />
                </Reveal>
              </div>
            ))}
          </div>

          <WorkPreview entry={active} />
        </div>
      )}

      {!expanded && !filtering && results.length > visible.length ? (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="mt-6 w-full rounded-lg border border-line py-3 text-sm text-text transition-colors hover:border-line-strong"
        >
          Show the other {results.length - visible.length}
        </button>
      ) : null}
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
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`chip ${active ? 'chip-on' : ''}`}
    >
      {label}
      <span className="chip-count">{count}</span>
    </button>
  )
}
