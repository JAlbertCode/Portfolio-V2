'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'
import { site } from '@/lib/site'

const nav = [
  { href: '/work', label: 'Work' },
  { href: '/speaking', label: 'Speaking' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
]

export default function Header() {
  const pathname = usePathname()
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header className="border-b border-line">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-5 px-6">
        <Link href="/" className="font-display text-lg tracking-tight text-text">
          {site.shortName}
        </Link>

        <nav aria-label="Main" className="ml-auto flex items-center gap-5">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`text-sm transition-colors ${
                isActive(item.href) ? 'text-text' : 'text-muted hover:text-text'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
