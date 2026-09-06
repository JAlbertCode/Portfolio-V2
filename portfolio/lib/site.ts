/**
 * Everything about Jay that is not a portfolio entry. Kept in one file so the
 * copy can be edited without opening a component.
 *
 * Anything marked TODO is a deliberate blank: it needs a real answer from Jay
 * rather than a plausible-sounding one written for him.
 */

export const site = {
  /**
   * Jay, not Jonathan. It is what he goes by online and at work, so it is what
   * the site says everywhere someone reads it. `legalName` exists only for the
   * structured data and the footer, where the full form belongs.
   */
  name: 'Jay Albert',
  legalName: 'Jonathan Albert',
  location: 'New York City',
  url: 'https://jonathanalbert.com',
  email: 'JonathanAlbert0115@gmail.com',
  calendly: 'https://calendly.com/jonathanalbert0115/15-min-discovery-call-web3-advisory',
  resume: '/documents/Jonathan_Albert_Resume.pdf',

  /**
   * One line. Meta description, and the line under the name.
   *
   * Deliberately plural. Developer relations is one of the things Jay does,
   * not the category he sits in, and a single job title here would narrow a
   * decade of product, engineering, community and hardware work down to the
   * most recent job.
   */
  tagline:
    'Product, engineering, and developer relations. Building across AI, games, hardware, and the web since 2014.',

  /** The line under the name. Shorter than the tagline, same job. */
  standfirst: 'Product, engineering, and developer relations.',

  /**
   * TODO(jay): rewrite in your own voice. This is a compression of the V2 copy
   * and a correction of an earlier draft that read as though developer
   * relations were the whole job.
   */
  intro: [
    'I build things and then help other people build them. Some of that is product and engineering work, some is developer relations, some is community, and some of it is a printer running overnight in the corner of the room.',
    'A decade of it across AI, decentralised compute, blockchains, gaming, augmented reality, finance, and civic tech. Some shipped, some was a three-day game jam, all of it is here.',
  ],
} as const

export interface SocialLink {
  label: string
  href: string
  icon: string
  /** Shown in the compact footer row as well as the full contact list. */
  primary?: boolean
}

/**
 * Order matters: the primary four lead the row on the home page, and people
 * meeting Jay reach for a messaging app or a follow, not a repository.
 *
 * TODO(jay): add WhatsApp. The glyph is already in SocialIcon; it needs
 *   { label: 'WhatsApp', href: 'https://wa.me/<number in full international
 *   form, digits only>', icon: '', primary: true }
 * and one of the current four dropped to primary: false so the lead row stays
 * at four.
 */
export const socials: SocialLink[] = [
  { label: 'Telegram', href: 'https://t.me/Jay_Albert', icon: '/images/telegram.png', primary: true },
  // He still calls it Twitter, so the site does.
  { label: 'Twitter', href: 'https://twitter.com/Jay_Albert_', icon: '/images/twitter.png', primary: true },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jonathan-albert-profile/',
    icon: '/images/linkedin.png',
    primary: true,
  },
  { label: 'GitHub', href: 'https://github.com/JAlbertCode', icon: '/images/github.png', primary: true },
  { label: 'Medium', href: 'https://jonathan-albert.medium.com/', icon: '/images/medium.png' },
  { label: 'Mirror', href: 'https://mirror.xyz/jay-albert.eth', icon: '/images/mirror.png' },
  {
    label: 'Discord',
    href: 'https://discordapp.com/users/649469511749337089',
    icon: '/images/discord.png',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/jonathanalbert0115/',
    icon: '/images/instagram.png',
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@jay_albert_?_t=8gYzNbPEty6&_r=1',
    icon: '/images/tiktok.png',
  },
]

/* -------------------------------------------------------------------------
   Speaking
   ------------------------------------------------------------------------- */

export interface SpeakingFormat {
  title: string
  detail: string
  length: string
}

/**
 * TODO(jay): check the venue claims. Anything naming a specific conference has
 * to be verifiable, and one of these previously named GDC on the strength of a
 * campaign you ran there rather than a talk you gave.
 */
export const speakingFormats: SpeakingFormat[] = [
  {
    title: 'Hands-on workshop',
    detail:
      'Everyone leaves with something running on their own machine. I write the code live and the room follows, so the failure modes get hit in the room rather than afterwards.',
    length: '60 to 120 minutes',
  },
  {
    title: 'Conference talk',
    detail:
      'A technical session with a working demo rather than an architecture diagram. Delivered at ETHDenver among others.',
    length: '20 to 45 minutes',
  },
  {
    title: 'Panel or Space',
    detail:
      'Moderating or on the panel. Comfortable being the person who asks the question everyone is avoiding.',
    length: '45 to 90 minutes',
  },
  {
    title: 'Live stream or podcast',
    detail:
      'Long-form conversation with a founder or a team, usually walking through what they built and why. Ran a weekly series of these.',
    length: '30 to 60 minutes',
  },
]

/**
 * TODO(jay): confirm or replace. These are topics drawn from work in the
 * catalogue, but what you are willing to stand on a stage and defend is yours
 * to decide, not something to infer from a project list.
 */
export const speakingTopics: string[] = [
  'Getting a game team from Web2 to on-chain without rewriting the game',
  'Retrieval-augmented agents on decentralised compute',
  'On-chain randomness, lootboxes, and provable fairness',
  'Shipping augmented reality on hardware people already own',
  'Building a community that outlives the project that started it',
  'Developer relations that produces working software, not just content',
  'What a decade of prototypes teaches you about what to build next',
]

/**
 * TODO(jay): swap in real numbers or delete the block. An empty stat is worse
 * than no stat, and an invented one is worse than both.
 */
export const speakingProof: Array<{ value: string; label: string }> = []

/* -------------------------------------------------------------------------
   Services
   ------------------------------------------------------------------------- */

export interface Service {
  slug: string
  title: string
  /** Set where the work runs through a separate brand rather than through Jay. */
  org?: string
  pitch: string
  /**
   * What the buyer actually receives. Optional, because for work that runs
   * through another business this page should not be restating its terms.
   */
  deliverables?: string[]
  /**
   * Who this is for. Written to let the wrong buyer disqualify themselves.
   * Optional for the same reason.
   */
  fit?: string
  cta: { label: string; href: string }
  /**
   * A price. Leave it null unless Jay has said, here, that he wants that
   * number on this page: a figure on a services page is an offer, and one
   * copied from somewhere else is an offer he never made.
   */
  startingAt: string | null
}

/**
 * TODO(jay): sign off on the deliverables and the "best for" line on the first
 *   two, or cut them. Nobody has confirmed these. They were written here from
 *   what the work looked like, and a bulleted list of what a buyer receives is
 *   a specification of the job whether or not it is labelled one. Same class of
 *   thing as the price that used to sit on the third card.
 */
export const services: Service[] = [
  {
    slug: 'advisory',
    title: 'Advisory and consultation',
    pitch:
      'A working session on a specific problem: what to build next, whether the integration you are scoping is worth doing, how to get a technical product in front of the people who would use it, or why your developer funnel leaks.',
    deliverables: [
      'A 15 minute call to establish whether I am useful to you',
      'A written summary of what we decided and what I would do next',
      'Follow-on sessions if the work warrants them',
    ],
    fit: 'Best for teams with a product already in the world and a specific question about it.',
    cta: { label: 'Book a 15 minute call', href: site.calendly },
    startingAt: null,
  },
  {
    slug: 'custom-development',
    title: 'Custom development',
    pitch:
      'Reference implementations, developer tooling, integration work, and prototypes. The kind of build that has to be correct because other people are going to copy it.',
    deliverables: [
      'A scoped build with a fixed deliverable, not an open-ended retainer',
      'Source in your repository, documented, with the setup path tested from scratch',
      'A handover session with the team who will own it',
    ],
    fit: 'Best for teams who need something built well enough to hand to their developers as an example.',
    cta: { label: 'Start a conversation', href: `mailto:${site.email}?subject=Custom development` },
    startingAt: null,
  },
  {
    // No prices, no turnaround, no shipping terms. An earlier version carried
    // "custom pieces start at $35 with design included, and you get a quote
    // inside 24 hours", lifted from the wording on the Layerworks commissions
    // page. It was accurate to that page and still wrong here: it is a
    // commitment, it was made on Jay's personal site without him agreeing to
    // it, and two copies of the same terms drift the moment one is edited.
    //
    // This block hands people over. The shop states its own terms, and it is
    // the only place that should.
    slug: '3d-printing',
    title: '3D printing',
    org: 'Layerworks Print Co.',
    pitch:
      'Stands, mounts, displays, replacement parts, and one-off gifts. Print work runs through Layerworks Print Co., which takes the request, quotes it, and makes it.',
    cta: { label: 'Start a request at Layerworks', href: 'https://jalbertcode.github.io/3d-printing-store/#custom' },
    startingAt: null,
  },
]

/* -------------------------------------------------------------------------
   Career
   ------------------------------------------------------------------------- */

export interface Role {
  org: string
  title: string
  /** Free text, e.g. "2023 - 2025". Left as text because some of these overlap. */
  period: string
  detail: string
  href?: string
}

/**
 * TODO(jay): this is assembled from organisations that already appear in the
 * portfolio entries, with the dates left deliberately vague where the site did
 * not already state them. Correct the periods, add anything missing, and
 * decide what you want said about your current role. Nothing here should be a
 * guess once you have been through it.
 */
export const roles: Role[] = [
  {
    org: 'Lilypad Network',
    title: 'Developer relations',
    period: '2023 - 2025',
    detail:
      'Documentation, frontend guides, workshops, and the pitch that became the project fundraising material.',
    href: 'https://lilypadnetwork.org',
  },
  {
    org: 'ChainSafe Gaming',
    title: 'Developer relations',
    period: '2024',
    detail:
      'Ran the weekly stream series, built and shipped the Loot GDC campaign, and taught the web3.unity SDK through live workshops.',
    href: 'https://gaming.chainsafe.io',
  },
  {
    org: 'Mix3d',
    title: 'Co-founder',
    period: '2021 - 2022',
    detail:
      'Built a learning community past 100 members, several of whom went on to roles at Coinbase and Protocol Labs.',
  },
]
