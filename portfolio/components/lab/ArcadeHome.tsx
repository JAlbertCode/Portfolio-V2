import Image from 'next/image'
import ConnectBlock from './ConnectBlock'
import {
  allEntries,
  byMedium,
  DOMAINS,
  DOMAIN_COLORS,
  featured,
  formatDate,
  MEDIUMS,
  MEDIUM_LABELS,
} from '@/lib/content'
import type { Domain } from '@/lib/content'
import { site } from '@/lib/site'

/**
 * Arcade: chunky, high contrast, colour-coded by field.
 *
 * The palette is the argument. Nine fields is more than anyone holds in their
 * head, so each one gets a colour and keeps it everywhere: the card's offset
 * shadow, its tag, its row in the index. Someone scanning the catalogue sees
 * three magenta shadows in a row and knows that block is all gaming before
 * reading a single label. That is the difference between decoration and a
 * system.
 */

const LANES = [
  { kicker: 'You run an event', title: 'Book me', domain: 'Gaming' as Domain },
  { kicker: 'You are hiring', title: 'See if I fit', domain: 'Developer Tools' as Domain },
  { kicker: 'You need something made', title: 'Work with me', domain: 'AI' as Domain },
  { kicker: 'You are curious', title: 'Browse it all', domain: 'AR & VR' as Domain },
]

/** Loud runs on a dark ground, so each field uses its high-contrast value. */
function tint(domain: Domain, loud: boolean) {
  return loud ? DOMAIN_COLORS[domain].dark : DOMAIN_COLORS[domain].light
}

export default function ArcadeHome({ loud }: { loud: boolean }) {
  return (
    <div style={{ maxWidth: 1160, margin: '0 auto', padding: '40px 22px 96px' }}>
      {/* --------------------------------------------------------------- hero */}
      <header>
        <div className="lab-note" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <span>{site.location}</span>
          <span style={{ color: 'var(--spot)' }}>Player since 2014</span>
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(2.7rem, 9.5vw, 6.4rem)',
            lineHeight: 0.92,
            letterSpacing: '-0.035em',
            margin: '12px 0 0',
            color: 'var(--ink)',
            textShadow: loud
              ? `4px 4px 0 ${DOMAIN_COLORS.Gaming.dark}, 8px 8px 0 ${DOMAIN_COLORS.AI.dark}`
              : `3px 3px 0 ${DOMAIN_COLORS.Gaming.light}`,
          }}
        >
          Jonathan Albert
        </h1>

        <p style={{ fontSize: 'clamp(1.05rem,2.2vw,1.35rem)', lineHeight: 1.4, margin: '20px 0 0', maxWidth: 660, fontWeight: 500 }}>
          {site.tagline}
        </p>

        {/* Stat blocks, read like a character sheet. */}
        <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', marginTop: 26 }}>
          {(
            [
              ['Entries', allEntries.length, 'AI'],
              ['Talks + streams', byMedium('talk').length + byMedium('stream').length, 'Gaming'],
              ['Built', byMedium('build').length, 'AR & VR'],
              ['Fields', DOMAINS.length, 'Developer Tools'],
            ] as Array<[string, number, Domain]>
          ).map(([label, value, d]) => (
            <div
              key={label}
              className="a-block"
              style={{ ['--tint' as string]: tint(d, loud), padding: '14px 16px' }}
            >
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, lineHeight: 1, color: 'var(--ink)' }}>
                {value}
              </div>
              <div className="lab-note" style={{ marginTop: 5 }}>{label}</div>
            </div>
          ))}
        </div>
      </header>

      <ConnectBlock />

      {/* --------------------------------------------------------------- lanes */}
      <section style={{ marginTop: 56 }}>
        <h2 className="lab-note" style={{ margin: '0 0 14px' }}>Start where you are</h2>
        <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))' }}>
          {LANES.map((l) => (
            <a
              key={l.title}
              href="#"
              className="a-block"
              style={{ ['--tint' as string]: tint(l.domain, loud), padding: '18px 18px 20px', textDecoration: 'none', display: 'block' }}
            >
              <div className="lab-note">{l.kicker}</div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 22,
                  lineHeight: 1.1,
                  marginTop: 7,
                  color: 'var(--ink)',
                }}
              >
                {l.title}
              </div>
              <div style={{ marginTop: 12, color: tint(l.domain, loud), fontWeight: 700, fontSize: 15 }}>Go &rarr;</div>
            </a>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------- featured */}
      <section style={{ marginTop: 66 }}>
        <h2 className="lab-h2" style={{ fontSize: 'clamp(1.6rem,4vw,2.4rem)', fontWeight: 800, margin: '0 0 6px' }}>
          A few worth your time
        </h2>
        <p className="lab-muted" style={{ margin: '0 0 26px', fontSize: 15 }}>
          Colour is the field. It stays the same everywhere on the site.
        </p>

        <div style={{ display: 'grid', gap: 22, gridTemplateColumns: 'repeat(auto-fit,minmax(290px,1fr))' }}>
          {featured.map((e) => {
            const c = tint(e.domains[0], loud)
            return (
              <article
                key={e.slug}
                className="a-block"
                style={{ ['--tint' as string]: c, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
              >
                <div style={{ position: 'relative', aspectRatio: '16/10', borderBottom: 'var(--border-w) solid var(--edge)' }}>
                  <Image src={e.cover.src} alt={e.cover.alt} fill sizes="340px" style={{ objectFit: 'cover' }} />
                  <span
                    className="lab-note"
                    style={{
                      position: 'absolute',
                      left: 0,
                      bottom: 0,
                      background: c,
                      color: loud ? '#12071b' : '#fff',
                      padding: '4px 9px',
                      letterSpacing: '0.09em',
                      fontWeight: 600,
                    }}
                  >
                    {e.domains[0]}
                  </span>
                </div>

                <div style={{ padding: '16px 16px 18px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div className="lab-note">
                    {MEDIUM_LABELS[e.medium].singular} &middot; {formatDate(e.date)}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: 20,
                      lineHeight: 1.15,
                      margin: '7px 0 0',
                      color: 'var(--ink)',
                    }}
                  >
                    {e.title}
                  </h3>
                  <p className="lab-muted" style={{ fontSize: 14, lineHeight: 1.6, margin: '9px 0 0' }}>{e.summary}</p>
                  <div style={{ marginTop: 'auto', paddingTop: 14, color: c, fontWeight: 700, fontSize: 14.5 }}>View &rarr;</div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* ---------------------------------------------------------------- index */}
      <section style={{ marginTop: 66 }}>
        <h2 className="lab-h2" style={{ fontSize: 'clamp(1.4rem,3.4vw,2rem)', fontWeight: 800, margin: '0 0 20px' }}>
          Browse
        </h2>
        <div style={{ display: 'grid', gap: 34, gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))' }}>
          <div>
            <div className="lab-note" style={{ marginBottom: 11 }}>By form</div>
            <div style={{ display: 'grid', gap: 9 }}>
              {MEDIUMS.map((m) => (
                <a
                  key={m}
                  href="#"
                  className="a-block"
                  style={{
                    ['--tint' as string]: 'var(--edge)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '11px 14px',
                    textDecoration: 'none',
                    color: 'var(--ink)',
                    fontWeight: 600,
                    fontSize: 15,
                  }}
                >
                  <span>{MEDIUM_LABELS[m].plural}</span>
                  <span className="lab-faint">{byMedium(m).length}</span>
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="lab-note" style={{ marginBottom: 11 }}>By field</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}>
              {DOMAINS.map((d) => {
                const c = tint(d, loud)
                return (
                  <a
                    key={d}
                    href="#"
                    style={{
                      display: 'inline-flex',
                      gap: 8,
                      alignItems: 'center',
                      border: 'var(--border-w) solid var(--edge)',
                      borderRadius: 'var(--radius)',
                      boxShadow: `3px 3px 0 0 ${c}`,
                      padding: '8px 12px',
                      textDecoration: 'none',
                      color: 'var(--ink)',
                      fontWeight: 600,
                      fontSize: 14,
                    }}
                  >
                    <span style={{ width: 9, height: 9, borderRadius: 2, background: c }} />
                    {d}
                    <span className="lab-faint">{allEntries.filter((e) => e.domains.includes(d)).length}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
