'use client'

import { useMemo, useState } from 'react'
import EntryCard, { entryHref } from '@/components/EntryCard'
import HoverPeek from '@/components/HoverPeek'
import WorkRow from '@/components/WorkRow'
import {
  allEntries,
  DOMAINS,
  emptyFacets,
  facetCounts,
  filterEntries,
  MEDIUMS,
  MEDIUM_LABELS,
  featured,
} from '@/lib/content'
import type { Domain, Facets, Medium } from '@/lib/content'

/**
 * The whole catalogue, on the page someone already landed on.
 *
 * Filter state is local rather than in the URL: on a single page the URL is
 * carrying the section anchor, and a filter that fights the anchor for the
 * same address ends up scrolling the reader somewhere they did not ask to go.
 * Deep links into a filtered view live on the write-up pages instead.
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

  // Unfiltered, the six featured pieces lead and the rest follow as rows.
  // Filtered, the split stops meaning anything, so everything becomes rows.
  const rows = filtering ? results : allEntries.filter((e) => !e.featured)
  const visible = expanded || filtering ? rows : rows.slice(0, 10)

  return (
    <section id="work" className="scroll-mt-20 pt-24">
      <HoverPeek items={allEntries.map((e) => ({ id: e.slug, src: e.cover.src }))} />

      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
        <h2 className="font-display text-2xl text-text sm:text-3xl">Work</h2>
        <p aria-live="polite" className="label">
          {filtering ? `${results.length} of ${allEntries.length}` : `${allEntries.length} pieces`}
        </p>
        {filtering ? (
          <button
            type="button"
            onClick={() => setFacets(emptyFacets)}
            className="label text-accent underline underline-offset-4 hover:text-accent-hover"
          >
            Clear
          </button>
        ) : null}
      </div>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {MEDIUMS.map((m) => (
          <Chip
            key={m}
            label={MEDIUM_LABELS[m].singular}
            count={counts.medium(m as never)}
            active={facets.medium.includes(m as Medium)}
            onClick={() => toggle('medium', m)}
          />
        ))}
        <span aria-hidden="true" className="mx-1 w-px self-stretch bg-line" />
        {DOMAINS.map((d) => (
          <Chip
            key={d}
            label={d}
            count={counts.domain(d as never)}
            active={facets.domain.includes(d as Domain)}
            onClick={() => toggle('domain', d)}
          />
        ))}
      </div>

      {!filtering ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((entry, i) => (
            <EntryCard key={entry.slug} entry={entry} priority={i < 3} />
          ))}
        </div>
      ) : null}

      <div className="mt-10 border-t border-line">
        {visible.map((entry) => (
          <WorkRow key={entry.slug} entry={entry} href={entryHref(entry) ?? '#work'} />
        ))}
      </div>

      {results.length === 0 ? (
        <p className="py-14 text-center text-sm text-muted">
          Nothing matches that combination. The count on each chip shows what is still reachable.
        </p>
      ) : null}

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
  const empty = count === 0 && !active
  return (
    <button
      type="button"
      aria-pressed={active}
      disabled={empty}
      onClick={onClick}
      className={`rounded-full border px-2.5 py-1 text-xs transition-colors ${
        active
          ? 'border-accent bg-accent text-accent-contrast'
          : empty
            ? 'cursor-not-allowed border-line text-faint/45'
            : 'border-line text-muted hover:border-line-strong hover:text-text'
      }`}
    >
      {label}
      <span className={`ml-1.5 font-mono ${active ? 'opacity-70' : 'text-faint'}`}>{count}</span>
    </button>
  )
}
