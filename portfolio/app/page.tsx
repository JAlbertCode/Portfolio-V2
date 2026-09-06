import ConnectRow from '@/components/ConnectRow'
import CoverBand from '@/components/CoverBand'
import Elsewhere from '@/components/Elsewhere'
import WorkSection from '@/components/sections/WorkSection'
import { site } from '@/lib/site'

/**
 * Three pages, segmented by who is asking.
 *
 * One page put everything in a single very long scroll; five put the content
 * behind labels nobody had a reason to click. This is the middle: the home
 * page carries what every visitor wants regardless of why they came, which is
 * who he is, how to reach him, and the work. Anyone who wants to engage him
 * goes to /services, anyone deciding whether to hire him goes to /about, and
 * both are previewed here with enough substance to make the click informed.
 *
 * The line under the name names three practices rather than one. Developer
 * relations is a thing Jay does, not the category he sits in.
 *
 * The hero was half a viewport of nothing: a name, one sentence and six links,
 * with the work starting below the fold. Restraint is not the same as absence,
 * and on the page someone reaches by tapping a business card the first screen
 * has to carry something. So the name is set at the width of the page, the
 * line and the links sit side by side under it rather than stacked, and the
 * work itself starts immediately.
 */
export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24">
      <section className="pt-12 pb-9 sm:pt-16 sm:pb-11">
        <h1 className="hero-name">{site.name}</h1>
        <div className="hero-line">
          <p className="max-w-[46ch] text-base leading-relaxed text-muted sm:text-[1.05rem]">
            {site.standfirst} {site.location}.
          </p>
          <ConnectRow />
        </div>
      </section>

      <CoverBand />

      <WorkSection />
      <Elsewhere />
    </div>
  )
}
