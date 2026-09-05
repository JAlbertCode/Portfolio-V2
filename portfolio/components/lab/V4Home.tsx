import ConnectBlock from './ConnectBlock'
import HoverPeek from './HoverPeek'
import {
  allEntries,
  byMedium,
  DOMAINS,
  entryYear,
  featured,
  formatDate,
  MEDIUMS,
  MEDIUM_LABELS,
} from '@/lib/content'
import { site } from '@/lib/site'

/**
 * V4: the first V3's visual language, the Quiet direction's flow.
 *
 * Cards, radius, and the teal accent come back because that was the part that
 * worked. What changes is the order and the density.
 *
 * Identity first, because search results and social bios bring people who have
 * no idea who Jay is and cannot be asked to save a contact before they know
 * whose it is. Connect directly beneath, so a business card tap still lands on
 * it within one thumb scroll. Then the lanes, then six cards, then the long
 * tail as a list.
 *
 * The list matters: fifty-six entries as cards is a wall nobody reads and a
 * megabyte of thumbnails nobody sees. As rows it scans in one pass, weighs
 * almost nothing, and stays real crawlable text.
 */

const LANES = [
  { kicker: 'Run an event', title: 'Book me to speak', href: '/speaking' },
  { kicker: 'Hiring', title: 'See if I fit', href: '/about' },
  { kicker: 'Need a build', title: 'Work with me', href: '/services' },
  { kicker: 'Just curious', title: 'Browse everything', href: '/work' },
]

export default function V4Home() {
  const rest = allEntries.filter((e) => !e.featured).slice(0, 12)
  const peekItems = rest.map((e) => ({ id: e.slug, src: e.cover.src, alt: e.cover.alt }))

  return (
    <>
      <HoverPeek items={peekItems} />

      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 24px 110px' }}>
        {/* ------------------------------------------------------------ header */}
        <header className="v-header">
          <a href="/" className="v-display" style={{ fontSize: 17, textDecoration: 'none' }}>
            Jay Albert
          </a>
          {/* Hidden below 768px: the lane cards are this nav, named by what the
              visitor wants rather than by what the page is called. */}
          <nav className="v-nav">
            {['Work', 'Speaking', 'Services', 'About'].map((n) => (
              <a key={n} href="#" style={{ fontSize: 14, color: 'var(--ink-2)', textDecoration: 'none' }}>
                {n}
              </a>
            ))}
          </nav>
        </header>

        {/* --------------------------------------------------------------- who */}
        <section style={{ padding: '64px 0 0', maxWidth: 720 }}>
          <h1 className="v-display" style={{ fontSize: 'clamp(1.9rem, 4.2vw, 2.9rem)', margin: 0 }}>
            I build the reference implementation, then teach the room how to run it.
          </h1>
          <p
            style={{
              fontSize: 16.5,
              lineHeight: 1.65,
              color: 'var(--ink-2)',
              margin: '20px 0 0',
              maxWidth: '62ch',
            }}
          >
            Developer relations and solutions engineering across AI, decentralised compute,
            blockchains, gaming, augmented reality, finance, and civic tech.
          </p>
          <div className="v-note" style={{ marginTop: 20 }}>{site.location}</div>
        </section>

        {/* ----------------------------------------------------------- connect */}
        <div style={{ maxWidth: 720 }}>
          <ConnectBlock />
        </div>

        {/* ------------------------------------------------------------- lanes */}
        <section style={{ marginTop: 62 }}>
          <div className="v-lanes" style={{ display: 'grid', gap: 14, gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))' }}>
            {LANES.map((l) => (
              <a
                key={l.title}
                href={l.href}
                className="v-card"
                style={{ padding: '17px 18px 19px', textDecoration: 'none', display: 'block' }}
              >
                <div className="v-note">{l.kicker}</div>
                <div className="v-display v-lane-title" style={{ fontSize: 19, marginTop: 8 }}>
                  {l.title}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------- featured */}
        <section style={{ marginTop: 72 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 20 }}>
            <h2 className="v-display" style={{ fontSize: 'clamp(1.4rem,3vw,1.9rem)', margin: 0 }}>
              Selected
            </h2>
            <a
              href="/work"
              style={{ marginLeft: 'auto', color: 'var(--spot)', fontSize: 14, textDecoration: 'none' }}
            >
              All {allEntries.length} &rarr;
            </a>
          </div>

          <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fit,minmax(290px,1fr))' }}>
            {featured.map((e) => (
              <a
                key={e.slug}
                href={e.href ?? '#'}
                className="v-card"
                style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', textDecoration: 'none' }}
                {...(e.href?.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <span
                  style={{
                    position: 'relative',
                    aspectRatio: '16/10',
                    background: 'var(--ground-2)',
                    borderBottom: '1px solid var(--edge)',
                    display: 'block',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={e.cover.src}
                    alt={e.cover.alt}
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </span>

                <span style={{ padding: '16px 17px 18px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <span className="v-note">
                    {MEDIUM_LABELS[e.medium].singular} &middot; {formatDate(e.date)}
                    {e.org ? ` · ${e.org}` : ''}
                  </span>
                  <span className="v-display" style={{ fontSize: 19, marginTop: 8, display: 'block' }}>
                    {e.title}
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      lineHeight: 1.58,
                      color: 'var(--ink-2)',
                      marginTop: 8,
                      display: 'block',
                    }}
                  >
                    {e.summary}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------- long tail */}
        <section style={{ marginTop: 72 }}>
          <div className="v-rule" />
          {rest.map((e) => (
            <a
              key={e.slug}
              href={e.href ?? '#'}
              className="v-row"
              data-peek={e.slug}
              {...(e.href?.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <span className="v-thumb">
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
                <span className="v-row-title" style={{ display: 'block' }}>
                  {e.title}
                </span>
                <span className="v-row-sum" style={{ display: 'block' }}>
                  {e.summary}
                </span>
                <span className="v-note" style={{ display: 'flex', gap: 14, marginTop: 7, flexWrap: 'wrap' }}>
                  <span>{MEDIUM_LABELS[e.medium].singular}</span>
                  <span>{e.domains.join(', ')}</span>
                </span>
              </span>

              <span className="v-note v-row-year">{entryYear(e.date)}</span>
            </a>
          ))}
        </section>

        {/* -------------------------------------------------------------- index */}
        <section style={{ marginTop: 72 }}>
          <div style={{ display: 'grid', gap: 44, gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))' }}>
            <div>
              <div className="v-note" style={{ marginBottom: 8 }}>By form</div>
              {MEDIUMS.map((m) => (
                <a
                  key={m}
                  href={`/work?form=${m}`}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    padding: '9px 0',
                    borderBottom: '1px solid var(--edge)',
                    textDecoration: 'none',
                    color: 'var(--ink)',
                    fontSize: 15,
                  }}
                >
                  <span>{MEDIUM_LABELS[m].plural}</span>
                  <span className="v-note">{byMedium(m).length}</span>
                </a>
              ))}
            </div>
            <div>
              <div className="v-note" style={{ marginBottom: 8 }}>By field</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {DOMAINS.map((d) => (
                  <a
                    key={d}
                    href={`/work?field=${encodeURIComponent(d)}`}
                    className="v-card"
                    style={{
                      padding: '7px 11px',
                      textDecoration: 'none',
                      color: 'var(--ink-2)',
                      fontSize: 13.5,
                      borderRadius: 999,
                    }}
                  >
                    {d} <span className="v-note">{allEntries.filter((e) => e.domains.includes(d)).length}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
