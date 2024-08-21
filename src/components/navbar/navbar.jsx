import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import "./navbar.css";

export default function Navbar() {
const [isOpen, setIsOpen] = useState(false);


    return (
        <>
            <nav className="desktopnav">
                <div className="logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                        <g fill="#FFF" fillRule="evenodd">
                            <circle cx="24" cy="24" r="24" fill="#FFF" />
                            <path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/>
                        </g>
                    </svg>
                </div>

                <div className="divider">
                    <hr />
                </div>

                <div className="transparent-box">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <NavLink exact to="/" activeClassName="active">
                                <span>00</span> HOME
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/DestinationPage" activeClassName="active">
                                <span>01</span> DESTINATION
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/CrewPage" activeClassName="active">
                                <span>02</span> CREW
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/TechnologyPage" activeClassName="active">
                                <span>03</span> TECHNOLOGY
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
    <div className="logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
            <g fill="#FFF" fillRule="evenodd">
                <circle cx="24" cy="24" r="24" fill="#FFF" />
                <path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" />
            </g>
        </svg>
    </div>
    <div className="mobile-nav-right">
        <div className={`hamburger ${isOpen ? 'close' : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" /></g></svg>
        </div>
        <div className={`closetag ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" /><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" /></g></svg>
        </div>
    </div>
    <ul className={`mobile-nav-list ${isOpen ? 'open' : ''}`}>
        
        <li className="mobile-nav-item">
            <NavLink exact to="/" activeClassName="active">
                <span>00</span> HOME
            </NavLink>
        </li>
        <li className="mobile-nav-item">
            <NavLink to="/DestinationPage" activeClassName="active">
                <span>01</span> DESTINATION
            </NavLink>
        </li>
        <li className="mobile-nav-item">
            <NavLink to="/CrewPage" activeClassName="active">
                <span>02</span> CREW
            </NavLink>
        </li>
        <li className="mobile-nav-item">
            <NavLink to="/TechnologyPage" activeClassName="active">
                <span>03</span> TECHNOLOGY
            </NavLink>
        </li>
    </ul>
</div>

        </>
    );
}
