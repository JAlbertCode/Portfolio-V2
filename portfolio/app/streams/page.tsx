'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function StreamsPage() {
  const streams = [
    {
      title: 'Moddio Game Engine Stream',
      date: 'January 2025',
      description:
        'Explored how Moddio is transforming game development with AI-powered tools and innovative funding through indie.fun. Discussed their vision for the future of game creation and upcoming developments in the space.',
      link: 'https://www.youtube.com/watch?v=OsfmODTBQaA',
      image: '/images/Moddio.png',
      imageAlt: 'Moddio Game Engine Stream',
    },
    {
      title: 'Discover Games & Whalepass Stream',
      date: 'January 2025',
      description:
        'A deep dive with Hayder from Discover Games and Whalepass, exploring their platform that bridges Web2 and Web3 gaming. Featured their developer tools including battle passes and strategies for enhancing player engagement.',
      link: 'https://www.youtube.com/watch?v=eOjg6ZJvpTM',
      image: '/images/discover-games.png',
      imageAlt: 'Discover Games Platform Stream',
    },
    {
      title: 'Farworld Stream',
      date: 'January 2025',
      description:
        'Showcased Farworld and explored the evolution of AI in gaming. Discussed their innovative approaches to game development and the future landscape of AI-enhanced gaming experiences.',
      link: 'https://www.youtube.com/watch?v=8wQHD2qj8bs',
      image: '/images/farworld.png',
      imageAlt: 'Farworld AI Gaming Stream',
    },
    {
      title: 'Playermint Stream',
      date: 'December 2024',
      description:
        'Explored a new approach to decentralized gaming where each player operates their own blockchain instead of relying on a global shared state.',
      link: 'https://www.youtube.com/watch?v=1AgjLWaMQvw',
      image: '/images/playerchain.png',
      imageAlt:
        'Chainsafe stream banner featuring David Amor, Martin Maurer, and Jay Albert',
    },
    {
      title: 'ChainSafe Gaming SDK Update Stream',
      date: 'November 2024',
      description:
        "Presented major updates to ChainSafe's Web3.Unity SDK and demonstrated token streaming functionality in a live stream",
      link: 'https://www.youtube.com/live/rgArGYfoT8o',
      image: '/images/sdk-updates.png',
      imageAlt: 'ChainSafe Gaming SDK Updates stream screenshot',
    },
    {
      title: 'Hatchyverse Stream',
      date: 'October 2024',
      description:
        'An in-depth analysis of Hatchyverse, a decentralized gaming ecosystem that allows community members to build games using shared IP.',
      link: 'https://www.youtube.com/watch?v=QNr3moS0B3o',
      image: '/images/hatchyverse.png',
      imageAlt: 'Hatchyverse platform analysis and overview',
    },
    {
      title: 'TruWorld Stream',
      date: 'October 2024',
      description:
        'Explored TruWorld, an AR geo-location game that combines NFTs with real-world exploration. Similar to Pokemon Go but with blockchain integration.',
      link: 'https://www.youtube.com/watch?v=Y9EHHzF6Rzw',
      image: '/images/trumen-world.png',
      imageAlt: 'TruWorld stream showcase',
    },
    {
      title: 'CLUAIDO Stream',
      date: 'September 2024',
      description:
        'Explored CLUAIDO, an AI-powered detective game where players solve procedurally generated murder cases by freely interrogating AI-driven suspects.',
      link: 'https://www.youtube.com/watch?v=SdJ9oo9d2Os',
      image: '/images/cluaido-stream.png',
      imageAlt: 'CLUAIDO game stream showcase',
    },
    {
      title: 'Quantum Command Stream',
      date: 'September 2024',
      description:
        'Streamed with Quantum Command, a shooter game that adapts its maps based on player behavior and equipment.',
      link: 'https://www.youtube.com/watch?v=RMemvjcBoNE',
      image: '/images/quantum-command.png',
      imageAlt: 'Quantum Command game analysis stream',
    },
    {
      title: 'HackFS Winner Stream',
      date: 'July 2024',
      description:
        'Featured the winning project from HackFS, showcasing a PvP battle game that combines Monaverse maps with ChainSafe SDK.',
      link: 'https://www.youtube.com/watch?v=rTQhJHbDaWM',
      image: '/images/hackfs-winner.png',
      imageAlt: 'HackFS Winner stream showing NFT battle game demo',
    },
    {
      title: 'Hyperplay & Coinracer Stream',
      date: 'July 2024',
      description:
        'Explored Hyperplay, a trusted game launcher for blockchain games, featuring Coinracer.',
      link: 'https://www.youtube.com/watch?v=70DahC2GHXs',
      image: '/images/hyperplay-stream.jpeg',
      imageAlt: 'Hyperplay and Coinracer platform showcase stream',
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center px-6 md:px-12 py-12">
      <div className="max-w-5xl w-full">
        <h1 className="text-4xl font-bold mb-8">Game Development Streams</h1>
        <p className="text-lg mb-8">
          A collection of live streams focused on innovative teams building the
          future of gaming. These streams showcase various projects,
          technologies, and educational content for the blockchain gaming
          community.
        </p>

        <div className="space-y-6">
          {streams.map((stream, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-82 relative">
                  <Image
                    src={stream.image}
                    alt={stream.imageAlt}
                    width={256}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full p-3 md:p-4">
                  <div className="flex flex-col md:flex-row justify-between items-start">
                    <h2 className="text-lg font-semibold">{stream.title}</h2>
                    <span className="text-gray-500 text-sm mt-1 md:mt-0">
                      {stream.date}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm mt-2 mb-2">
                    {stream.description}
                  </p>
                  <Link
                    href={stream.link}
                    target="_blank"
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center text-sm"
                  >
                    Watch Stream →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
