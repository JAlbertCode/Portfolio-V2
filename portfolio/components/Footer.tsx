import Link from 'next/link'
import SocialIcon from './SocialIcon'
import { site, socials } from '@/lib/site'

/**
 * The one place the full list of social links lives.
 *
 * It was in three: four marks beside the primary action at the top, all nine
 * again in the About section, and all nine here. The top row is the one
 * somebody uses in the first ten seconds and the footer is where the rest
 * belong, so About's copy is gone.
 *
 * The booking and email buttons that used to sit here went too. They were the
 * fourth and third copies of the same two actions on one page.
 */
export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-end sm:justify-between">
        <p className="text-xs text-faint">
          {site.name}, {site.location}
        </p>

        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {socials.map((s) => (
            <li key={s.label}>
              <Link
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm text-muted transition-colors hover:text-text"
              >
                <SocialIcon
                  name={s.label}
                  className="size-4 shrink-0 opacity-50 transition-opacity group-hover:opacity-100"
                />
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
