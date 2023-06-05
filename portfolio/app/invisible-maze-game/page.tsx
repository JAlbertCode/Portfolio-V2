import "/main.css"
import YoutubeEmbed from "../../components/youtube-embed";
import Link from "next/link";
import ProjectCover from "../../components/project-cover";


export default function Maze() {
    return (
        <main className="flex min-h-screen flex-col items-center pt-5">      

            {/* This is the image card that appears at the top of every project page.  */}
            <div className="mx-4 max-w-5xl">
                <ProjectCover coverImage="invisible-maze.png" alt="A view of an invisible maze game made in Decentraland"/>                
            
                <div className="w-4/5 mx-auto my-10">
                    <h1>Discovering the Metaverse</h1>
                    <p>A few months after establishing Mix3d, the community was interested in learning about the metaverse. Many were interested in buying land and building on platforms like Decentraland and Sandbox, and we came up with the idea of a generative maze game. Every day, a new maze would be generated, and users would pay a fee to enter the arena. A portion of their fee would be deposited into a prize pool that would sit at the end of the maze for someone to claim.
                    <br/><br/>
                    The Invisible Maze game was my attempt at testing Decentraland before deploying our game. On my 30th birthday, I launched a prototype for the Mix3d community, and I challenged our members to compete to solve the invisible maze and claim 0.1 ETH.
                    <br/><br/>
                    I posted this video announcing the launch, and I provided written instructions for anyone to get involved. I pressed the publish button and went off to dinner. Immediately after, the community and my followers on social media went into a frenzy, competing for the prize.
                    </p>
                    <br/><br/>
                        <YoutubeEmbed embedId="A3yQi8tDNj8" />  
                    <br/><br/>
                    <p>
                    Everyone involved had a lot of fun with the experience, and I learned some crucial lessons.
                    <br/>
                    1. Decentraland is too limited for indie developers to build worthwhile experiences. The plots are too small, and the height limitation prevented us from building challenging mazes, which is why I decided to make the maze invisible.
                    <br/>
                    2. The objects were not programmable, which prevented us from creating moving platforms and in-game interactions. It is more of a digital museum than a place for people to create and play games.
                    <br/>
                    3. The experience made me reevaluate the value of metaverses with limited land. Web2 thrived because developer tools and distribution platforms were free to use. Web3 games are struggling because indie developers do not have the capital to experiment, and even if they do, the tools they have to develop are extremely limited.
                    <br/><br/>
                    If you want to find out more about the invisible maze, you can view the original documents on the Mix3d notion.
                    </p>
                    <div className="links">
                    <Link target="_blank" href={"https://bejewled-butternut-e77.notion.site/Jay-Albert-s-Birthday-Scavenger-Hunt-731c1ef552c84487a0996922e1127d1b"}>View the Docs</Link>
                    </div>
                </div>
            </div>
        </main>
        );  
  }