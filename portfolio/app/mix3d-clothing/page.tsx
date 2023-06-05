import "/main.css"
import ProjectCover from "../../components/project-cover";
import YoutubeEmbed from "../../components/youtube-embed";
import Image from "next/image";


export default function Clothing() {
    return (
        <main className="flex min-h-screen flex-col items-center pt-5">      

            {/* This is the image card that appears at the top of every project page.  */}
            <div className="mx-4 max-w-5xl">
                <ProjectCover coverImage="mix3d-shirt.png" alt="A 3D model of a black shirt with the Mix3d community logo on the front."/>                
            
                <div className="w-4/5 mx-auto my-10">
                    <h1>The Start of the Phygital Movement</h1>
                    <p>To my surprise, some of the most active members of the Mix3D community were interested in how Web3 would impact fashion. After several meetings, I came up with the idea for a phygital (physical + digital) marketplace and a pipeline for releasing collections. The release cycle is as follows:
                    <br/><br/>
                    1. Mix3d designers sketch clothing and create tech packs for manufacturers.
                    <br/>
                    2. Mix3d 3D modelers create models out of sketches.
                    <br/>
                    3. Create augmented reality filters for Snapchat, Facebook, and Instagram so users can post pictures wearing their clothing before having the physical products.
                    </p>
                    <br/>
                    <div className="video-responsive">
                        <video controls>
                            <source src="./videos/Spunizm test.mp4"/>
                        </video>
                    </div>
                    <p> 
                    <br/>
                    4. Create a copy of the 3D models with fewer polygons to be used in Decentraland.
                    <br/>
                    5. Use Magica voxel to create a 3D version of the clothing that can be used in Sandbox.
                    <br/><br/>
                    <Image src={"/images/mix3d-clothing.png"} alt="A 3D model of a light pink sweater on the left of the image, and a voxel version of the sweater on the right of the image." width={1000} height={1000}/>
                    <br/>
                    </p>
                    <p>
                    6. Mint the original 3D model as an NFT to be used for presales.
                    <br/>
                    7. List the 3D model on the Mix3d marketplace and allow users to preview the clothing in augmented reality. 
                    </p>
                    <br/>
                        <YoutubeEmbed embedId="37kbs3wdnyw" />  
                    <br/>
                    <p>
                    Using this strategy, we would be able to raise the funds to manufacture a collection without worrying if there was a market for it. Since production would take longer than most other clothing lines, we would be able to airdrop the social network filters and models for Decentraland and Sandbox every couple of months leading up to receiving the physical product. 
                    </p>
                    <h2>Preview Store Proof of Concept</h2>
                    <YoutubeEmbed embedId="GwfzWbsx6-M" />
                </div>
            </div>
        </main>
        );  
  }