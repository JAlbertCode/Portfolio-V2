import Link from 'next/link'
import SocialIcon from './SocialIcon'

/**
 * The single rendering for a social link.
 *
 * These were bare icons in the hero and icon-plus-label in the footer, which
 * read as two different components rather than the same one shown twice. Now
 * only the set changes: the hero carries the four Jay wants someone to follow
 * in the first ten seconds, the footer carries all of them.
 */
export default function SocialLink({ label, href, icon }: { label: string; href: string; icon: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 py-1 text-sm text-muted transition-colors hover:text-text"
    >
      <SocialIcon
        name={icon}
        className="size-4 shrink-0 opacity-60 transition-opacity group-hover:opacity-100"
      />
      {label}
    </Link>
  )
}
