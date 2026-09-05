'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'

/**
 * The /lab design directions each carry their own chrome, so the site header
 * and footer would sit on top of them and make every variant look the same.
 * This hides them there and nowhere else. It goes away with the lab.
 */
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const bare = pathname.startsWith('/lab')

  if (bare) return <>{children}</>

  return (
    <>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  )
}
