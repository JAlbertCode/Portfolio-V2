import Image from 'next/image'
import ConnectBlock from './ConnectBlock'
import { allEntries, byMedium, DOMAINS, featured, formatDate, MEDIUM_LABELS, MEDIUMS } from '@/lib/content'
import { site } from '@/lib/site'

/**
 * Workshop: the site as a set of engineering drawings.
 *
 * Every block is a dimensioned, numbered part. The cover sits in a cropped
 * frame with registration marks, the metadata reads like a title block, and the
 * hero name is measured. It is the one visual language that joins the AR,
 * hardware, and 3D printing work to the software rather than treating them as
 * unrelated categories.
 */

const PANES = [
  { n: 'PT-01', kicker: 'You run an event', title: 'Book me to speak', body: 'Formats, topics, and every talk and panel on record, with the video.' },
  { n: 'PT-02', kicker: 'You are hiring', title: 'See if I fit the role', body: 'The career arc, the day to day, and a resume you can hand upward.' },
  { n: 'PT-03', kicker: 'You need something made', title: 'Work with me', body: 'Advisory, custom development, and 3D printing. Scoped, not open-ended.' },
  { n: 'PT-04', kicker: 'You are curious', title: 'Browse everything', body: 'A decade of builds, talks, and writing, filterable three ways.' },
]

export default function WorkshopHome() {
  return (
    <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 24px 96px' }}>
      {/* ------------------------------------------------------------ title block */}
      <header style={{ paddingTop: 64 }}>
        <div
          className="lab-note"
          style={{ display: 'flex', gap: 24, borderBottom: '1px solid var(--edge)', paddingBottom: 8 }}
        >
          <span>Sheet 01 of 06</span>
          <span>Rev. 3</span>
          <span>{site.location}</span>
          <span style={{ marginLeft: 'auto' }}>Scale 1:1</span>
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 500,
            fontSize: 'clamp(3rem, 8vw, 6.5rem)',
            lineHeight: 0.94,
            letterSpacing: '-0.035em',
            margin: '28px 0 0',
            color: 'var(--ink)',
          }}
        >
          Jonathan
          <br />
          Albert
        </h1>

        {/* The name, dimensioned. */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, maxWidth: 520, marginTop: 14 }}>
          <span className="w-tick" style={{ color: 'var(--ink-3)' }} />
          <span className="w-dim">2014 &ndash; 2026</span>
          <span className="w-tick" style={{ color: 'var(--ink-3)' }} />
        </div>

        <div style={{ display: 'grid', gap: 40, gridTemplateColumns: 'minmax(0,1.35fr) minmax(0,1fr)', marginTop: 44 }}>
          <div>
            <p style={{ fontSize: 21, lineHeight: 1.45, margin: 0, color: 'var(--ink)' }}>{site.tagline}</p>
            {site.intro.map((p) => (
              <p key={p.slice(0, 20)} className="lab-muted" style={{ fontSize: 15.5, lineHeight: 1.7, marginTop: 18 }}>
                {p}
              </p>
            ))}
            <div style={{ display: 'flex', gap: 10, marginTop: 26, flexWrap: 'wrap' }}>
              <a className="lab-cta" href={site.calendly}>Book a 15 minute call</a>
              <a className="lab-cta-ghost" href={site.resume}>Resume</a>
            </div>
          </div>

          {/* Title block, as on a real drawing sheet. */}
          <div className="w-frame" style={{ padding: 0, alignSelf: 'start' }}>
            {[
              ['Discipline', 'Developer relations'],
              ['Also', 'Solutions engineering'],
              ['Entries on file', String(allEntries.length)],
              ['Talks and streams', String(byMedium('talk').length + byMedium('stream').length)],
              ['Things built', String(byMedium('build').length)],
              ['Fields', String(DOMAINS.length)],
            ].map(([k, v], i, arr) => (
              <div
                key={k}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: 16,
                  padding: '11px 15px',
                  borderBottom: i === arr.length - 1 ? 'none' : '1px solid var(--edge)',
                }}
              >
                <span className="lab-note" style={{ textTransform: 'none', letterSpacing: '0.04em' }}>{k}</span>
                <span style={{ fontFamily: 'var(--font-note)', fontSize: 13, color: 'var(--ink)' }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
        <ConnectBlock />
      </header>

      {/* ---------------------------------------------------------------- parts */}
      <section style={{ marginTop: 88 }}>
        <div className="lab-note" style={{ borderBottom: '1px solid var(--edge)', paddingBottom: 8 }}>
          Assembly &mdash; start where you are
        </div>
        <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', marginTop: 20 }}>
          {PANES.map((p) => (
            <a key={p.n} href="#" className="w-frame" style={{ padding: '18px 18px 20px', textDecoration: 'none', display: 'block' }}>
              <div className="lab-note" style={{ color: 'var(--spot)' }}>{p.n}</div>
              <div className="lab-note" style={{ marginTop: 10 }}>{p.kicker}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 500, color: 'var(--ink)', marginTop: 6 }}>
                {p.title}
              </div>
              <p className="lab-muted" style={{ fontSize: 13.5, lineHeight: 1.6, marginTop: 8, marginBottom: 0 }}>{p.body}</p>
            </a>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------- drawings */}
      <section style={{ marginTop: 88 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, borderBottom: '1px solid var(--edge)', paddingBottom: 8 }}>
          <h2 className="lab-h2" style={{ fontSize: 30, fontWeight: 500, margin: 0 }}>Selected drawings</h2>
          <span className="lab-note" style={{ marginLeft: 'auto' }}>{featured.length} of {allEntries.length}</span>
        </div>

        <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginTop: 24 }}>
          {featured.map((e, i) => (
            <article key={e.slug} className="w-frame" style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                className="lab-note"
                style={{ display: 'flex', gap: 10, padding: '9px 13px', borderBottom: '1px solid var(--edge)' }}
              >
                <span style={{ color: 'var(--spot)' }}>DWG-{String(i + 1).padStart(3, '0')}</span>
                <span>{MEDIUM_LABELS[e.medium].singular}</span>
                <span style={{ marginLeft: 'auto' }}>{formatDate(e.date)}</span>
              </div>

              <div style={{ position: 'relative', aspectRatio: '16/10', background: 'var(--ground)', borderBottom: '1px solid var(--edge)' }}>
                <Image src={e.cover.src} alt={e.cover.alt} fill sizes="360px" style={{ objectFit: 'cover' }} />
              </div>

              <div style={{ padding: '15px 15px 17px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 500, margin: 0, color: 'var(--ink)', lineHeight: 1.25 }}>
                  {e.title}
                </h3>
                <p className="lab-muted" style={{ fontSize: 13.5, lineHeight: 1.6, margin: '8px 0 0' }}>{e.summary}</p>

                {/* Leader line out to the field label, as an annotation would be drawn. */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 14 }}>
                  <span style={{ width: 5, height: 5, borderRadius: 99, background: 'var(--spot)' }} />
                  <span style={{ flex: '0 0 22px', height: 1, background: 'var(--edge)' }} />
                  <span className="lab-note" style={{ letterSpacing: '0.06em' }}>{e.domains.join(' / ')}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- index */}
      <section style={{ marginTop: 88 }}>
        <div className="lab-note" style={{ borderBottom: '1px solid var(--edge)', paddingBottom: 8 }}>Index</div>
        <div style={{ display: 'grid', gap: 44, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', marginTop: 22 }}>
          <div>
            <div className="lab-note" style={{ marginBottom: 10 }}>By form</div>
            {MEDIUMS.map((m) => (
              <a key={m} href="#" style={{ display: 'flex', gap: 12, alignItems: 'baseline', padding: '9px 0', borderBottom: '1px solid var(--edge)', textDecoration: 'none', color: 'var(--ink)' }}>
                <span style={{ fontSize: 15 }}>{MEDIUM_LABELS[m].plural}</span>
                <span style={{ flex: 1, borderBottom: '1px dotted var(--edge)', translate: '0 -3px' }} />
                <span style={{ fontFamily: 'var(--font-note)', fontSize: 12, color: 'var(--ink-3)' }}>{byMedium(m).length}</span>
              </a>
            ))}
          </div>
          <div>
            <div className="lab-note" style={{ marginBottom: 10 }}>By field</div>
            {DOMAINS.map((d) => {
              const n = allEntries.filter((e) => e.domains.includes(d)).length
              return (
                <a key={d} href="#" style={{ display: 'flex', gap: 12, alignItems: 'baseline', padding: '9px 0', borderBottom: '1px solid var(--edge)', textDecoration: 'none', color: 'var(--ink)' }}>
                  <span style={{ fontSize: 15 }}>{d}</span>
                  <span style={{ flex: 1, borderBottom: '1px dotted var(--edge)', translate: '0 -3px' }} />
                  <span style={{ fontFamily: 'var(--font-note)', fontSize: 12, color: 'var(--ink-3)' }}>{n}</span>
                </a>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
