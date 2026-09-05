import Link from 'next/link'

export const DIRECTIONS = [
  { slug: 'v4', name: 'V4', note: "V3's look, Quiet's flow, type as a variable" },
  { slug: 'quiet', name: 'Quiet', note: 'Fast and plain, done properly' },
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
export const TYPE_PAIRINGS = [
  { key: 'a', name: 'Fraunces + Instrument Sans' },
  { key: 'b', name: 'Bricolage + Schibsted' },
  { key: 'c', name: 'Newsreader + Geist' },
  { key: 'd', name: 'Instrument Sans only' },
] as const

export default function LabSwitcher({
  active,
  loud,
  type,
}: {
  active: DirectionSlug
  loud: boolean
  type?: string
}) {
  const q = (over: Record<string, string | undefined>) => {
    const params = new URLSearchParams()
    const merged = { intensity: loud ? 'loud' : undefined, type, ...over }
    for (const [k, v] of Object.entries(merged)) if (v) params.set(k, v)
    const s = params.toString()
    return s ? `?${s}` : ''
  }
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
          href={`/lab/${d.slug}${q({})}`}
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
        { label: active === 'v4' || active === 'quiet' ? 'dark' : 'restrained', on: !loud, href: `/lab/${active}${q({ intensity: undefined })}` },
        { label: active === 'v4' || active === 'quiet' ? 'light' : 'loud', on: loud, href: `/lab/${active}${q({ intensity: 'loud' })}` },
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
      {active === 'v4' ? (
        <>
          <span style={{ opacity: 0.5, margin: '0 6px 0 14px' }}>type</span>
          {TYPE_PAIRINGS.map((t) => (
            <Link
              key={t.key}
              href={`/lab/v4${q({ type: t.key })}`}
              style={{
                padding: '4px 9px',
                borderRadius: 4,
                textDecoration: 'none',
                background: (type ?? 'a') === t.key ? '#eee' : 'transparent',
                color: (type ?? 'a') === t.key ? '#141414' : '#bbb',
                border: '1px solid #333',
              }}
            >
              {t.name}
            </Link>
          ))}
        </>
      ) : null}

      <Link href="/lab" style={{ marginLeft: 'auto', color: '#888', textDecoration: 'none' }}>
        index &rarr;
      </Link>
    </div>
  )
}
