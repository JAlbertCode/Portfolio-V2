'use client'

import type { Facets } from '@/lib/content'
import { DOMAINS, MEDIUMS, MEDIUM_LABELS, PRACTICES } from '@/lib/content'

interface Group {
  key: 'medium' | 'practice' | 'domain'
  legend: string
  hint: string
  options: readonly string[]
  labelFor: (value: string) => string
}

const GROUPS: Group[] = [
  {
    key: 'medium',
    legend: 'Form',
    hint: 'What kind of thing it is',
    options: MEDIUMS,
    labelFor: (v) => MEDIUM_LABELS[v as keyof typeof MEDIUM_LABELS].singular,
  },
  {
    key: 'practice',
    legend: 'Practice',
    hint: 'What I was doing',
    options: PRACTICES,
    labelFor: (v) => v,
  },
  {
    key: 'domain',
    legend: 'Field',
    hint: 'What it was about',
    options: DOMAINS,
    labelFor: (v) => v,
  },
]

export default function FacetBar({
  facets,
  counts,
  total,
  showing,
  onToggle,
  onSearch,
  onClear,
}: {
  facets: Facets
  counts: {
    medium: (v: never) => number
    practice: (v: never) => number
    domain: (v: never) => number
  }
  total: number
  showing: number
  onToggle: (key: Group['key'], value: string) => void
  onSearch: (value: string) => void
  onClear: () => void
}) {
  const activeCount =
    facets.medium.length + facets.practice.length + facets.domain.length + (facets.q ? 1 : 0)

  return (
    <div className="border-b border-line pb-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <label className="relative block w-full sm:max-w-xs">
          <span className="sr-only">Search the work</span>
          <svg
            width="15"
            height="15"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-faint"
          >
            <circle cx="7" cy="7" r="4.6" stroke="currentColor" strokeWidth="1.5" />
            <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            type="search"
            value={facets.q}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search titles, tools, organisations"
            className="w-full rounded-md border border-line bg-surface py-2 pl-9 pr-3 text-sm text-text placeholder:text-faint focus:border-accent focus:outline-none"
          />
        </label>

        <p aria-live="polite" className="text-sm text-muted">
          {showing === total ? (
            <>
              <span className="font-mono text-text">{total}</span> pieces of work
            </>
          ) : (
            <>
              <span className="font-mono text-text">{showing}</span> of {total}
              {activeCount > 0 ? (
                <button
                  type="button"
                  onClick={onClear}
                  className="ml-3 text-accent underline underline-offset-3 hover:text-accent-hover"
                >
                  Clear filters
                </button>
              ) : null}
            </>
          )}
        </p>
      </div>

      <div className="mt-7 grid gap-6 sm:grid-cols-3">
        {GROUPS.map((group) => (
          <fieldset key={group.key}>
            <legend className="label">
              {group.legend}
              <span className="ml-2 normal-case tracking-normal text-faint/70">{group.hint}</span>
            </legend>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {group.options.map((option) => {
                const active = (facets[group.key] as string[]).includes(option)
                const count = counts[group.key](option as never)
                const empty = count === 0 && !active
                return (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={active}
                    disabled={empty}
                    onClick={() => onToggle(group.key, option)}
                    className={`rounded-full border px-2.5 py-1 text-xs transition-colors ${
                      active
                        ? 'border-accent bg-accent text-accent-contrast'
                        : empty
                          ? 'cursor-not-allowed border-line text-faint/45'
                          : 'border-line text-muted hover:border-line-strong hover:text-text'
                    }`}
                  >
                    {group.labelFor(option)}
                    <span className={`ml-1.5 font-mono ${active ? 'opacity-70' : 'text-faint'}`}>
                      {count}
                    </span>
                  </button>
                )
              })}
            </div>
          </fieldset>
        ))}
      </div>
    </div>
  )
}
