import "/main.css"
import ProjectCover from "../../components/project-cover";


export default function Thought() {
    return (
        <main className="flex min-h-screen flex-col items-center pt-5">      

            {/* This is the image card that appears at the top of every project page.  */}
            <div className="mx-4 max-w-5xl">
                <ProjectCover coverImage="thought-card.png" alt="A blue business card with a quote that reads 'The convential mind is passive - it consumes information and regurgitates it in familiar forms. The dimensional mind is active. Transforming everything it digests into something new and original, creating instead of consuming' by Robert Greene from the book Mastery on page 177."/>                
            
                <div className="w-4/5 mx-auto my-10">
                    <h1>Augmented Business Card</h1>
                    <p>After sharing some augmented reality ideas with a friend, he requested that I augment his business card. Over several years, he compiled quotes that he felt moved by and wanted to share the quotes with the people who had his business card. He called the idea a "Thought Card".
                    <br/><br/>
                    After a couple of weeks, I was able to include the quotes using an image target, and I decided to include a virtual button that would link viewers to a store where they could purchase the book. The links can be swapped out for affiliated marketing links, allowing the card owner to profit from viewers who bought the book.
                    </p>                    
                    <h2>Application Preview</h2>
                    <div className="video-responsive">
                        <video controls>
                            <source src="./videos/thought-card.mp4"/>
                        </video>
                    </div>
                </div>
            </div>
        </main>
        );  
  }