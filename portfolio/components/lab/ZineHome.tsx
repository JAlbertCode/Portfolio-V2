import Image from 'next/image'
import ConnectBlock from './ConnectBlock'
import { allEntries, byMedium, DOMAINS, featured, formatDate, MEDIUMS, MEDIUM_LABELS } from '@/lib/content'
import { site } from '@/lib/site'

/**
 * Zine: his own publication rather than a product page.
 *
 * Masthead, thick rules, numbered entries, one loud spot colour doing all the
 * work, and images duotoned so the page reads as two-colour print. Entries are
 * rows with an oversized numeral, not cards floating in space, which is what
 * made the first attempt look like every other portfolio.
 */

const ENTRIES = [
  { kicker: 'You run an event', title: 'Book me to speak' },
  { kicker: 'You are hiring', title: 'See if I fit' },
  { kicker: 'You need something made', title: 'Work with me' },
  { kicker: 'You are curious', title: 'Browse everything' },
]

export default function ZineHome() {
  return (
    <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 22px 96px' }}>
      {/* ----------------------------------------------------------- masthead */}
      <div
        className="lab-note"
        style={{ display: 'flex', gap: 18, paddingTop: 20, paddingBottom: 8, flexWrap: 'wrap' }}
      >
        <span>No. 03</span>
        <span>{site.location}</span>
        <span>2014 &ndash; 2026</span>
        <span style={{ marginLeft: 'auto', color: 'var(--spot)' }}>Still building</span>
      </div>

      <div className="z-rule" />
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.6rem, 12.5vw, 9rem)',
          lineHeight: 0.86,
          letterSpacing: '-0.035em',
          textTransform: 'uppercase',
          margin: '14px 0 16px',
          color: 'var(--ink)',
        }}
      >
        Jonathan
        <br />
        <span style={{ color: 'var(--spot)' }}>Albert</span>
      </h1>
      <div className="z-rule" />

      {/* Standfirst in two columns, the way a feature opens. */}
      <div
        style={{
          display: 'grid',
          gap: 30,
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          padding: '22px 0 26px',
        }}
      >
        <p style={{ fontSize: 'clamp(1.15rem,2.4vw,1.6rem)', lineHeight: 1.28, margin: 0, fontWeight: 600, color: 'var(--ink)' }}>
          {site.tagline}
        </p>
        <div>
          {site.intro.map((p) => (
            <p key={p.slice(0, 20)} className="lab-muted" style={{ fontSize: 15, lineHeight: 1.68, margin: '0 0 14px' }}>
              {p}
            </p>
          ))}
        </div>
      </div>

      <ConnectBlock />

      {/* ------------------------------------------------------------ contents */}
      <section style={{ marginTop: 62 }}>
        <div className="z-rule" style={{ marginBottom: 4 }} />
        <div className="lab-note" style={{ paddingBottom: 14 }}>Contents</div>

        {ENTRIES.map((e, i) => (
          <a
            key={e.title}
            href="#"
            className="z-hair"
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: 20,
              padding: '16px 0',
              textDecoration: 'none',
              color: 'var(--ink)',
            }}
          >
            <span className="z-numeral" style={{ fontSize: 34, flex: '0 0 auto', minWidth: 44 }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <span style={{ minWidth: 0 }}>
              <span className="lab-note" style={{ display: 'block' }}>{e.kicker}</span>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.3rem,3.4vw,2rem)',
                  textTransform: 'uppercase',
                  lineHeight: 1.05,
                  display: 'block',
                  marginTop: 3,
                }}
              >
                {e.title}
              </span>
            </span>
            <span style={{ marginLeft: 'auto', color: 'var(--spot)', fontSize: 22 }} aria-hidden="true">&rarr;</span>
          </a>
        ))}
      </section>

      {/* -------------------------------------------------------------- feature */}
      <section style={{ marginTop: 70 }}>
        <div className="z-rule" />
        <h2
          className="lab-h2"
          style={{
            fontSize: 'clamp(1.7rem,5vw,3rem)',
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            margin: '16px 0 0',
          }}
        >
          The work, selected
        </h2>
        <p className="lab-muted" style={{ margin: '8px 0 30px', fontSize: 15 }}>
          {featured.length} of {allEntries.length} entries. The rest are indexed below.
        </p>

        {featured.map((e, i) => (
          <article
            key={e.slug}
            className="z-hair"
            style={{
              display: 'grid',
              gap: 22,
              gridTemplateColumns: 'minmax(0,1fr)',
              padding: '26px 0',
            }}
          >
            <div style={{ display: 'grid', gap: 22, gridTemplateColumns: 'minmax(150px,240px) minmax(0,1fr)', alignItems: 'start' }}>
              <div className="z-duo-wrap" style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                <Image src={e.cover.src} alt={e.cover.alt} fill sizes="240px" className="z-duo" style={{ objectFit: 'cover' }} />
              </div>

              <div style={{ minWidth: 0 }}>
                <div className="lab-note" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <span className="z-numeral" style={{ fontSize: 15 }}>{String(i + 1).padStart(2, '0')}</span>
                  <span>{MEDIUM_LABELS[e.medium].singular}</span>
                  <span>{formatDate(e.date)}</span>
                  {e.org ? <span>{e.org}</span> : null}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.25rem,3vw,1.85rem)',
                    lineHeight: 1.08,
                    textTransform: 'uppercase',
                    letterSpacing: '-0.015em',
                    margin: '9px 0 0',
                    color: 'var(--ink)',
                  }}
                >
                  {e.title}
                </h3>
                <p className="lab-muted" style={{ fontSize: 15, lineHeight: 1.62, margin: '10px 0 0', maxWidth: 620 }}>
                  {e.summary}
                </p>
                <div style={{ marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {e.domains.map((d) => (
                    <span
                      key={d}
                      className="lab-note"
                      style={{ border: '1px solid var(--edge)', padding: '3px 7px', color: 'var(--ink-2)' }}
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* ---------------------------------------------------------------- index */}
      <section style={{ marginTop: 60 }}>
        <div className="z-rule" />
        <h2 className="lab-h2" style={{ fontSize: 'clamp(1.4rem,4vw,2.2rem)', textTransform: 'uppercase', margin: '14px 0 24px' }}>
          Index
        </h2>
        <div style={{ display: 'grid', gap: 40, gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))' }}>
          <div>
            <div className="lab-note" style={{ marginBottom: 10 }}>By form</div>
            {MEDIUMS.map((m) => (
              <a key={m} href="#" className="z-hair" style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', textDecoration: 'none', color: 'var(--ink)', fontWeight: 600, fontSize: 15 }}>
                <span>{MEDIUM_LABELS[m].plural}</span>
                <span style={{ color: 'var(--spot)' }}>{byMedium(m).length}</span>
              </a>
            ))}
          </div>
          <div>
            <div className="lab-note" style={{ marginBottom: 10 }}>By field</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {DOMAINS.map((d) => (
                <a
                  key={d}
                  href="#"
                  style={{
                    border: '2px solid var(--edge)',
                    padding: '7px 11px',
                    textDecoration: 'none',
                    color: 'var(--ink)',
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  {d}{' '}
                  <span style={{ color: 'var(--spot)' }}>
                    {allEntries.filter((e) => e.domains.includes(d)).length}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
