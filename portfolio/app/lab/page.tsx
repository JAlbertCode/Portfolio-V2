import Link from 'next/link'
import { DIRECTIONS } from '@/components/lab/LabSwitcher'

export const metadata = { title: 'Design directions', robots: { index: false, follow: false } }

const RATIONALE: Record<string, { for: string; against: string }> = {
  v4: {
    for: "The first version's look, the newer flow, and four type pairings you can flip between on the same page. Cards and the teal accent stay; the ordering and the long tail come from Quiet.",
    against: 'Nothing yet. Pick a pairing and it becomes the site.',
  },
  quiet: {
    for: 'What the current site gets right, executed properly. No cards, no ceremony, hairlines and space instead. The work is a scannable text list rather than a wall of images, which is also what search engines read.',
    against: 'Restraint only reads as confidence when the type and spacing are exactly right. There is nowhere to hide.',
  },
  workshop: {
    for: 'The one visual language that joins the AR, hardware, and 3D printing work to the software instead of treating them as unrelated categories. Reads as precise and senior.',
    against: 'Drafting motifs can tip into costume if every element gets a part number.',
  },
  terminal: {
    for: 'Your pitch is "run it yourself", so the site behaves like the thing it describes. Nobody else at a conference has this.',
    against: 'A producer booking a keynote may not want to read a shell. Highest bounce risk of the four.',
  },
  zine: {
    for: 'Reads as a person with a point of view rather than a product page. Ages well and photographs well.',
    against: 'Editorial layouts live or die on the writing. It will expose any weak copy.',
  },
  arcade: {
    for: 'The only one where the palette does work: each field keeps its colour everywhere, so the catalogue is scannable by hue.',
    against: 'Chunky and colourful reads junior if the type is even slightly off.',
  },
}

export default function LabIndex() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '56px 24px 80px', fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>
      <h1 style={{ fontSize: 34, letterSpacing: '-0.02em', margin: 0 }}>Eight ways this could look</h1>
      <p style={{ fontSize: 16, lineHeight: 1.6, color: '#555', maxWidth: 640 }}>
        Four identities, each at two intensities, all rendered against your real catalogue. Check
        them on a phone as well as a laptop: every one puts the connect block (save contact,
        message, follow) on the first screen at mobile width, because the site is a business card
        destination first.
      </p>

      <div style={{ display: 'grid', gap: 18, marginTop: 34 }}>
        {DIRECTIONS.map((d) => (
          <div key={d.slug} style={{ border: '1px solid #ddd', borderRadius: 10, padding: 20 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
              <h2 style={{ margin: 0, fontSize: 21 }}>{d.name}</h2>
              <span style={{ color: '#888', fontSize: 14 }}>{d.note}</span>
              <span style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
                <Link href={`/lab/${d.slug}`} style={{ fontSize: 14 }}>restrained →</Link>
                <Link href={`/lab/${d.slug}?intensity=loud`} style={{ fontSize: 14 }}>loud →</Link>
              </span>
            </div>
            <p style={{ fontSize: 14.5, lineHeight: 1.6, color: '#333', margin: '10px 0 0' }}>
              <strong>For:</strong> {RATIONALE[d.slug].for}
            </p>
            <p style={{ fontSize: 14.5, lineHeight: 1.6, color: '#777', margin: '6px 0 0' }}>
              <strong>Against:</strong> {RATIONALE[d.slug].against}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
