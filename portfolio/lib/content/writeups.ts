/**
 * Long-form write-ups for entries that have one.
 *
 * V2 had these as twenty near-identical hand-written page components, each
 * repeating the same layout markup. Here the layout lives in app/work/[slug]
 * and this file holds only what differs. Adding a write-up means adding a
 * record, not a route.
 *
 * The prose is Jay's, carried over as written. Where V2 broke a paragraph with
 * <br/><br/> it has become a separate paragraph, and numbered lists that were
 * faked with line breaks are now real lists, but the words have not been
 * rewritten.
 */

export type Block =
  | { kind: 'youtube'; id: string; caption?: string }
  | { kind: 'video'; src: string; caption?: string }
  | { kind: 'image'; src: string; alt: string; caption?: string }
  | { kind: 'embed'; src: string; title: string; ratio?: 'video' | 'page' }
  | { kind: 'links'; title?: string; items: Array<{ label: string; href: string }> }
  | { kind: 'section'; title: string; body?: string[]; bullets?: string[]; ordered?: boolean }

export interface Writeup {
  /** Matches Entry.detail. */
  slug: string
  /** Used as the page heading when it should differ from the entry title. */
  heading?: string
  body: string[]
  blocks?: Block[]
  /**
   * Set where the copy was clearly generated rather than written. Nothing is
   * rendered from this; it is a marker so these are easy to find and rewrite.
   */
  needsRewrite?: true
}

export const writeups: Writeup[] = [
  /* ------------------------------------------------------------------ 2023+ */
  {
    slug: 'lilypad-frontend',
    heading: 'Lilypad frontend guide',
    needsRewrite: true,
    body: [
      'A guide to help developers set up and customise their own frontend for the Lilypad Network, so they can build usable interfaces onto the decentralised compute network rather than driving it from a terminal.',
    ],
    blocks: [
      {
        kind: 'section',
        title: 'What the guide covers',
        bullets: [
          'Setting up a Next.js development environment step by step',
          'The frontend architecture and what each of the key components does',
          'Customising the interface for a specific use case',
          'Integrating cleanly with the Lilypad backend',
        ],
      },
      {
        kind: 'section',
        title: 'Impact',
        body: [
          'The guide lowers the barrier to entry for anyone building on Lilypad. With clear instructions and example code, a developer can stand up their own frontend and start using the distributed compute underneath it the same day.',
        ],
      },
      {
        kind: 'links',
        items: [
          {
            label: 'Read the guide',
            href: 'https://blog.lilypadnetwork.org/setting-up-your-lilypad-front-end',
          },
          {
            label: 'Frontend repository',
            href: 'https://github.com/Lilypad-Tech/lilypad-front-end',
          },
        ],
      },
    ],
  },
  {
    slug: 'lilypad',
    heading: 'Lilypad Network',
    needsRewrite: true,
    body: [
      'Lilypad is a decentralised compute network that lets anyone run a Docker container across a distributed set of providers. My work on it focused on user experience and documentation, making the platform reachable for developers and businesses who were not already inside it.',
    ],
    blocks: [
      {
        kind: 'section',
        title: 'What I contributed',
        bullets: [
          'Worked with the development team to identify and document the core use cases',
          'Wrote the documentation explaining how to use the distributed compute capabilities',
          'Helped articulate what the platform was for, per user segment',
          'Improved the onboarding path for new users',
        ],
      },
      {
        kind: 'section',
        title: 'What it runs on',
        bullets: [
          'Docker, so any containerised workload can run on the network',
          'The Filecoin Virtual Machine, providing the decentralised compute resources',
          'Bacalhau, powering the distributed computing itself',
          'A Go implementation on the backend',
        ],
      },
      {
        kind: 'links',
        items: [
          {
            label: 'Read the post',
            href: 'https://blog.lilypadnetwork.org/hop-into-the-future-with-lilypad-the-distributed-compute-network',
          },
        ],
      },
    ],
  },
  {
    slug: 'sdk-updates',
    heading: 'ChainSafe Gaming SDK updates and token streaming',
    needsRewrite: true,
    body: [
      "Presented the latest updates to ChainSafe's web3.unity SDK, including significant changes to blockchain integration, and demonstrated token streaming live.",
    ],
    blocks: [
      {
        kind: 'section',
        title: 'What shipped in the SDK',
        bullets: [
          'Multi-chain support, so a single project can switch between chains',
          'Event subscriptions against on-chain events',
          'A contract ABI to C# generator, removing a lot of hand-written glue',
          'WalletConnect support on WebGL and an improved Web3Auth workflow',
          'A marketplace sample demonstrating NFT marketplace functionality',
          'Initial MUD integration for building on-chain autonomous worlds',
        ],
      },
      { kind: 'youtube', id: 'rgArGYfoT8o', caption: 'The full stream, including the live demo.' },
    ],
  },
  {
    slug: 'playerchain',
    heading: 'Playermint and player-owned chains',
    needsRewrite: true,
    body: [
      'A stream exploring a decentralised gaming model in which every player operates their own chain rather than sharing global state with everyone else, and what that changes about latency, cost, and who can be trusted with what.',
    ],
    blocks: [
      { kind: 'youtube', id: '1AgjLWaMQvw', caption: 'The full conversation.' },
      { kind: 'links', items: [{ label: 'Playmint', href: 'https://playmint.com/' }] },
    ],
  },
  {
    slug: 'web3-game-workshop',
    heading: 'Web2 to Web3 game development workshop',
    needsRewrite: true,
    body: [
      'A hands-on workshop at ETHDenver 2023 taking a traditional web game and turning it into a blockchain-enabled one, without letting the gameplay get worse in the process.',
    ],
    blocks: [
      {
        kind: 'section',
        title: 'What we covered',
        bullets: [
          'Adding blockchain functionality to existing game mechanics through smart contracts',
          'Wiring up wallet connectivity',
          'Handling in-game assets on-chain',
          'Keeping the game playable while all of the above is happening',
        ],
      },
      { kind: 'youtube', id: 'c_gONMVIH8o', caption: 'The full workshop recording.' },
      {
        kind: 'links',
        items: [
          {
            label: 'Watch in the ETHDenver playlist',
            href: 'https://www.youtube.com/watch?v=c_gONMVIH8o&list=PLTqxK4gjB7c21kxqRD4m8uhOxt8yRa7bk&index=11',
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------- Mix3d */
  {
    slug: 'mix3d',
    heading: 'Building the next iteration of the internet',
    body: [
      'At the height of the 2021 bull run, my friend and I found that we were being bombarded by questions about cryptocurrency, DeFi, NFTs, and DAOs. After having the same conversations over and over, we both decided we would work together to create a community where anyone could learn about Web3, with the hopes that we would build products and services together.',
      'Together, we worked on informational content, articles, dApps, games, clothing, investment groups, and a Web3 boot camp. Everyone volunteered in hopes that we could build a self-sustaining community, but our focus shifted as we each obtained roles in Web3. The community has a little over 100 members, and many have transitioned into Web3 roles at organizations like Coinbase, Protocol Labs, Celsius, and DAOPunks.',
      'The community is now inactive, but you can still join our Discord, and access all of our documents. To appreciate the speed at which it grew in a few months, I encourage you to visit the retrospective.',
    ],
    blocks: [
      {
        kind: 'links',
        items: [
          {
            label: 'How we Mix3d up 2021',
            href: 'https://bejewled-butternut-e77.notion.site/How-we-Mix3d-up-2021-1b1daff9497a4674847758e18a3f25a9?pvs=4',
          },
          {
            label: 'Join the community',
            href: 'https://bejewled-butternut-e77.notion.site/Mix3d-81ffeb7a8e6d48f1b2f7c85f9ca06924?pvs=4',
          },
        ],
      },
    ],
  },
  {
    slug: 'mix3d-clothing',
    heading: 'The start of the phygital movement',
    body: [
      'To my surprise, some of the most active members of the Mix3d community were interested in how Web3 would impact fashion. After several meetings, I came up with the idea for a phygital (physical plus digital) marketplace and a pipeline for releasing collections.',
    ],
    blocks: [
      {
        kind: 'section',
        title: 'The release cycle',
        ordered: true,
        bullets: [
          'Mix3d designers sketch clothing and create tech packs for manufacturers.',
          'Mix3d 3D modelers create models out of sketches.',
          'Create augmented reality filters for Snapchat, Facebook, and Instagram so users can post pictures wearing their clothing before having the physical products.',
          'Create a copy of the 3D models with fewer polygons to be used in Decentraland.',
          'Use MagicaVoxel to create a 3D version of the clothing that can be used in Sandbox.',
          'Mint the original 3D model as an NFT to be used for presales.',
          'List the 3D model on the Mix3d marketplace and allow users to preview the clothing in augmented reality.',
        ],
      },
      { kind: 'youtube', id: 'kLt6oNk0kuE', caption: 'The augmented reality filter in use.' },
      {
        kind: 'image',
        src: '/images/mix3d-clothing.png',
        alt: 'A 3D model of a light pink sweater beside a voxel version of the same sweater',
        caption: 'The same garment as a high-poly model and as voxels for Sandbox.',
      },
      {
        kind: 'section',
        title: 'Why the order matters',
        body: [
          'Using this strategy, we would be able to raise the funds to manufacture a collection without worrying if there was a market for it. Since production would take longer than most other clothing lines, we would be able to airdrop the social network filters and models for Decentraland and Sandbox every couple of months leading up to receiving the physical product.',
        ],
      },
      { kind: 'youtube', id: '37kbs3wdnyw', caption: 'Previewing a garment in augmented reality.' },
      { kind: 'youtube', id: 'GwfzWbsx6-M', caption: 'The preview store proof of concept.' },
    ],
  },
  {
    slug: 'invisible-maze-game',
    heading: 'Discovering the metaverse',
    body: [
      'A few months after establishing Mix3d, the community was interested in learning about the metaverse. Many were interested in buying land and building on platforms like Decentraland and Sandbox, and we came up with the idea of a generative maze game. Every day, a new maze would be generated, and users would pay a fee to enter the arena. A portion of their fee would be deposited into a prize pool that would sit at the end of the maze for someone to claim.',
      'The Invisible Maze game was my attempt at testing Decentraland before deploying our game. On my 30th birthday, I launched a prototype for the Mix3d community, and I challenged our members to compete to solve the invisible maze and claim 0.1 ETH.',
      'I posted this video announcing the launch, and I provided written instructions for anyone to get involved. I pressed the publish button and went off to dinner. Immediately after, the community and my followers on social media went into a frenzy, competing for the prize.',
    ],
    blocks: [
      { kind: 'youtube', id: 'A3yQi8tDNj8', caption: 'The launch announcement.' },
      {
        kind: 'section',
        title: 'What I took away from it',
        ordered: true,
        bullets: [
          'Decentraland is too limited for indie developers to build worthwhile experiences. The plots are too small, and the height limitation prevented us from building challenging mazes, which is why I decided to make the maze invisible.',
          'The objects were not programmable, which prevented us from creating moving platforms and in-game interactions. It is more of a digital museum than a place for people to create and play games.',
          'The experience made me reevaluate the value of metaverses with limited land. Web2 thrived because developer tools and distribution platforms were free to use. Web3 games are struggling because indie developers do not have the capital to experiment, and even if they do, the tools they have to develop are extremely limited.',
        ],
      },
      {
        kind: 'links',
        items: [
          {
            label: 'The original documents',
            href: 'https://bejewled-butternut-e77.notion.site/Jay-Albert-s-Birthday-Scavenger-Hunt-731c1ef552c84487a0996922e1127d1b',
          },
        ],
      },
    ],
  },
  {
    slug: 'tokensets',
    heading: 'Exploring Web3 finance',
    body: [
      'I started investing in Bitcoin and alternative coins in 2014 while working at a mutual fund. I was one of a handful of people at the company who were exposed to Bitcoin. The Associate Vice President of Investments Management Technology and I discussed offering a crypto product to clients but found that the market cap was too small, and mutual funds were too heavily regulated, so we would never get approval. Years later, I was happy to discover the emergence of DeFi.',
      'While working on the Mix3d community I had several friends and family ask what cryptocurrencies they should invest in. Besides legal reasons, I try to avoid giving any financial advice because novice investors act on emotion and are inconsistent. I have considered launching a fund several times, and DeFi presented an opportunity to create a strategy without any organization becoming the custodian of the funds. I found TokenSets and put together a strategy on the Polygon network to minimize trading fees while having access to most tokens. The strategy is weighted by market cap and includes all of the currencies that I thought would be crucial to the development of Web3.',
      'While TokenSets is an incredible tool, ultimately I was unsure of the legal implications and did not want to take the leap of being responsible for the funds of family and friends. Luckily, I did not move forward because LUNA imploded months later.',
    ],
    blocks: [
      {
        kind: 'section',
        title: 'Institutional Web3 investing',
        body: [
          'In late 2022, I was searching for my next role and applied to a firm that creates crypto indexes for ETF issuers. The firm asked me to put together an index, and I chose to create an index for smart contracts. I provided the document below, and it led me to the next round of the interview process. I was in the last rounds of interviewing for a few different companies and decided to accept an offer at another organization instead of continuing the interview process.',
        ],
      },
      {
        kind: 'embed',
        src: 'https://drive.google.com/file/d/1UTfK7B3IMzMIcLps4rdTUZ9T_94odbbI/preview',
        title: 'Smart Contract 5 Index',
        ratio: 'page',
      },
    ],
  },

  /* -------------------------------------------------------------- Fullstack */
  {
    slug: 'werewolf',
    heading: 'Fullstack Academy capstone',
    body: [
      'For the final project at Fullstack Academy, we were split into teams of four and given two and a half weeks to define and develop a project. Everyone in our group was a fan of tabletop games, and we decided to give new life to an old concept. The game we settled on was Werewolf, a social deduction game where some players are on the bad team and others are on the good team, but neither player knows the other’s identity. Throughout the game, players vote to kill each other based on their suspicions, and the last team standing wins. Our team put a new spin on it by letting groups form inside online video conferences and by programmatically managing all of the events in the game.',
    ],
    blocks: [
      { kind: 'video', src: '/videos/werewolf-preview.mp4', caption: 'Gameplay demo.' },
      {
        kind: 'section',
        title: 'How a round runs',
        body: [
          'The game proceeds in alternating night and day rounds, beginning with night. At the beginning of the night, only the werewolves can see. Everyone else is sleeping, so their video is stopped. While everyone sleeps, the werewolves choose a villager to kill. When they have made their kill, they too sleep.',
          'After the werewolves have made their kill, the village doctor awakens and, not knowing who has been killed, chooses a villager (who can be themselves) to heal. The villager chosen will survive the night if the werewolves chose to kill them. Once the doctor has made their choice, they go back to sleep.',
          'Next, the village seer awakens. The seer can choose one villager to have their true identity revealed. If the villager chosen is a werewolf, the seer will be told so. Otherwise, the seer returns to sleep.',
          'Once the seer has finished, we transition to daytime, and the villagers find out who has been killed during the night. That villager is immediately dead and out of the game. They do not reveal their identity.',
          'Daytime is very simple. All the living villagers gather and decide whom to kill in hopes of ridding themselves of werewolves. As soon as a majority votes for a single villager, that villager is immediately dead and out of the game.',
          'There are no restrictions on speech. Any living villager can say anything they want: truth, misdirection, nonsense, or a bare-faced lie. Dead villagers may not speak at all. If a villager senses the others are beginning to turn on them and they want to protest their innocence or reveal some information, such as the seer’s visions, they must do it before the votes go through.',
          'Once a player is killed, night falls, and the cycle repeats. The villagers win if they kill all of the werewolves. The werewolves win if they kill enough villagers that the numbers are even.',
        ],
      },
      {
        kind: 'links',
        items: [
          { label: 'View the code', href: 'https://github.com/Werewolf-Capstone/Werewolf-Final' },
        ],
      },
    ],
  },
  {
    slug: 'grace-potter',
    heading: 'Grace Potter',
    body: [
      'During the senior phase of Fullstack Academy, three other students and I were tasked with developing an e-commerce platform. One of our team members made pottery in his free time, and we decided to build a platform to sell the products he made.',
    ],
    blocks: [
      {
        kind: 'links',
        items: [{ label: 'View the code', href: 'https://github.com/Grace-Potter/grace-potter' }],
      },
    ],
  },
  {
    slug: 'mobile-vendor',
    heading: 'The on-demand economy',
    body: [
      'Consumers are increasingly expecting an on-demand experience for every product and service they engage with. Amazon has set the tone for two-day deliveries and is working on reducing turnaround time from days to hours. To deliver products and services within hours of a request, companies will begin to manage mobile distribution centers and mobile service providers.',
    ],
    blocks: [
      {
        kind: 'video',
        src: '/videos/mobile-vendor.mp4',
        caption: 'The product of a week of research and development.',
      },
      {
        kind: 'section',
        title: "Toyota's vision",
        body: [
          'Toyota is already anticipating mobile distribution centers and mobile service providers. The video below shares the full vision of a Mobile Electronic Marketplace.',
        ],
      },
      { kind: 'video', src: '/videos/Toyota.mp4', caption: "Toyota's Mobile Electronic Marketplace." },
      {
        kind: 'section',
        title: 'Where it goes',
        body: [
          'As several companies work on autonomous vehicles, I see an opportunity to spring up a third-party service that can be deployed now and can integrate with future autonomous systems.',
        ],
      },
    ],
  },
  {
    slug: 'thought-card',
    heading: 'Augmented business card',
    body: [
      'After sharing some augmented reality ideas with a friend, he requested that I augment his business card. Over several years, he compiled quotes that he felt moved by and wanted to share the quotes with the people who had his business card. He called the idea a Thought Card.',
      'After a couple of weeks, I was able to include the quotes using an image target, and I decided to include a virtual button that would link viewers to a store where they could purchase the book. The links can be swapped out for affiliate marketing links, allowing the card owner to profit from viewers who bought the book.',
    ],
    blocks: [{ kind: 'video', src: '/videos/thought-card.mp4', caption: 'Application preview.' }],
  },
  {
    slug: 'wix',
    heading: 'Freelance work',
    body: [
      'While searching for my next career, I reached out to a few friends and family, letting everyone know that I was open to new opportunities. During that time, a friend connected me with a couple of businesses that were looking to create websites for their services. Below are the businesses I worked with and the websites I delivered using the Wix website builder.',
    ],
    blocks: [
      {
        kind: 'image',
        src: '/images/spike.png',
        alt: 'A long triangle piercing two concentric circles',
        caption:
          'Health Shield Solutions. A two-step process that disinfects surfaces, then re-coats the area with a nano barrier protectant giving 30 to 90 days of continuous protection from re-infection.',
      },
      {
        kind: 'image',
        src: '/images/RT.png',
        alt: 'A black box with the letters RT in bold',
        caption:
          'RT Advisory Team. A growth and compliance consulting firm, covering patents, branding, product manufacturing, and product placement.',
      },
    ],
  },
  {
    slug: 'blotto',
    heading: 'Blotto origins',
    body: [
      'After years of tinkering with the game engine Unity, I decided it was time to commit to a project that I could develop and publish within a few months. I have discussed making games with a few close friends in the past, and I finally convinced one that we were both capable of launching a game on the app store. The friend I convinced is an optometrist by trade, so I gave him a crash course on Unity over a weekend, and we decided he would be in charge of game design, while I would be in charge of development. After spending a few weeks understanding our limitations, we arrived at Blotto.',
      'Blotto is British slang for drunk, and it alludes to soaking up alcohol the way blotting paper soaks up ink. Blotto is a drinking card game filled with challenges for all people over 21 years of age to enjoy.',
    ],
  },
  {
    slug: 'livein',
    heading: 'LiveIn vision',
    body: [
      'LiveIn sought to allow real estate buyers and renters to discover available units within a building by scanning the facade of the building using their smartphones. Potential clients would then be offered augmented reality tours and the opportunity to book a viewing via a mobile application. Once a client found a property that suited their needs, they would be able to make an offer and come to an agreement with the owner via the app, eliminating the need for a broker and reducing the cost to transact.',
    ],
    blocks: [
      {
        kind: 'links',
        items: [
          { label: 'Instagram', href: 'https://www.instagram.com/liveinar/' },
          { label: 'Facebook', href: 'https://www.facebook.com/liveinar/' },
        ],
      },
    ],
  },
  {
    slug: 'ar-piano-lessons',
    heading: 'What are augmented piano lessons?',
    body: [
      'Augmented reality presents an opportunity to revolutionize the way we learn how to play instruments. Imagine sitting in front of a piano, not knowing how to play it, and being able to play a song by following notes projected on the instrument. Now we have the ability to take the game mechanics of Rock Band and apply them to real instruments. If you are having trouble picturing augmented lessons, take a look at RocketJump’s animation from 2010.',
    ],
    blocks: [
      { kind: 'video', src: '/videos/future-rock-band.mp4', caption: "RocketJump's 2010 animation." },
      {
        kind: 'section',
        title: 'What that has to do with me',
        body: [
          'During a course on project management for computer information systems, I decided to challenge myself by playing the role of developer and creating a proof of concept for augmented piano lessons. I chose the piano because it is a significant segment of the musical instrument market and the instrument I am most familiar with. To avoid expenses, I decided the proof of concept would be triggered by an image target that would be similar to a piano. Once the image is recognized, the software plays a stream of notes that a user can hit to a familiar tune.',
        ],
      },
      {
        kind: 'video',
        src: '/videos/ar-piano-lessons.mp4',
        caption: 'The proof of concept running on my desktop, using my phone as the image target.',
      },
    ],
  },
  {
    slug: 'traffic-jam-vr',
    heading: 'Virtual reality game jam',
    body: [
      'I find virtual and augmented reality fascinating, and I spend endless nights considering the possibilities and implications for humanity. I wanted to enter the space, so I joined a meetup group for virtual reality to learn about development. The group posted an event called VR Game Jam, bringing together developers, digital artists, and audiographers to compete to make the best virtual reality game in 48 hours. The theme was to make everyday life interesting, and our team decided to make a game out of a traffic cop’s experience. Our idea was to have the user stand in the middle of an intersection and control the flow of traffic, with the goal of avoiding a collision. Each car would have varying speeds and wait times before it chose to ignore the traffic controller and proceed on its own.',
      'I initially joined the team as a developer, but two other members had strong development backgrounds, so I took the opportunity to learn about the other roles. I was exposed to Unity and was tasked with placing the digital assets for the map, finding audio clips for the cars, and helping with the game design.',
    ],
    blocks: [
      {
        kind: 'links',
        items: [
          { label: 'Download the game', href: 'https://coreygreen1108gmailcom.itch.io/traffic-jam-vr' },
        ],
      },
    ],
  },
  {
    slug: 'the-fourth-branch',
    heading: 'What is The Fourth Branch?',
    body: [
      'The Fourth Branch summarizes bills being debated in Congress, allows users to vote on the summaries, and compares their votes to those of their Congressmen.',
    ],
    blocks: [
      {
        kind: 'video',
        src: '/videos/the-fourth-branch-review.mp4',
        caption: 'A demo of the final product for desktop.',
      },
    ],
  },
  {
    slug: 'memorial-website',
    heading: 'Rest on the web',
    body: [
      'My Uncle Eric was an amazing man who found himself in unfortunate circumstances. It is hard to find people who match his creativity and talent, which included drawing, dancing, composing music, and storytelling. He brightened every room he walked into and sought to be everyone’s greatest advocate.',
      'When Tio Eddie passed away, my father took care of the funeral arrangements. The funeral home offered us a package that included a website where people could go to pay their respects and share memories. My father and I thought it was a unique idea, and we decided we would make it ourselves. My father shared some of his ideas for the website, and I used Wix to create it. We created the website to reflect Tio Eddie’s interests in music, his experiences, his family, and his friends.',
    ],
    blocks: [
      {
        kind: 'links',
        items: [
          { label: 'Visit the website', href: 'https://jonathanalbert0115.wixsite.com/ferlesmemorial' },
        ],
      },
    ],
  },
  {
    slug: 'customizable-phone-case',
    heading: 'Unlimited styles for an unlimited phone',
    body: [
      'The iPhone case our team sought to design would place a screen on the back of an iPhone that the user could customize with an application. The user would have been able to send a static image to the screen or an animation. We also entertained the idea of building applications designed to utilize both screens, like a game of Guess Who or Battleship.',
      'The dimensions for the inner casing were taken from Apple’s website. The extension at the bottom of the case would contain the chip to control the screen on the back of the phone. The screen is protected by a transparent shell.',
    ],
    blocks: [{ kind: 'video', src: '/videos/phone-case.mp4', caption: 'The design walkthrough.' }],
  },
]

export function writeupFor(slug: string): Writeup | undefined {
  return writeups.find((w) => w.slug === slug)
}
