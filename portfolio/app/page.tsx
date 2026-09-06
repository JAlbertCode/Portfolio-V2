import ConnectRow from '@/components/ConnectRow'
import IntentLanes from '@/components/IntentLanes'
import AboutSection from '@/components/sections/AboutSection'
import ServicesSection from '@/components/sections/ServicesSection'
import SpeakingSection from '@/components/sections/SpeakingSection'
import WorkSection from '@/components/sections/WorkSection'
import { site } from '@/lib/site'

/**
 * One page.
 *
 * The work, the speaking record and the services were behind their own routes,
 * which meant nobody found them: a visitor has no reason to click "Speaking" to
 * learn whether someone speaks. Everything now lives on the page they already
 * landed on, and the intent lanes jump to it.
 *
 * No positioning statement either. Any sentence short enough to sit under a
 * name is narrow enough to pigeonhole the person under it, and fifty-six
 * entries across nine fields prove a range no sentence could claim credibly.
 */
export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-28">
      <section className="pt-16 sm:pt-24">
        <h1 className="font-display text-[clamp(2.4rem,7vw,4.25rem)] leading-[1.02] tracking-tight text-text">
          {site.name}
        </h1>
        <p className="mt-4 max-w-[46ch] text-base leading-relaxed text-muted sm:text-[1.05rem]">
          Developer relations. {site.location}.
        </p>
        <ConnectRow />
        <IntentLanes />
      </section>

      <WorkSection />
      <SpeakingSection />
      <ServicesSection />
      <AboutSection />
    </div>
  )
}
