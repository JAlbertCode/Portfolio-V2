'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useMemo } from 'react'
import EntryCard from './EntryCard'
import FacetBar from './FacetBar'
import { allEntries, facetCounts, filterEntries, groupByYear } from '@/lib/content'
import type { Domain, Facets, Medium, Practice } from '@/lib/content'

/**
 * Filter state lives in the URL rather than in component state, so a filtered
 * view is a link. That matters here: the point of the whole page is that Jay
 * can send a recruiter /work?practice=Engineering and they land on the answer
 * instead of on a wall.
 */
function parseFacets(params: URLSearchParams): Facets {
  const list = (key: string) => params.get(key)?.split(',').filter(Boolean) ?? []
  return {
    medium: list('form') as Medium[],
    practice: list('practice') as Practice[],
    domain: list('field') as Domain[],
    q: params.get('q') ?? '',
  }
}

const PARAM_FOR = { medium: 'form', practice: 'practice', domain: 'field' } as const

export default function WorkBrowser() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const facets = useMemo(() => parseFacets(new URLSearchParams(searchParams)), [searchParams])

  const write = useCallback(
    (next: Facets) => {
      const params = new URLSearchParams()
      for (const key of ['medium', 'practice', 'domain'] as const) {
        const values = next[key]
        if (values.length) params.set(PARAM_FOR[key], values.join(','))
      }
      if (next.q) params.set('q', next.q)
      const query = params.toString()
      // scroll: false keeps the page still while chips are being toggled.
      router.replace(query ? `/work?${query}` : '/work', { scroll: false })
    },
    [router]
  )

  const onToggle = useCallback(
    (key: 'medium' | 'practice' | 'domain', value: string) => {
      const current = facets[key] as string[]
      const next = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value]
      write({ ...facets, [key]: next } as Facets)
    },
    [facets, write]
  )

  const results = useMemo(() => filterEntries(allEntries, facets), [facets])
  const counts = useMemo(() => facetCounts(allEntries, facets), [facets])
  const grouped = useMemo(() => groupByYear(results), [results])

  return (
    <>
      <FacetBar
        facets={facets}
        counts={counts}
        total={allEntries.length}
        showing={results.length}
        onToggle={onToggle}
        onSearch={(q) => write({ ...facets, q })}
        onClear={() => write({ medium: [], practice: [], domain: [], q: '' })}
      />

      {results.length === 0 ? (
        <div className="py-24 text-center">
          <p className="font-display text-2xl text-text">Nothing matches that combination.</p>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted">
            Try removing a filter. The counts on each chip show what is still reachable from where
            you are.
          </p>
          <button
            type="button"
            onClick={() => write({ medium: [], practice: [], domain: [], q: '' })}
            className="mt-6 rounded-md border border-line px-4 py-2 text-sm text-text hover:border-line-strong"
          >
            Clear filters
          </button>
        </div>
      ) : (
        grouped.map(([year, items], groupIndex) => (
          <section key={year} className="mt-14 first:mt-10">
            <div className="flex items-baseline gap-4">
              <h2 className="font-mono text-sm text-faint">{year}</h2>
              <span className="h-px flex-1 bg-line" />
              <span className="font-mono text-xs text-faint">{items.length}</span>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((entry, i) => (
                <EntryCard key={entry.slug} entry={entry} priority={groupIndex === 0 && i < 3} />
              ))}
            </div>
          </section>
        ))
      )}
    </>
  )
}
