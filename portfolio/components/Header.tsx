import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import { site } from '@/lib/site'

const nav = [
  { href: '/#work', label: 'Work' },
  { href: '/#speaking', label: 'Speaking' },
  { href: '/#services', label: 'Services' },
  { href: '/#about', label: 'About' },
]

export default function Header() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-5 px-6">
        <Link href="/" className="whitespace-nowrap font-display text-lg tracking-tight text-text">
          {site.shortName}
        </Link>

        <nav aria-label="Main" className="ml-auto flex items-center gap-5">
          <span className="hidden items-center gap-5 sm:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-text"
            >
              {item.label}
            </Link>
          ))}
          </span>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
