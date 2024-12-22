import Image from 'next/image'
import Link from 'next/link'
import { Typography } from '../../lib/mui'

export default function LilypadFrontend() {
  return (
    <main className="flex min-h-screen flex-col items-center px-24">
      <div className='mx-10 max-w-6xl'>
        <div className='flex items-center gap-4 mt-10'>
          <Image
            src="/images/lilypad-frontend.avif"
            width={72}
            height={72}
            alt="Screenshot of Lilypad frontend code"
          />
          <h1>Lilypad Frontend Guide</h1>
        </div>

        <p>Created a comprehensive guide to help developers set up and customize their own frontend for the Lilypad Network. This documentation enables developers to create user-friendly interfaces for interacting with the decentralized compute network.</p>

        <h2>Guide Highlights</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Step-by-step instructions for setting up a Next.js development environment</li>
          <li>Detailed explanation of the frontend architecture and key components</li>
          <li>Examples of customizing the UI to match specific use cases</li>
          <li>Best practices for integrating with the Lilypad Network backend</li>
        </ul>

        <h2>Technical Implementation</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Next.js Framework:</strong> Utilized for its robust development features and excellent developer experience</li>
          <li><strong>TypeScript Integration:</strong> Ensures type safety and better code maintainability</li>
          <li><strong>React Components:</strong> Created modular, reusable components for common Lilypad interactions</li>
          <li><strong>Documentation Structure:</strong> Organized content to progress from basic setup to advanced customization</li>
        </ul>

        <h2>Impact</h2>
        <p>This guide significantly reduces the barrier to entry for developers looking to build on the Lilypad Network. By providing clear, actionable instructions and example code, it enables developers to quickly set up their own customized frontends and start leveraging the platform&apos;s distributed computing capabilities.</p>

        <div className='gap-1 flex flex-wrap mt-4 mb-10'>
          <Typography variant='body2' className='skills'>Technical Writing</Typography>
          <Typography variant='body2' className='skills'>Documentation</Typography>
          <Typography variant='body2' className='skills'>React</Typography>
          <Typography variant='body2' className='skills'>Next.js</Typography>
          <Typography variant='body2' className='skills'>TypeScript</Typography>
          <Typography variant='body2' className='skills'>Frontend Development</Typography>
          <Typography variant='body2' className='skills'>UI Development</Typography>
          <Typography variant='body2' className='skills'>Git</Typography>
          <Typography variant='body2' className='skills'>Developer Relations</Typography>
        </div>

        <div className='flex justify-center my-10'>
          <div className='links mx-2'>
            <Link href="https://blog.lilypadnetwork.org/setting-up-your-lilypad-front-end" target='_blank'>
              Read Guide
            </Link>
          </div>
          <div className='links mx-2'>
            <Link href="https://github.com/bacalhau-project/lilypad-module-homepage" target='_blank'>
              View Frontend Repository
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}