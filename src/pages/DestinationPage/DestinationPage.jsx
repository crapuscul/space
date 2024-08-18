import React, { useState } from 'react';
import "./DestinationPage.css"

export default function DestinationPage() {
    // Define the sections with their respective heading and text
    const sections = {
        section1: {
            picture:"./src/assets/images/destination/image-moon.png",
            heading: "MOON", 
            text: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites." ,
            distanceTitle: "AVG. DISTANCE",
            distance:"384,400 KM",
            travelTimeTitle: "Est. travel time",
            travelTime:"3 DAYS",
            },
        section2: { 
            picture:"./src/assets/images/destination/image-mars.png",
                    heading: "MARS", 
                    text: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
                    distanceTitle: "AVG. DISTANCE",
                    distance:"225 MIL. KM",
                    travelTimeTitle: "Est. travel time",
                    travelTime:"9 MONTHS",
                },
        section3: {  picture:"./src/assets/images/destination/image-europa.png",
            
            heading: "EUROPA", 
                    text: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
                    distanceTitle: "AVG. DISTANCE",
                    distance:"628 MIL. KM",
                    travelTimeTitle: "Est. travel time",
                    travelTime:"3 YEARS",
         },
        section4: { picture:"./src/assets/images/destination/image-titan.png",
            
            heading: "TITAN", 
                    text: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn." ,
                    distanceTitle: "AVG. DISTANCE",
                    distance:"1.6 MIL. KM",
                    travelTimeTitle: "Est. travel time",
                    travelTime:"7 YEARS",
                    },
    };

    // State to track the selected section
    const [selectedSection, setSelectedSection] = useState('section1');

    // Function to render the content of the selected section
    const renderSectionContent = () => {
        const section = sections[selectedSection];
        return (
            <div>
                <div className='section-grid'>
                    <div className='image-box'> 
                        <img src={section.picture} alt={section.heading}/>
                        </div>

                        <div className='text-box'>
                        <h2>{section.heading}</h2>
                            <p>{section.text}</p>
                            <h3>{section.distanceTitle}</h3>
                            <p>{section.distance}</p>
                            <h3>{section.travelTimeTitle}</h3>
                            <p>{section.travelTime}</p>
                    </div>

                </div>
                   
            </div>
        );
    };

    return (
        <>
            <main className='main-section'>
                <nav className='destination-nav'>
                    <ul>
                        <li className={`nav-list ${selectedSection === 'section1' ? 'selected' : ''}`}
                          onClick={() => setSelectedSection('section1')}>MOON</li>
                        <li className={`nav-list ${selectedSection === 'section2' ? 'selected' : ''}`}
                          onClick={() => setSelectedSection('section2')}>MARS</li>
                        <li className={`nav-list ${selectedSection === 'section3' ? 'selected' : ''}`}
                          onClick={() => setSelectedSection('section3')}>EUROPA</li>
                        <li className={`nav-list ${selectedSection === 'section4' ? 'selected' : ''}`}
                          onClick={() => setSelectedSection('section4')}>TITAN</li>
                    </ul>
                    
                </nav>
                <div className="section-content">
                    {renderSectionContent()}
                </div>
            </main>
        </>
    );
}
