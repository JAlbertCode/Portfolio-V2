import "/main.css"
import Link from "next/link";
import ProjectCover from "../../components/project-cover";


export default function Blotto() {
    return (
        <main className="flex min-h-screen flex-col items-center pt-5">      

            {/* This is the image card that appears at the top of every project page.  */}
            <div className="mx-4 max-w-5xl">
                <ProjectCover coverImage="blotto.png" alt="A flat image of a body with its head in a toilet and the words 'Blotto' written under the image."/>                
            
                <div className="w-4/5 mx-auto my-10">
                    <h1>Blotto Origins</h1>
                    <p>After years of tinkering with the game engine Unity, I decided it was time to commit to a project that I could develop and publish within a few months. I've discussed making games with a few close friends in the past and I finally convinced one that we were both capable of launching a game on the app store. The friend I convinced is an Optometrist by trade so I gave him a crash course on Unity over a weekend and we decided he would be in charge of game design, while I would be in charge of development. After spending a few weeks understanding our limitations we arrived at Blotto.
                    <br/><br/>
                    Blotto is British slang for drunk and it alludes to soaking up alcohol the way blotting paper soaks up ink. Blotto is a drinking card game filled with challenges for all above 21 years of age to enjoy.
                    </p>
                    <div className="links">
                    <Link target="_blank" href={"https://play.google.com/store/apps/details?id=com.MultiverseEchoes.Blotto"}>Download the Game</Link>
                    </div>
                </div>
            </div>
        </main>
        );  
  }