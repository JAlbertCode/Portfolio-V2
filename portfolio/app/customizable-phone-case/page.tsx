import "/main.css"
import ProjectCover from "../../components/project-cover";


export default function Phone() {
    return (
        <main className="flex min-h-screen flex-col items-center pt-5">      

            {/* This is the image card that appears at the top of every project page.  */}
            <div className="mx-4 max-w-5xl">
                <ProjectCover coverImage="custom-phone-case.png" alt="A mechanical engineering mockup of an old iphone with a case"/>                
            
                <div className="w-4/5 mx-auto my-10">
                    <h1>Unlimited Styles for an Unlimited Phone</h1>
                    <p>The iPhone case our team sought to design would place a screen on the back of an iPhone that the user could customize with an application. The user would have been able to send a static image to the screen or an animation. We also entertained the idea of building applications designed to utilize both screens, like a game of Guess Who or Battleship.</p>
                    <h2>Preview</h2>
                    <p>The dimensions for the inner casing were taken from Apple's website. The extension at the bottom of the case would contain the chip to control the screen on the back of the phone. The screen is protected by a transparent shell.</p>
                    
                    <div className="video-responsive">
                        <video autoPlay>
                            <source src="./videos/phone-case.mp4"/>
                        </video>
                    </div>
                </div>
            </div>
        </main>
        );  
  }