import localFont from 'next/font/local'

/**
 * Extra faces used only by the /lab design directions. Kept out of lib/fonts.ts
 * so the live site never loads them. Whichever direction wins, its faces move
 * over and the rest of this file gets deleted.
 *
 * next/font requires literal paths, so none of these can be built up from a
 * shared prefix.
 */

/** Workshop: technical grotesque, with the flat terminals a drafter uses. */
export const spaceGrotesk = localFont({
  src: '../node_modules/@fontsource-variable/space-grotesk/files/space-grotesk-latin-wght-normal.woff2',
  weight: '300 700',
  variable: '--f-grotesk',
  display: 'swap',
  fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
})

/** Workshop annotation and the Terminal prompt. */
export const plexMono = localFont({
  src: [
    {
      path: '../node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff2',
      weight: '400',
    },
    {
      path: '../node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-500-normal.woff2',
      weight: '500',
    },
    {
      path: '../node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-600-normal.woff2',
      weight: '600',
    },
  ],
  variable: '--f-plex',
  display: 'swap',
  fallback: ['ui-monospace', 'Menlo', 'monospace'],
})

/** The masthead weight, for Zine and Arcade. */
export const archivoBlack = localFont({
  src: '../node_modules/@fontsource/archivo-black/files/archivo-black-latin-400-normal.woff2',
  weight: '400',
  variable: '--f-black',
  display: 'swap',
  fallback: ['Impact', 'Haettenschweiler', 'sans-serif'],
})

/** Zine body copy and Arcade labels. */
export const archivo = localFont({
  src: '../node_modules/@fontsource-variable/archivo/files/archivo-latin-wght-normal.woff2',
  weight: '100 900',
  variable: '--f-archivo',
  display: 'swap',
  fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
})

/** Arcade display: chunky and a little soft, without being childish. */
export const bricolage = localFont({
  src: '../node_modules/@fontsource-variable/bricolage-grotesque/files/bricolage-grotesque-latin-wght-normal.woff2',
  weight: '200 800',
  variable: '--f-bricolage',
  display: 'swap',
  fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
})



/**
 * The quiet direction runs on one family plus its mono companion. Geist is
 * neutral without being Inter: slightly narrower, flatter terminals, and a
 * mono that is actually designed alongside it rather than borrowed. One family
 * doing everything is what "plain" looks like when it is done deliberately.
 */
export const geist = localFont({
  src: '../node_modules/@fontsource-variable/geist/files/geist-latin-wght-normal.woff2',
  weight: '100 900',
  variable: '--f-geist',
  display: 'swap',
  fallback: ['ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
})

export const geistMono = localFont({
  src: '../node_modules/@fontsource-variable/geist-mono/files/geist-mono-latin-wght-normal.woff2',
  weight: '100 900',
  variable: '--f-geist-mono',
  display: 'swap',
  fallback: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
})


/* -------------------------------------------------------------------------
   Type pairings for /lab/v4

   Four candidates rendered against the same page so the choice is made by
   looking rather than by naming a font. Each is deliberately not Inter and not
   Instrument Serif, which is the pair the first V3 used and the pair that read
   as default.
   ------------------------------------------------------------------------- */

/** Pairing A display: a serif with real quirk. Its wonk and optical axes give
    it character at large sizes without tipping into costume. */
export const fraunces = localFont({
  src: '../node_modules/@fontsource-variable/fraunces/files/fraunces-latin-standard-normal.woff2',
  weight: '100 900',
  variable: '--f-fraunces',
  display: 'swap',
  fallback: ['Georgia', 'serif'],
})

/** Pairing C display: a quieter editorial serif than Fraunces, closer to a
    magazine than to a brand. */
export const newsreader = localFont({
  src: '../node_modules/@fontsource-variable/newsreader/files/newsreader-latin-wght-normal.woff2',
  weight: '200 800',
  variable: '--f-newsreader',
  display: 'swap',
  fallback: ['Georgia', 'serif'],
})

/** Body and display candidate: slightly condensed, flat terminals, reads
    contemporary without being neutral to the point of anonymity. */
export const instrumentSans = localFont({
  src: '../node_modules/@fontsource-variable/instrument-sans/files/instrument-sans-latin-wght-normal.woff2',
  weight: '400 700',
  variable: '--f-instrument-sans',
  display: 'swap',
  fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
})

/** Body candidate with a touch more warmth than a pure grotesque. */
export const schibsted = localFont({
  src: '../node_modules/@fontsource-variable/schibsted-grotesk/files/schibsted-grotesk-latin-wght-normal.woff2',
  weight: '400 900',
  variable: '--f-schibsted',
  display: 'swap',
  fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
})

export const labFontVars = [
  spaceGrotesk.variable,
  plexMono.variable,
  archivoBlack.variable,
  archivo.variable,
  bricolage.variable,
  geist.variable,
  geistMono.variable,
  fraunces.variable,
  newsreader.variable,
  instrumentSans.variable,
  schibsted.variable,
].join(' ')
