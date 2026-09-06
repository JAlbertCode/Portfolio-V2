import Link from 'next/link'
import SocialIcon from './SocialIcon'
import { followActions, talkActions } from '@/lib/connect'

/**
 * Save my contact is the primary action, but the three routes beside it are
 * not decoration: someone who wants to message Jay right now should not have
 * to save a vCard, open their contacts and find him in it first. The vCard is
 * for keeping; these are for using.
 */
export default function ConnectRow() {
  return (
    <div className="mt-9">
      <div className="flex flex-wrap items-center gap-2">
        <Link href="/contact.vcf" className="cta shrink-0" title="Downloads a vCard">
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

        <div className="contact-routes">
          {talkActions.map((a) => (
            <Link
              key={a.label}
              href={a.href}
              {...(a.native ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
              className="cta-ghost"
            >
              {a.label}
            </Link>
          ))}
        </div>

        <div className="-ml-2.5 flex w-full items-center gap-0.5 sm:ml-auto sm:w-auto">
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

      <p className="mt-2.5 text-xs text-faint">
        Add to contacts saves a card with my email, Telegram and links straight into your phone.
      </p>
    </div>
  )
}
