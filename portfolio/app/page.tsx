import Link from 'next/link'
import EntryCard from '@/components/EntryCard'
import IntentLanes from '@/components/IntentLanes'
import { allEntries, byMedium, DOMAINS, featured, MEDIUM_LABELS, MEDIUMS } from '@/lib/content'
import { site } from '@/lib/site'

export default function Home() {
  const talkCount = byMedium('talk').length + byMedium('stream').length

  return (
    <div className="mx-auto max-w-6xl px-5 pt-16 sm:px-8 sm:pt-24">
      {/* --------------------------------------------------------------- hero */}
      <section className="max-w-3xl">
        <p className="label">{site.location}</p>
        <h1 className="mt-4 font-display text-5xl leading-[1.02] tracking-tight text-text sm:text-6xl lg:text-7xl">
          {site.name}
        </h1>
        <p className="mt-5 text-xl leading-snug text-text sm:text-2xl">{site.tagline}</p>

        <div className="prose-body mt-6 max-w-2xl">
          {site.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href={site.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-accent-contrast transition-colors hover:bg-accent-hover"
          >
            Book a 15 minute call
          </Link>
          <Link
            href={site.resume}
            target="_blank"
            className="rounded-md border border-line px-4 py-2.5 text-sm text-text transition-colors hover:border-line-strong"
          >
            Resume
          </Link>
          <Link
            href={`mailto:${site.email}`}
            className="rounded-md border border-line px-4 py-2.5 text-sm text-text transition-colors hover:border-line-strong"
          >
            Email
          </Link>
        </div>

        <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
          {[
            { value: allEntries.length, label: 'pieces of work' },
            { value: talkCount, label: 'talks and streams' },
            { value: byMedium('build').length, label: 'things built' },
          ].map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="font-display text-3xl text-text">{stat.value}</span>
                <span className="ml-2 text-sm text-muted">{stat.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <IntentLanes />

      {/* ----------------------------------------------------------- featured */}
      <section aria-labelledby="featured-heading" className="mt-24">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 id="featured-heading" className="font-display text-3xl text-text">
              A few things worth your time
            </h2>
            <p className="mt-2 text-sm text-muted">
              If you only look at one section, make it this one.
            </p>
          </div>
          <Link
            href="/work"
            className="whitespace-nowrap text-sm font-medium text-accent hover:text-accent-hover"
          >
            All work →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((entry, i) => (
            <EntryCard key={entry.slug} entry={entry} priority={i < 3} />
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------- browse */}
      <section aria-labelledby="browse-heading" className="mt-24">
        <h2 id="browse-heading" className="font-display text-3xl text-text">
          Browse by form or field
        </h2>
        <p className="mt-2 max-w-xl text-sm text-muted">
          Every one of these is a filtered view of the same catalogue. Pick whichever axis matches
          how you were already thinking about it.
        </p>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <div>
            <p className="label">By form</p>
            <ul className="mt-4 space-y-2">
              {MEDIUMS.map((medium) => (
                <li key={medium}>
                  <Link
                    href={`/work?form=${medium}`}
                    className="group flex items-baseline justify-between gap-4 border-b border-line py-2.5 transition-colors hover:border-line-strong"
                  >
                    <span className="text-text group-hover:text-accent">
                      {MEDIUM_LABELS[medium].plural}
                    </span>
                    <span className="font-mono text-xs text-faint">{byMedium(medium).length}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label">By field</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {DOMAINS.map((domain) => {
                const count = allEntries.filter((e) => e.domains.includes(domain)).length
                if (count === 0) return null
                return (
                  <Link
                    key={domain}
                    href={`/work?field=${encodeURIComponent(domain)}`}
                    className="rounded-full border border-line px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent hover:text-text"
                  >
                    {domain}
                    <span className="ml-1.5 font-mono text-xs text-faint">{count}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
