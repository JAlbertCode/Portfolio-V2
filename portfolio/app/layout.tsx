import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import "/main.css"

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
              
        {/*This is the navigation bar for portfolio, resources, and lifestyle*/}
        <nav className='text-right mr-10 mt-5'>
          <Link href="/" className='mx-2'>Portfolio</Link>
          <Link href="/resources" className='mx-2'>Resources</Link>
          <Link href="/lifestyle" className='mx-2'>Lifestyle</Link>
        </nav>

        {children}

      </body>
      
    </html>
  )
}
