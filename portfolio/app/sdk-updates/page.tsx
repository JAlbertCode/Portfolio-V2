import Image from 'next/image'
import Link from 'next/link'
import { Typography } from '../../lib/mui'

export default function SDKUpdates() {
  return (
    <main className="flex min-h-screen flex-col items-center px-24">
      <div className="mx-10 max-w-6xl">
        <div className="flex items-center gap-4 mt-10">
          <Image
            src="/images/sdk-updates.png"
            width={72}
            height={72}
            alt="ChainSafe SDK Updates Review"
          />
          <h1>ChainSafe Gaming SDK Updates & Token Streaming Demo</h1>
        </div>

        <p>
          Presented and demonstrated the latest updates to ChainSafe&apos;s
          Web3.Unity SDK, including major improvements to blockchain integration
          and a live demonstration of token streaming functionality.
        </p>

        <h2>Major SDK Updates</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Multi-Chain Support:</strong> Added seamless switching
            between multiple blockchains within a single project
          </li>
          <li>
            <strong>Event Subscriptions:</strong> New support for subscribing to
            blockchain events
          </li>
          <li>
            <strong>Improved Developer Experience:</strong> Introduced Contract
            ABI to C# generator for easier smart contract interactions
          </li>
          <li>
            <strong>Enhanced WebGL Support:</strong> Added WalletConnect support
            and improved Web3Auth workflow
          </li>
          <li>
            <strong>Marketplace Sample:</strong> New demo showcasing NFT
            marketplace functionality
          </li>
          <li>
            <strong>MUD Integration:</strong> Initial support for building
            on-chain autonomous worlds
          </li>
        </ul>

        <h2>Token Streaming Demo</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Live demonstration of real-time token streaming implementation
          </li>
          <li>
            Showcased continuous payment flows using blockchain technology
          </li>
          <li>Explained technical considerations and integration approaches</li>
          <li>Discussed practical use cases and applications</li>
        </ul>

        <h2>Breaking Changes & Architecture</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Web3Accessor renamed to Web3Unity for clarity</li>
          <li>Unified wallet interface with single modal window</li>
          <li>Simplified scene management for samples</li>
          <li>Service adapter pattern implementation for better modularity</li>
          <li>Immediate blockchain read access upon initialization</li>
        </ul>

        <div className="gap-1 flex flex-wrap mt-4 mb-10">
          <Typography variant="body2" className="skills">
            Unity
          </Typography>
          <Typography variant="body2" className="skills">
            Web3
          </Typography>
          <Typography variant="body2" className="skills">
            Blockchain Gaming
          </Typography>
          <Typography variant="body2" className="skills">
            SDK Development
          </Typography>
          <Typography variant="body2" className="skills">
            Live Demo
          </Typography>
          <Typography variant="body2" className="skills">
            Technical Communication
          </Typography>
          <Typography variant="body2" className="skills">
            Token Streaming
          </Typography>
          <Typography variant="body2" className="skills">
            Developer Relations
          </Typography>
        </div>

        <div className="video-responsive my-6">
          <iframe
            src="https://www.youtube.com/embed/rgArGYfoT8o"
            title="ChainSafe Gaming SDK Updates & Token Streaming Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="flex justify-center my-10">
          <div className="links mx-2">
            <Link
              href="https://www.youtube.com/watch?v=rgArGYfoT8o"
              target="_blank"
            >
              Watch Stream
            </Link>
          </div>
          <div className="links mx-2">
            <Link
              href="https://github.com/ChainSafe/web3.unity"
              target="_blank"
            >
              View SDK Repository
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
