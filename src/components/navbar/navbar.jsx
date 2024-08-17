import React from "react";
import { NavLink } from "react-router-dom";

import "./navbar.css";

export default function Navbar() {
    return (
        <>
            <nav className="desktopnav">
                <div className="logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                        <g fill="#FFF" fill-rule="evenodd">
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
        </>
    );
}
