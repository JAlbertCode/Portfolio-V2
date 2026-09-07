import type { NextConfig } from 'next'

/**
 * V2 published a page per project at the site root (/mix3d, /werewolf, and so
 * on). Those URLs are in other people's bookmarks, in Medium posts, and in
 * conference programmes, so V3 keeps them working rather than 404ing them.
 * Everything now lives under /work/<slug>.
 */
const LEGACY_PROJECT_ROUTES = [
  'mix3d',
  'mix3d-clothing',
  'invisible-maze-game',
  'tokensets',
  'werewolf',
  'grace-potter',
  'mobile-vendor',
  'thought-card',
  'wix',
  'blotto',
  'livein',
  'ar-piano-lessons',
  'traffic-jam-vr',
  'the-fourth-branch',
  'memorial-website',
  'customizable-phone-case',
  'lilypad',
  'lilypad-frontend',
  'sdk-updates',
  'playerchain',
  'web3-game-workshop',
]

const nextConfig: NextConfig = {
  /**
   * Turbopack walks up from the entry looking for a lockfile and found one in
   * the home directory, outside this repository, which made it guess the wrong
   * project root. Pinning it here stops the warning and stops a stray lockfile
   * anywhere above the repo from changing how the build resolves.
   */
  turbopack: { root: __dirname },

  images: {
    // Remote covers (currently YouTube thumbnails) still go through the Next
    // image pipeline rather than being dropped in as raw <img>.
    remotePatterns: [
      { protocol: 'https', hostname: 'i.ytimg.com' },
      { protocol: 'https', hostname: 'img.youtube.com' },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  async redirects() {
    return [
      ...LEGACY_PROJECT_ROUTES.map((slug) => ({
        source: `/${slug}`,
        destination: `/work/${slug}`,
        permanent: true,
      })),
      // V2's two collection pages. Their contents are individual entries now.
      { source: '/spaces', destination: '/#work', permanent: true },
      { source: '/streams', destination: '/#work', permanent: true },
      // Never had content.
      { source: '/resources', destination: '/#work', permanent: false },
      { source: '/lifestyle', destination: '/#work', permanent: false },

      // The site is one page. These were routes in an earlier V3 and are
      // sections now, so anything already linking to them still lands in the
      // right place.
      { source: '/work', destination: '/#work', permanent: false },
      // Speaking is part of working with him, not a separate offer.
      { source: '/speaking', destination: '/services#speaking', permanent: false },
    ]
  },
}

export default nextConfig
