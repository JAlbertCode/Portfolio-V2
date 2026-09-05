import localFont from 'next/font/local'

/**
 * Three faces, self-hosted from @fontsource rather than fetched from Google:
 * the build has no network dependency and no visitor's browser calls Google.
 *
 * next/font requires literal paths, so none of these can share a prefix.
 */

/** Headings. An editorial serif rather than a brand one. */
export const display = localFont({
  src: '../node_modules/@fontsource-variable/newsreader/files/newsreader-latin-wght-normal.woff2',
  weight: '200 800',
  variable: '--font-display-face',
  display: 'swap',
  fallback: ['Georgia', 'Times New Roman', 'serif'],
})

/** Body. Neutral and well drawn, without being Inter. */
export const body = localFont({
  src: '../node_modules/@fontsource-variable/geist/files/geist-latin-wght-normal.woff2',
  weight: '100 900',
  variable: '--font-body-face',
  display: 'swap',
  fallback: ['ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
})

/** Labels, dates, counts. Designed alongside the body face. */
export const mono = localFont({
  src: '../node_modules/@fontsource-variable/geist-mono/files/geist-mono-latin-wght-normal.woff2',
  weight: '100 900',
  variable: '--font-mono-face',
  display: 'swap',
  fallback: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
})

export const fontVars = [display.variable, body.variable, mono.variable].join(' ')
