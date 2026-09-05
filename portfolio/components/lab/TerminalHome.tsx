import Image from 'next/image'
import ConnectBlock from './ConnectBlock'
import {
  allEntries,
  byMedium,
  DOMAINS,
  featured,
  formatDate,
  MEDIUMS,
  MEDIUM_LABELS,
} from '@/lib/content'
import { site } from '@/lib/site'

/**
 * Terminal: the site as a working environment.
 *
 * The argument for this one is that the whole pitch is "run it yourself", so
 * the site should behave like the thing it is describing. The filter is a real
 * query line rather than a row of chips, results are printed rather than
 * arranged, and the structure is a man page. The argument against it is that a
 * conference producer or a recruiter may not want to read a shell.
 */

const PROMPT = 'jay@portfolio'

function Line({ cmd, children }: { cmd: string; children?: React.ReactNode }) {
  return (
    <div style={{ marginTop: 26 }}>
      <div style={{ fontFamily: 'var(--font-note)', fontSize: 13.5 }}>
        <span style={{ color: 'var(--spot)' }}>{PROMPT}</span>
        <span className="lab-faint"> ~ </span>
        <span className="lab-faint">$ </span>
        <span style={{ color: 'var(--ink)' }}>{cmd}</span>
      </div>
      {children}
    </div>
  )
}

export default function TerminalHome() {
  const talks = byMedium('talk').length + byMedium('stream').length

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '48px 24px 96px' }}>
      {/* ------------------------------------------------------------- whoami */}
      <div style={{ fontFamily: 'var(--font-note)', fontSize: 13.5 }}>
        <span style={{ color: 'var(--spot)' }}>{PROMPT}</span>
        <span className="lab-faint"> ~ </span>
        <span className="lab-faint">$ </span>
        <span>whoami</span>
        <span className="t-cursor" style={{ marginLeft: 4 }} />
      </div>

      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.2rem, 6vw, 4rem)',
          fontWeight: 600,
          letterSpacing: '-0.03em',
          lineHeight: 1.02,
          margin: '20px 0 0',
          color: 'var(--ink)',
        }}
      >
        jonathan albert
      </h1>

      <p className="lab-muted" style={{ fontSize: 18, lineHeight: 1.5, margin: '14px 0 0', maxWidth: 640 }}>
        {site.tagline}
      </p>

      {/* Key-value output, the way a status command prints it. */}
      <div style={{ marginTop: 26, fontFamily: 'var(--font-note)', fontSize: 13.5, lineHeight: 1.95 }}>
        {[
          ['location', site.location],
          ['entries', `${allEntries.length}`],
          ['talks+streams', `${talks}`],
          ['built', `${byMedium('build').length}`],
          ['active', '2014-2026'],
          ['status', 'open to conversations'],
        ].map(([k, v]) => (
          <div key={k}>
            <span className="lab-faint" style={{ display: 'inline-block', width: 132 }}>
              {k}
            </span>
            <span className="lab-faint">: </span>
            <span style={{ color: 'var(--ink)' }}>{v}</span>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 10, marginTop: 26, flexWrap: 'wrap' }}>
        <a className="lab-cta" href={site.calendly}>./book-a-call</a>
        <a className="lab-cta-ghost" href={site.resume}>./resume.pdf</a>
        <a className="lab-cta-ghost" href={`mailto:${site.email}`}>./email</a>
      </div>

      <ConnectBlock />

      {/* --------------------------------------------------------------- help */}
      <Line cmd="jay --help">
        <div
          style={{
            marginTop: 12,
            border: '1px solid var(--edge)',
            fontFamily: 'var(--font-note)',
            fontSize: 13.5,
          }}
        >
          {[
            ['--speaking', 'formats, topics, and every talk on record'],
            ['--hiring', 'career arc, day to day, resume'],
            ['--services', 'advisory, custom development, 3D printing'],
            ['--work', 'the whole catalogue, filterable three ways'],
          ].map(([flag, desc], i, arr) => (
            <a
              key={flag}
              href="#"
              className="t-row"
              style={{
                display: 'flex',
                gap: 20,
                padding: '11px 14px',
                textDecoration: 'none',
                borderBottom: i === arr.length - 1 ? 'none' : undefined,
              }}
            >
              <span style={{ color: 'var(--spot)', flex: '0 0 128px' }}>{flag}</span>
              <span className="lab-muted">{desc}</span>
            </a>
          ))}
        </div>
      </Line>

      {/* --------------------------------------------------------------- work */}
      <Line cmd="work list --featured">
        <div style={{ marginTop: 14, border: '1px solid var(--edge)' }}>
          {featured.map((e, i, arr) => (
            <a
              key={e.slug}
              href={e.href ?? '#'}
              className="t-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '104px minmax(0,1fr)',
                gap: 18,
                padding: 14,
                textDecoration: 'none',
                alignItems: 'start',
                borderBottom: i === arr.length - 1 ? 'none' : undefined,
              }}
            >
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '16/10',
                  border: '1px solid var(--edge)',
                  overflow: 'hidden',
                }}
              >
                <Image src={e.cover.src} alt={e.cover.alt} fill sizes="104px" style={{ objectFit: 'cover' }} />
              </div>

              <div style={{ minWidth: 0 }}>
                <div style={{ fontFamily: 'var(--font-note)', fontSize: 11.5, color: 'var(--ink-3)' }}>
                  {formatDate(e.date).toLowerCase()} &middot; {e.medium}
                  {e.org ? ` · ${e.org.toLowerCase()}` : ''}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-note)',
                    fontSize: 15.5,
                    fontWeight: 600,
                    color: 'var(--ink)',
                    marginTop: 5,
                  }}
                >
                  {e.title}
                </div>
                <p className="lab-muted" style={{ fontSize: 13.5, lineHeight: 1.55, margin: '6px 0 0' }}>
                  {e.summary}
                </p>
                <div
                  style={{
                    fontFamily: 'var(--font-note)',
                    fontSize: 11.5,
                    color: 'var(--spot)',
                    marginTop: 8,
                  }}
                >
                  {e.domains.map((d) => `#${d.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`).join(' ')}
                </div>
              </div>
            </a>
          ))}
        </div>
      </Line>

      {/* -------------------------------------------------------------- query */}
      <Line cmd="work --form=talk --field=gaming">
        <p className="lab-faint" style={{ fontFamily: 'var(--font-note)', fontSize: 12.5, marginTop: 10 }}>
          # the filter is the URL. every view you build here is a link you can send.
        </p>

        <div style={{ display: 'grid', gap: 36, gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', marginTop: 18 }}>
          <div>
            <div className="lab-note" style={{ marginBottom: 8 }}>--form</div>
            {MEDIUMS.map((m) => (
              <a
                key={m}
                href="#"
                className="t-row"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '8px 0',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-note)',
                  fontSize: 13.5,
                  color: 'var(--ink)',
                }}
              >
                <span>{m}</span>
                <span className="lab-faint">{byMedium(m).length}</span>
              </a>
            ))}
          </div>
          <div>
            <div className="lab-note" style={{ marginBottom: 8 }}>--field</div>
            {DOMAINS.map((d) => (
              <a
                key={d}
                href="#"
                className="t-row"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: 12,
                  padding: '8px 0',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-note)',
                  fontSize: 13.5,
                  color: 'var(--ink)',
                }}
              >
                <span>{d.toLowerCase().replace(/[^a-z0-9]+/g, '-')}</span>
                <span className="lab-faint">{allEntries.filter((e) => e.domains.includes(d)).length}</span>
              </a>
            ))}
          </div>
        </div>
      </Line>

      <div style={{ marginTop: 34, fontFamily: 'var(--font-note)', fontSize: 13.5 }}>
        <span style={{ color: 'var(--spot)' }}>{PROMPT}</span>
        <span className="lab-faint"> ~ </span>
        <span className="lab-faint">$ </span>
        <span className="t-cursor" />
      </div>
    </div>
  )
}
