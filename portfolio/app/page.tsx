import ConnectRow from '@/components/ConnectRow'
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
 */
export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24">
      <section className="pt-14 sm:pt-24">
        <h1 className="font-display text-[clamp(2.4rem,7vw,4.25rem)] leading-[1.02] tracking-tight text-text">
          {site.name}
        </h1>
        <p className="mt-4 max-w-[48ch] text-base leading-relaxed text-muted sm:text-[1.05rem]">
          {site.standfirst} {site.location}.
        </p>
        <ConnectRow />
      </section>

      <WorkSection />
      <Elsewhere />
    </div>
  )
}
