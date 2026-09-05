import { site } from './site'

/**
 * The connect surface.
 *
 * This site is the destination for a business card tap, so on a phone the
 * first screen has to be the thing the person actually wants in that moment:
 * they just met Jay, their phone is already in their hand, and they want to
 * save him and follow him before the conversation ends. The portfolio is what
 * they scroll to afterwards, not what they have to get past.
 *
 * Three tiers, in the order someone standing at a conference actually needs
 * them: save the contact, open a conversation, follow.
 */

export interface ConnectAction {
  label: string
  /**
   * Only set where it carries information the label does not. "Fastest way to
   * reach me" under a button marked Telegram is filler; an actual handle or
   * address is not.
   */
  sublabel?: string
  href: string
  icon: string
  /** Opens the phone's own UI rather than a web page. */
  native?: boolean
}

/** Tier 1. One tap, and he is in their phone. */
export const saveActions: ConnectAction[] = [
  {
    // The sublabel stays: a vCard is the one action here whose behaviour is not
    // obvious from its name.
    label: 'Save my contact',
    sublabel: 'Adds straight to your phone',
    href: '/contact.vcf',
    icon: 'contact',
    native: true,
  },
]

/** Tier 2. Start a conversation now, while they remember why. */
export const talkActions: ConnectAction[] = [
  { label: 'Telegram', sublabel: '@Jay_Albert', href: 'https://t.me/Jay_Albert', icon: 'Telegram' },
  {
    label: 'Email',
    sublabel: site.email,
    href: `mailto:${site.email}`,
    icon: 'mail',
    native: true,
  },
  { label: 'Book', href: site.calendly, icon: 'calendar' },
]

/** Tier 3. Follow, in the order most people actually use them. */
export const followActions: ConnectAction[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jonathan-albert-profile/', icon: 'LinkedIn' },
  { label: 'X', href: 'https://twitter.com/Jay_Albert_', icon: 'X' },
  { label: 'GitHub', href: 'https://github.com/JAlbertCode', icon: 'GitHub' },
  { label: 'Medium', href: 'https://jonathan-albert.medium.com/', icon: 'Medium' },
]

/**
 * The vCard served at /contact.vcf.
 *
 * Built from lib/site.ts so it cannot drift from the rest of the page. Tapping
 * it on iOS or Android opens the system "add contact" sheet rather than
 * downloading a file someone then has to find, which is the entire point.
 *
 * CRLF line endings and the escaping below are required by RFC 6350; a vCard
 * with bare newlines is rejected by iOS.
 */
export function buildVCard(): string {
  const esc = (v: string) => v.replace(/([\\,;])/g, '\\$1').replace(/\n/g, '\\n')

  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:Albert;Jonathan;;;',
    'FN:Jonathan Albert',
    'NICKNAME:Jay',
    `TITLE:${esc('Developer Relations and Solutions Engineering')}`,
    `EMAIL;TYPE=INTERNET,PREF:${site.email}`,
    `URL:${site.url}`,
    `ADR;TYPE=WORK:;;;${esc(site.location)};;;`,
    `NOTE:${esc('Reference implementations, workshops, and the documentation in between. Everything at ' + site.url)}`,
    `X-SOCIALPROFILE;TYPE=linkedin:https://www.linkedin.com/in/jonathan-albert-profile/`,
    `X-SOCIALPROFILE;TYPE=twitter:https://twitter.com/Jay_Albert_`,
    `X-SOCIALPROFILE;TYPE=github:https://github.com/JAlbertCode`,
    `X-SOCIALPROFILE;TYPE=telegram:https://t.me/Jay_Albert`,
    `REV:${new Date().toISOString().replace(/\.\d{3}/, '')}`,
    'END:VCARD',
  ]

  return lines.join('\r\n') + '\r\n'
}
