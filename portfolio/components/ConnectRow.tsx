import Link from 'next/link'
import SocialLink from './SocialLink'
import { secondaryLinks } from '@/lib/connect'

/**
 * One button, then links.
 *
 * The previous version boxed Telegram, Email and Book while leaving GitHub, X
 * and the rest as plain icons, on a distinction between doing something now and
 * subscribing to something later. That rule was invisible: Telegram is a social
 * platform that got a box while X did not, and Email and Book are not social at
 * all. Now the only thing carrying weight is the one action an NFC tap exists
 * for, and everything else is a link that looks like every other link.
 */
export default function ConnectRow() {
  return (
    <div className="mt-9">
      <Link href="/contact.vcf" className="cta">
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          aria-hidden="true"
        >
          <path
            d="M15.5 20v-1.5a3.5 3.5 0 0 0-3.5-3.5H7a3.5 3.5 0 0 0-3.5 3.5V20"
            strokeLinecap="round"
          />
          <circle cx="9.5" cy="8" r="3.5" />
          <path d="M17 8h5M19.5 5.5v5" strokeLinecap="round" />
        </svg>
        Add to contacts
      </Link>

      <p className="mt-2.5 max-w-[52ch] text-xs leading-relaxed text-faint">
        Saves a card with my email, Telegram and links straight into your phone.
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-1">
        {secondaryLinks.map((link) => (
          <SocialLink key={link.label} label={link.label} href={link.href} icon={link.icon} />
        ))}
      </div>
    </div>
  )
}
