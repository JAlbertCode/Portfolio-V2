import Image from 'next/image'
import Link from 'next/link'
import { Typography } from '../../lib/mui'

export default function Lilypad() {
  return (
    <main className="flex min-h-screen flex-col items-center px-24">
      <div className='mx-10 max-w-6xl'>
        <div className='flex items-center gap-4 mt-10'>
          <Image
            src="/images/lilypad.avif"
            width={72}
            height={72}
            alt="Lilypad Network logo"
          />
          <h1>Lilypad Network</h1>
        </div>

        <p>Lilypad is an innovative decentralized compute network that enables users to run any Docker container across a distributed network of providers. As a contributor to this project, I focused on enhancing user experience and documentation to make the platform more accessible to developers and businesses.</p>

        <h2>Key Contributions</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Collaborated with the development team to identify and document core use cases for the platform</li>
          <li>Created comprehensive documentation explaining how to leverage Lilypad's distributed compute capabilities</li>
          <li>Helped articulate the platform's value proposition for different user segments</li>
          <li>Contributed to improving the user onboarding experience</li>
        </ul>

        <h2>Technical Overview</h2>
        <p>Lilypad Network is built on several key technologies:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Docker Integration:</strong> Allows users to run any containerized workload on the network</li>
          <li><strong>Filecoin Virtual Machine:</strong> Provides the backbone for decentralized compute resources</li>
          <li><strong>Bacalhau:</strong> Powers distributed computing capabilities</li>
          <li><strong>Go Implementation:</strong> Ensures robust and efficient backend operations</li>
        </ul>

        <h2>Impact and Learning</h2>
        <p>Working on Lilypad provided valuable insights into distributed computing and blockchain technology applications. The project demonstrates how decentralized networks can provide accessible, scalable computing resources while maintaining security and efficiency.</p>

        <div className='gap-1 flex flex-wrap mt-4 mb-10'>
          <Typography variant='body2' className='skills'>Technical Writing</Typography>
          <Typography variant='body2' className='skills'>Documentation</Typography>
          <Typography variant='body2' className='skills'>Distributed Computing</Typography>
          <Typography variant='body2' className='skills'>Blockchain</Typography>
          <Typography variant='body2' className='skills'>Docker</Typography>
          <Typography variant='body2' className='skills'>Go</Typography>
          <Typography variant='body2' className='skills'>Linux</Typography>
          <Typography variant='body2' className='skills'>Content Creation</Typography>
          <Typography variant='body2' className='skills'>Project Management</Typography>
        </div>

        <div className="video-responsive my-6">
          <iframe
            src="https://www.youtube.com/embed/I6KOj2lh8v4"
            title="Hop Into the Future With Lilypad: The Distributed Compute Network"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className='flex justify-center my-10'>
          <div className='links mx-2'>
            <Link href="https://blog.lilypadnetwork.org/hop-into-the-future-with-lilypad-the-distributed-compute-network" target='_blank'>
              Read Blog Post
            </Link>
          </div>
          <div className='links mx-2'>
            <Link href="https://github.com/bacalhau-project/lilypad" target='_blank'>
              View Github
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}