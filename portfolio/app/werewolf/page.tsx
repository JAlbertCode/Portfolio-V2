import "/main.css"
import Link from "next/link";
import ProjectCover from "../../components/project-cover";


export default function Werewolf() {
    return (
        <main className="flex min-h-screen flex-col items-center pt-5">      

            {/* This is the image card that appears at the top of every project page.  */}
            <div className="mx-4 max-w-5xl">
                <ProjectCover coverImage="werewolf.png" alt="A sign in screen with the word Werewolf at the top in a font that looks like bloody letters"/>                
            
                <div className="w-4/5 mx-auto my-10">
                    <h1>Fullstack Academy Capstone</h1>
                    <p>For the final project at Fullstack Academy, we were split into teams of four and given two and a half weeks to define and develop a project. Everyone in our group were fans of table top games and we decided to give new life to an old concept. The game we settled on was Werewolf. Werewolf is a social deduction game where some players are on the `bad` team and others are on the `good` team but neither player knows the other`s identity. Throughout the game players vote to kill each other based on their suspicions and the last team standing wins the game. Our team created a new spin on the game by allowing groups to form in online video conferences and by programmatically managing all of the events in the game.
                    </p>
                    <h2>Gameplay Demo</h2>
                    <video controls>
                        <source src="./videos/werewolf-preview.mp4"/>
                    </video>
                    <h2>Game Rules</h2>
                    <p>The game proceeds in alternating night and day rounds, beginning with night.
                    <br/><br/>
                    In the beginning of the night only the werewolves can see. Everyone else is sleeping and so their video is stopped. While everyone sleeps the werewolves will choose a villager to kill. When the werewolves have made their kill, they too sleep.
                    <br/><br/>
                    After the werewolves have made their kill, the village Doctor awakens and, not knowing who has been killed, chooses a villager (which can be themself) to heal. The villager chosen will survive the night if the werewolves chose to kill them. Once the Doctor has made their choice, they go back to sleep.
                    <br/><br/>
                    Next, the village Seer awakens. The Seer can choose one villager to have their true identity revealed. If the villager chosen is a werewolf, the Seer will be told so. Otherwise the Seer returns to sleep.
                    <br/><br/>
                    Once the Seer has finished we transition to daytime and the villagers find out who has been killed during the night. That villager is immediately dead and out of the game. They do not reveal their identity.
                    <br/><br/>
                    Daytime is very simple; all the living villagers gather and decide who to kill in hopes of ridding themselves of werewolves. As soon as a majority votes for a single villager to kill, that villager is immediately dead and out of the game.
                    <br/><br/>
                    There are no restrictions on speech. Any living villager can say anything they want -- truth, misdirection, nonsense, or a barefaced lie. Dead villagers may not speak at all. If a villager senses the other villagers are beginning to turn on them and they want to protest their innocence or reveal some information (like the Seer`s visions), they must do it before the votes go through.
                    <br/><br/>
                    Once a player is killed, night falls and the cycle repeats.
                    </p>
                    <h2>Winning:</h2>
                    <p>The villagers win if they kill all of the werewolves.
                    <br/><br/>
                    The werewolves win if they kill enough villagers so that the numbers are even. (Example: Two werewolves and two villagers)
                    </p>
                    <div className="links">
                    <Link target="_blank" href={"https://bejewled-butternut-e77.notion.site/Mix3d-81ffeb7a8e6d48f1b2f7c85f9ca06924?pvs=4"}>View the Code</Link>
                    </div>
                </div>
            </div>
        </main>
        );  
  }