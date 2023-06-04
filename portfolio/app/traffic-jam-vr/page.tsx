import "/main.css"
import Link from "next/link";
import ProjectCover from "../../components/project-cover";


export default function Traffic() {
    return (
        <main className="flex min-h-screen flex-col items-center pt-5">      

            {/* This is the image card that appears at the top of every project page.  */}
            <div className="mx-4 max-w-5xl">
                <ProjectCover coverImage="traffic-jam-vr.png" alt="A low poly image of a street corner"/>                
            
                <div className="w-4/5 mx-auto my-10">
                    <h1>Virtual Reality Game Jam</h1>
                    <p>I find Virtual and Augmented Reality to be fascinating and I spend endless nights considering the possibilities and implications for humanity. I want to enter the space and I joined a meetup group for Virtual Reality to learn about development. The group posted an event called "VR Game Jam" and sought to bring together developers, digital artists, and audiographers to compete to make the best virtual reality game in 48 hours. The theme of the game jam was to make everyday life interesting, and our team decided to make a game out of a traffic cop's experience. Our idea was to have the user stand in the middle of an intersection and control the flow of traffic with the goal of avoiding a collision and losing the game. Each car would have varying speeds and wait times before they choose to ignore the traffic controller and proceed on their own.
                    <br/><br/>
                    I initially joined the team as a developer but two other members of our team had strong development backgrounds and I took the opportunity to learn about the other roles. I was exposed to Unity and was tasked with placing the digital assets for the map, finding audio clips for the cars, and helping with the game design.
                    </p>
                    <div className="links">
                    <Link target="_blank" href={"https://coreygreen1108gmailcom.itch.io/traffic-jam-vr"}>Download the Game</Link>
                    </div>
                </div>
            </div>
        </main>
        );  
  }