import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardMedia, Typography } from "../lib/mui"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className='mx-10 max-w-6xl'>

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
          <Card sx={{width: 357}}>
            <CardMedia component="img" image='/images/invisible-maze.png' alt='A view of an invisible maze game made in Decentraland'/>
            <CardContent>
              <Typography variant='h6'>
                Invisible Maze Game
              </Typography>
              <Typography>
                An invisible maze game to onboard users to Metamask and Decentraland.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                January 2022
              </Typography>
              <div className='gap-1 flex flex-wrap mt-1'>
                <Typography variant='body2' className='skills'>Decentraland</Typography>
                <Typography variant='body2' className='skills'>MetaMask</Typography>
                <Typography variant='body2' className='skills'>Notion</Typography>
              </div>
            </CardContent>
          </Card>

          {/* This is the card for Mix3d */}
          <Card sx={{width: 357}}>
            <CardMedia component="img" image='/images/mix3d.png' alt='A logo of circles in a spiral with varrying colors'/>
            <CardContent>
              <Typography variant='h6'>
                Mix3d
              </Typography>
              <Typography>
                Mix3d is a community connecting, organizing, and building on Web 3.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                January 2022
              </Typography>
            </CardContent>
          </Card>

          {/* This is the card for Werewolf */}
          <Card sx={{width: 357}}>
            <CardMedia component="img" image='/images/werewolf.png' alt='A sign in screen with the word Werewolf at the top in a font that looks like bloody letters'/>
            <CardContent>
              <Typography variant='h6'>
                Werewolf
              </Typography>
              <Typography>
                A social deduction game utilizing webcams on a browser.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                September 2020
              </Typography>
            </CardContent>
          </Card>

          {/* This is the card for Grace Potter */}
          <Card sx={{width: 357}}>
            <CardMedia component="img" image='/images/grace-potter.png' alt='An icon of a pottery vase'/>
            <CardContent>
              <Typography variant='h6'>
                Grace Potter
              </Typography>
              <Typography>
                An ecommerce website selling hand made pottery
              </Typography>
              <Typography variant="body2" color="text.secondary">
                August 2020
              </Typography>
            </CardContent>
          </Card>

          {/* This is the card for Mobile Vendor */}
          <Card sx={{width: 357}}>
            <CardMedia component="img" image='/images/mobile-vendor.png' alt='A smart phone overlayed on top of a map with icons for mobile vendors'/>
            <CardContent>
              <Typography variant='h6'>
                Mobile Vendor
              </Typography>
              <Typography>
                A platform to connect mobile vendors to potential customers.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                August 2020
              </Typography>
            </CardContent>
          </Card>

          {/* This is the card for Thought Card */}
          <Card sx={{width: 357}}>
            <CardMedia component="img" image='/images/thought-card.png' alt="A blue business card with a quote that reads 'The convential mind is passive - it consumes information and regurgitates it in familiar forms. The dimensional mind is active. Transforming everything it digests into something new and original, creating instead of consuming' by Robert Greene from the book Mastery on page 177."/>
            <CardContent>
              <Typography variant='h6'>
                Thought Card
              </Typography>
              <Typography>
                Augmented Reality (AR) technologies allow developers to pack information into images. Business cards can now contain links, videos, 3d objects, scenes, games and more.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                April 2020
              </Typography>
            </CardContent>
          </Card>
          
          {/* This is the card for Wix */}
          <Card sx={{width: 357}}>
            <CardMedia component="img" image='/images/wix.png' alt='The wix website logo'/>
            <CardContent>
              <Typography variant='h6'>
                Wix
              </Typography>
              <Typography>
                A freelance stint of wix websites fueled by word of mouth recommendations
              </Typography>
              <Typography variant="body2" color="text.secondary">
                March 2020
              </Typography>
            </CardContent>
          </Card>

          {/* This is the card for Blotto */}
          <Card sx={{width: 357}}>
            <CardMedia component="img" image='/images/blotto.png' alt="A flat image of a body with its head in a toilet and the words 'Blotto' written under the image."/>
            <CardContent>
              <Typography variant='h6'>
                Blotto
              </Typography>
              <Typography>
                A simple drinking card game that served as a proof of concept for launching applications using Unity on the Google Playstore.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                January 2020
              </Typography>
            </CardContent>
          </Card>

          {/* This is the card for LiveIn */}
          <Card sx={{width: 357}}>
            <CardMedia component="img" image='/images/livein.png' alt='A logo of a leaf that has lines across it similar to that of a circuit board'/>
            <CardContent>
              <Typography variant='h6'>
                LiveIn
              </Typography>
              <Typography>
                LiveIn was a real estate brokerage that utilized augmented reality to engage with potential clients.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                October 2019
              </Typography>
            </CardContent>
          </Card>

          {/* This is the card for Augmented Piano Lessons */}
          <Card sx={{width: 357}}>
            <CardMedia component="img" image='/images/augmented-piano-lessons.png' alt='Piano keys on with a background of musical notes'/>
            <CardContent>
              <Typography variant='h6'>
                Augmented Piano Lessons
              </Typography>
              <Typography>
                The future of learning how to play music will involve projections that augment the instrument to gamify the learning process.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                December 2017
              </Typography>
            </CardContent>
          </Card>

          {/* This is the card for Traffic Jam VR */}
          <Card sx={{width: 357}}>
            <CardMedia component="img" image='/images/traffic-jam-vr.png' alt='A low poly image of a street corner'/>
            <CardContent>
              <Typography variant='h6'>
                Traffic Jam VR
              </Typography>
              <Typography>
                Traffic Jam VR is the product of a 3-day virtual reality game jam where professionals from various backgrounds came together to create virtual reality games.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                August 2017
              </Typography>
            </CardContent>
          </Card>

          {/* This is the card for The Fourth Branch */}
          <Card sx={{width: 357}}>
            <CardMedia component="img" image='/images/the-fourth-branch.png' alt='A logo with two parallel blue lines at the forefront and a red line in the background in the shape of a staple'/>
            <CardContent>
              <Typography variant='h6'>
                The Fourth Branch
              </Typography>
              <Typography>
                The Fourth Branch summarizes bills being debated in Congress and allows users to vote on the summaries. After the users vote they can compare their votes to their Congressmen to see how often they are accurately represented.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                January 2017
              </Typography>
            </CardContent>
          </Card>

          {/* This is the card for Memorial Website */}
          <Card sx={{width: 357}}>
            <CardMedia component="img" image='/images/memorial-website.jpg' alt="A painted mural of a person with a hat, and the word 'Ferle' written under it"/>
            <CardContent>
              <Typography variant='h6'>
                Memorial Website
              </Typography>
              <Typography>
                There are many ways to remember a lost relative and with modern technology, we can immortalize their experiences.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                October 2014
              </Typography>
            </CardContent>
          </Card>

          {/* This is the card for Customizable Phone Case */}
          <Card sx={{width: 357}}>
            <CardMedia component="img" image='/images/custom-phone-case.png' alt="A mechanical engineering mockup of an old iphone with a case"/>
            <CardContent>
              <Typography variant='h6'>
                Customizable Phone Case
              </Typography>
              <Typography>
                In the early 2010s, the iPhone had a small battery and owners were seeking to protect their phones while customizing the look. The customizable phone case sought to provide a dynamic look and improved battery life for iPhones.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                July 2014
              </Typography>
            </CardContent>
          </Card>

        </div>
      </div>

    </main>
  )
}
