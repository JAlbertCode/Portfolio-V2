/**
 * V2 tagged every project with free-text skills. That produced 221 distinct
 * tags across 37 projects, 130 of which appeared exactly once, which made the
 * filter a list nobody could use.
 *
 * V3 replaces that with three small controlled vocabularies that answer three
 * different questions a visitor actually has:
 *
 *   medium   - what form did the work take?      (I want to watch a talk)
 *   practice - what was Jay doing?               (can he do developer relations?)
 *   domain   - what space was it in?             (has he worked in gaming?)
 *
 * Specific technologies still live on each entry as free-text `tech`, but they
 * are display and search material, not a filter axis. Nobody browses a
 * portfolio by "Sequelize".
 */

export const MEDIUMS = ['build', 'talk', 'stream', 'writing'] as const
export type Medium = (typeof MEDIUMS)[number]

export const MEDIUM_LABELS: Record<Medium, { singular: string; plural: string; blurb: string }> = {
  build: {
    singular: 'Build',
    plural: 'Things I built',
    blurb: 'Apps, dApps, games, and hardware, shipped or prototyped.',
  },
  talk: {
    singular: 'Talk',
    plural: 'Talks and workshops',
    blurb: 'Conference sessions, workshops, panels, and pitches.',
  },
  stream: {
    singular: 'Stream',
    plural: 'Streams and spaces',
    blurb: 'Live shows, Twitter Spaces, and recorded conversations.',
  },
  writing: {
    singular: 'Writing',
    plural: 'Writing',
    blurb: 'Guides, articles, and technical documentation.',
  },
}

export const PRACTICES = [
  'Developer Relations',
  'Engineering',
  'Product & Design',
  'Community & Education',
  'Writing & Research',
  'Hardware & Fabrication',
] as const
export type Practice = (typeof PRACTICES)[number]

export const DOMAINS = [
  'AI',
  'Blockchain & Web3',
  'Gaming',
  'AR & VR',
  'Developer Tools',
  'Finance',
  'Music & Art',
  'Civic & Social',
  'Consumer & Commerce',
] as const
export type Domain = (typeof DOMAINS)[number]

/** Whether the thing on the other end of the link still exists. */
export const STATUSES = ['live', 'archived', 'offline'] as const
export type Status = (typeof STATUSES)[number]

export const STATUS_NOTES: Record<Status, string | null> = {
  live: null,
  archived: 'The project has wound down. Kept here as a record of the work.',
  offline: 'The host for this one has since gone away, so the link no longer resolves.',
}

