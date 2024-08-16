import React from "react"

import "./navbar.css";

export default function Navbar(){
    return(
        <>
            <nav className=" desktopnav">
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
                <hr /> */}
                <div>
                <ul className="nav-list">
                    <li className="nav-item">00 HOME</li>
                    <li className="nav-item">01 DESTINATION</li>
                    <li className="nav-item">02 CREW</li>
                    <li className="nav-item">03 TECHNOLOGY</li>
                </ul>
                </div>
            </nav>
        </>
    )
}