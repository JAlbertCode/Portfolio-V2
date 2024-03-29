import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardMedia, Typography } from "../lib/mui"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-24 mb-20">
      <div className='mx-10 max-w-6xl'>

        {/*This is the introduction to the landing page*/}
        <h1>Jonathan Albert&apos;s Portfolio</h1>
        <p>I am a futurist, reverse engineering the products and services of tomorrow today. Turning visions into projects, projects into milestones, and milestones into tasks providing software development teams with roadmaps to the future. Nine years of experience gathering requirements, rapid prototyping, managing, and coordinating cross-functional teams in both start-up and global operations. Boundless curiosity has led to work with organizations focused on blockchains, gaming, consulting, augmented reality, finance, politics, and language learning. Intent on bridging the gap between the future and today, confronting any challenge that gets in the way. </p>
        <br/>
        <p>Want to know me on a more personal level? View my Alva Labs test results</p>
        <div className="flex gap-2">
          <div className='links'>
          <Link target='_blank' href="/documents/Jonathan_ALbert_Personality_Test_Five_Factor_Personality_Theory.pdf">Personality Profile</Link>
          </div>
          <div className='links'>
          <Link target='_blank' href="/documents/Jonathan_Albert_Logical_Ability.pdf">Logical Ability</Link>
          </div>
        </div>
        {/* <h2>Get in Contact</h2> */}
        {/*This div conatains the row of icons for professional and social media links*/}
        <div className='flex flex-wrap gap-4 mt-10'>
          <Link target='_blank' href="/documents/Jonathan_Albert_Resume.pdf"><Image src="/images/resume.png" width='72' height='72' alt='resume'/></Link>
          <Link target='_blank' href="https://www.linkedin.com/in/jonathan-albert-profile/"><Image src="/images/linkedin.png" width='72' height='72' alt='linkedin'/></Link>
          <Link target='_blank' href="mailto: JonathanAlbert0115@gmail.com"><Image src="/images/email.png" width='72' height='72' alt='email'/></Link>
          <Link target='_blank' href="https://t.me/Jay_Albert"><Image src="/images/telegram.png" width='72' height='72' alt='telegram'/></Link>
          <Link target='_blank' href="https://discordapp.com/users/649469511749337089"><Image src="/images/discord.png" width='72' height='72' alt='discord'/></Link>
          <Link target='_blank' href="https://github.com/JAlbertCode"><Image src="/images/github.png" width='72' height='72' alt='github'/></Link>
          <Link target='_blank' href="https://jonathan-albert.medium.com/"><Image src="/images/medium.png" width='72' height='72' alt='medium'/></Link>
          <Link target='_blank' href="https://mirror.xyz/jay-albert.eth"><Image src="/images/mirror.png" width='72' height='72' alt='mirror'/></Link>
          <Link target='_blank' href="https://twitter.com/Jay_Albert_"><Image src="/images/twitter.png" width='72' height='72' alt='twitter'/></Link>
          <Link target='_blank' href="https://www.tiktok.com/@jay_albert_?_t=8gYzNbPEty6&_r=1"><Image src="/images/tiktok.png" width='72' height='72' alt='tiktok'/></Link>
          <Link target='_blank' href="https://www.instagram.com/jonathanalbert0115/"><Image src="/images/instagram.png" width='72' height='72' alt='instagram'/></Link>
          <Link target='_blank' href="https://www.facebook.com/profile.php?id=100084317730771"><Image src="/images/facebook.png" width='72' height='72' alt='facebook'/></Link>
          {/* <Link target='_blank' href="https://opensea.io/Jay-Albert"><Image src="/images/opensea.png" width='72' height='72' alt='opensea'/></Link> */}
        </div>
      
        {/*The section for the project cards starts here and is in one div to contain all of the projects.*/}      
        <div id='cards' className='flex flex-wrap gap-10 mt-10 place-content-center'>

          {/*This is the card for the art bot*/}
          <Card sx={{width: 357, borderRadius: 3, boxShadow: 5}} className='flex flex-col'>
            <Link href={"https://www.themachinedreams.com/about"} target='_blank'> 
              <CardMedia component="img" image='/images/machine_dream.jpg' alt='A circular logo with an M in the middle and colorful clouds at the bottom.' width={357} height={357}/> 
            </Link>
            <CardContent>
              <Typography variant='h6'>
                The Machine Dreams
              </Typography>
              <Typography>
                An art project that uses AI to generate art every hour based on what is trending on Google in the U.S.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                October 2023
              </Typography>
              <div className='gap-1 flex flex-wrap mt-1'>
                <Typography variant='body2' className='skills'>Python</Typography>
                <Typography variant='body2' className='skills'>Typescript</Typography>
                <Typography variant='body2' className='skills'>Twitter API</Typography>
                <Typography variant='body2' className='skills'>Stability AI SDK</Typography>
                <Typography variant='body2' className='skills'>Thirdweb SDK</Typography>
                <Typography variant='body2' className='skills'>IPFS</Typography>
                <Typography variant='body2' className='skills'>NFT.storage</Typography>
                <Typography variant='body2' className='skills'>Solidity</Typography>
                <Typography variant='body2' className='skills'>Openzeppelin</Typography>
                <Typography variant='body2' className='skills'>Sepolia</Typography>
                <Typography variant='body2' className='skills'>Ethereum</Typography>
                <Typography variant='body2' className='skills'>Opensea</Typography>
                <Typography variant='body2' className='skills'>Chainlink</Typography>
                <Typography variant='body2' className='skills'>Google Cloud Platform</Typography>
              </div>
            </CardContent>
            <Link href={"https://www.themachinedreams.com/about"} className='mt-auto' target='_blank'>
              <Typography className='view-project'>View Project</Typography>
            </Link>
          </Card>

          {/*This is the card for the mix3d clothing*/}
          <Card sx={{width: 357, borderRadius: 3, boxShadow: 5}} className='flex flex-col'>
            <Link href={"./mix3d-clothing"}> 
              <CardMedia component="img" image='/images/shirt.png' alt='A 3D model of a black shirt with the Mix3d community logo on the front.'/> 
            </Link>
            <CardContent>
              <Typography variant='h6'>
                Mix3d Clothing
              </Typography>
              <Typography>
                A clothing brand concept from the Mix3d community.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                December 2022
              </Typography>
              <div className='gap-1 flex flex-wrap mt-1'>
                <Typography variant='body2' className='skills'>Moralis</Typography>
                <Typography variant='body2' className='skills'>Meta Mask</Typography>
                <Typography variant='body2' className='skills'>Goerli Test Network</Typography>
                <Typography variant='body2' className='skills'>Javascript</Typography>
                <Typography variant='body2' className='skills'>HTML</Typography>
                <Typography variant='body2' className='skills'>CSS</Typography>
                <Typography variant='body2' className='skills'>Figma</Typography>
                <Typography variant='body2' className='skills'>Clo3d</Typography>
                <Typography variant='body2' className='skills'>Spark AR</Typography>
                <Typography variant='body2' className='skills'>Augmented Reality</Typography>
                <Typography variant='body2' className='skills'>Vectary</Typography>
                <Typography variant='body2' className='skills'>Magica Voxel</Typography>
                <Typography variant='body2' className='skills'>Github</Typography>
              </div>
            </CardContent>
            <Link href={"./mix3d-clothing"} className='mt-auto'>
              <Typography className='view-project'>View Project</Typography>
            </Link>
          </Card>

           {/*This is the card for tokensets*/}
           <Card sx={{width: 357, borderRadius: 3, boxShadow: 5}} className='flex flex-col'>
            <Link href={"./tokensets"}> 
              <CardMedia component="img" image='/images/tokensets.png' alt='Two blue circle overlaping eachother with the top circle containing a fade on the right side and the bottom circle containing a fade on the left side. The fades make the circles appear vaguely in the shape of an S'/> 
            </Link>
            <CardContent>
              <Typography variant='h6'>
                Exploring Web3 Finance
              </Typography>
              <Typography>
                Snapshots of my experiences in cryptocurrency investing using DeFi tools and working with TradFi organizations.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                October 2022
              </Typography>
              <div className='gap-1 flex flex-wrap mt-1'>
                <Typography variant='body2' className='skills'>Tokensets</Typography>
                <Typography variant='body2' className='skills'>Meta Mask</Typography>
                <Typography variant='body2' className='skills'>Polygon</Typography>
                <Typography variant='body2' className='skills'>DeFi</Typography>
                <Typography variant='body2' className='skills'>TradFi</Typography>
                <Typography variant='body2' className='skills'>Indexes</Typography>
                <Typography variant='body2' className='skills'>Investment Analysis</Typography>
                <Typography variant='body2' className='skills'>Writing</Typography>
              </div>
            </CardContent>
            <Link href={"./tokensets"} className='mt-auto'>
              <Typography className='view-project'>View Project</Typography>
            </Link>
          </Card>

          {/*This is the card for the invisible maze game*/}
          <Card sx={{width: 357, borderRadius: 3, boxShadow: 5}} className='flex flex-col'>
            <Link href={"./invisible-maze-game"}> 
              <CardMedia component="img" image='/images/invisible-maze.png' alt='A view of an invisible maze game made in Decentraland'/> 
            </Link>
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
                <Typography variant='body2' className='skills'>Meta Mask</Typography>
                <Typography variant='body2' className='skills'>Ethereum Network</Typography>
                <Typography variant='body2' className='skills'>Etherscan</Typography>
                <Typography variant='body2' className='skills'>Notion</Typography>
                <Typography variant='body2' className='skills'>Game Design</Typography>
              </div>
            </CardContent>
            <Link href={"./invisible-maze-game"} className='mt-auto'>
              <Typography className='view-project'>View Project</Typography>
            </Link>
          </Card>

          {/* This is the card for Mix3d */}
          <Card sx={{width: 357, borderRadius: 3, boxShadow: 5}} className='flex flex-col'>
            <Link href={"./mix3d"}>
              <CardMedia component="img" image='/images/mix3d.png' alt='A logo of circles in a spiral with varrying colors'/>
            </Link>
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
              <div className='gap-1 flex flex-wrap mt-1'>
                <Typography variant='body2' className='skills'>Notion</Typography>
                <Typography variant='body2' className='skills'>Discord</Typography>
                <Typography variant='body2' className='skills'>Meta Mask</Typography>
                <Typography variant='body2' className='skills'>Partybid</Typography>
                <Typography variant='body2' className='skills'>Mirror</Typography>
                <Typography variant='body2' className='skills'>Community Management</Typography>
                <Typography variant='body2' className='skills'>Consulting</Typography>
                <Typography variant='body2' className='skills'>Project Management</Typography>
                <Typography variant='body2' className='skills'>Educational Content</Typography>
              </div>
            </CardContent>
            <Link href={"./mix3d"} className='mt-auto'>
              <Typography className='view-project'>View Project</Typography>
            </Link>
          </Card>

          {/* This is the card for Werewolf */}
          <Card sx={{width: 357, borderRadius: 3, boxShadow: 5}} className='flex flex-col'>
            <Link href={"./werewolf"}>
              <CardMedia component="img" image='/images/werewolf.png' alt='A sign in screen with the word Werewolf at the top in a font that looks like bloody letters'/>
            </Link>
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
              <div className='gap-1 flex flex-wrap mt-1'>
                <Typography variant='body2' className='skills'>Javascript</Typography>
                <Typography variant='body2' className='skills'>React</Typography>
                <Typography variant='body2' className='skills'>JSX</Typography>
                <Typography variant='body2' className='skills'>HTML</Typography>
                <Typography variant='body2' className='skills'>CSS</Typography>
                <Typography variant='body2' className='skills'>Dafont</Typography>
                <Typography variant='body2' className='skills'>Material UI</Typography>
                <Typography variant='body2' className='skills'>AniJS</Typography>
                <Typography variant='body2' className='skills'>Express</Typography>
                <Typography variant='body2' className='skills'>Morgan</Typography>
                <Typography variant='body2' className='skills'>Sequelize</Typography>
                <Typography variant='body2' className='skills'>Firebase</Typography>
                <Typography variant='body2' className='skills'>Twilio</Typography>
                <Typography variant='body2' className='skills'>Github</Typography>
                <Typography variant='body2' className='skills'>Game Design</Typography>
              </div>
            </CardContent>
            <Link href={"./werewolf"} className='mt-auto'>
              <Typography className='view-project'>View Project</Typography>
            </Link>
          </Card>

          {/* This is the card for Grace Potter */}
          <Card sx={{width: 357, borderRadius: 3, boxShadow: 5}} className='flex flex-col'>
            <Link href={"./grace-potter"}>
              <CardMedia component="img" image='/images/grace-potter.png' alt='An icon of a pottery vase'/>
            </Link>
            <CardContent>
              <Typography variant='h6'>
                Grace Potter
              </Typography>
              <Typography>
                An e-commerce website selling handmade pottery.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                August 2020
              </Typography>
              <div className='gap-1 flex flex-wrap mt-1'>
                <Typography variant='body2' className='skills'>Javascript</Typography>
                <Typography variant='body2' className='skills'>React</Typography>
                <Typography variant='body2' className='skills'>JSX</Typography>
                <Typography variant='body2' className='skills'>HTML</Typography>
                <Typography variant='body2' className='skills'>CSS</Typography>
                <Typography variant='body2' className='skills'>Redux</Typography>
                <Typography variant='body2' className='skills'>Reactstrap</Typography>
                <Typography variant='body2' className='skills'>WebSocket</Typography>
                <Typography variant='body2' className='skills'>Express</Typography>
                <Typography variant='body2' className='skills'>Sequelize</Typography>
                <Typography variant='body2' className='skills'>Axios</Typography>
                <Typography variant='body2' className='skills'>PostgreSQL</Typography>
                <Typography variant='body2' className='skills'>Postman</Typography>
                <Typography variant='body2' className='skills'>Nodemailer</Typography>
                <Typography variant='body2' className='skills'>Stripe</Typography>
                <Typography variant='body2' className='skills'>Github</Typography>
              </div>
            </CardContent>
            <Link href={"./grace-potter"} className='mt-auto'>
              <Typography className='view-project'>View Project</Typography>
            </Link>
          </Card>

          {/* This is the card for Mobile Vendor */}
          <Card sx={{width: 357, borderRadius: 3, boxShadow: 5}} className='flex flex-col'>
            <Link href={"./mobile-vendor"}>
              <CardMedia component="img" image='/images/mobile-vendor.png' alt='A smart phone overlayed on top of a map with icons for mobile vendors'/>
            </Link>
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
              <div className='gap-1 flex flex-wrap mt-1'>
                <Typography variant='body2' className='skills'>Javascript</Typography>
                <Typography variant='body2' className='skills'>React Native</Typography>
                <Typography variant='body2' className='skills'>MapView</Typography>
                <Typography variant='body2' className='skills'>Expo</Typography>
                <Typography variant='body2' className='skills'>Redux</Typography>
                <Typography variant='body2' className='skills'>HTML</Typography>
                <Typography variant='body2' className='skills'>CSS</Typography>
                <Typography variant='body2' className='skills'>Firebase</Typography>
                <Typography variant='body2' className='skills'>Github</Typography>
              </div>
            </CardContent>
            <Link href={"./mobile-vendor"} className='mt-auto'>
              <Typography className='view-project'>View Project</Typography>
            </Link>
          </Card>

          {/* This is the card for Thought Card */}
          <Card sx={{width: 357, borderRadius: 3, boxShadow: 5}} className='flex flex-col'>
            <Link href={"./thought-card"}>
              <CardMedia component="img" image='/images/thought-card.png' alt="A blue business card with a quote that reads 'The convential mind is passive - it consumes information and regurgitates it in familiar forms. The dimensional mind is active. Transforming everything it digests into something new and original, creating instead of consuming' by Robert Greene from the book Mastery on page 177."/>
            </Link>
            <CardContent>
              <Typography variant='h6'>
                Thought Card
              </Typography>
              <Typography>
                Augmented Reality (AR) allows developers to pack information into images. Business cards can now contain links, videos, 3D objects, scenes, games, and more.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                April 2020
              </Typography>
              <div className='gap-1 flex flex-wrap mt-1'>
                <Typography variant='body2' className='skills'>Unity</Typography>
                <Typography variant='body2' className='skills'>Vuforia</Typography>
                <Typography variant='body2' className='skills'>C#</Typography>
                <Typography variant='body2' className='skills'>Augmented Reality</Typography>
              </div>
            </CardContent>
            <Link href={"./thought-card"} className='mt-auto'>
              <Typography className='view-project'>View Project</Typography>
            </Link>
          </Card>
          
          {/* This is the card for Wix */}
          <Card sx={{width: 357, borderRadius: 3, boxShadow: 5}} className='flex flex-col'>
            <Link href={"./wix"}>
              <CardMedia component="img" image='/images/wix.png' alt='The wix website logo'/>
            </Link>
            <CardContent>
              <Typography variant='h6'>
                Wix
              </Typography>
              <Typography>
                A stint as a freelancer for Wix websites fueled by word-of-mouth recommendations.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                March 2020
              </Typography>
              <div className='gap-1 flex flex-wrap mt-1'>
                <Typography variant='body2' className='skills'>Wix</Typography>
                <Typography variant='body2' className='skills'>UI</Typography>
                <Typography variant='body2' className='skills'>Client Relations</Typography>
                <Typography variant='body2' className='skills'>Business Analysis</Typography>
                <Typography variant='body2' className='skills'>Project Management</Typography>
                <Typography variant='body2' className='skills'>Budgeting</Typography>
              </div>
            </CardContent>
            <Link href={"./wix"} className='mt-auto'>
              <Typography className='view-project'>View Project</Typography>
            </Link>
          </Card>

          {/* This is the card for Blotto */}
          <Card sx={{width: 357, borderRadius: 3, boxShadow: 5}} className='flex flex-col'>
            <Link href={"./blotto"}>
              <CardMedia component="img" image='/images/blotto.png' alt="A flat image of a body with its head in a toilet and the words 'Blotto' written under the image."/>
            </Link>
            <CardContent>
              <Typography variant='h6'>
                Blotto
              </Typography>
              <Typography>
                A drinking card game that served as a proof of concept for launching applications using Unity on the Google Play store.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                January 2020
              </Typography>
              <div className='gap-1 flex flex-wrap mt-1'>
                <Typography variant='body2' className='skills'>Unity</Typography>
                <Typography variant='body2' className='skills'>C#</Typography>
                <Typography variant='body2' className='skills'>UI</Typography>
                <Typography variant='body2' className='skills'>Game Design</Typography>
                <Typography variant='body2' className='skills'>Animation</Typography>
                <Typography variant='body2' className='skills'>Sound</Typography>
                <Typography variant='body2' className='skills'>Project Management</Typography>
              </div>
            </CardContent>
            <Link href={"./blotto"} className='mt-auto'>
              <Typography className='view-project'>View Project</Typography>
            </Link>
          </Card>

          {/* This is the card for LiveIn */}
          <Card sx={{width: 357, borderRadius: 3, boxShadow: 5}} className='flex flex-col'>
            <Link href={"./livein"}>
              <CardMedia component="img" image='/images/livein.png' alt='A logo of a leaf that has lines across it similar to that of a circuit board'/>
            </Link>
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
              <div className='gap-1 flex flex-wrap mt-1'>
                <Typography variant='body2' className='skills'>Project Management</Typography>
                <Typography variant='body2' className='skills'>Business Analysis</Typography>
                <Typography variant='body2' className='skills'>UX</Typography>
                <Typography variant='body2' className='skills'>Trello</Typography>
                <Typography variant='body2' className='skills'>Real Estate</Typography>
                {/* <Typography variant='body2' className='skills'>Documentation</Typography> */}
                <Typography variant='body2' className='skills'>Augmented Reality</Typography>
              </div>
            </CardContent>
            <Link href={"./livein"} className='mt-auto'>
              <Typography className='view-project'>View Project</Typography>
            </Link>
          </Card>

          {/* This is the card for Augmented Piano Lessons */}
          <Card sx={{width: 357, borderRadius: 3, boxShadow: 5}} className='flex flex-col'>
            <Link href={"./ar-piano-lessons"}>
              <CardMedia component="img" image='/images/ar-piano-lessons.png' alt='Piano keys on with a background of musical notes'/>
            </Link>
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
              <div className='gap-1 flex flex-wrap mt-1'>
                <Typography variant='body2' className='skills'>Unity</Typography>
                <Typography variant='body2' className='skills'>C#</Typography>
                <Typography variant='body2' className='skills'>Augmented Reality</Typography>
                <Typography variant='body2' className='skills'>Animation</Typography>
                <Typography variant='body2' className='skills'>Sound</Typography>
              </div>
            </CardContent>
            <Link href={"./ar-piano-lessons"} className='mt-auto'>
              <Typography className='view-project'>View Project</Typography>
            </Link>
          </Card>

          {/* This is the card for Traffic Jam VR */}
          <Card sx={{width: 357, borderRadius: 3, boxShadow: 5}} className='flex flex-col'>
            <Link href={"./traffic-jam-vr"}>
              <CardMedia component="img" image='/images/traffic-jam-vr.png' alt='A low poly image of a street corner'/>
            </Link>
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
              <div className='gap-1 flex flex-wrap mt-1'>
                <Typography variant='body2' className='skills'>Unity</Typography>
                <Typography variant='body2' className='skills'>C#</Typography>
                <Typography variant='body2' className='skills'>Virtual Reality</Typography>
                <Typography variant='body2' className='skills'>Game Design</Typography>
                <Typography variant='body2' className='skills'>Sound</Typography>
                <Typography variant='body2' className='skills'>Scene Design</Typography>
                <Typography variant='body2' className='skills'>Level Design</Typography>
              </div>
            </CardContent>
            <Link href={"./traffic-jam-vr"} className='mt-auto'>
              <Typography className='view-project'>View Project</Typography>
            </Link>
          </Card>

          {/* This is the card for The Fourth Branch */}
          <Card sx={{width: 357, borderRadius: 3, boxShadow: 5}} className='flex flex-col'>
            <Link href={"./the-fourth-branch"}>
              <CardMedia component="img" image='/images/the-fourth-branch.png' alt='A logo with two parallel blue lines at the forefront and a red line in the background in the shape of a staple'/>
            </Link>
            <CardContent>
              <Typography variant='h6'>
                The Fourth Branch
              </Typography>
              <Typography>
                The Fourth Branch summarizes bills debated in Congress and allows users to vote on the summaries and compare their votes to those of their Congressmen.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                January 2017
              </Typography>
              <div className='gap-1 flex flex-wrap mt-1'>
                <Typography variant='body2' className='skills'>Product Management</Typography>
                <Typography variant='body2' className='skills'>Project Management</Typography>
                <Typography variant='body2' className='skills'>Business Analysis</Typography>
                <Typography variant='body2' className='skills'>Basecamp</Typography>
                <Typography variant='body2' className='skills'>Slack</Typography>
                <Typography variant='body2' className='skills'>UX</Typography>
                <Typography variant='body2' className='skills'>QA</Typography>
                <Typography variant='body2' className='skills'>Mockups</Typography>
                <Typography variant='body2' className='skills'>Marketing</Typography>
                <Typography variant='body2' className='skills'>Content Creation</Typography>
                <Typography variant='body2' className='skills'>Twitter</Typography>
                <Typography variant='body2' className='skills'>Instagram</Typography>
                <Typography variant='body2' className='skills'>Facebook</Typography>
                <Typography variant='body2' className='skills'>LinkedIn</Typography>
                <Typography variant='body2' className='skills'>Event Planning</Typography>
              </div>
            </CardContent>
            <Link href={"./the-fourth-branch"} className='mt-auto'>
              <Typography className='view-project'>View Project</Typography>
            </Link>
          </Card>

          {/* This is the card for Memorial Website */}
          <Card sx={{width: 357, borderRadius: 3, boxShadow: 5}} className='flex flex-col'>
            <Link href={"./memorial-website"}>
              <CardMedia component="img" image='/images/memorial-website.jpg' alt="A painted mural of a person with a hat, and the word 'Ferle' written under it"/>
            </Link>
            <CardContent>
              <Typography variant='h6'>
                Memorial Website
              </Typography>
              <Typography>
                There are many ways to remember a lost relative, and with modern technology, we can immortalize their experiences.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                October 2014
              </Typography>
              <div className='gap-1 flex flex-wrap mt-1'>
                <Typography variant='body2' className='skills'>Wix</Typography>
                <Typography variant='body2' className='skills'>UX</Typography>
                <Typography variant='body2' className='skills'>UI</Typography>
              </div>
            </CardContent>
            <Link href={"./memorial-website"} className='mt-auto'>
              <Typography className='view-project'>View Project</Typography>
            </Link>
          </Card>

          {/* This is the card for Customizable Phone Case */}
          <Card sx={{width: 357, borderRadius: 3, boxShadow: 5}} className='flex flex-col'>
            <Link href={"./customizable-phone-case"}>
              <CardMedia component="img" image='/images/custom-phone-case.png' alt="A mechanical engineering mockup of an old iphone with a case"/>
            </Link>
            <CardContent>
              <Typography variant='h6'>
                Customizable Phone Case
              </Typography>
              <Typography>
                In the early 2010s, the iPhone had a small battery, and owners were seeking to protect their phones while customizing the look. The customizable phone case sought to provide a dynamic look and improve battery life for iPhones.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                July 2014
              </Typography>
              <div className='gap-1 flex flex-wrap mt-1'>
                <Typography variant='body2' className='skills'>Product Management</Typography>
                <Typography variant='body2' className='skills'>Project Management</Typography>
                <Typography variant='body2' className='skills'>Hardware Design</Typography>
              </div>
            </CardContent>
            <Link href={"./customizable-phone-case"} className='mt-auto'>
              <Typography className='view-project'>View Project</Typography>
            </Link>
          </Card>

        </div>
      </div>

    </main>
  )
}
