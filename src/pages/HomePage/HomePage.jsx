import {React, useEffect} from "react";
import "./homepage.css"


export default function HomePage(){
    useEffect(() => {
        document.body.classList.add('home-body');

        // Cleanup on unmount when the user moves to another page
        return () => {
            document.body.classList.remove('home-body');
        };
    }, []);
    return (
        <>
            <main className="main">
              <div className="grid-container">
                <div className="box1">SO, YOU WANT TO TRAVEL TO</div>
                <div className="box2">SPACE</div>
                <div className="box3">Let's face it, if you want to go to space, you might as well<br/> genuinely go to outer space and not hover kind of on the <br/>edge of it. Well sit back, and relax because we’ll give you<br/> a truly out of this world experience!</div>
                <div className="box4"><h2>EXPLORE</h2></div>
                
                </div>  
            </main>
        </>
    )
}