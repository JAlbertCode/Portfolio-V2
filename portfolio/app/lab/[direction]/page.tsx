import { notFound } from 'next/navigation'
import LabSwitcher, { DIRECTIONS } from '@/components/lab/LabSwitcher'
import type { DirectionSlug } from '@/components/lab/LabSwitcher'
import WorkshopHome from '@/components/lab/WorkshopHome'
import TerminalHome from '@/components/lab/TerminalHome'
import ZineHome from '@/components/lab/ZineHome'
import ArcadeHome from '@/components/lab/ArcadeHome'
import QuietHome from '@/components/lab/QuietHome'
import V4Home from '@/components/lab/V4Home'
import '../lab.css'

// Intensity arrives as a search param, so this page has to render per request.
// Forcing it static silently hands you `undefined` and every variant renders
// restrained, which is exactly the trap this comment exists to prevent.
export const dynamic = 'force-dynamic'

export const metadata = { title: 'Design direction', robots: { index: false, follow: false } }

export default async function LabDirectionPage({
  params,
  searchParams,
}: {
  params: Promise<{ direction: string }>
  searchParams: Promise<{ intensity?: string; type?: string }>
}) {
  const { direction } = await params
  const { intensity, type } = await searchParams
  const loud = intensity === 'loud'
  const pairing = ['a', 'b', 'c', 'd'].includes(type ?? '') ? type : 'a'

  if (!DIRECTIONS.some((d) => d.slug === direction)) notFound()
  const slug = direction as DirectionSlug

  return (
    <div data-dir={slug} data-type={pairing} {...(loud ? { 'data-loud': '' } : {})}>
      <LabSwitcher active={slug} loud={loud} type={pairing} />
      {slug === 'v4' ? <V4Home /> : null}
      {slug === 'quiet' ? <QuietHome /> : null}
      {slug === 'workshop' ? <WorkshopHome /> : null}
      {slug === 'terminal' ? <TerminalHome /> : null}
      {slug === 'zine' ? <ZineHome /> : null}
      {slug === 'arcade' ? <ArcadeHome loud={loud} /> : null}
    </div>
  )
}
