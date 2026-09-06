'use client'

import { useMemo, useState } from 'react'
import EntryCard, { entryHref } from '@/components/EntryCard'
import Reveal from '@/components/Reveal'
import WorkRow from '@/components/WorkRow'
import {
  allEntries,
  DOMAINS,
  emptyFacets,
  facetCounts,
  featured,
  filterEntries,
  MEDIUMS,
  MEDIUM_LABELS,
} from '@/lib/content'
import type { Domain, Facets, Medium } from '@/lib/content'

/**
 * The whole catalogue, on the page someone already landed on.
 *
 * Filter state is local rather than in the URL: on a single page the URL is
 * carrying the section anchor, and a filter competing for the same address
 * scrolls the reader somewhere they did not ask to go.
 *
 * The two axes are labelled and stacked rather than run together behind a
 * divider. Nobody reading "Build, Talk, Stream, Writing, AI, Gaming" as one
 * line works out unaided that it is two different questions.
 */
export default function WorkSection() {
  const [facets, setFacets] = useState<Facets>(emptyFacets)
  const [expanded, setExpanded] = useState(false)

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

  const rows = filtering ? results : allEntries.filter((e) => !e.featured)
  const visible = expanded || filtering ? rows : rows.slice(0, 10)

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

      {!filtering ? (
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((entry, i) => (
            <Reveal key={entry.slug} delay={i * 70} className="flex">
              <EntryCard entry={entry} priority={i < 3} />
            </Reveal>
          ))}
        </div>
      ) : null}

      {results.length === 0 ? (
        <p className="border-t border-line py-16 text-center text-sm text-muted">
          Nothing matches that combination. The count on each chip shows what is still reachable.
        </p>
      ) : (
        <div
          key={filtering ? `f-${facets.medium.join()}-${facets.domain.join()}` : 'all'}
          className="results mt-10 border-t border-line"
        >
          {visible.map((entry, i) => (
            // The stagger restarts every sixth row. Running it across all 56
            // would leave the last row waiting two seconds for its turn.
            <Reveal key={entry.slug} delay={(i % 6) * 45}>
              <WorkRow entry={entry} href={entryHref(entry) ?? '#work'} />
            </Reveal>
          ))}
        </div>
      )}

      {!expanded && !filtering && rows.length > visible.length ? (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="mt-6 w-full rounded-lg border border-line py-3 text-sm text-text transition-colors hover:border-line-strong"
        >
          Show the other {rows.length - visible.length}
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
