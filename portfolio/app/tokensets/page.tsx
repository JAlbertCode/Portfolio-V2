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
                    <p>I started investing in Bitcoin and alternative coins in 2014 while working at a mutual fund. I was one of a handful of people at the company who were exposed to Bitcoin. The Associate Vice President of Investments Management Technology and I discussed offering a crypto product to clients but found that the market cap was too small, and mutual funds were too heavily regulated, so we would never get approval. Years later, I was happy to discover the emergence of DeFi. 
                    <br/><br/>
                    While working on the Mix3d community I had several friends and family ask, what Cryptocurrencies they should invest in. Besides legal reasons, I try to avoid giving any financial advice because novice investors act on emotion and are inconsistent. I have considered launching a fund several times, and DeFi presented an opportunity to create a strategy without any organization becoming the custodian of the funds. I found Token Sets and put together a strategy on the Polygon network to minimize trading fees while having access to most tokens. The strategy is weighted by market cap and includes all of the currencies that I thought would be crucial to the development of Web3. 
                    <br/><br/>
                    While Token Sets is an incredible tool, ultimately I was unsure of the legal implications and did not want to take the leap of being responsible for the funds of family and friends. Luckily, I did not move forward because LUNA imploded months later. 
                    </p>
                    <div className="links">
                    <Link target="_blank" href={"https://www.tokensets.com/v2/set/polygon/0x018AB17B6f9403C972DAAfcc6155EfED54169129"}>View the Strategy</Link>
                    </div>
                    <h2>Institutional Web3 Investing</h2>
                    <p>In late 2022, I was searching for my next role and applied to a firm that creates crypto indexes for ETF issuers. The firm asked me to put together an index, and I chose to create an index for smart contracts. I provided the document below, and it led me to the next round of the interview process. I was in the last rounds of interviewing for a few different companies and decided to accept an offer at another organization instead of continuing the interview process. Below is the strategy, and my rationalization for investing in a Smart Contract Index.</p>
                    <br/>
                    <div className="pdf-responsive">
                        <iframe
                            title="Smart Contract 5 Index"
                            src="https://drive.google.com/file/d/1UTfK7B3IMzMIcLps4rdTUZ9T_94odbbI/preview"
                            >
                        </iframe>
                    </div>
                    
                </div>
            </div>
        </main>
        );  
  }