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
                    <p>While searching for my next career, I reached out to a few friends and family, letting everyone know that I was open to new opportunities. During that time, a friend connected me with a couple of businesses that were looking to create websites for their services. Below are the businesses I worked with and the websites I delivered using the Wix website builder.
                    </p>
                    <br/>
                    <div className="flex flex-col">
                        <div className="clients flex">
                            <div>                                
                                <Image className="max-w-xs" width={250} height={250} src="/images/spike.png" alt="A long triangle pierces two circles. One circle is inside another."/>
                            </div>
                            <div className="w-30">                                
                                <h2>Health Shield Solutions</h2>
                                <p>Health Shield Solutions&apos; unique two-step process disinfects to kill existing viruses, bacteria, and other pathogens on surfaces and then immediately re-surfaces the entire area and objects with a nano barrier protectant that provides continuous protection from re-infection for 30-90 days</p>
                            </div>
                        </div>
                        <br/>
                        <div className="clients flex">
                            <div>                                
                                <Image className="max-w-xs" width={250} height={250} src="/images/RT.png" alt="A black box with the letters RT in bold"/>
                            </div>
                            <div>                                
                                <h2>RT Advisory Team</h2>
                                <p>RT Advisory Team is a growth and compliance consulting firm. The firm&apos;s services include consulting for patents, branding, product manufacturing, product placement, and much more.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        );  
  }