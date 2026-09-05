import HoverPeek from './HoverPeek'
import SocialIcon from '@/components/SocialIcon'
import { followActions } from '@/lib/connect'
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
 * The banner is a sentence, a button, and four marks.
 *
 * Everything else that used to live up here was duplication. The vCard behind
 * "Save my contact" already carries the email, the Telegram handle and every
 * social URL, so a row of contact buttons directly beneath it was offering a
 * second copy of what the first button had just handed over. The four lane
 * cards were the four nav links wearing more paint. The entry count restated
 * the list below it.
 *
 * What is left is what a visitor cannot get any other way: who he is, what he
 * does, one action, and the work.
 */

const NAV = [
  { label: 'Work', href: '/work' },
  { label: 'Speaking', href: '/speaking' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
]

export default function V4Home() {
  const rest = allEntries.filter((e) => !e.featured).slice(0, 12)
  const peekItems = rest.map((e) => ({ id: e.slug, src: e.cover.src, alt: e.cover.alt }))

  return (
    <>
      <HoverPeek items={peekItems} />

      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 24px 110px' }}>
        <header className="v-header">
          <a href="/" className="v-display" style={{ fontSize: 17, textDecoration: 'none' }}>
            Jay Albert
          </a>
          <nav className="v-nav">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                style={{ fontSize: 14, color: 'var(--ink-2)', textDecoration: 'none' }}
              >
                {n.label}
              </a>
            ))}
          </nav>
        </header>

        {/* ------------------------------------------------------------ banner */}
        <section className="v-banner">
          <h1 className="v-display v-banner-h">
            I build the reference implementation, then teach the room how to run it.
          </h1>

          <p className="v-banner-p">
            Developer relations and solutions engineering. {site.location}.
          </p>

          <div className="v-banner-actions">
            <a href="/contact.vcf" className="v-cta">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                <path d="M15.5 20v-1.5a3.5 3.5 0 0 0-3.5-3.5H7a3.5 3.5 0 0 0-3.5 3.5V20" strokeLinecap="round" />
                <circle cx="9.5" cy="8" r="3.5" />
                <path d="M17 8h5M19.5 5.5v5" strokeLinecap="round" />
              </svg>
              Save my contact
            </a>
            <a href={site.calendly} className="v-cta-quiet">
              Book a call
            </a>

            <div className="v-socials">
              {followActions.map((a) => (
                <a key={a.label} href={a.href} aria-label={a.label} target="_blank" rel="noopener noreferrer">
                  <SocialIcon name={a.icon} className="v-social-mark" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- featured */}
        <section style={{ marginTop: 76 }}>
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
                  <span style={{ fontSize: 14, lineHeight: 1.58, color: 'var(--ink-2)', marginTop: 8, display: 'block' }}>
                    {e.summary}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* --------------------------------------------------------- long tail */}
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
