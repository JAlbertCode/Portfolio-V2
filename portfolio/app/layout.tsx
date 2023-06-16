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
        <div className='flex flex-row-reverse max-w-screen-2xl'>
          <nav className='text-right my-10 mx-1 w-min skills font-semibold'>
            <Link href="/" className='mx-2'>Portfolio</Link>
            {/* <Link href="/resources" className='mx-2'>Resources</Link>
            <Link href="/lifestyle" className='mx-2'>Lifestyle</Link> */}
          </nav>
        </div>

        <div className="container">
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'GA_MEASUREMENT_ID');
            `}
          </Script>
        </div>

        {children}

      </body>
      
    </html>
  )
}
