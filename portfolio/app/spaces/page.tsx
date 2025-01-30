'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function SpacesPage() {
  const spaces = [
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
    }
  ]

  return (
    <main className="flex min-h-screen flex-col items-center px-6 md:px-12 py-12">
      <div className="max-w-5xl w-full">
        <h1 className="text-4xl font-bold mb-8">Twitter Spaces</h1>
        <p className="text-lg mb-8">
          A collection of Twitter Spaces where I discuss various aspects of Web3 gaming,
          AI integration, and game development. These conversations explore emerging trends
          and opportunities in the intersection of gaming and blockchain technology.
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
