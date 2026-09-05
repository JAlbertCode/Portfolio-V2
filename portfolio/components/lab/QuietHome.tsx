import ConnectBlock from './ConnectBlock'
import HoverPeek from './HoverPeek'
import {
  allEntries,
  byMedium,
  DOMAINS,
  entryYear,
  featured,
  formatDate,
  groupByYear,
  MEDIUMS,
  MEDIUM_LABELS,
} from '@/lib/content'
import { site } from '@/lib/site'

/**
 * Quiet: fast and plain, executed properly.
 *
 * Three decisions carry the whole thing.
 *
 * The card is gone. A bordered, rounded, shadowed rectangle is the single most
 * template-looking object on the web, and structure works fine without it:
 * hairlines, alignment, and space.
 *
 * The work is a text list, not a grid of images. Fifty-six entries in a grid is
 * a wall nobody reads; fifty-six as a list is scannable in one pass, weighs
 * almost nothing, and is real crawlable text, which matters because search is
 * one of the ways people arrive here. The cover appears on hover as a reward
 * for pointing, and on a phone it sits in the row.
 *
 * Ordering is set by who is actually arriving. Someone from a search result or
 * a bio link has no idea who Jay is, so identity comes first and the connect
 * block sits directly under it rather than in front of it. Someone who just
 * tapped a business card still reaches it within one thumb scroll.
 */

const LANES = [
  { kicker: 'Run an event', title: 'Book me to speak', href: '/speaking' },
  { kicker: 'Hiring', title: 'See if I fit', href: '/about' },
  { kicker: 'Need something made', title: 'Work with me', href: '/services' },
  { kicker: 'Just curious', title: 'Browse everything', href: '/work' },
]

export default function QuietHome() {
  const recent = allEntries.slice(0, 14)
  const peekItems = allEntries.map((e) => ({ id: e.slug, src: e.cover.src, alt: e.cover.alt }))

  return (
    <>
      <HoverPeek items={peekItems} />

      <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px 120px' }}>
        {/* ------------------------------------------------------------- header */}
        <header
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            padding: '22px 0',
            borderBottom: '1px solid var(--edge)',
          }}
        >
          <span style={{ fontWeight: 500, fontSize: 15 }}>Jonathan Albert</span>
          <nav style={{ marginLeft: 'auto', display: 'flex', gap: 20 }}>
            {['Work', 'Speaking', 'Services', 'About'].map((n) => (
              <a key={n} href="#" style={{ fontSize: 14, color: 'var(--ink-2)', textDecoration: 'none' }}>
                {n}
              </a>
            ))}
          </nav>
        </header>

        {/* --------------------------------------------------------------- who */}
        <section style={{ padding: '58px 0 0' }}>
          <p style={{ fontSize: 22, lineHeight: 1.42, letterSpacing: '-0.02em', margin: 0, maxWidth: '38ch' }}>
            I build the reference implementation, then teach the room how to run it.
          </p>
          <p style={{ fontSize: 15.5, lineHeight: 1.65, color: 'var(--ink-2)', margin: '18px 0 0', maxWidth: '62ch' }}>
            Developer relations and solutions engineering across AI, decentralised compute,
            blockchains, gaming, augmented reality, finance, and civic tech. A decade of it, all
            catalogued below.
          </p>

          <div
            className="q-num"
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0 20px', marginTop: 22, alignItems: 'center' }}
          >
            <span>{site.location}</span>
            <span>{allEntries.length} entries</span>
            <span>2014&ndash;2026</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--ink-2)' }}>
              <span className="q-live" />
              open to conversations
            </span>
          </div>
        </section>

        {/* ----------------------------------------------------------- connect */}
        <ConnectBlock />

        {/* ------------------------------------------------------------- lanes */}
        <section style={{ marginTop: 54 }}>
          <div className="q-num" style={{ paddingBottom: 10 }}>Start where you are</div>
          <div className="q-rule" />
          {LANES.map((l) => (
            <a
              key={l.title}
              href={l.href}
              className="q-row q-lane"
            >
              <span className="q-num">{l.kicker}</span>
              <span className="q-row-title">{l.title}</span>
              <span style={{ color: 'var(--ink-3)', fontSize: 14 }} aria-hidden="true">&rarr;</span>
            </a>
          ))}
        </section>

        {/* ------------------------------------------------------------ recent */}
        <section style={{ marginTop: 54 }}>
          <div
            className="q-num"
            style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 10 }}
          >
            <span>Selected work</span>
            <a href="/work" style={{ color: 'var(--ink-2)', textDecoration: 'none' }}>
              all {allEntries.length} &rarr;
            </a>
          </div>
          <div className="q-rule" />

          {recent.map((e, i) => (
            <a
              key={e.slug}
              href={e.href ?? '#'}
              className="q-row"
              data-peek={e.slug}
              {...(e.href?.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <span className="q-num q-idx">{String(i + 1).padStart(2, '0')}</span>

              <span className="q-thumb">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={e.cover.src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </span>

              <span style={{ minWidth: 0 }}>
                <span className="q-row-title" style={{ display: 'block' }}>
                  {e.title}
                </span>
                <span className="q-row-sum" style={{ display: 'block' }}>
                  {e.summary}
                </span>
                <span
                  className="q-num"
                  style={{ display: 'flex', gap: 14, marginTop: 7, flexWrap: 'wrap' }}
                >
                  <span>{MEDIUM_LABELS[e.medium].singular}</span>
                  <span>{e.domains.join(', ')}</span>
                  {e.org ? <span>{e.org}</span> : null}
                </span>
              </span>

              <span className="q-num q-row-year">{entryYear(e.date)}</span>
            </a>
          ))}
        </section>

        {/* ------------------------------------------------------------- index */}
        <section style={{ marginTop: 54 }}>
          <div className="q-num" style={{ paddingBottom: 10 }}>Index</div>
          <div className="q-rule" />
          <div
            style={{
              display: 'grid',
              gap: '0 56px',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              paddingTop: 18,
            }}
          >
            <div>
              <div className="q-num" style={{ marginBottom: 8 }}>By form</div>
              {MEDIUMS.map((m) => (
                <a
                  key={m}
                  href={`/work?form=${m}`}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    padding: '8px 0',
                    borderBottom: '1px solid var(--edge)',
                    textDecoration: 'none',
                    color: 'var(--ink)',
                    fontSize: 14.5,
                  }}
                >
                  <span>{MEDIUM_LABELS[m].plural}</span>
                  <span className="q-num">{byMedium(m).length}</span>
                </a>
              ))}
            </div>
            <div>
              <div className="q-num" style={{ marginBottom: 8 }}>By field</div>
              {DOMAINS.map((d) => (
                <a
                  key={d}
                  href={`/work?field=${encodeURIComponent(d)}`}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    padding: '8px 0',
                    borderBottom: '1px solid var(--edge)',
                    textDecoration: 'none',
                    color: 'var(--ink)',
                    fontSize: 14.5,
                  }}
                >
                  <span>{d}</span>
                  <span className="q-num">
                    {allEntries.filter((e) => e.domains.includes(d)).length}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <footer className="q-num" style={{ marginTop: 64, paddingTop: 18, borderTop: '1px solid var(--edge)' }}>
          {featured.length} featured of {allEntries.length} &middot; oldest{' '}
          {formatDate(groupByYear(allEntries).at(-1)![1].at(-1)!.date)} &middot; {site.location}
        </footer>
      </div>
    </>
  )
}
