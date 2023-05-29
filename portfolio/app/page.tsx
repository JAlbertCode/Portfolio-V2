import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardMedia, Typography } from "../lib/mui"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className='mx-10'>

        {/*This is the introduction to the landing page*/}
        <h1>Jonathan Albert's Portfolio</h1>
        <p>I am a futurist, reverse engineering the products and services of tomorrow today. Turning visions into projects, projects into milestones, and milestones into tasks providing software development teams with roadmaps to the future. Nine years of experience gathering requirements, rapid prototyping, managing, and coordinating cross-functional teams in both start-up and global operations. Boundless curiosity has led to work with organizations focused on blockchains, gaming, consulting, augmented reality, finance, politics, and language learning. Intent on bridging the gap between the future and today confronting any challenge that gets in the way. </p>
        
        {/*This div conatains the row of icons for professional and social media links*/}
        <div className='flex flex-wrap gap-4 mt-10'>
          <Link target='_blank' href="/documents/Jonathan_Albert_Resume.pdf"><Image src="/images/resume.png" className='icon' width='72' height='72' alt='resume'/></Link>
          <Link target='_blank' href="mailto: JonathanAlbert0115@gmail.com"><Image src="/images/email.png" className='icon' width='72' height='72' alt='email'/></Link>
          <Link target='_blank' href="https://www.linkedin.com/in/jonathan-albert-profile/"><Image src="/images/linkedin.png" className='icon' width='72' height='72' alt='linkedin'/></Link>
          <Link target='_blank' href="https://github.com/JAlbertCode"><Image src="/images/github.png" className='icon' width='72' height='72' alt='github'/></Link>
          <Link target='_blank' href="https://jonathan-albert.medium.com/"><Image src="/images/medium.png" className='icon' width='72' height='72' alt='medium'/></Link>
          <Link target='_blank' href="https://mirror.xyz/jay-albert.eth"><Image src="/images/mirror.png" className='icon' width='72' height='72' alt='mirror'/></Link>
          <Link target='_blank' href="https://twitter.com/Jay_Albert_"><Image src="/images/twitter.png" className='icon' width='72' height='72' alt='twitter'/></Link>
          <Link target='_blank' href="https://www.facebook.com/profile.php?id=100084317730771"><Image src="/images/facebook.png" className='icon' width='72' height='72' alt='facebook'/></Link>
          <Link target='_blank' href="https://www.instagram.com/jonathanalbert0115/"><Image src="/images/instagram.png" className='icon' width='72' height='72' alt='instagram'/></Link>
          <Link target='_blank' href="https://opensea.io/Jay-Albert"><Image src="/images/opensea.png" className='icon' width='72' height='72' alt='opensea'/></Link>
          <Link target='_blank' href="https://open.spotify.com/user/1217936908?si=a3a2125c832b48ff&nd=1"><Image src="/images/spotify.png" className='icon' width='72' height='72' alt='spotify'/></Link>
        </div>
      
        {/*The section for the project cards starts here and is in one div to contain all of the projects.*/}      
        <div id='cards' className='flex flex-wrap gap-10 mt-10 place-content-center'>

          {/*This is the card for the invisible maze game*/}
          <Card sx={{width: 340}}>
            <CardMedia component="img" image='/images/invisible-maze.png' alt='Invisible Maze Game'/>
            <CardContent>
              <Typography>
                An invisible maze game to onboard users to Metamask and Decentraland.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{width: 340}}>
            <CardMedia component="img" image='/images/invisible-maze.png' alt='Invisible Maze Game'/>
            <CardContent>
              <Typography>
                An invisible maze game to onboard users to Metamask and Decentraland.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{width: 340}}>
            <CardMedia component="img" image='/images/invisible-maze.png' alt='Invisible Maze Game'/>
            <CardContent>
              <Typography>
                An invisible maze game to onboard users to Metamask and Decentraland.
              </Typography>
            </CardContent>
          </Card>
          
        </div>
      </div>

    </main>
  )
}
