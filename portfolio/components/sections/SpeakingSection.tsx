import Link from 'next/link'
import { byMedium } from '@/lib/content'
import { site, speakingFormats, speakingTopics } from '@/lib/site'

/**
 * Everything an event organiser needs, on the page they already landed on.
 * Behind its own route this was invisible: nobody clicks "Speaking" to find
 * out whether the person speaks.
 *
 * There is no list of recent sessions here. It was the same talks the
 * catalogue above already lists, printed a second time on the same page; the
 * Talk and Stream chips reach them.
 */
export default function SpeakingSection() {
  const sessions = [...byMedium('talk'), ...byMedium('stream')].sort((a, b) =>
    b.date.localeCompare(a.date)
  )

  return (
    <section id="speaking" className="scroll-mt-20 pt-16 sm:pt-24">
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
        <h2 className="font-display text-2xl text-text sm:text-3xl">Speaking</h2>
        <p className="label">{sessions.length} on record</p>
      </div>

      <p className="mt-4 max-w-[62ch] text-[0.97rem] leading-relaxed text-muted">
        Workshops where the room compiles a contract, and panels where the interesting part was the
        disagreement. Most of it has video you can watch before deciding.
      </p>

      <div className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2">
        {speakingFormats.map((f) => (
          <div key={f.title} className="border-t border-line pt-4">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-display text-lg text-text">{f.title}</h3>
              <span className="label whitespace-nowrap">{f.length}</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted">{f.detail}</p>
          </div>
        ))}
      </div>

      <p className="label mt-12 mb-3">Topics</p>
      <ul className="grid gap-x-10 sm:grid-cols-2">
        {speakingTopics.map((t) => (
          <li key={t} className="flex gap-3 border-b border-line py-2.5 text-sm text-text">
            <span aria-hidden="true" className="mt-1.5 size-1 shrink-0 rounded-full bg-accent" />
            {t}
          </li>
        ))}
      </ul>

      <Link
        href={site.calendly}
        target="_blank"
        rel="noopener noreferrer"
        className="cta mt-8"
      >
        Check my availability
      </Link>
    </section>
  )
}
