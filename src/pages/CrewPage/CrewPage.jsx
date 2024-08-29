import React, { useState, useEffect } from "react";
import "./CrewPage.css";
import douglasHurleyImg from "../../assets/images/crew/image-douglas-hurley.webp";
import markShuttleworthImg from "../../assets/images/crew/image-mark-shuttleworth.png";
import victorGloverImg from "../../assets/images/crew/image-victor-glover.png";
import anoushehAnsariImg from "../../assets/images/crew/image-anousheh-ansari.png";
export default function CrewPage() {
  const crewMembers = {
    crew1: {
      picture: douglasHurleyImg,

      title: "COMMANDER",
      name: "DOUGLAS HURLEY",
      description:
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    crew2: {
      picture: markShuttleworthImg,
      title: "MISSION SPECIALIST",
      name: "MARK SHUTTLEWORTH",
      description:
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    crew3: {
      picture: victorGloverImg,
      title: "PILOT",
      name: "VICTOR GLOVER",
      description:
        "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    },
    crew4: {
      picture: anoushehAnsariImg,
      title: "FLIGHT ENGINEER",
      name: "ANOUSHEH ANSARI",
      description:
        "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
    },
  };
  const [selectedCrew, setSelectedCrew] = useState("crew1");
  // to dynamically change background-image
  // Add class to body to target in the css
  // UseEffect to add class to body
  useEffect(() => {
    document.body.classList.add("crew-body");
    // Cleanup on unmount when the user moves to another page
    return () => {
      document.body.classList.remove("crew-body");
    };
  }, []);
  // Function to render the content of the selected section
  const renderCrewContent = () => {
    const crewMember = crewMembers[selectedCrew];
    return (
      <div>
        <h2 className="crew-member-title">{crewMember.title}</h2>
        <h1 className="crew-member-name">{crewMember.name}</h1>
        <p className="crew-member-bio">{crewMember.description}</p>
      </div>
    );
  };
  const renderCrewPicture = () => {
    const crewMember = crewMembers[selectedCrew];
    return (
      <div>
        <img src={crewMember.picture} />
      </div>
    );
  };
  return (
    <div className="crew-body">
      <div className="crew-members-content">
        <div className="slogan">
          <span>02</span>MEET YOUR CREW
        </div>
        <div className="box-right"> {renderCrewPicture()}</div>
        <div className="box-left">
          <div className="crew-content">{renderCrewContent()}</div>
          <div className="crew-members-pagination">
            <div
              className={`dot ${selectedCrew === "crew1" ? "selected" : ""}`}
              onClick={() => setSelectedCrew("crew1")}
            ></div>
            <div
              className={`dot ${selectedCrew === "crew2" ? "selected" : ""}`}
              onClick={() => setSelectedCrew("crew2")}
            ></div>
            <div
              className={`dot ${selectedCrew === "crew3" ? "selected" : ""}`}
              onClick={() => setSelectedCrew("crew3")}
            ></div>
            <div
              className={`dot ${selectedCrew === "crew4" ? "selected" : ""}`}
              onClick={() => setSelectedCrew("crew4")}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
