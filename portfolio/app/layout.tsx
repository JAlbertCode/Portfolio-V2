import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Jonathan Albert's Portfolio",
  description: "A portfolio of all of Jonathan's past work that is not included in a resume or LinkedIn.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        
        <nav className='text-right'>
          <Link href="/">Portfolio</Link>
          {/* <Link href="/resources">Resources</Link>
          <Link href="/lifestyle">Lifestyle</Link> */}
        </nav>

        {children}

      </body>
      
    </html>
  )
}
