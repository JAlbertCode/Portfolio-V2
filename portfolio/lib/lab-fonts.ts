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

export const labFontVars = [
  spaceGrotesk.variable,
  plexMono.variable,
  archivoBlack.variable,
  archivo.variable,
  bricolage.variable,
].join(' ')
