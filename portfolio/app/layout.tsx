import type { Metadata } from 'next'
import { inter, instrument, mono } from '@/lib/fonts'
import { labFontVars } from '@/lib/lab-fonts'
import Script from 'next/script'
import SiteChrome from '@/components/SiteChrome'
import { site } from '@/lib/site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — developer relations and solutions engineering`,
    template: `%s — ${site.shortName}`,
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
 * when the CSS lands. Without this the page flashes dark then corrects itself.
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${instrument.variable} ${mono.variable} ${labFontVars}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteChrome>{children}</SiteChrome>

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
