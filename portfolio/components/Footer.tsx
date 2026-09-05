import Link from 'next/link'
import SocialIcon from './SocialIcon'
import { site, socials } from '@/lib/site'
import { activeYears } from '@/lib/content'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-2xl text-text">Still building.</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Work here spans {activeYears.first} to {activeYears.last}. If something on this site is
              relevant to what you are doing, the fastest route is a fifteen minute call.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link
                href={site.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-accent px-3.5 py-2 text-sm font-medium text-accent-contrast transition-colors hover:bg-accent-hover"
              >
                Book a call
              </Link>
              <Link
                href={`mailto:${site.email}`}
                className="rounded-md border border-line px-3.5 py-2 text-sm text-text transition-colors hover:border-line-strong"
              >
                Email
              </Link>
            </div>
          </div>

          <div>
            <p className="label">Elsewhere</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2.5">
              {socials.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-text"
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
        </div>

        <p className="mt-12 text-xs text-faint">
          {site.name}, {site.location}. Built with Next.js. The link checker runs weekly, so if
          something here is broken it will not stay that way for long.
        </p>
      </div>
    </footer>
  )
}
