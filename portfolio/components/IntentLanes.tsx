import Link from 'next/link'

/**
 * The first decision a visitor makes is not "which project" but "am I in the
 * right place at all". These four cards answer that in one screen, and each
 * one drops the visitor somewhere already narrowed to their question rather
 * than at the top of a list.
 */
const lanes = [
  {
    href: '/speaking',
    kicker: 'You run an event',
    title: 'Book me to speak',
    body: 'Formats, topics, and every talk, workshop, and panel on record, with the video.',
  },
  {
    href: '/about',
    kicker: 'You are hiring',
    title: 'See if I fit the role',
    body: 'The career arc, what I actually do day to day, and a resume you can hand upward.',
  },
  {
    href: '/services',
    kicker: 'You need something made',
    title: 'Work with me',
    body: 'Advisory calls, custom development, and 3D printing. Scoped, not open-ended.',
  },
  {
    href: '/work',
    kicker: 'You are curious',
    title: 'Browse everything',
    body: 'A decade of builds, talks, and writing, filterable by form, practice, and field.',
  },
]

export default function IntentLanes() {
  return (
    <section aria-labelledby="lanes-heading" className="mt-20">
      <h2 id="lanes-heading" className="label">
        Start where you are
      </h2>
      <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {lanes.map((lane) => (
          <li key={lane.href}>
            <Link
              href={lane.href}
              className="group flex h-full flex-col p-5 card-interactive"
            >
              <span className="label">{lane.kicker}</span>
              <span className="mt-2.5 font-display text-xl text-text">{lane.title}</span>
              <span className="mt-2 flex-1 text-sm leading-relaxed text-muted">{lane.body}</span>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                Go
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
