import "/main.css"
import Link from "next/link";
import ProjectCover from "../../components/project-cover";


export default function Memorial() {
    return (
        <main className="flex min-h-screen flex-col items-center pt-5">      

            {/* This is the image card that appears at the top of every project page.  */}
            <div className="mx-4 max-w-5xl">
                <ProjectCover coverImage="memorial-website.jpg" alt="A painted mural of a person with a hat, and the word 'Ferle' written under it"/>                
            
                <div className="w-4/5 mx-auto my-10">
                    <h1>Rest on the Web</h1>
                    <p>My Uncle Eric was an amazing man who found himself in unfortunate circumstances. It is hard to find people who match his creativity and talent which included drawing, dancing, composing music and storytelling. He brightened every room he walked into and sought to be everyone's greatest advocate.
                    <br/><br/>
                    When Tio Eddie passed away, my father took care of the funeral arrangements. The funeral home offered us a package that included a website where people can go to pay their respects and share memories. My father and I thought it was a unique idea and we decided we would make it ourselves. My father shared some of hihref ideas for the website and I used Wix to create it. We created the website to reflect Tio Eddie's interests in music, his experiences, his family, and his friends.
                    </p>
                    <div className="links">
                    <Link target="_blank" href={"https://jonathanalbert0115.wixsite.com/ferlesmemorial"}>Visit the Website</Link>
                    </div>
                </div>
            </div>
        </main>
        );  
  }