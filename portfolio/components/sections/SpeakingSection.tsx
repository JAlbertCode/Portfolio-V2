import Link from 'next/link'
import { byMedium, DOMAINS } from '@/lib/content'
import { site, speakingFormats } from '@/lib/site'

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

  /*
   * Fields counted off the talks themselves, not a list of topics.
   *
   * There used to be seven bullets here naming subjects Jay would speak on.
   * Two things were wrong with it. Nobody had confirmed them, so the page was
   * offering talks on his behalf. And a list of seven shrinks a generalist:
   * it reads as "these, and not the rest", which is the opposite of what a
   * decade across nine fields should say.
   *
   * An organiser is not asking "what are your seven talks". They are asking
   * "has this person spoken about my thing before". A count off forty-nine
   * sessions answers that with evidence, and it cannot go stale or be wrong.
   */
  const fields = DOMAINS.map((domain) => ({
    domain,
    count: sessions.filter((s) => s.domains.includes(domain)).length,
  }))
    .filter((f) => f.count > 0)
    .sort((a, b) => b.count - a.count)

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

      <p className="label mt-12 mb-3">Fields spoken in</p>
      <div className="max-w-xl">
        {fields.map((f) => (
          <div key={f.domain} className="flex items-center gap-4 border-b border-line py-2">
            <span className="w-44 shrink-0 text-sm text-text">{f.domain}</span>
            <span
              aria-hidden="true"
              className="h-1 rounded-full bg-accent/70"
              style={{ width: `${(f.count / fields[0].count) * 100}%` }}
            />
            <span className="label ml-auto">{f.count}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 max-w-[62ch] text-sm leading-relaxed text-muted">
        Counted from the {sessions.length} talks and streams in the catalogue. If your subject is
        next to one of these, it is probably in range.
      </p>

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
