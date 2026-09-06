import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { allEntries, coverSize, formatDate, MEDIUM_LABELS, STATUS_NOTES } from '@/lib/content'
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
    description: entry.summary ?? entry.title,
    openGraph: { title: entry.title, description: entry.summary ?? entry.title, images: entry.cover ? [entry.cover.src] : [] },
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

/**
 * One row of the rail. Rendered whether or not it has anything in it, so the
 * panel is the same height and the same shape on every entry.
 */
function RailSection({
  label,
  items,
  href,
}: {
  label: string
  items: readonly string[]
  href?: string
}) {
  return (
    <div className="rail-section">
      <p className="label">{label}</p>
      {items.length === 0 ? (
        <p className="rail-empty">None</p>
      ) : (
        <ul className="mt-2.5 space-y-1.5">
          {items.map((item) => (
            <li key={item} className="rail-item">
              {href ? (
                <Link href={href} className="transition-colors hover:text-accent">
                  {item}
                </Link>
              ) : (
                item
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
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
    <article className="mx-auto max-w-6xl px-6 pt-10 sm:pt-14">
      <Link href="/#work" className="label inline-flex items-center gap-2 hover:text-accent">
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
            {entry.summary ? (
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{entry.summary}</p>
            ) : null}

            {entry.href ? (
              <Link
                href={entry.href}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-ghost mt-6 gap-2"
              >
                Open the project
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M3 13L13 3M6 3h7v7"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            ) : null}
          </header>

          {entry.cover ? (
            <Image
              src={entry.cover.src}
              alt={entry.cover.alt}
              {...coverSize(entry.cover.src)}
              priority
              sizes="(min-width: 1024px) 720px, 92vw"
              className="mt-10 h-auto w-full rounded-lg border border-line"
            />
          ) : null}

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

        {/*
          Every entry gets the same rail, in the same order, in one treatment.
          It used to render Practice and Field as plain links and Built with as
          bordered mono chips, so one panel carried two visual systems, and the
          whole Built with block vanished on entries with no tech, which made
          the rail a different shape depending on which page you were on.

          Now a section is always present and always looks the same. Where
          there is nothing to list it says so in one word rather than
          disappearing, because a rail that changes shape page to page is the
          thing that reads as unfinished.
        */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <RailSection label="Form" items={[MEDIUM_LABELS[entry.medium].singular]} />
          <RailSection
            label={entry.updated ? 'Updated' : 'Published'}
            items={[formatDate(entry.updated ?? entry.date)]}
          />
          <RailSection label="Practice" items={entry.practices} href="/#work" />
          <RailSection label="Field" items={entry.domains} href="/#work" />
          <RailSection label="Built with" items={entry.tech ?? []} />
          <RailSection label="Organisation" items={entry.org ? [entry.org] : []} />
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
