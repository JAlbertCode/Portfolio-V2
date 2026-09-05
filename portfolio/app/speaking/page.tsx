import type { Metadata } from 'next'
import Link from 'next/link'
import EntryCard from '@/components/EntryCard'
import { byMedium, formatDate } from '@/lib/content'
import { site, speakingFormats, speakingTopics } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Speaking',
  description:
    'Formats, topics, and the full record of talks, workshops, panels, and streams, with video.',
}

export default function SpeakingPage() {
  const talks = byMedium('talk')
  const streams = byMedium('stream')
  const all = [...talks, ...streams].sort((a, b) => b.date.localeCompare(a.date))
  const earliest = all.at(-1)

  return (
    <div className="mx-auto max-w-6xl px-5 pt-14 sm:px-8 sm:pt-20">
      <header className="max-w-2xl">
        <p className="label">For event organisers and producers</p>
        <h1 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-text sm:text-5xl">
          Speaking
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          I have run workshops where the whole room compiles a contract, and panels where the
          interesting part was the disagreement. {all.length} sessions on record
          {earliest ? ` going back to ${formatDate(earliest.date)}` : ''}, most of them with video
          you can watch before you decide.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href={site.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-accent-contrast transition-colors hover:bg-accent-hover"
          >
            Check my availability
          </Link>
          <Link
            href={`mailto:${site.email}?subject=Speaking enquiry`}
            className="rounded-md border border-line px-4 py-2.5 text-sm text-text transition-colors hover:border-line-strong"
          >
            Send the details
          </Link>
        </div>
      </header>

      {/* -------------------------------------------------------- formats */}
      <section aria-labelledby="formats-heading" className="mt-20">
        <h2 id="formats-heading" className="font-display text-3xl text-text">
          Formats
        </h2>
        <ul className="mt-7 grid gap-5 sm:grid-cols-2">
          {speakingFormats.map((format) => (
            <li key={format.title} className="flex flex-col p-5 card">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-xl text-text">{format.title}</h3>
                <span className="label whitespace-nowrap">{format.length}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{format.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* --------------------------------------------------------- topics */}
      <section aria-labelledby="topics-heading" className="mt-20">
        <h2 id="topics-heading" className="font-display text-3xl text-text">
          What I talk about
        </h2>
        <p className="mt-2 max-w-xl text-sm text-muted">
          These are starting points rather than a fixed catalogue. If your audience needs a
          neighbouring angle, say so and I will build to it.
        </p>
        <ul className="mt-7 grid gap-x-10 gap-y-3 sm:grid-cols-2">
          {speakingTopics.map((topic) => (
            <li key={topic} className="flex gap-3 border-b border-line py-3 text-sm text-text">
              <span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
              {topic}
            </li>
          ))}
        </ul>
      </section>

      {/* ---------------------------------------------------------- record */}
      <section aria-labelledby="record-heading" className="mt-20">
        <div className="flex items-end justify-between gap-4">
          <h2 id="record-heading" className="font-display text-3xl text-text">
            On record
          </h2>
          <Link
            href="/work?form=talk,stream"
            className="whitespace-nowrap text-sm font-medium text-accent hover:text-accent-hover"
          >
            Filter these →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {all.map((entry, i) => (
            <EntryCard key={entry.slug} entry={entry} priority={i < 3} />
          ))}
        </div>
      </section>
    </div>
  )
}
