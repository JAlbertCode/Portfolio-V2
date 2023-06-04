import "/main.css"
import Link from "next/link";
import ProjectCover from "../../components/project-cover";


export default function Fourth() {
    return (
        <main className="flex min-h-screen flex-col items-center pt-5">      

            {/* This is the image card that appears at the top of every project page.  */}
            <div className="mx-4 max-w-5xl">
                <ProjectCover coverImage="the-fourth-branch.png" alt="Piano keys on with a background of musical notes"/>                
            
                <div className="w-4/5 mx-auto my-10">
                    <h1>What is The Fourth Branch?</h1>
                    <p>The Fourth Branch summarizes bills being debated in Congress, allows users to vote on the summaries, and compare their votes to their Congressmen.</p>
                    <h2>Demo</h2>
                    <p>The video below is a demo I recorded of the final product for desktops.</p>
                    <div className="video-responsive">
                        <video controls>
                            <source src="./videos/the-fourth-branch-review.mp4"/>
                        </video>
                    </div>
                </div>
            </div>
        </main>
        );  
  }