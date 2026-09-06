import type { Entry } from './types'

/**
 * Every piece of work on the site, newest first.
 *
 * Sourcing rule: a summary may only state what the linked artifact or Jay
 * states. V2's own descriptions are not a source; several were generated and at
 * least one ("presented at Game Developers Conference") turned a campaign he
 * built into a talk he never gave. When V2's wording is ambiguous, open the
 * link and read it.
 *
 * `date` is ISO yyyy-mm so sorting is a string compare and rendering is a
 * locale call. `practices` and `domains` come from the controlled lists in
 * taxonomy.ts; `tech` is free text and never becomes a filter.
 */
export const entries: Entry[] = [
  // ------------------------------------------------------------------- 2025
  {
    slug: 'prompt2flow',
    title: 'Prompt2Flow',
    summary:
      'A platform for discovering, running, and publishing automated prompt workflows. Single prompts or chained flows for text, code, and image generation.',
    date: '2025-07',
    medium: 'build',
    practices: ['Engineering', 'Product & Design'],
    domains: ['AI', 'Developer Tools'],
    tech: ['Next.js', 'React', 'TypeScript', 'Perplexity Sonar API', 'Vercel'],
    cover: {
      src: '/images/prompt2flow.png',
      alt: 'The Prompt2Flow interface, showing prompt discovery and automation workflows',
    },
    href: 'https://www.prompt2flow.com',
    featured: true,
  },
  {
    slug: 'lilypad-iotex-pitch',
    title: 'Lilypad pitch for the IoTeX competition',
    summary:
      "Competitive pitch for IoTeX's Crypto's Got Talent, seeking $500,000 in funding. The presentation became core fundraising material for Lilypad Network.",
    date: '2025-05',
    medium: 'talk',
    practices: ['Developer Relations', 'Writing & Research'],
    domains: ['AI', 'Blockchain & Web3'],
    tech: ['DePIN', 'Distributed compute'],
    href: 'https://www.youtube.com/watch?v=fa8RzuGRR7E',
    org: 'Lilypad Network',
    featured: true,
  },
  {
    slug: 'grok-generative-future-of-x',
    title: 'Threads, tools, and Grok: inside the generative future of X',
    summary:
      "An analysis of Grok's integration into X and what it means for social platforms that build their own models.",
    date: '2025-04',
    medium: 'writing',
    practices: ['Writing & Research'],
    domains: ['AI'],
    cover: {
      src: '/images/twitter-future.png',
      alt: 'Article header for Threads, Tools, and Grok',
    },
    href: 'https://medium.com/@jonathan-albert/threads-tools-and-grok-inside-the-generative-future-of-x-f70c7e347f37',
  },
  {
    slug: 'vibecheck',
    title: 'VibeCheck',
    summary:
      'A wiki-style app that compares communities and surfaces collaboration opportunities between them. Built on Lilypad as part of a weekly build series.',
    date: '2025-04',
    medium: 'build',
    practices: ['Engineering', 'Community & Education'],
    domains: ['AI', 'Blockchain & Web3'],
    tech: ['Next.js', 'React', 'TypeScript', 'Lilypad', 'Vercel'],
    cover: {
      src: '/images/vibecheck.png',
      alt: 'The VibeCheck community comparison interface',
      video: '/videos/vibecheck.mp4',
    },
    href: 'https://vibecheck-app.vercel.app/',
  },
  {
    slug: 'web3-game-mechanic-generator',
    title: 'Web3 Game Mechanic Generator',
    summary:
      'A custom GPT that turns smart contract methods into game mechanics and demo concepts, so game designers can read a contract as a design space.',
    date: '2025-04',
    medium: 'build',
    practices: ['Developer Relations', 'Product & Design'],
    domains: ['AI', 'Gaming', 'Blockchain & Web3'],
    tech: ['OpenAI GPTs', 'Prompt engineering', 'Solidity'],
    cover: {
      src: '/images/mechanic-generator.png',
      alt: 'The Web3 Game Mechanic Generator GPT interface',
    },
    href: 'https://chatgpt.com/g/g-67e71d3f566c81918471509fb5b3b63b-web3-game-mechanic-generator',
  },
  {
    slug: 'rag-agents-on-lilypad',
    title: 'Building RAG agents on Lilypad',
    summary:
      'A live build showing retrieval-augmented agents running on a decentralised compute network, from embedding through to retrieval.',
    date: '2025-03',
    medium: 'talk',
    practices: ['Developer Relations', 'Community & Education'],
    domains: ['AI', 'Blockchain & Web3'],
    tech: ['Python', 'Vector databases', 'Embeddings', 'Lilypad'],
    href: 'https://www.youtube.com/watch?v=I-_9yO4wdig',
    org: 'Lilypad Network',
  },
  {
    slug: 'sir-croaksworths-roast-dapp',
    title: "Sir Croaksworth's Roast DApp",
    summary:
      'A pretentious frog banker reads your wallet history back to you and is unkind about it. Paste an address, get roasted on your trading decisions.',
    date: '2025-03',
    medium: 'build',
    practices: ['Engineering', 'Product & Design'],
    domains: ['Blockchain & Web3', 'AI'],
    tech: ['Next.js', 'React', 'TypeScript', 'Ethereum', 'Wallet integration'],
    cover: {
      src: '/images/roast.png',
      alt: 'Sir Croaksworth, a frog in a top hat, roasting a wallet history',
    },
    href: 'https://roast-app-delta.vercel.app/',
    featured: true,
  },
  {
    slug: 'collabhubs-builder-of-the-month',
    title: 'CollabHubs builder of the month',
    summary:
      'A community spotlight write-up covering the Web3, AI, and blockchain gaming work over the preceding year.',
    date: '2025-03',
    medium: 'writing',
    practices: ['Community & Education'],
    domains: ['Blockchain & Web3', 'AI'],
    cover: {
      src: '/images/collabhub.png',
      alt: 'CollabHubs Community Spotlight article featuring Jay Albert',
    },
    href: 'https://medium.com/@_WEB3M_/collabhubs-community-spotlight-builder-of-the-month-a0e639e763cc',
  },
  {
    slug: 'lilypad-cryptos-got-talent',
    title: "Lilypad at Crypto's Got Talent",
    summary:
      'Pitched decentralised AI infrastructure to a judging panel, competing for $500,000 in funding.',
    date: '2025-03',
    medium: 'talk',
    practices: ['Developer Relations'],
    domains: ['AI', 'Blockchain & Web3'],
    href: 'https://youtu.be/qUMOPe56vqI',
    org: 'Lilypad Network',
  },
  {
    slug: 'lilypad-frontend-workshop',
    title: 'Lilypad frontend workshop',
    summary:
      'A hands-on workshop building interfaces against a decentralised compute network, coded live with the room following along.',
    date: '2025-02',
    medium: 'talk',
    practices: ['Developer Relations', 'Community & Education'],
    domains: ['Blockchain & Web3', 'Developer Tools'],
    tech: ['Next.js', 'React', 'TypeScript'],
    href: 'https://www.youtube.com/watch?v=6VuEM4l5_oo',
    org: 'Lilypad Network',
  },

  // ---------------------------------------------------- Spaces, flattened
  // V2 buried these behind a single card that led to a list page. Each one is
  // now its own entry so a filter for talks actually surfaces them.
  {
    slug: 'space-ai-integration-in-gaming',
    title: 'AI integration in gaming',
    summary:
      'How AI is changing game development and player experience, and what that means for teams building in Web3.',
    date: '2025-02',
    medium: 'stream',
    practices: ['Developer Relations', 'Community & Education'],
    domains: ['AI', 'Gaming'],
    cover: { src: '/images/ai-gaming.png', alt: 'Twitter Space on AI integration in gaming' },
    href: 'https://x.com/_WEB3M_/status/1889111873653793027',
    org: 'WEB3M',
  },
  {
    slug: 'space-future-of-web3-gaming',
    title: 'The future of Web3 gaming',
    summary:
      'Where Web3 gaming is heading and which of the trends were actually holding up.',
    date: '2025-02',
    medium: 'stream',
    practices: ['Developer Relations'],
    domains: ['Gaming', 'Blockchain & Web3'],
    cover: {
      src: '/images/future-web3-gaming.png',
      alt: 'Twitter Space on the future of Web3 gaming',
    },
    href: 'https://x.com/_WEB3M_/status/1889471630860230932',
    org: 'WEB3M',
  },
  {
    slug: 'space-ai-agents-gaming-bull-run',
    title: 'Will AI agents start the gaming bull run?',
    summary:
      'Whether autonomous agents are a real driver of adoption in blockchain gaming or a narrative looking for a product.',
    date: '2025-01',
    medium: 'stream',
    practices: ['Developer Relations'],
    domains: ['AI', 'Gaming'],
    cover: { src: '/images/game7.jpeg', alt: 'Game7 Twitter Space on AI agents in gaming' },
    href: 'https://x.com/G7_DAO/status/1877739546827178250',
    org: 'Game7',
  },
  {
    slug: 'space-leaders-in-ai',
    title: 'Leaders in AI: shaping the next era of automation',
    summary:
      'How AI is reshaping development workflows, and where that opens something new up.',
    date: '2025-01',
    medium: 'stream',
    practices: ['Developer Relations'],
    domains: ['AI', 'Developer Tools'],
    cover: { src: '/images/leaders-in-ai.png', alt: 'Twitter Space on AI leadership and automation' },
    href: 'https://x.com/_WEB3M_/status/1875306129628291488',
    org: 'WEB3M',
  },

  // ------------------------------------------------------------------- 2024
  {
    slug: 'moddio-stream',
    title: 'Moddio game engine',
    summary:
      'How Moddio is building AI-assisted game development tooling, and its funding model through indie.fun. Published as "Game Dev Made Easy: Fast Tools, Fun Creations, Funded Dreams".',
    date: '2025-01',
    medium: 'stream',
    practices: ['Developer Relations'],
    domains: ['Gaming', 'AI'],
    cover: { src: '/images/Moddio.png', alt: 'Stream banner showing the Moddio game engine' },
    // V2 had this and the Farworld entry pointing at each other's videos.
    href: 'https://www.youtube.com/watch?v=8wQHD2qj8bs',
    org: 'ChainSafe Gaming',
  },
  {
    slug: 'discover-games-whalepass-stream',
    title: 'Discover Games and Whalepass',
    summary:
      'A walk through a platform bridging Web2 and Web3 gaming, including its battle pass tooling and engagement mechanics.',
    date: '2025-01',
    medium: 'stream',
    practices: ['Developer Relations'],
    domains: ['Gaming', 'Blockchain & Web3'],
    cover: { src: '/images/discover-games.png', alt: 'Discover Games platform stream' },
    href: 'https://www.youtube.com/watch?v=eOjg6ZJvpTM',
    org: 'ChainSafe Gaming',
  },
  {
    slug: 'farworld-stream',
    title: 'Farworld',
    summary:
      'Farworld turning chat apps into gaming adventures, and where AI fits in a game production pipeline.',
    date: '2025-01',
    medium: 'stream',
    practices: ['Developer Relations'],
    domains: ['Gaming', 'AI'],
    cover: { src: '/images/farworld.png', alt: 'Farworld AI gaming stream' },
    href: 'https://www.youtube.com/watch?v=OsfmODTBQaA',
    org: 'ChainSafe Gaming',
  },
  {
    slug: 'playermint-stream',
    title: 'Playermint and player-owned chains',
    summary:
      'A decentralised gaming model where every player runs their own chain instead of sharing global state.',
    date: '2024-12',
    medium: 'stream',
    practices: ['Developer Relations'],
    domains: ['Gaming', 'Blockchain & Web3'],
    cover: {
      src: '/images/playerchain.png',
      alt: 'ChainSafe stream banner with David Amor, Martin Maurer, and Jay Albert',
    },
    href: 'https://www.youtube.com/watch?v=1AgjLWaMQvw',
    detail: 'playerchain',
    org: 'ChainSafe Gaming',
  },
  {
    slug: 'rock-paper-scissors-workshop',
    title: 'Rock paper scissors on-chain',
    summary:
      'A workshop building a blockchain-backed game in Unity, using Chainlink VRF for verifiable randomness.',
    date: '2024-12',
    medium: 'talk',
    practices: ['Developer Relations', 'Community & Education'],
    domains: ['Gaming', 'Blockchain & Web3'],
    tech: ['Unity', 'C#', 'Chainlink VRF', 'Solidity'],
    cover: { src: '/images/rps-workshop.jpeg', alt: 'Rock paper scissors workshop screenshot' },
    href: 'https://www.youtube.com/live/V9hxpnm-zEc?si=TLQBMCemCBTqvX6x&t=1',
    org: 'ChainSafe Gaming',
  },
  {
    slug: 'chainsafe-sdk-update-stream',
    title: 'ChainSafe Gaming SDK update',
    summary:
      "Presented the release of ChainSafe's web3.unity SDK updates and demonstrated token streaming live.",
    date: '2024-11',
    medium: 'stream',
    practices: ['Developer Relations'],
    domains: ['Gaming', 'Developer Tools'],
    tech: ['Unity', 'C#', 'web3.unity'],
    cover: { src: '/images/sdk-updates.png', alt: 'ChainSafe Gaming SDK updates stream' },
    href: 'https://www.youtube.com/live/rgArGYfoT8o',
    detail: 'sdk-updates',
    org: 'ChainSafe Gaming',
  },
  {
    slug: 'hatchyverse-stream',
    title: 'Hatchyverse',
    summary:
      'A gaming ecosystem where the community builds games on shared IP, and what that does to licensing.',
    date: '2024-10',
    medium: 'stream',
    practices: ['Developer Relations'],
    domains: ['Gaming', 'Blockchain & Web3'],
    cover: { src: '/images/hatchyverse.png', alt: 'Hatchyverse platform overview' },
    href: 'https://www.youtube.com/watch?v=QNr3moS0B3o',
    org: 'ChainSafe Gaming',
  },
  {
    slug: 'truworld-stream',
    title: 'TruWorld',
    summary:
      'An AR geolocation game combining real-world exploration with on-chain items. Pokemon Go with a ledger.',
    date: '2024-10',
    medium: 'stream',
    practices: ['Developer Relations'],
    domains: ['Gaming', 'AR & VR'],
    cover: { src: '/images/trumen-world.png', alt: 'TruWorld stream showcase' },
    href: 'https://www.youtube.com/watch?v=Y9EHHzF6Rzw',
    org: 'ChainSafe Gaming',
  },
  {
    slug: 'space-publishing-games-in-web3',
    title: 'A guide to publishing games in Web3',
    summary:
      'What developers actually need to work through before shipping a game into the Web3 ecosystem.',
    date: '2024-10',
    medium: 'stream',
    practices: ['Developer Relations', 'Community & Education'],
    domains: ['Gaming', 'Blockchain & Web3'],
    cover: { src: '/images/publishing.jpeg', alt: 'Twitter Space on Web3 game publishing' },
    href: 'https://x.com/_WEB3M_/status/1848050211723067686',
    org: 'WEB3M',
  },
  {
    slug: 'cluaido-stream',
    title: 'CLUAIDO',
    summary:
      'An AI detective game where players interrogate model-driven suspects to solve procedurally generated cases.',
    date: '2024-09',
    medium: 'stream',
    practices: ['Developer Relations'],
    domains: ['Gaming', 'AI'],
    cover: { src: '/images/cluaido-stream.png', alt: 'CLUAIDO AI detective game stream' },
    href: 'https://www.youtube.com/watch?v=SdJ9oo9d2Os',
    org: 'ChainSafe Gaming',
  },
  {
    slug: 'quantum-command-stream',
    title: 'Quantum Command',
    summary: 'A shooter that reshapes its maps in response to how players move and what they carry.',
    date: '2024-09',
    medium: 'stream',
    practices: ['Developer Relations'],
    domains: ['Gaming'],
    cover: { src: '/images/quantum-command.png', alt: 'Quantum Command stream' },
    href: 'https://www.youtube.com/watch?v=RMemvjcBoNE',
    org: 'ChainSafe Gaming',
  },
  {
    slug: 'space-rise-of-web3-gaming',
    title: 'The rise of Web3 gaming',
    summary:
      'Which Web3 games were actually finding players, and what the successful ones had in common.',
    date: '2024-09',
    medium: 'stream',
    practices: ['Developer Relations'],
    domains: ['Gaming', 'Blockchain & Web3'],
    cover: { src: '/images/rise-of-web3-gaming.jpeg', alt: 'Twitter Space on the rise of Web3 gaming' },
    href: 'https://x.com/_WEB3M_/status/1832141772975444463',
    org: 'WEB3M',
  },
  {
    slug: 'hackfs-winner-stream',
    title: 'HackFS winning project',
    summary:
      'The HackFS winner: a PvP battle game combining Monaverse maps with the ChainSafe SDK.',
    date: '2024-07',
    medium: 'stream',
    practices: ['Developer Relations'],
    domains: ['Gaming', 'Blockchain & Web3'],
    cover: { src: '/images/hackfs-winner.png', alt: 'HackFS winner stream' },
    href: 'https://www.youtube.com/watch?v=rTQhJHbDaWM',
    org: 'ChainSafe Gaming',
  },
  {
    slug: 'hyperplay-coinracer-stream',
    title: 'HyperPlay and Coinracer',
    summary: 'A look at HyperPlay as a launcher for blockchain games, featuring Coinracer.',
    date: '2024-07',
    medium: 'stream',
    practices: ['Developer Relations'],
    domains: ['Gaming', 'Blockchain & Web3'],
    cover: { src: '/images/hyperplay-stream.jpeg', alt: 'HyperPlay and Coinracer stream' },
    href: 'https://www.youtube.com/watch?v=70DahC2GHXs',
    org: 'ChainSafe Gaming',
  },
  {
    // Checked against the article itself, not against V2's description of it.
    // This was a campaign Jay built and then wrote up, not a talk he gave: his
    // own words in the piece are "I joined Chainsafe Gaming in January, and the
    // Loot GDC experience was my first big challenge".
    slug: 'loot-gdc',
    title: 'Loot GDC',
    summary:
      'A lootbox scavenger hunt run across the GDC venue and online. Players claimed boxes from QR codes and booths without knowing they had just created a wallet and signed a transaction. Nine studios contributed prizes.',
    date: '2024-04',
    medium: 'build',
    practices: ['Product & Design', 'Engineering', 'Developer Relations'],
    domains: ['Gaming', 'Blockchain & Web3'],
    tech: ['Solidity', 'Chainlink VRF', 'Cometh', 'Web3Auth', 'web3.unity'],
    cover: { src: '/images/loot-gdc.png', alt: 'The Loot GDC campaign artwork' },
    href: 'https://blog.chainsafe.io/onchain-lootboxes-gdc/',
    org: 'ChainSafe Gaming',
    featured: true,
  },
  {
    slug: 'space-web3-security',
    title: 'Security best practices in Web3',
    summary:
      'Practical security habits for Web3 developers and users, focused on what actually loses people their assets.',
    date: '2024-04',
    medium: 'stream',
    practices: ['Developer Relations', 'Community & Education'],
    domains: ['Blockchain & Web3'],
    cover: { src: '/images/web3-security.jpeg', alt: 'Twitter Space on Web3 security' },
    href: 'https://x.com/TimeToTerminal/status/1775168818131722482',
  },
  {
    slug: 'space-responsible-gaming',
    title: 'Responsible gaming in Web3',
    summary:
      'Frameworks for player wellbeing when the game has real money in it, and where the industry keeps getting it wrong.',
    date: '2024-04',
    medium: 'stream',
    practices: ['Developer Relations'],
    domains: ['Gaming', 'Blockchain & Web3'],
    cover: { src: '/images/responsible-gaming.jpeg', alt: 'Twitter Space on responsible gaming' },
    href: 'https://x.com/SNEGbet/status/1777653520088301877',
  },
  {
    slug: 'space-rewriting-game-design',
    title: 'Rewriting the rules of game design',
    summary:
      'Which traditional game design principles survive contact with on-chain ownership, and which do not.',
    date: '2024-03',
    medium: 'stream',
    practices: ['Developer Relations'],
    domains: ['Gaming', 'Blockchain & Web3'],
    cover: { src: '/images/rewriting-the-rules.jpeg', alt: 'Twitter Space on Web3 game design' },
    href: 'https://x.com/ChainSafeGaming/status/1764971150382117222',
    org: 'ChainSafe Gaming',
  },

  // ------------------------------------------------------------------- 2023
  {
    slug: 'lilypad-frontend-guide',
    title: 'Lilypad frontend guide',
    summary:
      'A developer guide for standing up and customising a Lilypad Network frontend, written to cut the setup time for new builders.',
    date: '2023-12',
    medium: 'writing',
    practices: ['Developer Relations', 'Writing & Research'],
    domains: ['Blockchain & Web3', 'Developer Tools'],
    tech: ['React', 'Next.js', 'TypeScript'],
    cover: {
      src: '/images/lilypad-frontend.avif',
      alt: 'A code editor showing React components for Lilypad Network',
    },
    href: 'https://blog.lilypadnetwork.org/setting-up-your-lilypad-front-end',
    detail: 'lilypad-frontend',
    org: 'Lilypad Network',
  },
  {
    slug: 'lilypad-network',
    title: 'Lilypad Network',
    summary:
      'Work on a distributed compute network, focused on developer experience and the documentation that shapes it.',
    date: '2023-12',
    medium: 'writing',
    practices: ['Developer Relations', 'Writing & Research'],
    domains: ['Blockchain & Web3', 'Developer Tools'],
    tech: ['Linux', 'Distributed compute'],
    cover: { src: '/images/lilypad.avif', alt: 'The Lilypad Network lily pad logo' },
    href: 'https://blog.lilypadnetwork.org/hop-into-the-future-with-lilypad-the-distributed-compute-network',
    detail: 'lilypad',
    org: 'Lilypad Network',
  },
  {
    slug: 'the-machine-dreams',
    title: 'The Machine Dreams',
    summary:
      'An art project that generates a new piece every hour from whatever is trending on Google in the US, then mints it.',
    date: '2023-10',
    medium: 'build',
    practices: ['Engineering', 'Product & Design'],
    domains: ['AI', 'Music & Art', 'Blockchain & Web3'],
    tech: [
      'Python',
      'TypeScript',
      'Twitter API',
      'Stability AI SDK',
      'thirdweb',
      'IPFS',
      'Solidity',
      'OpenZeppelin',
      'Chainlink',
      'Google Cloud',
    ],
    cover: {
      src: '/images/machine_dream.jpg',
      alt: 'A circular logo with an M in the middle and coloured clouds beneath',
    },
    href: 'https://www.themachinedreams.com/about',
    featured: true,
  },

  // ------------------------------------------------------------- 2022, 2023
  {
    slug: 'space-gaming-analytics',
    title: 'Gaming analytics and growth',
    summary:
      'A conversation with Covalent on how data actually feeds game development and retention decisions.',
    date: '2023-05',
    medium: 'stream',
    practices: ['Developer Relations'],
    domains: ['Gaming'],
    cover: { src: '/images/covalent.jpeg', alt: 'Covalent Twitter Space on gaming analytics' },
    href: 'https://x.com/Covalent_HQ/status/1655009610623844353',
  },
  {
    slug: 'web2-to-web3-game-workshop',
    title: 'Web2 to Web3 game development workshop',
    summary:
      'An ETHDenver workshop taking an existing game and wiring it up to a chain, start to finish, in front of the room.',
    date: '2023-02',
    medium: 'talk',
    practices: ['Developer Relations', 'Community & Education'],
    domains: ['Gaming', 'Blockchain & Web3'],
    tech: ['Unity', 'C#', 'Solidity'],
    href: 'https://www.youtube.com/watch?v=c_gONMVIH8o&t=0s',
    detail: 'web3-game-workshop',
    org: 'ETHDenver',
    featured: true,
  },
  {
    slug: 'mix3d-clothing',
    title: 'Mix3d Clothing',
    summary:
      'A clothing line out of the Mix3d community, designed in 3D and given an AR layer so the print could be scanned.',
    date: '2022-12',
    medium: 'build',
    practices: ['Product & Design', 'Engineering'],
    domains: ['AR & VR', 'Consumer & Commerce', 'Blockchain & Web3'],
    tech: ['CLO3D', 'Spark AR', 'Vectary', 'MagicaVoxel', 'Figma', 'Moralis', 'MetaMask'],
    cover: {
      src: '/images/shirt.png',
      alt: 'A 3D model of a black shirt with the Mix3d logo on the front',
      video: '/videos/Spunizm test.mp4',
    },
    detail: 'mix3d-clothing',
    org: 'Mix3d',
  },
  {
    slug: 'understanding-ens',
    title: 'Understanding ENS',
    summary:
      'A guide to the Ethereum Name Service, its parallels with DNS, and why naming is the part of Web3 adoption people underrate.',
    date: '2022-10',
    medium: 'writing',
    practices: ['Writing & Research', 'Community & Education'],
    domains: ['Blockchain & Web3'],
    tech: ['ENS', 'Ethereum'],
    cover: { src: '/images/ens-guide.png', alt: 'A visualisation comparing DNS and ENS' },
    href: 'https://mirror.xyz/jay-albert.eth/VhAJt973aV6vHZ-0-oMqxPML52f-unYe5rE1h0TsmaU',
  },
  {
    slug: 'exploring-web3-finance',
    title: 'Exploring Web3 finance',
    summary:
      'Notes from investing through DeFi tooling while working alongside traditional finance organisations.',
    date: '2022-10',
    medium: 'writing',
    practices: ['Writing & Research'],
    domains: ['Finance', 'Blockchain & Web3'],
    tech: ['TokenSets', 'Polygon', 'MetaMask'],
    cover: {
      src: '/images/tokensets.png',
      alt: 'Two overlapping blue circles forming a shape like an S',
    },
    detail: 'tokensets',
    status: 'offline',
  },
  {
    slug: 'invisible-maze-game',
    title: 'Invisible Maze',
    summary:
      'A maze you cannot see, built to walk newcomers through connecting MetaMask and finding their way around Decentraland.',
    date: '2022-01',
    medium: 'build',
    practices: ['Product & Design', 'Community & Education'],
    domains: ['Gaming', 'Blockchain & Web3'],
    tech: ['Decentraland', 'MetaMask', 'Etherscan'],
    cover: { src: '/images/invisible-maze.png', alt: 'A view of the invisible maze in Decentraland' },
    detail: 'invisible-maze-game',
    org: 'Mix3d',
  },
  {
    slug: 'mix3d',
    title: 'Mix3d',
    summary:
      'A community for people learning and building in Web3. Grew past 100 members, many of whom moved into roles at Coinbase, Protocol Labs, and elsewhere.',
    date: '2022-01',
    medium: 'build',
    practices: ['Community & Education', 'Product & Design'],
    domains: ['Blockchain & Web3'],
    tech: ['Notion', 'Discord', 'PartyBid', 'Mirror'],
    detail: 'mix3d',
    status: 'archived',
  },
  {
    slug: 'hunting-for-art',
    title: 'Hunting for art',
    summary:
      'A walkthrough of executing a peer-to-peer NFT swap safely, using a Smilesssvrs trade as the worked example.',
    date: '2021-12',
    medium: 'writing',
    practices: ['Writing & Research', 'Community & Education'],
    domains: ['Blockchain & Web3', 'Music & Art'],
    cover: { src: '/images/hunting-art.webp', alt: 'Smilesssvrs NFT artwork from the trade' },
    href: 'https://jonathan-albert.medium.com/hunting-for-art-b804d2f55dbb',
  },
  {
    slug: 'crypto-banking-guide',
    title: 'Crypto banking guide',
    summary:
      'A guide to earning interest through crypto banking platforms and stablecoins, with the risks stated plainly.',
    date: '2021-05',
    medium: 'writing',
    practices: ['Writing & Research'],
    domains: ['Finance', 'Blockchain & Web3'],
    cover: {
      src: '/images/crypto-banking.jpeg',
      alt: 'A graph comparing crypto interest rates to traditional banking',
    },
    href: 'https://jonathan-albert.medium.com/earn-more-interest-with-crypto-banking-4657bb167a32',
  },

  // ------------------------------------------------------------------- 2020
  {
    slug: 'werewolf',
    title: 'Werewolf',
    summary: 'The social deduction game, played over webcams in a browser.',
    date: '2020-09',
    medium: 'build',
    practices: ['Engineering', 'Product & Design'],
    domains: ['Gaming'],
    tech: ['React', 'Express', 'Sequelize', 'Firebase', 'Twilio', 'AniJS'],
    cover: {
      src: '/images/werewolf.png',
      alt: 'The Werewolf sign-in screen with the title in a blood-letter font',
      video: '/videos/werewolf-preview.mp4',
    },
    detail: 'werewolf',
  },
  {
    slug: 'grace-potter',
    title: 'Grace Potter',
    summary: 'An e-commerce storefront for handmade pottery, built end to end including checkout.',
    date: '2020-08',
    medium: 'build',
    practices: ['Engineering'],
    domains: ['Consumer & Commerce'],
    tech: ['React', 'Redux', 'Express', 'Sequelize', 'PostgreSQL', 'Stripe', 'WebSocket'],
    cover: { src: '/images/grace-potter.png', alt: 'A pottery vase icon' },
    detail: 'grace-potter',
  },
  {
    slug: 'mobile-vendor',
    title: 'Mobile Vendor',
    summary:
      'A platform connecting street vendors to nearby customers, with live location on a map.',
    date: '2020-08',
    medium: 'build',
    practices: ['Engineering', 'Product & Design'],
    domains: ['Consumer & Commerce'],
    tech: ['React Native', 'Expo', 'Redux', 'Firebase', 'MapView'],
    cover: {
      src: '/images/mobile-vendor.png',
      alt: 'A phone over a map with icons marking mobile vendors',
      video: '/videos/mobile-vendor.mp4',
    },
    detail: 'mobile-vendor',
  },
  {
    slug: 'thought-card',
    title: 'Thought Card',
    summary:
      'A business card that unfolds in AR. Scanning it opens links, video, 3D objects, and scenes off a single printed image.',
    date: '2020-04',
    medium: 'build',
    practices: ['Product & Design', 'Engineering'],
    domains: ['AR & VR'],
    tech: ['Unity', 'Vuforia', 'C#'],
    cover: {
      src: '/images/thought-card.png',
      alt: 'A blue business card printed with a quote from Robert Greene',
      video: '/videos/thought-card.mp4',
    },
    detail: 'thought-card',
  },
  {
    slug: 'wix-freelance',
    title: 'Wix freelance practice',
    summary:
      'A run of client sites built on Wix, grown entirely on word of mouth. Scoping, building, and handover.',
    date: '2020-03',
    medium: 'build',
    practices: ['Product & Design'],
    domains: ['Consumer & Commerce'],
    tech: ['Wix', 'Analytics'],
    cover: { src: '/images/wix.png', alt: 'The Wix logo' },
    detail: 'wix',
  },
  {
    slug: 'blotto',
    title: 'Blotto',
    summary:
      'A drinking card game, built as a proof of concept for shipping Unity titles to the Google Play store.',
    date: '2020-01',
    medium: 'build',
    practices: ['Engineering', 'Product & Design'],
    domains: ['Gaming'],
    tech: ['Unity', 'C#'],
    cover: {
      src: '/images/blotto.png',
      alt: "An illustration of a body head-first in a toilet, titled 'Blotto'",
    },
    detail: 'blotto',
    status: 'offline',
  },
  {
    slug: 'livein',
    title: 'LiveIn',
    summary:
      'A real estate brokerage that used augmented reality to let prospective buyers walk a property before visiting it.',
    date: '2019-10',
    medium: 'build',
    practices: ['Product & Design'],
    domains: ['AR & VR', 'Consumer & Commerce'],
    tech: ['Trello'],
    cover: {
      src: '/images/livein.png',
      alt: 'A leaf logo with lines across it like a circuit board',
    },
    detail: 'livein',
    status: 'archived',
  },

  // ------------------------------------------------------------ 2014 - 2017
  {
    slug: 'ar-piano-lessons',
    title: 'Augmented piano lessons',
    summary:
      'Projection-based piano tuition that turns the keyboard itself into the interface and the lesson into a game.',
    date: '2017-12',
    medium: 'build',
    practices: ['Product & Design', 'Engineering'],
    domains: ['AR & VR', 'Music & Art'],
    tech: ['Unity', 'C#'],
    cover: {
      src: '/images/ar-piano-lessons.png',
      alt: 'Piano keys against a background of musical notes',
      video: '/videos/ar-piano-lessons.mp4',
    },
    detail: 'ar-piano-lessons',
  },
  {
    slug: 'traffic-jam-vr',
    title: 'Traffic Jam VR',
    summary:
      'Built over a three-day VR game jam with a team assembled from strangers. Shipped playable on Vive and Daydream.',
    date: '2017-08',
    medium: 'build',
    practices: ['Product & Design', 'Engineering'],
    domains: ['AR & VR', 'Gaming'],
    tech: ['Unity', 'C#'],
    cover: { src: '/images/traffic-jam-vr.png', alt: 'A low-poly street corner' },
    detail: 'traffic-jam-vr',
  },
  {
    slug: 'the-fourth-branch',
    title: 'The Fourth Branch',
    summary:
      'Plain-language summaries of bills in Congress, with a vote of your own that you can hold against how your representative voted.',
    date: '2017-01',
    medium: 'build',
    practices: ['Product & Design', 'Writing & Research'],
    domains: ['Civic & Social'],
    tech: ['Basecamp', 'Slack'],
    cover: {
      src: '/images/the-fourth-branch.png',
      alt: 'A logo of two blue lines with a red line behind them, shaped like a staple',
      video: '/videos/the-fourth-branch-review.mp4',
    },
    detail: 'the-fourth-branch',
    status: 'archived',
  },
  {
    slug: 'memorial-website',
    title: 'Memorial website',
    summary:
      'A site built to hold a relative\'s music, photographs, and story in one place that outlasts a hard drive.',
    date: '2014-10',
    medium: 'build',
    practices: ['Product & Design'],
    domains: ['Civic & Social', 'Music & Art'],
    tech: ['Wix'],
    cover: {
      src: '/images/memorial-website.jpg',
      alt: "A painted mural of a person in a hat with the name 'Ferle' beneath",
    },
    detail: 'memorial-website',
  },
  {
    slug: 'customizable-phone-case',
    title: 'Customisable phone case',
    summary:
      'A phone case for the early-2010s iPhone that swapped its face plate and carried a battery, so it could be restyled without being replaced.',
    date: '2014-07',
    medium: 'build',
    practices: ['Hardware & Fabrication', 'Product & Design'],
    domains: ['Consumer & Commerce'],
    cover: {
      src: '/images/custom-phone-case.png',
      alt: 'A mechanical engineering mockup of an iPhone in a case',
      video: '/videos/phone-case.mp4',
    },
    detail: 'customizable-phone-case',
  },

  // ------------------------------------------------- Midnight, 2025 onward
  //
  // Titles and channel are taken from YouTube's oEmbed record. Dates are the
  // one in the video title, or the watch page's uploadDate for the three that
  // carry none. Each summary is condensed from that video's own
  // description, read at the time of writing, with the promotional tail and
  // the link dump cut.
  //
  // Still not claimed: whether Jay hosted or appeared. The descriptions name
  // him for particular segments in a few of these and say nothing either way
  // in the rest, so the entries say nothing either way in all of them.
  //
  // No cover. Their only published thumbnails live on YouTube's CDN, and
  // hotlinking those is what put a broken image on the home page.
  {
    slug: 'fireside-2026-08-26',
    title: 'Fireside Dev Hang: Build Club Demos and a New Partner Sprint',
    summary:
      'Two Build Club dApps demo live, the Kuira Zealy sprint wraps up, a new partner sprint with VIA Labs opens across the Cardano and Midnight bridge, and applications open for the next Build Club cohort.',
    date: '2026-08-26',
    medium: 'stream',
    practices: ['Developer Relations'],
    domains: ['Blockchain & Web3'],
    href: 'https://www.youtube.com/watch?v=D8gG7MgVaqo',
    org: 'Midnight',
  },
  {
    slug: 'fireside-2026-08-12',
    title: 'Fireside Dev Hang: Cardano ↔ Midnight + Hack Buenos Aires Winners Demo',
    summary:
      'VIA Labs running between Cardano and Midnight, with a live USDM demo in both directions, plus demos from the Hack Buenos Aires winners.',
    date: '2026-08-12',
    medium: 'stream',
    practices: ['Developer Relations'],
    domains: ['Blockchain & Web3'],
    href: 'https://www.youtube.com/watch?v=j7n_tVuAXJY',
    org: 'Midnight',
  },
  {
    slug: 'fireside-2026-07-15',
    title: 'Fireside Dev Hang: Nightpass & Midnight Skills',
    summary:
      'Two projects on privacy-preserving applications and developer tooling: Nightpass, which extends the EU Battery Passport so suppliers can prove compliance without revealing business data, and Midnight Skills, an open knowledge marketplace of Compact examples, SDK guides and dApp templates.',
    date: '2026-07-15',
    medium: 'stream',
    practices: ['Developer Relations'],
    domains: ['Blockchain & Web3', 'Developer Tools'],
    href: 'https://www.youtube.com/watch?v=SFPftUbx8MU',
    org: 'Midnight',
  },
  {
    slug: 'fireside-2026-06-24',
    title: 'Fireside Dev Hang: Mobile dApps on Midnight',
    summary:
      'Kuira Labs on their Android SDK: why it was built, what developers get out of the box, and live demos of mobile applications running on Midnight.',
    date: '2026-06-24',
    medium: 'stream',
    practices: ['Developer Relations'],
    domains: ['Blockchain & Web3'],
    href: 'https://www.youtube.com/watch?v=LnuLQCFW-SA',
    org: 'Midnight',
  },
  {
    slug: 'fireside-2026-06-10',
    title: 'Fireside Dev Hang: EffectStream, Offer Files & Community Updates',
    summary:
      'Data availability and why it matters for multi-chain applications, where EffectStream fits, and Offer Files with zSwap settlement.',
    date: '2026-06-10',
    medium: 'stream',
    practices: ['Developer Relations'],
    domains: ['Blockchain & Web3', 'Developer Tools'],
    href: 'https://www.youtube.com/watch?v=dwsO4q8SKwo',
    org: 'Midnight',
  },
  {
    slug: 'fireside-2026-05-27',
    title: 'Fireside Dev Hang: Nightstream Demo, Docs & Zealy Updates',
    summary:
      'Multi-chain development: how Nightstream works, a Midnight to EVM cross-chain template, games and DeFi demos, and a walkthrough of the new leaderboard tutorial and repo.',
    date: '2026-05-27',
    medium: 'stream',
    practices: ['Developer Relations'],
    domains: ['Blockchain & Web3', 'Developer Tools'],
    href: 'https://www.youtube.com/watch?v=LSHlK9jLbVk',
    org: 'Midnight',
  },
  {
    slug: 'fireside-2026-05-13',
    title: 'Fireside Dev Hang: Midnight Validators and Beyond',
    summary:
      'Stevan on Midnight validator updates.',
    date: '2026-05-13',
    medium: 'stream',
    practices: ['Developer Relations'],
    domains: ['Blockchain & Web3'],
    href: 'https://www.youtube.com/watch?v=VNarrbnp01M',
    org: 'Midnight',
  },
  {
    slug: 'fireside-2026-04-29',
    title: 'Fireside Dev Hang: Midnight Leaderboard, Ascend & Community Updates',
    summary:
      'An overview of the Midnight Leaderboard dApp and a walkthrough of the code behind it, an ecosystem partner announcement for Ascend, and bounty programme updates.',
    date: '2026-04-29',
    medium: 'stream',
    practices: ['Developer Relations'],
    domains: ['Blockchain & Web3'],
    href: 'https://www.youtube.com/watch?v=Bd5GZW1HgvQ',
    org: 'Midnight',
  },
  {
    slug: 'fireside-2026-04-01',
    title: 'Fireside Dev Hang: Coding, Wallets & Mobile on Midnight',
    summary:
      'A live coding session, a wallet testing and tooling review, and Brick Towers debuting mobile apps built in the ecosystem.',
    date: '2026-04-01',
    medium: 'stream',
    practices: ['Developer Relations'],
    domains: ['Blockchain & Web3', 'Developer Tools'],
    href: 'https://www.youtube.com/watch?v=qelrd9u7Eu8',
    org: 'Midnight',
  },
  {
    slug: 'fireside-2026-03-04',
    title: 'Fireside Dev Hang: Tutorials, Tooling & Community Updates',
    summary:
      'A new Academy module, Build Club updates, tutorials and repos in progress, community dev updates, and the Aliit Fellowship.',
    date: '2026-03-04',
    medium: 'stream',
    practices: ['Developer Relations'],
    domains: ['Blockchain & Web3', 'Developer Tools'],
    href: 'https://www.youtube.com/watch?v=cYpxk2jO1RM',
    org: 'Midnight',
  },
  {
    slug: 'fireside-2026-02-04',
    title: 'Fireside Dev Hang: Global Game Jam highlights, community updates and more',
    summary:
      'Two game developers on their Global Game Jam projects and what they learned building with Midnight, plus a community-built Unity and wallet integration.',
    date: '2026-02-04',
    medium: 'stream',
    practices: ['Developer Relations'],
    domains: ['Blockchain & Web3', 'Gaming'],
    href: 'https://www.youtube.com/watch?v=uQi44bEkOMs',
    org: 'Midnight',
  },
  {
    slug: 'fireside-2026-01-28',
    title: 'Fireside Dev Hang: Contributor Hub highlights, Validator updates and Game Jam',
    summary:
      'Contributor Hub and content bounty highlights, survey results and the technical roadmap, and Game Jam updates.',
    date: '2026-01-28',
    medium: 'stream',
    practices: ['Developer Relations'],
    domains: ['Blockchain & Web3', 'Gaming'],
    href: 'https://www.youtube.com/watch?v=ScKZptFWy6M',
    org: 'Midnight',
  },
  {
    slug: 'fireside-2026-01-07',
    title: 'Fireside Dev Hang with Erick from Mesh',
    summary:
      'Building dApps on Preview with the MeshJS starter template, an overview of gaming on Midnight, and community updates covering Build Club, the Global Game Jam and a new MCP server.',
    date: '2026-01-07',
    medium: 'stream',
    practices: ['Developer Relations'],
    domains: ['Blockchain & Web3'],
    href: 'https://www.youtube.com/watch?v=MAeO80EgMjQ',
    org: 'Midnight',
  },
  {
    slug: 'fireside-2025-12-10',
    title: 'Fireside Dev Hang with Ben Beckmann',
    summary:
      'NIGHT and DUST for developers: a discussion with Ben Beckmann and Lauren Lee on what the two-token design means for people building on the network.',
    date: '2025-12-10',
    medium: 'stream',
    practices: ['Developer Relations'],
    domains: ['Blockchain & Web3'],
    href: 'https://www.youtube.com/watch?v=IFVd9GxeqcQ',
    org: 'Midnight',
  },
  {
    slug: 'fireside-2025-11-12',
    title: 'Fireside Dev Hang, November 12 2025',
    summary:
      'Building privacy-ready dApps with Arweave and NMKR: what Ar.io is and how it powers privacy-focused apps, and how NMKR adds a privacy layer to NFTs.',
    date: '2025-11-12',
    medium: 'stream',
    practices: ['Developer Relations'],
    domains: ['Blockchain & Web3'],
    href: 'https://www.youtube.com/watch?v=VkVqXjESaww',
    org: 'Midnight',
  },
  {
    slug: 'fireside-2025-11-05',
    title: 'Fireside Dev Hang, November 5 2025',
    summary:
      'Building and deploying on Midnight end to end: project setup, writing a contract, deploying it to testnet, and interacting with it once it is there.',
    date: '2025-11-05',
    medium: 'stream',
    practices: ['Developer Relations'],
    domains: ['Blockchain & Web3'],
    href: 'https://www.youtube.com/watch?v=VRzk8bXFMqM',
    org: 'Midnight',
  },
  {
    slug: 'fireside-2025-10-15',
    title: 'Fireside Dev Hang, October 15 2025',
    summary:
      'A Hacktoberfest session on open source, Midnight\'s contributions and MIPs, and how to get involved.',
    date: '2025-10-15',
    medium: 'stream',
    practices: ['Developer Relations'],
    domains: ['Blockchain & Web3'],
    href: 'https://www.youtube.com/watch?v=hfbyh3kJQo0',
    org: 'Midnight',
  },
  {
    slug: 'fireside-2025-09-10',
    title: 'Fireside Dev Hang, September 10 2025',
    summary:
      'Why NFTs matter and what is available for them: the NFT module library covering standard NFTs and zkNFTs, dApp examples, and a live ticket review.',
    date: '2025-09-10',
    medium: 'stream',
    practices: ['Developer Relations'],
    domains: ['Blockchain & Web3'],
    href: 'https://www.youtube.com/watch?v=0yabI2MvN9E',
    org: 'Midnight',
  },
  {
    slug: 'hilo-hack-demo-day',
    title: 'Hilo Hack Demo Day',
    summary:
      'Teams showing what they built on Midnight across AI, identity, healthcare and finance, from early prototypes to more complete applications. Four-minute demos, each followed by live questions.',
    date: '2026-05-01',
    medium: 'stream',
    practices: ['Developer Relations'],
    domains: ['Blockchain & Web3'],
    href: 'https://www.youtube.com/watch?v=OO-EDDVdt2g',
    org: 'Midnight',
  },
  {
    slug: 'consensus-privacy-apps',
    title: 'LIVE at Consensus: Building Privacy Apps for Real-World Use w/ Hackquest & Midnight DevRel',
    summary:
      'A livestreamed conversation with HackQuest founder Kevin Li on how Midnight supports developers building privacy-focused applications, covering education, developer programmes and hands-on initiatives.',
    date: '2026-02-11',
    medium: 'stream',
    practices: ['Developer Relations'],
    domains: ['Blockchain & Web3'],
    href: 'https://www.youtube.com/watch?v=4EM8rk1K4LA',
    org: 'Midnight',
  },
  {
    slug: 'mini-dapp-hackathon-showcase',
    title: 'Mini DApp Hackathon Showcase',
    summary:
      'A live showcase of the projects built during the Midnight Mini DApp virtual hackathon.',
    date: '2025-08-22',
    medium: 'stream',
    practices: ['Developer Relations'],
    domains: ['Blockchain & Web3'],
    href: 'https://www.youtube.com/watch?v=ELq-mE9-08E',
    org: 'Midnight',
  },

  // --------------------------------------------------------------- Writing
  //
  // All three carry Jay's byline on midnight.network. Summaries are drawn from
  // the articles themselves, read at the time of writing, not from their
  // titles.
  {
    slug: 'mlh-midnight-july-hack-winners',
    title: 'Celebrating seven winners from the MLH x Midnight July hack',
    summary:
      'A write-up of the July hackathon, where 84 teams built applications around zero-knowledge technology and seven projects won across the privacy infrastructure and gaming categories.',
    date: '2026-08-20',
    medium: 'writing',
    practices: ['Writing & Research', 'Developer Relations'],
    domains: ['Blockchain & Web3', 'Gaming'],
    href: 'https://midnight.network/blog/celebrating-seven-winners-from-mlh-x-midnight-july-hack',
    org: 'Midnight',
  },
  {
    slug: 'midnight-improvement-proposal-process',
    title: 'The Midnight Improvement Proposal Process',
    summary:
      'How protocol changes get made: Midnight Problem Statements name an issue, Midnight Improvement Proposals answer it, and the article walks the token standards through that path from six identified token types to the proposals still being debated.',
    date: '2026-08-04',
    medium: 'writing',
    practices: ['Writing & Research', 'Developer Relations'],
    domains: ['Blockchain & Web3', 'Developer Tools'],
    href: 'https://midnight.network/blog/improvement-proposal-process',
    org: 'Midnight',
  },
  {
    slug: 'night-and-dust-for-developers',
    title: 'The implications of NIGHT and DUST for developers',
    summary:
      'Midnight splits the value token from the resource that pays for transactions. The piece works through what that separation buys a developer: operational cost that does not move with the token price, sponsored onboarding, and execution that never sits in a public mempool.',
    date: '2026-01-19',
    medium: 'writing',
    practices: ['Writing & Research', 'Developer Relations'],
    domains: ['Blockchain & Web3', 'Developer Tools'],
    href: 'https://midnight.network/blog/the-implications-of-night-and-dust-for-developers',
    org: 'Midnight',
  },
  // ----------------------------------------------------------------- Repos
  //
  // Found by walking the JAlbertCode account. Dates are the last commit on the
  // default branch, from the GitHub API, which is when the work was last
  // actually done rather than when the repo happened to be created: the
  // leaderboard was started in January and still being worked on in May.
  //
  // Every summary below is drawn from that repository's own README, not from
  // its name: the six here are the
  // ones whose READMEs actually describe the project. The rest of the account
  // is forks, empty repos, and stubs, and a description invented for those
  // would be exactly the failure mode this file exists to prevent.
  {
    slug: 'example-mip-0014',
    title: 'MIP-0014 reference implementation',
    summary:
      'A working reference for the Native Unshielded Token Standard: a fungible asset that lives as unshielded UTXOs on the ledger, publicly valued and owned by an address.',
    date: '2026-09-01',
    medium: 'build',
    practices: ['Engineering', 'Developer Relations'],
    domains: ['Blockchain & Web3', 'Developer Tools'],
    tech: ['TypeScript', 'Compact'],
    href: 'https://github.com/JAlbertCode/example-mip-0014',
    org: 'Midnight',
  },
  {
    slug: 'layerworks-storefront',
    title: 'Layerworks Print Co. storefront',
    summary:
      'The shop front for a small-batch 3D print business: a featured product with an interactive GLB preview and a commissions intake, deployed to Pages by Actions.',
    date: '2026-08-31',
    medium: 'build',
    practices: ['Engineering', 'Product & Design', 'Hardware & Fabrication'],
    domains: ['Consumer & Commerce'],
    tech: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
    href: 'https://jalbertcode.github.io/3d-printing-store/',
  },
  {
    slug: 'family-affairs',
    title: 'Family Affairs',
    summary:
      'A competitive family battle card game for two to six players, played live on their own phones.',
    date: '2026-08-17',
    medium: 'build',
    practices: ['Engineering', 'Product & Design'],
    domains: ['Gaming'],
    tech: ['TypeScript'],
    href: 'https://github.com/JAlbertCode/family-affairs',
  },
  {
    slug: 'zk-leaderboard',
    title: 'Midnight Leaderboard',
    summary:
      'An arcade-style leaderboard where every score is a new entry, like a cabinet, and the player decides how they appear on it: anonymous, as a wallet address, or under a name they choose.',
    date: '2026-05-15',
    medium: 'build',
    practices: ['Engineering'],
    domains: ['Blockchain & Web3', 'Gaming'],
    tech: ['TypeScript', 'Compact'],
    href: 'https://github.com/JAlbertCode/zk-leaderboard',
    org: 'Midnight',
  },
  {
    slug: 'example-locker',
    title: 'Locker rental example',
    summary:
      'A locker whose four-digit combination never reaches the chain. Only its hash is stored, and opening the locker produces a proof that the combination matches without revealing the digits.',
    date: '2026-04-01',
    medium: 'build',
    practices: ['Engineering', 'Developer Relations'],
    domains: ['Blockchain & Web3', 'Developer Tools'],
    tech: ['TypeScript', 'Compact'],
    href: 'https://github.com/JAlbertCode/example-locker',
    org: 'Midnight',
  },
  {
    slug: 'midnight-tip-jar',
    title: 'Midnight Tip Jar',
    summary:
      'A minimal tip jar: connect a Lace wallet, read balances, and send transfers through the DApp Connector API.',
    date: '2026-03-28',
    medium: 'build',
    practices: ['Engineering'],
    domains: ['Blockchain & Web3'],
    tech: ['TypeScript', 'Compact'],
    href: 'https://github.com/JAlbertCode/midnight-tip-jar',
    org: 'Midnight',
  },
]
