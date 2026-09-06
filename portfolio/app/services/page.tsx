import type { Metadata } from 'next'
import ServicesSection from '@/components/sections/ServicesSection'
import SpeakingSection from '@/components/sections/SpeakingSection'

export const metadata: Metadata = {
  title: 'Work with me',
  description:
    'Speaking, advisory, custom development, and 3D printing. Formats, scope, and what you actually get.',
}

/**
 * One page for anyone who wants to engage Jay rather than read about him.
 *
 * Speaking lives here rather than on its own route because booking someone to
 * run a workshop and hiring them to build a reference implementation are the
 * same decision from the same kind of visitor, arriving with a budget and a
 * date.
 */
export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-28">
      <ServicesSection />
      <SpeakingSection />
    </div>
  )
}
