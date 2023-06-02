import { Card, CardMedia } from "../../lib/mui";

export default function Maze() {
    return (
        <main className="flex min-h-screen flex-col items-center pt-12">      

            {/* This is the image card that appears at the top of every project page.  */}
            <div className="mx-4 max-w-6xl">
                <Card sx={{borderRadius: 3}}>
                    <CardMedia component="img" image='/images/invisible-maze.png' alt='A view of an invisible maze game made in Decentraland'></CardMedia>
                </Card>
            <div className="w-4/5 mx-auto mt-10">
            <h1>Discovering the Metaverse</h1>
            </div>
            </div>
        </main>
        );  
  }