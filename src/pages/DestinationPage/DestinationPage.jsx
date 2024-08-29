import React, { useState, useEffect } from "react";
import "./DestinationPage.css";
import moonImg from "../../assets/images/destination/image-moon.png";
import marsImg from "../../assets/images/destination/image-mars.png";
import europaImg from "../../assets/images/destination/image-europa.png";
import titanImg from "../../assets/images/destination/image-titan.png";

export default function DestinationPage() {
  // Define the sections with their respective elemets
  const sections = {
    section1: {
      picture: moonImg,
      heading: "MOON",
      text: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distanceTitle: "AVG. DISTANCE",
      distance: "384,400 KM",
      travelTimeTitle: "EST. TRAVEL TIME",
      travelTime: "3 DAYS",
    },
    section2: {
      picture: marsImg,
      heading: "MARS",
      text: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distanceTitle: "AVG. DISTANCE",
      distance: "225 MIL. KM",
      travelTimeTitle: "EST. TRAVEL TIME",
      travelTime: "9 MONTHS",
    },
    section3: {
      picture: europaImg,

      heading: "EUROPA",
      text: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distanceTitle: "AVG. DISTANCE",
      distance: "628 MIL. KM",
      travelTimeTitle: "EST. TRAVEL TIME",
      travelTime: "3 YEARS",
    },
    section4: {
      picture: titanImg,

      heading: "TITAN",
      text: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distanceTitle: "AVG. DISTANCE",
      distance: "1.6 MIL. KM",
      travelTimeTitle: "EST. TRAVEL TIME",
      travelTime: "7 YEARS",
    },
  };

  // State to track the selected section
  const [selectedSection, setSelectedSection] = useState("section1");

  // to dynamically change background-image
  // Add class to body to target in the css
  // UseEffect to add class to body
  useEffect(() => {
    document.body.classList.add("destination-body");

    // Cleanup on unmount when the user moves to another page
    return () => {
      document.body.classList.remove("destination-body");
    };
  }, []);

  // Function to render the content of the selected section
  const renderSectionContent = () => {
    const section = sections[selectedSection];
    return (
      <div>
        <h2 className="destination-name">{section.heading}</h2>
        <p className="text-section">{section.text}</p>
        <div className="destination-divider">
          <hr />
        </div>

        <div className="distance-time">
          <div className="distance">
            <h3>{section.distanceTitle}</h3>
            <p>{section.distance}</p>
          </div>
          <div className="time">
            <h3>{section.travelTimeTitle}</h3>
            <p>{section.travelTime}</p>
          </div>
        </div>
      </div>
    );
  };
  const renderSectionImg = () => {
    const section = sections[selectedSection];
    return (
      <div>
        <img src={section.picture} alt={section.heading} />
      </div>
    );
  };

  return (
    <>
      {" "}
      <div className="destination-body">
        <main className="main-section">
          <div className="slogan-destination">
            <span>01</span>PICK YOUR DESTINATION
          </div>

          <div className="main-container">
            <div className="grid-right">
              <nav className="destination-nav">
                <ul>
                  <li
                    className={`nav-section-list ${
                      selectedSection === "section1" ? "selected" : ""
                    }`}
                    onClick={() => setSelectedSection("section1")}
                  >
                    MOON
                  </li>
                  <li
                    className={`nav-section-list ${
                      selectedSection === "section2" ? "selected" : ""
                    }`}
                    onClick={() => setSelectedSection("section2")}
                  >
                    MARS
                  </li>
                  <li
                    className={`nav-section-list ${
                      selectedSection === "section3" ? "selected" : ""
                    }`}
                    onClick={() => setSelectedSection("section3")}
                  >
                    EUROPA
                  </li>
                  <li
                    className={`nav-section-list ${
                      selectedSection === "section4" ? "selected" : ""
                    }`}
                    onClick={() => setSelectedSection("section4")}
                  >
                    TITAN
                  </li>
                </ul>
              </nav>
              <div className="section-content">{renderSectionContent()}</div>
            </div>

            <div className="grid-left">{renderSectionImg()}</div>
          </div>
        </main>
      </div>
    </>
  );
}
