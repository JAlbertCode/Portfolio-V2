import { Suspense } from 'react'
import type { Metadata } from 'next'
import WorkBrowser from '@/components/WorkBrowser'
import { allEntries } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Everything: builds, talks, workshops, streams, and writing. Filter by what it is, what I was doing, and what field it was in.',
}

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-14 sm:px-8 sm:pt-20">
      <header className="mb-10 max-w-2xl">
        <p className="label">Everything, {allEntries.length} pieces</p>
        <h1 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-text sm:text-5xl">
          The whole body of work
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Builds, talks, workshops, streams, and writing, in one place. Three filters, and they
          combine: pick a form, a practice, and a field to narrow to exactly what you came for.
          Whatever you land on is a link you can send to someone.
        </p>
      </header>

      <Suspense fallback={<div className="py-24 text-center text-sm text-muted">Loading…</div>}>
        <WorkBrowser />
      </Suspense>
    </div>
  )
}
