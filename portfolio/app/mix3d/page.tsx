import "/main.css"
import Link from "next/link";
import ProjectCover from "../../components/project-cover";


export default function Mixed() {
    return (
        <main className="flex min-h-screen flex-col items-center pt-5">      

            {/* This is the image card that appears at the top of every project page.  */}
            <div className="mx-4 max-w-5xl">
                <ProjectCover coverImage="mix3d.png" alt="A logo of circles in a spiral with varrying colors"/>                
            
                <div className="w-4/5 mx-auto my-10">
                    <h1>Building the Next Iteration of the Internet</h1>
                    <p>At the height of the 2021 bull run, my friend and I found that we were being bombarded by questions about cryptocurrency, DeFi, NFTs, and DAOs. After having the same conversations over and over, we both decided we would work together to create a community where anyone could learn about Web3, with the hopes that we would build products and services together.                     
                    <br/><br/>
                    Together, we worked on informational content, articles, Dapps, games, clothing, investment groups, and a Web3 boot camp. Everyone volunteered in hopes that we could build a self-sustaining community, but our focus shifted as we each obtained roles in Web3. The community has a little over 100 members, and many have transitioned into web3 roles at organizations like Coinbase, Protocol Labs, Celcius, and DAOPunks.
                    <br/><br/>
                    The community is now inactive, but you can still join our Discord, and access all of our documents. To appreciate the speed at which it grew in a few months, I encourage you to visit the page:
                    <Link target="_blank" className="text-dark-turquoise" href={"https://bejewled-butternut-e77.notion.site/How-we-Mix3d-up-2021-1b1daff9497a4674847758e18a3f25a9?pvs=4"}> How we Mix3d up 2021</Link>
                    </p>
                    <div className="links">
                    <Link target="_blank" href={"https://bejewled-butternut-e77.notion.site/Mix3d-81ffeb7a8e6d48f1b2f7c85f9ca06924?pvs=4"}>Join the Community</Link>
                    </div>
                </div>
            </div>
        </main>
        );  
  }