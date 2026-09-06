'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'
import { site } from '@/lib/site'

// "Work" and "Work with me" sat next to each other and the eye read the shared
// first word before it read the difference. Three distinct words instead.
const nav = [
  { href: '/#work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
]

export default function Header() {
  // The home page opens with his name set at four rems. Printing it again in
  // the bar directly above that is the same word twice in one screen, in two
  // different forms of it. Every other route needs the wordmark, because it is
  // the only thing there that says whose site this is and the only way back.
  const home = usePathname() === '/'

  return (
    <header className="border-b border-line">
      {/* DOM order is name, nav, toggle. On a phone the nav is ordered last so
          it wraps to its own row and the toggle stays up beside the name; from
          640px the order is natural and everything sits on one line. */}
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-5 gap-y-2 px-6 py-4 sm:h-16 sm:flex-nowrap sm:py-0">
        {home ? null : (
          <Link
            href="/"
            className="mr-auto whitespace-nowrap font-display text-lg tracking-tight text-text"
          >
            {site.shortName}
          </Link>
        )}

        {/* With no wordmark the nav leads, so it stays on the first row and the
            toggle keeps the right edge. With one, the nav drops below on a
            phone so the wordmark and the toggle share the top line. */}
        <nav
          aria-label="Main"
          className={
            home
              ? 'mr-auto flex items-center gap-5'
              : 'order-last flex w-full items-center gap-5 sm:order-none sm:w-auto'
          }
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-text"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  )
}
