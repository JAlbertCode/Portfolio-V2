import type { Metadata } from 'next'
import Script from 'next/script'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { fontVars } from '@/lib/fonts'
import { site } from '@/lib/site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — developer relations`,
    template: `%s — ${site.name}`,
  },
  description: site.tagline,
  openGraph: {
    title: site.name,
    description: site.tagline,
    url: site.url,
    siteName: site.name,
    type: 'website',
  },
  twitter: { card: 'summary_large_image', creator: '@Jay_Albert_' },
}

/**
 * Applied before first paint so the correct theme is already on the document
 * when the CSS lands, otherwise the page flashes dark and then corrects itself.
 */
const themeInit = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    var theme = stored || (prefersLight ? 'light' : 'dark');
    if (theme === 'light') document.documentElement.setAttribute('data-theme', 'light');
  } catch (e) {}
})();
`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={fontVars}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />

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
      </body>
    </html>
  )
}
