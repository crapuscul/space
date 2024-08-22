import React from "react";
import { useState } from "react";
import './CrewPage.css' 
import Navbar from "../../components/navbar/navbar";

export default function CrewPage() {
   // Define the sections with their respective elemets
   const crews={
    crew1:{
      title: "COMMANDER",
      name:"DOUGLAS HURLEY",
      description:"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    crew2:{
      title: "MISSION SPECIALIST",
      name:"MARK SHUTTLEWORTH",
      description:"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    crew3:{
      title: "PILOT",
      name:"VICTOR GLOVER",
      description:"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "

    }

   };
   // State to track the selected section
   const [selectedCrew, setSelectedCrew] = useState('crew1');
   const renderCrewContent = () => {
    const crew = crews[selectedCrew];
    return(
      <div>
        <h2 className="crewtitle">{crew.title}</h2>
        <h1 className="crewname">{crew.name}</h1>
        <p className="crewdescription">{crew.description}</p>
      </div>
    );
   }

    return (
      <div className="main-crew-content">
        <nav className="crewnav">
          <ul>
            <li className={`nav-crew ${selectedCrew === 'crew1' ? 'selected': '' }`}
            onClick={() => setSelectedCrew('crew1')}>.</li>
                        <li className={`nav-crew ${selectedCrew === 'crew2' ? 'selected': '' }`}
            onClick={() => setSelectedCrew('crew2')}>.</li>
                        <li className={`nav-crew ${selectedCrew === 'crew3' ? 'selected': '' }`}
            onClick={() => setSelectedCrew('crew3')}>.</li>
          </ul>
        </nav>
        <div className="crew-content-section">
          {renderCrewContent()}
        </div>
        
        
      </div>
    );
  }