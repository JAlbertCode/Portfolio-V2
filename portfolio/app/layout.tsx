import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import "/main.css"
import Script from 'next/script'

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
        <div className='flex justify-center px-24'>
          <div className='w-full max-w-6xl flex justify-end'>
            <nav className='my-10 skills font-semibold'>
              <Link href="/" className='mx-2'>Portfolio</Link>
              {/* <Link href="/resources" className='mx-2'>Resources</Link>
              <Link href="/lifestyle" className='mx-2'>Lifestyle</Link> */}
            </nav>
          </div>
        </div>

        <div className="container">
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-JMRY14WSQ5"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-JMRY14WSQ5');
            `}
          </Script>
        </div>

        {children}
      </body>
    </html>
  )
}
