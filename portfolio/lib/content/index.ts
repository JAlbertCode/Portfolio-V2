import { entries } from './entries'
import type { Entry } from './types'
import { entryYear } from './types'
import type { Domain, Medium, Practice } from './taxonomy'

export * from './taxonomy'
export * from './types'
export { entries }

/** Newest first. The source file is kept in order, but never rely on that. */
export const allEntries: Entry[] = [...entries].sort((a, b) => b.date.localeCompare(a.date))

export const featured: Entry[] = allEntries.filter((e) => e.featured)

export function byMedium(medium: Medium): Entry[] {
  return allEntries.filter((e) => e.medium === medium)
}

export function bySlug(slug: string): Entry | undefined {
  return allEntries.find((e) => e.slug === slug)
}

export interface Facets {
  medium: Medium[]
  practice: Practice[]
  domain: Domain[]
  q: string
}

export const emptyFacets: Facets = { medium: [], practice: [], domain: [], q: '' }

/**
 * Within one facet the selections are OR'd, so picking two domains widens the
 * result. Across facets they are AND'd, so "talks" plus "gaming" means talks
 * about gaming rather than everything that is either. That is what people
 * expect from a faceted filter, and it is the opposite of what V2 did.
 */
export function filterEntries(list: Entry[], facets: Facets): Entry[] {
  const q = facets.q.trim().toLowerCase()

  return list.filter((entry) => {
    if (facets.medium.length && !facets.medium.includes(entry.medium)) return false
    if (facets.practice.length && !facets.practice.some((p) => entry.practices.includes(p))) {
      return false
    }
    if (facets.domain.length && !facets.domain.some((d) => entry.domains.includes(d))) {
      return false
    }
    if (q) {
      const haystack = [
        entry.title,
        entry.summary ?? '',
        entry.org ?? '',
        ...entry.practices,
        ...entry.domains,
        ...(entry.tech ?? []),
      ]
        .join(' ')
        .toLowerCase()
      if (!haystack.includes(q)) return false
    }
    return true
  })
}

/**
 * How many results each option would leave, given everything else that is
 * already selected. Showing a zero next to an option is much kinder than
 * letting someone click into an empty grid.
 */
export function facetCounts(list: Entry[], facets: Facets) {
  const count = <K extends keyof Facets>(key: K, value: string) => {
    const probe = { ...facets, [key]: [value] } as Facets
    return filterEntries(list, probe).length
  }
  return {
    medium: (m: Medium) => count('medium', m),
    practice: (p: Practice) => count('practice', p),
    domain: (d: Domain) => count('domain', d),
  }
}

/** Entries grouped by year, newest year first, for the timeline listing. */
export function groupByYear(list: Entry[]): Array<[number, Entry[]]> {
  const groups = new Map<number, Entry[]>()
  for (const entry of list) {
    const year = entryYear(entry.date)
    if (!groups.has(year)) groups.set(year, [])
    groups.get(year)!.push(entry)
  }
  return [...groups.entries()].sort((a, b) => b[0] - a[0])
}

/** Every distinct year with work in it, for the "since" line on the home page. */
export const activeYears = {
  first: Math.min(...allEntries.map((e) => entryYear(e.date))),
  last: Math.max(...allEntries.map((e) => entryYear(e.date))),
}
