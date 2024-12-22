import Image from 'next/image'
import Link from 'next/link'
import { Typography } from '../../lib/mui'

export default function PlayerChain() {
  return (
    <main className="flex min-h-screen flex-col items-center px-24">
      <div className="mx-10 max-w-6xl">
        <div className="flex items-center gap-4 mt-10">
          <Image
            src="/images/playerchain.png"
            width={72}
            height={72}
            alt="PlayerChain Development"
          />
          <h1>PlayerChain: A New Approach to Blockchain Gaming</h1>
        </div>

        <p>
          Analyzed and presented on Playmint&apos;s innovative PlayerChain
          technology. PlayerChain represents a paradigm shift in blockchain
          gaming architecture, where each player operates their own blockchain
          that synchronizes with others, replacing the traditional global shared
          state model.
        </p>

        <h2>Technical Overview</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Players act as nodes in the blockchain network, eliminating the need
            for separate consensus computers
          </li>
          <li>
            Achieves significantly faster update times (50ms vs traditional
            2000ms)
          </li>
          <li>
            Each player maintains their own state that syncs with other players
          </li>
          <li>Removes the requirement for gas fees in gaming transactions</li>
        </ul>

        <h2>Development Journey</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Previous Challenges:</strong> Addressed issues with
            traditional blockchain gaming including transaction times and gas
            fees
          </li>
          <li>
            <strong>Architecture Innovation:</strong> Rethought blockchain
            implementation specifically for gaming needs
          </li>
          <li>
            <strong>Proof of Concept:</strong> Space Shooter game demonstrating
            PlayerChain&apos;s capabilities
          </li>
          <li>
            <strong>Performance Gains:</strong> Dramatic improvement in response
            times for better gaming experience
          </li>
        </ul>

        <h2>Impact on Game Development</h2>
        <p>
          PlayerChain technology represents a significant advancement in
          blockchain gaming, offering developers a new approach to building
          decentralized games without the traditional performance limitations of
          blockchain technology. This innovation enables more responsive
          gameplay while maintaining the benefits of decentralization.
        </p>

        <div className="gap-1 flex flex-wrap mt-4 mb-10">
          <Typography variant="body2" className="skills">
            Blockchain Gaming
          </Typography>
          <Typography variant="body2" className="skills">
            Distributed Systems
          </Typography>
          <Typography variant="body2" className="skills">
            Game Development
          </Typography>
          <Typography variant="body2" className="skills">
            Technical Analysis
          </Typography>
          <Typography variant="body2" className="skills">
            Architecture Design
          </Typography>
          <Typography variant="body2" className="skills">
            Technical Writing
          </Typography>
          <Typography variant="body2" className="skills">
            Research
          </Typography>
        </div>

        <div className="video-responsive my-6">
          <iframe
            src="https://www.youtube.com/embed/1AgjLWaMQvw"
            title="PlayerChain: A New Approach to Blockchain Gaming"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="flex justify-center my-10">
          <div className="links mx-2">
            <Link
              href="https://www.youtube.com/watch?v=1AgjLWaMQvw&t=2108s"
              target="_blank"
            >
              Watch Stream
            </Link>
          </div>
          <div className="links mx-2">
            <Link
              href="https://github.com/playmint/playerchain-demo"
              target="_blank"
            >
              View Github Repository
            </Link>
          </div>
          <div className="links mx-2">
            <Link href="https://playmint.com/" target="_blank">
              Visit Playmint
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
