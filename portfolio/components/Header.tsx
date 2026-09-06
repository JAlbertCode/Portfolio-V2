import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import { site } from '@/lib/site'

const nav = [
  { href: '/#work', label: 'Work' },
  { href: '/services', label: 'Work with me' },
  { href: '/about', label: 'About' },
]

export default function Header() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-5 gap-y-2 px-6 py-4 sm:h-16 sm:flex-nowrap sm:py-0">
        <Link
          href="/"
          className="mr-auto whitespace-nowrap font-display text-lg tracking-tight text-text sm:mr-0"
        >
          {site.shortName}
        </Link>

        <ThemeToggle />

        <nav
          aria-label="Main"
          className="order-last flex w-full items-center gap-5 sm:order-none sm:ml-auto sm:w-auto"
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
      </div>
    </header>
  )
}
