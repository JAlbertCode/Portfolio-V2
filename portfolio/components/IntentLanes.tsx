import Link from 'next/link'

/**
 * The first question a visitor answers is not "which project" but "am I in the
 * right place". Four intents, each landing somewhere already narrowed.
 *
 * These are not the header nav wearing paint. The nav is named after pages;
 * these are named after what someone came here wanting, which is the only
 * label that lets them self-select in one read.
 */
const lanes = [
  { href: '#speaking', kicker: 'You run an event', title: 'Book me to speak' },
  { href: '#about', kicker: 'You are hiring', title: 'See if I fit' },
  { href: '#services', kicker: 'You need a build', title: 'Work with me' },
  { href: '#work', kicker: 'You are curious', title: 'Browse everything' },
]

export default function IntentLanes() {
  return (
    <nav aria-label="Start here" className="mt-14 grid grid-cols-2 gap-2 lg:grid-cols-4">
      {lanes.map((lane) => (
        <Link key={lane.href} href={lane.href} className="lane">
          <span className="label">{lane.kicker}</span>
          <span className="lane-title">{lane.title}</span>
        </Link>
      ))}
    </nav>
  )
}
