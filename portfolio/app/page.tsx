import Link from 'next/link'
import ConnectRow from '@/components/ConnectRow'
import EntryCard from '@/components/EntryCard'
import HoverPeek from '@/components/HoverPeek'
import WorkRow from '@/components/WorkRow'
import { entryHref } from '@/components/EntryCard'
import { allEntries, byMedium, DOMAINS, featured, MEDIUMS, MEDIUM_LABELS } from '@/lib/content'
import { site } from '@/lib/site'

export default function Home() {
  const rest = allEntries.filter((e) => !e.featured).slice(0, 12)
  const peek = rest.map((e) => ({ id: e.slug, src: e.cover.src }))

  return (
    <>
      <HoverPeek items={peek} />

      <div className="mx-auto max-w-6xl px-6 pb-28">
        {/* A sentence, a button, four marks. Nothing here duplicates anything
            else on the page. */}
        <section className="pt-16 sm:pt-24">
          <h1 className="max-w-[17ch] font-display text-[clamp(2rem,5vw,3.4rem)] leading-[1.08] tracking-tight text-text">
            I build the reference implementation, then teach the room how to run it.
          </h1>
          <p className="mt-5 max-w-[44ch] text-base leading-relaxed text-muted sm:text-[1.03rem]">
            Developer relations and solutions engineering. {site.location}.
          </p>
          <ConnectRow />
        </section>

        <section aria-labelledby="selected" className="mt-20">
          <div className="mb-5 flex items-baseline gap-4">
            <h2 id="selected" className="font-display text-2xl text-text sm:text-3xl">
              Selected
            </h2>
            <Link
              href="/work"
              className="ml-auto text-sm text-accent hover:text-accent-hover"
            >
              All {allEntries.length} &rarr;
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((entry, i) => (
              <EntryCard key={entry.slug} entry={entry} priority={i < 3} />
            ))}
          </div>
        </section>

        <section className="mt-16 border-t border-line">
          {rest.map((entry) => (
            <WorkRow key={entry.slug} entry={entry} href={entryHref(entry) ?? '/work'} />
          ))}
        </section>

        <section className="mt-16 grid gap-10 sm:grid-cols-2">
          <div>
            <p className="label mb-2">By form</p>
            {MEDIUMS.map((m) => (
              <Link
                key={m}
                href={`/work?form=${m}`}
                className="flex items-baseline justify-between border-b border-line py-2.5 text-[0.95rem] text-text hover:text-accent"
              >
                <span>{MEDIUM_LABELS[m].plural}</span>
                <span className="label">{byMedium(m).length}</span>
              </Link>
            ))}
          </div>
          <div>
            <p className="label mb-2">By field</p>
            <div className="flex flex-wrap gap-2">
              {DOMAINS.map((d) => (
                <Link
                  key={d}
                  href={`/work?field=${encodeURIComponent(d)}`}
                  className="rounded-full border border-line px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent hover:text-text"
                >
                  {d} <span className="label">{allEntries.filter((e) => e.domains.includes(d)).length}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
