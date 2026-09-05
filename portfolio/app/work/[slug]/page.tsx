import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { allEntries, formatDate, MEDIUM_LABELS, STATUS_NOTES } from '@/lib/content'
import { writeupFor, writeups } from '@/lib/content/writeups'
import type { Block } from '@/lib/content/writeups'
import EntryCard from '@/components/EntryCard'

export function generateStaticParams() {
  return writeups.map((w) => ({ slug: w.slug }))
}

function entryForDetail(slug: string) {
  return allEntries.find((e) => e.detail === slug)
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const entry = entryForDetail(slug)
  if (!entry) return {}
  return {
    title: entry.title,
    description: entry.summary,
    openGraph: { title: entry.title, description: entry.summary, images: [entry.cover.src] },
  }
}

function BlockView({ block }: { block: Block }) {
  switch (block.kind) {
    case 'youtube':
      return (
        <figure className="mt-10">
          <div className="aspect-video overflow-hidden rounded-lg border border-line">
            <iframe
              src={`https://www.youtube.com/embed/${block.id}`}
              title={block.caption ?? 'Embedded video'}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="size-full"
            />
          </div>
          {block.caption ? (
            <figcaption className="mt-3 text-sm text-faint">{block.caption}</figcaption>
          ) : null}
        </figure>
      )
    case 'video':
      return (
        <figure className="mt-10">
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            src={block.src}
            controls
            playsInline
            preload="none"
            className="w-full rounded-lg border border-line bg-black"
          />
          {block.caption ? (
            <figcaption className="mt-3 text-sm text-faint">{block.caption}</figcaption>
          ) : null}
        </figure>
      )
    case 'image':
      return (
        <figure className="mt-10">
          <Image
            src={block.src}
            alt={block.alt}
            width={1200}
            height={750}
            sizes="(min-width: 768px) 720px, 92vw"
            className="w-full rounded-lg border border-line"
          />
          {block.caption ? (
            <figcaption className="mt-3 text-sm text-faint">{block.caption}</figcaption>
          ) : null}
        </figure>
      )
    case 'embed':
      return (
        <figure className="mt-10">
          <iframe
            src={block.src}
            title={block.title}
            loading="lazy"
            className={`w-full rounded-lg border border-line bg-surface ${
              block.ratio === 'page' ? 'aspect-[8.5/11]' : 'aspect-video'
            }`}
          />
        </figure>
      )
    case 'section':
      return (
        <section className="mt-12">
          <h2 className="font-display text-2xl text-text">{block.title}</h2>
          {block.body ? (
            <div className="prose-body mt-4 max-w-2xl">
              {block.body.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          ) : null}
          {block.bullets ? (
            block.ordered ? (
              <ol className="mt-4 max-w-2xl space-y-3">
                {block.bullets.map((item, i) => (
                  <li key={item.slice(0, 32)} className="flex gap-4">
                    <span className="mt-0.5 font-mono text-xs text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-base leading-relaxed text-muted">{item}</span>
                  </li>
                ))}
              </ol>
            ) : (
              <ul className="mt-4 max-w-2xl space-y-3">
                {block.bullets.map((item) => (
                  <li key={item.slice(0, 32)} className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent"
                    />
                    <span className="text-base leading-relaxed text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            )
          ) : null}
        </section>
      )
    case 'links':
      return (
        <div className="mt-10">
          {block.title ? <p className="label">{block.title}</p> : null}
          <ul className="mt-3 flex flex-wrap gap-2">
            {block.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-line px-3.5 py-2 text-sm text-text transition-colors hover:border-accent"
                >
                  {item.label}
                  <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M5 11L11 5M11 5H6M11 5v5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )
  }
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const entry = entryForDetail(slug)
  const writeup = writeupFor(slug)
  if (!entry || !writeup) notFound()

  const statusNote = entry.status ? STATUS_NOTES[entry.status] : null
  const related = allEntries
    .filter((e) => e.slug !== entry.slug && e.domains.some((d) => entry.domains.includes(d)))
    .slice(0, 3)

  return (
    <article className="mx-auto max-w-6xl px-5 pt-10 sm:px-8 sm:pt-14">
      <Link href="/work" className="label inline-flex items-center gap-2 hover:text-accent">
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M13 8H3M7 4L3 8l4 4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        All work
      </Link>

      <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,1fr)_16rem]">
        <div className="min-w-0">
          <header>
            <div className="flex flex-wrap items-center gap-2">
              <span className="label">{MEDIUM_LABELS[entry.medium].singular}</span>
              <span aria-hidden="true" className="text-faint">·</span>
              <span className="label">{formatDate(entry.date)}</span>
              {entry.org ? (
                <>
                  <span aria-hidden="true" className="text-faint">·</span>
                  <span className="label">{entry.org}</span>
                </>
              ) : null}
            </div>
            <h1 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-text sm:text-5xl">
              {writeup.heading ?? entry.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{entry.summary}</p>
          </header>

          <Image
            src={entry.cover.src}
            alt={entry.cover.alt}
            width={1600}
            height={1000}
            priority
            sizes="(min-width: 1024px) 720px, 92vw"
            className="mt-10 w-full rounded-lg border border-line object-cover"
          />

          {statusNote ? (
            <p className="mt-6 rounded-md border border-line bg-surface px-4 py-3 text-sm text-muted">
              {statusNote}
            </p>
          ) : null}

          <div className="prose-body mt-10 max-w-2xl">
            {writeup.body.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          {writeup.blocks?.map((block, i) => <BlockView key={i} block={block} />)}
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          {entry.href ? (
            <Link
              href={entry.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-md bg-accent px-4 py-2.5 text-center text-sm font-medium text-accent-contrast transition-colors hover:bg-accent-hover"
            >
              Open the project
            </Link>
          ) : null}

          <div className="mt-7">
            <p className="label">Practice</p>
            <ul className="mt-3 space-y-1.5">
              {entry.practices.map((p) => (
                <li key={p}>
                  <Link
                    href={`/work?practice=${encodeURIComponent(p)}`}
                    className="text-sm text-muted hover:text-accent"
                  >
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-7">
            <p className="label">Field</p>
            <ul className="mt-3 space-y-1.5">
              {entry.domains.map((d) => (
                <li key={d}>
                  <Link
                    href={`/work?field=${encodeURIComponent(d)}`}
                    className="text-sm text-muted hover:text-accent"
                  >
                    {d}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {entry.tech?.length ? (
            <div className="mt-7">
              <p className="label">Built with</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {entry.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-faint"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
        </aside>
      </div>

      {related.length > 0 ? (
        <section aria-labelledby="related-heading" className="mt-24">
          <h2 id="related-heading" className="font-display text-2xl text-text">
            Related
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((e) => (
              <EntryCard key={e.slug} entry={e} />
            ))}
          </div>
        </section>
      ) : null}
    </article>
  )
}
