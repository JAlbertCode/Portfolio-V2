import type { Metadata } from 'next'
import Link from 'next/link'
import SocialIcon from '@/components/SocialIcon'
import { activeYears, allEntries, DOMAINS, PRACTICES } from '@/lib/content'
import { roles, site, socials } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Career arc, what I actually do day to day, and how to get in touch. Resume included.',
}

export default function AboutPage() {
  const practiceCounts = PRACTICES.map((practice) => ({
    practice,
    count: allEntries.filter((e) => e.practices.includes(practice)).length,
  }))
    .filter((row) => row.count > 0)
    .sort((a, b) => b.count - a.count)

  const domainCounts = DOMAINS.map((domain) => ({
    domain,
    count: allEntries.filter((e) => e.domains.includes(domain)).length,
  }))
    .filter((row) => row.count > 0)
    .sort((a, b) => b.count - a.count)

  return (
    <div className="mx-auto max-w-6xl px-5 pt-14 sm:px-8 sm:pt-20">
      <header className="max-w-2xl">
        <p className="label">For anyone deciding whether to work with me</p>
        <h1 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-text sm:text-5xl">
          About
        </h1>
        <div className="prose-body mt-6">
          {site.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
          <p>
            Based in {site.location}. Work on this site runs from {activeYears.first} to{' '}
            {activeYears.last}, which is long enough that some of it is a period piece and I have
            left it that way on purpose.
          </p>
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href={site.resume}
            target="_blank"
            className="rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-accent-contrast transition-colors hover:bg-accent-hover"
          >
            Download the resume
          </Link>
          <Link
            href={site.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-line px-4 py-2.5 text-sm text-text transition-colors hover:border-line-strong"
          >
            Book a call
          </Link>
        </div>
      </header>

      {/* ----------------------------------------------------------- shape */}
      <section aria-labelledby="shape-heading" className="mt-20">
        <h2 id="shape-heading" className="font-display text-3xl text-text">
          What the work is made of
        </h2>
        <p className="mt-2 max-w-xl text-sm text-muted">
          Counted from the catalogue rather than asserted. Each row is a link into the work itself.
        </p>

        <div className="mt-8 grid gap-10 sm:grid-cols-2">
          <div>
            <p className="label">Practice</p>
            <ul className="mt-4">
              {practiceCounts.map((row) => (
                <li key={row.practice}>
                  <Link
                    href={`/work?practice=${encodeURIComponent(row.practice)}`}
                    className="group flex items-center gap-4 border-b border-line py-2.5"
                  >
                    <span className="w-48 shrink-0 text-sm text-text group-hover:text-accent">
                      {row.practice}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-1.5 rounded-full bg-accent/70 transition-colors group-hover:bg-accent"
                      style={{ width: `${(row.count / practiceCounts[0].count) * 100}%` }}
                    />
                    <span className="ml-auto font-mono text-xs text-faint">{row.count}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label">Field</p>
            <ul className="mt-4">
              {domainCounts.map((row) => (
                <li key={row.domain}>
                  <Link
                    href={`/work?field=${encodeURIComponent(row.domain)}`}
                    className="group flex items-center gap-4 border-b border-line py-2.5"
                  >
                    <span className="w-48 shrink-0 text-sm text-text group-hover:text-accent">
                      {row.domain}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-1.5 rounded-full bg-accent/70 transition-colors group-hover:bg-accent"
                      style={{ width: `${(row.count / domainCounts[0].count) * 100}%` }}
                    />
                    <span className="ml-auto font-mono text-xs text-faint">{row.count}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ roles */}
      <section aria-labelledby="roles-heading" className="mt-20">
        <h2 id="roles-heading" className="font-display text-3xl text-text">
          Where
        </h2>
        <ul className="mt-8">
          {roles.map((role) => (
            <li
              key={`${role.org}-${role.period}`}
              className="grid gap-2 border-t border-line py-6 sm:grid-cols-[10rem_1fr]"
            >
              <span className="label pt-1">{role.period}</span>
              <div>
                <h3 className="font-display text-xl text-text">
                  {role.title}
                  <span className="text-faint"> · </span>
                  {role.href ? (
                    <Link
                      href={role.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent-hover"
                    >
                      {role.org}
                    </Link>
                  ) : (
                    role.org
                  )}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{role.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------------------------------------------------------- contact */}
      <section aria-labelledby="contact-heading" className="mt-20">
        <h2 id="contact-heading" className="font-display text-3xl text-text">
          Reach me
        </h2>
        <ul className="mt-7 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {socials.map((social) => (
            <li key={social.label}>
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 card-interactive"
              >
                <SocialIcon name={social.label} className="size-5 shrink-0 text-muted" />
                <span className="text-sm text-text">{social.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
