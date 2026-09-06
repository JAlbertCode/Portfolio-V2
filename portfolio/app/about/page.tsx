import type { Metadata } from 'next'
import AboutSection from '@/components/sections/AboutSection'

export const metadata: Metadata = {
  title: 'About',
  description: 'Career, what the work is actually made of, and a resume.',
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-28">
      <AboutSection />
    </div>
  )
}
