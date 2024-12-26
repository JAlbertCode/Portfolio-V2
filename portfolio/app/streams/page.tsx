'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function StreamsPage() {
  const streams = [
    {
      title: 'Playermint Stream',
      date: 'December 2024',
      description: 'Explored a new approach to decentralized gaming where each player operates their own blockchain instead of relying on a global shared state.',
      link: 'https://www.youtube.com/watch?v=1AgjLWaMQvw',
      image: '/images/playerchain.png',
      imageAlt: 'Chainsafe stream banner featuring David Amor, Martin Maurer, and Jay Albert'
    },
    {
      title: 'ChainSafe Gaming SDK Update Stream',
      date: 'November 2024',
      description: "Presented major updates to ChainSafe's Web3.Unity SDK and demonstrated token streaming functionality in a live stream",
      link: 'https://www.youtube.com/live/rgArGYfoT8o',
      image: '/images/sdk-updates.png',
      imageAlt: 'ChainSafe Gaming SDK Updates stream screenshot'
    },
    {
      title: 'Hatchyverse Stream',
      date: 'October 2024',
      description: 'An in-depth analysis of Hatchyverse, a decentralized gaming ecosystem that allows community members to build games using shared IP.',
      link: 'https://www.youtube.com/watch?v=QNr3moS0B3o',
      image: '/images/hatchyverse.png',
      imageAlt: 'Hatchyverse platform analysis and overview'
    },
    {
      title: 'TruWorld Stream',
      date: 'October 2024',
      description: 'Explored TruWorld, an AR geo-location game that combines NFTs with real-world exploration. Similar to Pokemon Go but with blockchain integration.',
      link: 'https://www.youtube.com/watch?v=Y9EHHzF6Rzw',
      image: '/images/trumen-world.png',
      imageAlt: 'TruWorld stream showcase'
    },
    {
      title: 'CLUAIDO Stream',
      date: 'September 2024',
      description: 'Explored CLUAIDO, an AI-powered detective game where players solve procedurally generated murder cases by freely interrogating AI-driven suspects.',
      link: 'https://www.youtube.com/watch?v=SdJ9oo9d2Os',
      image: '/images/cluaido-stream.png',
      imageAlt: 'CLUAIDO game stream showcase'
    },
    {
      title: 'Quantum Command Stream',
      date: 'September 2024',
      description: 'Streamed with Quantum Command, a shooter game that adapts its maps based on player behavior and equipment.',
      link: 'https://www.youtube.com/watch?v=RMemvjcBoNE',
      image: '/images/quantum-command.png',
      imageAlt: 'Quantum Command game analysis stream'
    },
    {
      title: 'HackFS Winner Stream',
      date: 'July 2024',
      description: 'Featured the winning project from HackFS, showcasing a PvP battle game that combines Monaverse maps with ChainSafe SDK.',
      link: 'https://www.youtube.com/watch?v=rTQhJHbDaWM',
      image: '/images/hackfs-winner.png',
      imageAlt: 'HackFS Winner stream showing NFT battle game demo'
    },
    {
      title: 'Hyperplay & Coinracer Stream',
      date: 'July 2024',
      description: 'Explored Hyperplay, a trusted game launcher for blockchain games, featuring Coinracer.',
      link: 'https://www.youtube.com/watch?v=70DahC2GHXs',
      image: '/images/hyperplay-stream.jpeg',
      imageAlt: 'Hyperplay and Coinracer platform showcase stream'
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center px-24 py-12">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold mb-8">Game Development Streams</h1>
        <p className="text-lg mb-8">
          A collection of live streams and workshops focused on blockchain gaming, 
          game development, and Web3 technology. These streams showcase various projects,
          technologies, and educational content for the gaming community.
        </p>
        
        <div className="space-y-12">
          {streams.map((stream, index) => (
            <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/3">
                  <div className="relative aspect-video">
                    <Image 
                      src={stream.image}
                      alt={stream.imageAlt}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-2xl font-semibold">{stream.title}</h2>
                    <span className="text-gray-500">{stream.date}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{stream.description}</p>
                  <Link 
                    href={stream.link}
                    target="_blank"
                    className="text-blue-600 hover:text-blue-800 font-medium"
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
  );
}
