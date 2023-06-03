import "/main.css"
import Link from "next/link";
import ProjectCover from "../../components/project-cover";


export default function Livein() {
    return (
        <main className="flex min-h-screen flex-col items-center pt-5">      

            {/* This is the image card that appears at the top of every project page.  */}
            <div className="mx-4 max-w-5xl">
                <ProjectCover coverImage="livein.png" alt="A logo of a leaf that has lines across it similar to that of a circuit board"/>                
            
                <div className="w-4/5 mx-auto my-10">
                    <h1>LiveIn Vision</h1>
                    <p>LIVEIN sought to allow real estate buyers and renters to discover available units within a building by scanning the facade of the building using their smartphone. Potential clients would then be offered augmented reality tours and an opportunity to book a viewing via mobile application. Once a client finds a property that suits their needs, they would be able to make an offer and come to an agreement with the owner via the app, eliminating the need for a broker and reducing the cost to transact.                
                    </p>
                    <div className="flex gap-2">
                        <div className="links">
                        <Link target="_blank" href={"https://www.instagram.com/liveinar/"}>Instagram</Link>
                        </div>
                        <div className="links">
                        <Link target="_blank" href={"https://www.facebook.com/liveinar/"}>Facebook</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        );  
  }