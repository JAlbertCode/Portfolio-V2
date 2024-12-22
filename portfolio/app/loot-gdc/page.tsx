import Image from 'next/image'
import Link from 'next/link'
import { Typography } from '../../lib/mui'

export default function LootGDC() {
  return (
    <main className="flex min-h-screen flex-col items-center px-24">
      <div className='mx-10 max-w-6xl'>
        <div className='flex items-center gap-4 mt-10'>
          <Image
            src="/images/loot-gdc.png"
            width={72}
            height={72}
            alt="ChainSafe GDC Lootboxes"
          />
          <h1>On-Chain Lootboxes at GDC</h1>
        </div>

        <p>Collaborated with ChainSafe to develop and present a technical demonstration of on-chain lootboxes at the Game Developers Conference (GDC). This project showcased how blockchain technology can enhance traditional gaming mechanics while ensuring transparency and fairness.</p>

        <h2>Project Overview</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Demonstrated the implementation of verifiable on-chain randomness for lootbox mechanics</li>
          <li>Created technical documentation and presentation materials for GDC audience</li>
          <li>Showcased integration between Unity game engine and blockchain technology</li>
          <li>Explained benefits of transparent and verifiable reward systems</li>
        </ul>

        <h2>Technical Implementation</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Smart Contracts:</strong> Developed using Solidity for transparent lootbox mechanics</li>
          <li><strong>Unity Integration:</strong> Created seamless connection between game and blockchain</li>
          <li><strong>Web3.unity SDK:</strong> Utilized ChainSafe&apos;s SDK for blockchain integration</li>
          <li><strong>Chainlink VRF:</strong> Implemented verifiable random functions for fair distribution</li>
        </ul>

        <h2>Impact and Reception</h2>
        <p>The presentation at GDC helped demonstrate practical applications of blockchain technology in gaming, specifically addressing common concerns about lootbox fairness and transparency. The technical implementation showed how developers can create more trustworthy gaming experiences while maintaining engaging gameplay mechanics.</p>

        <div className='gap-1 flex flex-wrap mt-4 mb-10'>
          <Typography variant='body2' className='skills'>Blockchain Gaming</Typography>
          <Typography variant='body2' className='skills'>Unity</Typography>
          <Typography variant='body2' className='skills'>Smart Contracts</Typography>
          <Typography variant='body2' className='skills'>Solidity</Typography>
          <Typography variant='body2' className='skills'>Web3</Typography>
          <Typography variant='body2' className='skills'>Technical Writing</Typography>
          <Typography variant='body2' className='skills'>Documentation</Typography>
          <Typography variant='body2' className='skills'>Public Speaking</Typography>
          <Typography variant='body2' className='skills'>Game Development</Typography>
        </div>

        <div className='flex justify-center my-10'>
          <div className='links mx-2'>
            <Link href="https://blog.chainsafe.io/onchain-lootboxes-gdc/" target='_blank'>
              Read Article
            </Link>
          </div>
          <div className='links mx-2'>
            <Link href="https://github.com/ChainSafe/web3.unity" target='_blank'>
              View SDK Repository
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}