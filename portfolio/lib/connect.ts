import { site, socials } from './site'

/**
 * The connect surface.
 *
 * This site is the destination for a business card tap, so on a phone the
 * first screen has to carry the thing the person actually wants in that
 * moment: they just met Jay and they want to reach him or follow him before
 * the conversation ends. The portfolio is what they scroll to afterwards.
 *
 * One row, one visual treatment. An earlier version split these into bordered
 * buttons for "contact" and plain links for "follow", which put a box around
 * Telegram but not X and read as arbitrary, because it was.
 */

export interface ConnectAction {
  label: string
  href: string
  icon: string
  /** Opens the phone's own UI rather than a web page. */
  native?: boolean
}

/**
 * The whole row, in reading order: the socials worth the first ten seconds,
 * then the two slower channels.
 *
 * The follows come from the single social list in site.ts rather than being
 * retyped, because two hand-maintained copies of the same links is how they
 * drift apart. Telegram is not repeated at the end: it is a primary social and
 * already arrives through the filter.
 */
export const secondaryLinks: ConnectAction[] = [
  ...socials
    .filter((s) => s.primary)
    .map((s) => ({ label: s.label, href: s.href, icon: s.label })),
  { label: 'Email', href: `mailto:${site.email}`, icon: 'Email', native: true },
  { label: 'Book', href: site.booking, icon: 'Book' },
]
