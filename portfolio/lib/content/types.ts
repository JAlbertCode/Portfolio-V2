import type { Domain, Medium, Practice, Status } from './taxonomy'

export interface Cover {
  /** Path under public/, or an absolute URL for a remote thumbnail. */
  src: string
  alt: string
  /**
   * Video covers are never autoplayed in a grid. The poster is what the card
   * shows; the video only loads once someone asks for it.
   */
  video?: string
}

export interface Entry {
  /** Stable URL segment. Also the React key and the filter deep-link target. */
  slug: string
  title: string
  /** One or two sentences. This is what a card shows. */
  summary: string
  /** ISO yyyy-mm so entries sort correctly and render in any locale. */
  date: string

  medium: Medium
  practices: Practice[]
  domains: Domain[]
  /** Free text. Displayed on detail pages, searched, never a filter chip. */
  tech?: string[]

  cover: Cover
  /** Where the work itself lives. Omitted when the entry has no live home. */
  href?: string
  /** Set when there is a write-up on this site rather than only an outbound link. */
  detail?: string
  /** The organisation the work was done for or with. */
  org?: string

  status?: Status
  /** Surfaced on the home page and at the top of listings. */
  featured?: boolean
}

export function isExternal(href: string | undefined): boolean {
  return Boolean(href && /^https?:\/\//.test(href))
}

/** "2025-04" -> "April 2025". Kept out of the components so it stays consistent. */
export function formatDate(iso: string): string {
  const [year, month] = iso.split('-')
  if (!month) return year
  const date = new Date(Number(year), Number(month) - 1, 1)
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}

export function entryYear(iso: string): number {
  return Number(iso.split('-')[0])
}
