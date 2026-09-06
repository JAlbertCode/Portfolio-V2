import Link from 'next/link'

/**
 * The two pages the home page does not contain.
 *
 * It reads as a strip, not as cards. It sits directly above eighty-nine actual
 * cards, and anything with a border and a hover lift there is a card competing
 * with the catalogue on the catalogue's own terms and losing: two odd tiles
 * with no image at the top of a grid of tiles with images.
 *
 * So: a rule, two columns of type, an arrow. Different enough from a card that
 * the eye reads it as navigation and moves on, present enough that someone who
 * wants the rest of the site finds it without scrolling past everything else.
 *
 * Two type styles, not three. It also carried a mono count line, which put a
 * display face, a body face and a mono face in a block four lines tall, and
 * that is what read as a mesh rather than as one thing.
 */
const destinations = [
  {
    href: '/services',
    title: 'Services',
    body: 'Speaking and workshops, advisory, custom development, and 3D printing. Formats, scope, and what you actually get.',
  },
  {
    href: '/about',
    title: 'About',
    body: 'Where I have worked, what the catalogue is actually made of when you count it by practice, and a resume.',
  },
]

export default function Elsewhere() {
  return (
    <nav aria-label="Rest of the site" className="elsewhere">
      {destinations.map((d) => (
        <Link key={d.href} href={d.href} className="elsewhere-item">
          <span className="elsewhere-head">
            <span className="elsewhere-title">{d.title}</span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="elsewhere-body">{d.body}</span>
        </Link>
      ))}
    </nav>
  )
}
