import Link from 'next/link'
import SocialIcon from './SocialIcon'
import { followActions } from '@/lib/connect'
import { site } from '@/lib/site'

/**
 * One primary action, one text link, four marks.
 *
 * The vCard behind "Save my contact" already carries the email, the Telegram
 * handle and every social URL, so a row of separate contact buttons here would
 * be a second copy of what that one button hands over.
 */
export default function ConnectRow() {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-2">
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
        Save my contact
      </Link>

      <Link
        href={site.calendly}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-[50px] items-center px-1.5 text-[15px] text-muted transition-colors hover:text-text"
      >
        Book a call
      </Link>

      <div className="ml-auto flex items-center gap-1 sm:ml-2">
        {followActions.map((a) => (
          <Link
            key={a.label}
            href={a.href}
            aria-label={a.label}
            target="_blank"
            rel="noopener noreferrer"
            className="grid size-[42px] place-items-center rounded-lg text-faint transition-colors hover:text-text"
          >
            <SocialIcon name={a.icon} className="size-[18px]" />
          </Link>
        ))}
      </div>
    </div>
  )
}
