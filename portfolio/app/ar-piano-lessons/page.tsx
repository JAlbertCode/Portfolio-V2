import "/main.css"
import ProjectCover from "../../components/project-cover";


export default function Piano() {
    return (
        <main className="flex min-h-screen flex-col items-center pt-5">      

            {/* This is the image card that appears at the top of every project page.  */}
            <div className="mx-4 max-w-5xl">
                <ProjectCover coverImage="ar-piano-lessons.png" alt="Piano keys on with a background of musical notes"/>                
            
                <div className="w-4/5 mx-auto my-10">
                    <h1>What are Augmented Piano Lessons?</h1>
                    <p>Augmented reality presents an opportunity to revolutionize the way we learn how to play instruments. Imagine sitting in front of a piano, not knowing how to play it, and being able to play a song by following notes projected on the instrument. Now we have the ability to take the game mechanics of Rockband and apply them to real instruments! If you are having trouble picturing augmented lessons, then take a look at RocketJump's animation from 2010.</p>
                    <br/>
                    
                    <div className="video-responsive">
                        <video controls>
                            <source src="./videos/future-rock-band.mp4"/>
                        </video>
                    </div>

                    <h2>That is cool, but what does that have to do with Jonathan?</h2>
                    <p>
                    During a course on project management for computer information systems, I decided to challenge myself by playing the role of developer and creating a proof of concept for augmented piano lessons. I chose the piano because it is a significant segment of the musical instrument market and the instrument I am most familiar with. To avoid expenses, I decided the proof of concept would be triggered by an image target that would be similar to a piano. Once the image is recognized, the software will play a stream of notes that a user can hit to a familiar tune. The following is a recording of the proof of concept running on my desktop using my phone as the image target.
                    </p>
                    <br/>
                    
                    <div className="video-responsive">
                        <video controls>
                            <source src="./videos/ar-piano-lessons.mp4"/>
                        </video>
                    </div>
                </div>
            </div>
        </main>
        );  
  }