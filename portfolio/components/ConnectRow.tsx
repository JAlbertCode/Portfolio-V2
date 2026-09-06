import SocialLink from './SocialLink'
import { secondaryLinks } from '@/lib/connect'

/**
 * Just the links.
 *
 * This used to lead with a vCard button. It was a neat idea and nobody would
 * have pressed it: someone who has just met Jay reaches for Telegram, X,
 * LinkedIn or WhatsApp, not for a contact card. So there is no primary action
 * any more, because none of these is more important than the others and
 * pretending otherwise is what produced the odd hierarchy in the first place.
 *
 * Messaging and follows lead, because that is what the moment calls for. Email
 * and Book sit in the same row for anyone who wants a slower channel.
 */
export default function ConnectRow() {
  return (
    <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-1.5">
      {secondaryLinks.map((link) => (
        <SocialLink key={link.label} label={link.label} href={link.href} icon={link.icon} />
      ))}
    </div>
  )
}
