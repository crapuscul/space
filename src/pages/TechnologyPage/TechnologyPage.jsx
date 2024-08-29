import { React, useEffect, useState } from "react";
import "./TechnologyPage.css";

export default function TechnologyPage() {
  useEffect(() => {
    document.body.classList.add("technology-body");
    // Cleanup on unmount when the user moves to another page
    return () => {
      document.body.classList.remove("technology-body");
    };
  }, []);

  const technologies = {
    technology1: {
      image:
        "../../assets/images/technology/image-launch-vehicle-landscape.jpg",
      imagePortrait:
        "../../assets/images/technology/image-launch-vehicle-portrait.jpg",
      techTitle: "THE TERMINOLOGY...",
      techName: " LAUNCH VEHICLE",
      techParagraph:
        " A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad! ",
    },
    technology2: {
      image: "../../assets/images/technology/image-spaceport-landscape.jpg",
      imagePortrait:
        "../../assets/images/technology/image-spaceport-portrait.jpg",
      techTitle: "THE TERMINOLOGY...",
      techName: "SPACEPORT",
      techParagraph:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch. ",
    },
    technology3: {
      image: "../../assets/images/technology/image-space-capsule-landscape.jpg",
      imagePortrait:
        "../../assets/images/technology/image-space-capsule-portrait.jpg",
      techTitle: "THE TERMINOLOGY... ",
      techName: "SPACE CAPSULE",
      techParagraph:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained. ",
    },
  };
  const [selectedTechnology, setSectedTechnology] = useState("technology1");
  const renderTechnologies = () => {
    const technology = technologies[selectedTechnology];
    return (
      <div className="technologies-container">
        <h2 className="tech-title">{technology.techTitle}</h2>
        <h1 className="tech-name">{technology.techName}</h1>
        <p className="tech-para">{technology.techParagraph}</p>
      </div>
    );
  };
  const renderTechImage = () => {
    const technology = technologies[selectedTechnology];
    return (
      <div>
        <img className="image-landscape" src={technology.image} />
        <img className="image-portrait" src={technology.imagePortrait} />
      </div>
    );
  };

  return (
    <div className="technology-body">
      <div className="tech-slogan">
        <span>03</span> SPACE LAUNCH 101
      </div>
      <div className="main-tech">
        <div className="main-tech-grid">
          <div className="nav-and-section1-container">
            <nav className="tech-nav">
              <ul>
                <li
                  className={`tech-list ${
                    selectedTechnology === "technology1" ? "selected" : ""
                  }`}
                  onClick={() => setSectedTechnology("technology1")}
                >
                  1
                </li>
                <li
                  className={`tech-list ${
                    selectedTechnology === "technology2" ? "selected" : ""
                  }`}
                  onClick={() => setSectedTechnology("technology2")}
                >
                  2
                </li>
                <li
                  className={`tech-list ${
                    selectedTechnology === "technology3" ? "selected" : ""
                  }`}
                  onClick={() => setSectedTechnology("technology3")}
                >
                  3
                </li>
              </ul>
            </nav>
            <div className="section1-grid">{renderTechnologies()}</div>
          </div>
        </div>
        <div className="tech-img-grid">{renderTechImage()}</div>
      </div>
    </div>
  );
}
