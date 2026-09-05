import Link from 'next/link'

export const DIRECTIONS = [
  { slug: 'workshop', name: 'Workshop', note: 'Technical drawing' },
  { slug: 'terminal', name: 'Terminal', note: 'Runnable' },
  { slug: 'zine', name: 'Zine', note: 'Editorial' },
  { slug: 'arcade', name: 'Arcade', note: 'Game jam' },
] as const

export type DirectionSlug = (typeof DIRECTIONS)[number]['slug']

/**
 * Fixed bar so the eight variants can be flipped between without leaving the
 * page. Deliberately styled outside every direction's tokens, in plain neutral
 * chrome, so it never reads as part of the design being judged.
 */
export default function LabSwitcher({
  active,
  loud,
}: {
  active: DirectionSlug
  loud: boolean
}) {
  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 80,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 6,
        padding: '8px 14px',
        background: '#141414',
        color: '#eee',
        fontFamily: 'ui-monospace, Menlo, monospace',
        fontSize: 12,
        borderBottom: '1px solid #2a2a2a',
      }}
    >
      <span style={{ opacity: 0.5, marginRight: 6 }}>direction</span>
      {DIRECTIONS.map((d) => (
        <Link
          key={d.slug}
          href={`/lab/${d.slug}${loud ? '?intensity=loud' : ''}`}
          style={{
            padding: '4px 9px',
            borderRadius: 4,
            textDecoration: 'none',
            background: d.slug === active ? '#eee' : 'transparent',
            color: d.slug === active ? '#141414' : '#bbb',
            border: '1px solid #333',
          }}
        >
          {d.name}
        </Link>
      ))}
      <span style={{ opacity: 0.5, margin: '0 6px 0 14px' }}>intensity</span>
      {[
        { label: 'restrained', on: !loud, href: `/lab/${active}` },
        { label: 'loud', on: loud, href: `/lab/${active}?intensity=loud` },
      ].map((i) => (
        <Link
          key={i.label}
          href={i.href}
          style={{
            padding: '4px 9px',
            borderRadius: 4,
            textDecoration: 'none',
            background: i.on ? '#eee' : 'transparent',
            color: i.on ? '#141414' : '#bbb',
            border: '1px solid #333',
          }}
        >
          {i.label}
        </Link>
      ))}
      <Link
        href="/lab"
        style={{ marginLeft: 'auto', color: '#888', textDecoration: 'none' }}
      >
        all eight →
      </Link>
    </div>
  )
}
