import "/main.css"
import Link from "next/link";
import ProjectCover from "../../components/project-cover";


export default function Tokensets() {
    return (
        <main className="flex min-h-screen flex-col items-center pt-5">      

            {/* This is the image card that appears at the top of every project page.  */}
            <div className="mx-4 max-w-5xl">
                <ProjectCover coverImage="tokensets.png" alt="Two blue circle overlaping eachother with the top circle containing a fade on the right side and the bottom circle containing a fade on the left side. The fades make the circles appear vaguely in the shape of an S"/>                
            
                <div className="w-4/5 mx-auto my-10">
                    <h1>Exploring Web3 Finance</h1>
                    <p>I started investing in Bitcoin and alternative coins in 2014 while working at a mutual fund. I was one of a handful of people at the company that was exposed to Bitcoin. The Associate Vice President of Investments Management Technology and I discussed offering a Crypto product to clients but found that the market cap was too small, and mutual funds were too heavily regulated so we would never get approval. Years later I was happy to discover the emergence of DeFi. 
                    <br/><br/>

                    </p>
                    <div className="pdf-responsive">
                        <iframe
                            title="Smart Contract 5 Index"
                            src="https://drive.google.com/file/d/1UTfK7B3IMzMIcLps4rdTUZ9T_94odbbI/preview"
                            >
                        </iframe>
                    </div>
                    <div className="links">
                    <Link target="_blank" href={"https://github.com/Grace-Pott er/grace-potter"}>View the Code</Link>
                    </div>
                </div>
            </div>
        </main>
        );  
  }