import localFont from 'next/font/local'

/**
 * Fonts are self-hosted from the @fontsource packages rather than pulled from
 * next/font/google. Two reasons: the build no longer depends on being able to
 * reach fonts.googleapis.com, and no visitor's browser makes a request to
 * Google to render this site.
 *
 * The weight ranges below are the variable axes each family actually ships.
 */

export const inter = localFont({
  src: [
    {
      path: '../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2',
      style: 'normal',
    },
    {
      path: '../node_modules/@fontsource-variable/inter/files/inter-latin-wght-italic.woff2',
      style: 'italic',
    },
  ],
  weight: '100 900',
  variable: '--font-inter',
  display: 'swap',
  fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
})

export const instrument = localFont({
  src: '../node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2',
  weight: '400',
  style: 'normal',
  variable: '--font-instrument',
  display: 'swap',
  fallback: ['Georgia', 'Times New Roman', 'serif'],
})

export const mono = localFont({
  src: [
    {
      path: '../node_modules/@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2',
      style: 'normal',
    },
  ],
  weight: '100 800',
  variable: '--font-mono-face',
  display: 'swap',
  fallback: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
})
