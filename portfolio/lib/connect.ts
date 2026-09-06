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
 * Follows and DMs, from the single social list in site.ts rather than retyped,
 * because two hand-maintained copies of the same links is how they drift
 * apart. The ones marked primary are the ones worth the first ten seconds.
 */
export const followActions: ConnectAction[] = socials
  .filter((s) => s.primary)
  .map((s) => ({ label: s.label, href: s.href, icon: s.label }))

/**
 * The slower channels. Telegram is deliberately absent: it is a primary social
 * and already arrives through followActions.
 */
export const talkActions: ConnectAction[] = [
  { label: 'Email', href: `mailto:${site.email}`, icon: 'Email', native: true },
  { label: 'Book', href: site.calendly, icon: 'Book' },
]

/** The whole row, in reading order. */
export const secondaryLinks: ConnectAction[] = [...followActions, ...talkActions]
