import Image from 'next/image'
import Link from 'next/link'
import { Typography } from '../../lib/mui'

export default function Web3GameWorkshop() {
  return (
    <main className="flex min-h-screen flex-col items-center px-24">
      <div className='mx-10 max-w-6xl'>
        <div className='flex items-center gap-4 mt-10'>
          <Image
            src="/images/ethdenver-workshop.avif"
            width={72}
            height={72}
            alt="ETHDenver Workshop"
          />
          <h1>Web2 to Web3 Game Development Workshop</h1>
        </div>

        {/* Rest of the content stays exactly the same */}
        <p>Led a hands-on workshop at ETHDenver 2023 demonstrating how to transform traditional web games into blockchain-enabled experiences. The session focused on maintaining engaging gameplay while leveraging blockchain features for enhanced functionality.</p>

        <h2>Workshop Content</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Step-by-step guide on integrating Web3 features into existing games</li>
          <li>Best practices for blockchain integration in gaming</li>
          <li>Live coding demonstration using real game examples</li>
          <li>Discussion of common challenges and solutions</li>
        </ul>

        <h2>Technical Topics Covered</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Smart Contract Integration:</strong> Adding blockchain functionality to game mechanics</li>
          <li><strong>Wallet Connectivity:</strong> Implementing Web3 wallet connections</li>
          <li><strong>Asset Management:</strong> Handling in-game assets on the blockchain</li>
          <li><strong>User Experience:</strong> Maintaining smooth gameplay while adding Web3 features</li>
        </ul>

        <h2>Workshop Objectives</h2>
        <p>The workshop aimed to bridge the gap between traditional game development and blockchain technology. Participants learned practical approaches to Web3 game development that could be immediately applied to their own projects, while understanding the advantages and challenges of blockchain integration in gaming.</p>

        <div className='gap-1 flex flex-wrap mt-4 mb-10'>
          <Typography variant='body2' className='skills'>Game Development</Typography>
          <Typography variant='body2' className='skills'>Web3</Typography>
          <Typography variant='body2' className='skills'>Smart Contracts</Typography>
          <Typography variant='body2' className='skills'>Public Speaking</Typography>
          <Typography variant='body2' className='skills'>Technical Education</Typography>
          <Typography variant='body2' className='skills'>Live Coding</Typography>
          <Typography variant='body2' className='skills'>Workshop Facilitation</Typography>
          <Typography variant='body2' className='skills'>Blockchain</Typography>
        </div>

        <div className="video-responsive my-6">
          <iframe
            src="https://www.youtube.com/embed/c_gONMVIH8o"
            title="Web2 to Web3 Game Development Workshop - ETHDenver 2023"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className='flex justify-center my-10'>
          <div className='links mx-2'>
            <Link href="https://www.youtube.com/watch?v=c_gONMVIH8o&list=PLTqxK4gjB7c21kxqRD4m8uhOxt8yRa7bk&index=11" target='_blank'>
              Watch Workshop
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}