'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function SpacesPage() {
  const spaces = [
    {
      title: 'AI Integration in Gaming',
      date: 'February 2025',
      description:
        'Explored how artificial intelligence is transforming game development and player experiences in the Web3 space.',
      link: 'https://x.com/_WEB3M_/status/1889111873653793027',
      image: '/images/ai-gaming.png',
      imageAlt: 'Twitter Space on AI Integration in Gaming',
    },
    {
      title: 'Future of Web3 Gaming',
      date: 'February 2025',
      description:
        'Discussed the evolving landscape of Web3 gaming and the key trends shaping its future.',
      link: 'https://x.com/_WEB3M_/status/1889471630860230932',
      image: '/images/future-web3-gaming.png',
      imageAlt: 'Twitter Space on Future of Web3 Gaming',
    },
    {
      title: 'Will AI Agents Start the Gaming Bull Run?',
      date: 'January 2025',
      description:
        'Explored the potential impact of AI agents in gaming, discussing how they could drive adoption and innovation in the blockchain gaming space.',
      link: 'https://x.com/G7_DAO/status/1877739546827178250',
      image: '/images/game7.jpeg',
      imageAlt: 'Game7 Twitter Space on AI Agents in Gaming',
    },
    {
      title: 'Leaders in AI: Shaping the Next Era of Automation',
      date: 'January 2025',
      description:
        'Joined industry leaders to discuss the future of AI automation, sharing insights on how AI is transforming development workflows and creating new opportunities.',
      link: 'https://x.com/_WEB3M_/status/1875306129628291488',
      image: '/images/leaders-in-ai.png',
      imageAlt: 'Twitter Space on AI Leadership and Automation',
    },
    {
      title: 'Building Your Dream: A Guide to Publishing Games in Web3',
      date: 'October 2024',
      description:
        'Shared practical insights and strategies for game developers looking to publish their games in the Web3 ecosystem, covering key considerations and best practices.',
      link: 'https://x.com/_WEB3M_/status/1848050211723067686',
      image: '/images/publishing.jpeg',
      imageAlt: 'Twitter Space on Web3 Game Publishing',
    },
    {
      title: 'Rise of Web3 Gaming',
      date: 'September 2024',
      description:
        'Explored the growing momentum in Web3 gaming, discussing emerging trends, successful projects, and the future outlook for blockchain-based games.',
      link: 'https://x.com/_WEB3M_/status/1832141772975444463',
      image: '/images/rise-of-web3-gaming.jpeg',
      imageAlt: 'Twitter Space on the Rise of Web3 Gaming',
    },
    {
      title: 'Security Best Practices in Web3',
      date: 'April 2024',
      description:
        'Discussed essential security considerations and best practices for Web3 developers and users, focusing on protecting assets and maintaining secure environments.',
      link: 'https://x.com/TimeToTerminal/status/1775168818131722482',
      image: '/images/web3-security.jpeg',
      imageAlt: 'Twitter Space on Web3 Security Best Practices',
    },
    {
      title: 'Responsible Gaming in Web3',
      date: 'April 2024',
      description:
        'Discussed the importance of responsible gaming practices in Web3, exploring frameworks and strategies to ensure player well-being in blockchain gaming.',
      link: 'https://x.com/SNEGbet/status/1777653520088301877',
      image: '/images/responsible-gaming.jpeg',
      imageAlt: 'SNEG Twitter Space on Responsible Gaming',
    },
    {
      title: 'Rewriting the Rules of Game Design',
      date: 'March 2024',
      description:
        'Explored how Web3 technology is transforming traditional game design principles, discussing new opportunities and challenges in blockchain game development.',
      link: 'https://x.com/ChainSafeGaming/status/1764971150382117222',
      image: '/images/rewriting-the-rules.jpeg',
      imageAlt: 'ChainSafe Gaming Twitter Space on Game Design Innovation',
    },
    {
      title: 'Gaming Analytics and Growth',
      date: 'May 2023',
      description:
        'Discussed the role of analytics in gaming with Covalent, exploring how data insights drive game development and player engagement strategies.',
      link: 'https://x.com/Covalent_HQ/status/1655009610623844353',
      image: '/images/covalent.jpeg',
      imageAlt: 'Covalent Twitter Space on Gaming Analytics',
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center px-6 md:px-12 py-12">
      <div className="max-w-5xl w-full">
        <h1 className="text-4xl font-bold mb-8">Twitter Spaces</h1>
        <p className="text-lg mb-8">
          A collection of Twitter Spaces where I discuss various aspects of Web3
          gaming, AI integration, and game development. These conversations
          explore emerging trends and opportunities in the intersection of
          gaming and blockchain technology.
        </p>

        <div className="space-y-6">
          {spaces.map((space, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-82 relative">
                  <Image
                    src={space.image}
                    alt={space.imageAlt}
                    width={256}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full p-3 md:p-4">
                  <div className="flex flex-col md:flex-row justify-between items-start">
                    <h2 className="text-lg font-semibold">{space.title}</h2>
                    <span className="text-gray-500 text-sm mt-1 md:mt-0">
                      {space.date}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm mt-2 mb-2">
                    {space.description}
                  </p>
                  <Link
                    href={space.link}
                    target="_blank"
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center text-sm"
                  >
                    View Space →
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
