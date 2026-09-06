import Link from 'next/link'

/**
 * The two pages the home page does not contain, previewed with enough
 * substance that clicking is an informed decision rather than a guess. The
 * earlier version of this site linked to them with the words "Speaking" and
 * "Services" and nobody clicked, because nothing told them what was behind.
 */
const destinations = [
  {
    href: '/services',
    title: 'Services',
    body: 'Speaking and workshops, advisory, custom development, and 3D printing. Formats, scope, and what you actually get.',
    meta: '4 speaking formats · 3 services',
  },
  {
    href: '/about',
    title: 'About',
    body: 'Where I have worked, what the catalogue is actually made of when you count it by practice, and a resume.',
    meta: 'Career · resume',
  },
]

export default function Elsewhere() {
  return (
    <section className="mt-16 grid gap-4 border-t border-line pt-10 sm:grid-cols-2 sm:pt-12">
      {destinations.map((d) => (
        <Link key={d.href} href={d.href} className="lane">
          <span className="label">{d.meta}</span>
          <span className="lane-title">{d.title}</span>
          <span className="mt-1 text-sm leading-relaxed text-muted">{d.body}</span>
        </Link>
      ))}
    </section>
  )
}
