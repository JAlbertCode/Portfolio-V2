import "/main.css"
import ProjectCover from "../../components/project-cover";


export default function Vendor() {
    return (
        <main className="flex min-h-screen flex-col items-center pt-5">      

            {/* This is the image card that appears at the top of every project page.  */}
            <div className="mx-4 max-w-5xl">
                <ProjectCover coverImage="mobile-vendor.png" alt="A smart phone overlayed on top of a map with icons for mobile vendors"/>                
            
                <div className="w-4/5 mx-auto my-10">
                    <h1>The On-Demand Economy</h1>
                    <p>Consumers are increasingly expecting an on-demand experience for every product and service they engage with. Amazon has set the tone for 2-day deliveries for products and is working on reducing turnaround time from days to hours. To deliver products and services within hours of a request, companies will begin to manage mobile distribution centers and mobile service providers.</p>
                    <h2>Application Preview</h2>
                    <p>
                    The following preview is the product of a week of research and development.
                    </p>
                    <br/>
                    <div className="video-responsive">
                        <video controls>
                            <source src="./videos/mobile-vendor.mp4"/>
                        </video>
                    </div>
                    <h2>Toyota's Vision</h2>
                    <p>Toyota is already anticipating mobile distribution centers and mobile service providers. The video below shares the full vision of a Mobile Electronic Marketplace (MEM).</p>
                    <br/>
                    <div className="video-responsive">
                        <video controls>
                            <source src="./videos/Toyota.mp4"/>
                        </video>
                    </div>
                    <br/>
                    <p>
                    As several companies work on autonomous vehicles, I see an opportunity to spring up a third-party service that can be deployed now and can integrate with future autonomous systems.
                    </p>
                </div>
            </div>
        </main>
        );  
  }