import "/main.css"
import Link from "next/link";
import ProjectCover from "../../components/project-cover";
import Image from "next/image";


export default function Wix() {
    return (
        <main className="flex min-h-screen flex-col items-center pt-5">      

            {/* This is the image card that appears at the top of every project page.  */}
            <div className="mx-4 max-w-5xl">
                <ProjectCover coverImage="wix.png" alt="The wix website logo"/>                
            
                <div className="w-4/5 mx-auto my-10">
                    <h1>Freelance Work</h1>
                    <p>While searching for my next career, I reached out to a few friends and family letting everyone know that I was open to new opportunities. During that time, a friend connected me with a couple of businesses that were looking to create websites for their services. The following are the businesses I worked with and the websites I delivered using wix website builder.
                    </p>
                    <br/>
                    <div className="flex flex-col">
                        <div className="flex">
                            <div className="basis-3/10">                                
                                <Image width={900} height={900} src="/images/spike.png" alt="A long triangle piercing two circles. One circle is inside another."></Image>
                            </div>
                            <div className="basis-7/10">                                
                                <h2>Health Shield Solutions</h2>
                                <p>Health Shield Solutions’ unique two-step process disinfects to kill existing viruses, bacteria and other pathogens on surfaces and then immediately re-surfaces the entire area and objects with a nano barrier protectant that provides continuous protection from re-infection for 30-90 days</p>
                            </div>
                        </div>
                        <br/>
                        <div className="flex">
                            <div className="basis-3/10">                                
                                <Image width={600} height={600} src="/images/RT.png" alt="A black box with the letters RT in bold"></Image>
                            </div>
                            <div className="basis-7/10">                                
                                <h2>RT Advisory Team</h2>
                                <p>RT Advisory Team is a growth and compliance consulting firm. The firm's services include consulting for patents, branding, product manufacturing, product placement, and much more.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        );  
  }