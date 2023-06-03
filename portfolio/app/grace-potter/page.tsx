import "/main.css"
import Link from "next/link";
import ProjectCover from "../../components/project-cover";


export default function Grace() {
    return (
        <main className="flex min-h-screen flex-col items-center pt-5">      

            {/* This is the image card that appears at the top of every project page.  */}
            <div className="mx-4 max-w-5xl">
                <ProjectCover coverImage="grace-potter.png" alt="An icon of a pottery vase"/>                
            
                <div className="w-4/5 mx-auto my-10">
                    <h1>Grace Potter</h1>
                    <p>During the senior phase of Fullstack Academy, three other students and I were tasked with developing an e commerce platform. One of our team members hand made pottery in his free time and we decided to build the platform to sell the products he made.
                    </p>
                    <div className="links">
                    <Link target="_blank" href={"https://github.com/Grace-Potter/grace-potter"}>View the Code</Link>
                    </div>
                </div>
            </div>
        </main>
        );  
  }