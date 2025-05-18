import React from "react";
//import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "../../css/IndividualResources.css";


function TrainingAndEdu() {
    const navigate = useNavigate();

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80; // Adjust this value based on the navbar height
            const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: elementPosition, behavior: "smooth" });
        }
    };
    return (
        <div id="guides-container" className="container">
            <h1>Training & Educational Materials</h1>

            {/* Navigation Buttons */}
            <div className="nav-buttons">
                <button onClick={() => scrollToSection("prepare")}>Disaster Preparedness Courses</button>
                <button onClick={() => scrollToSection("training")}>Community Response Training</button>
                <button onClick={() => scrollToSection("webinars")}> Webinars & Workshops</button>
                <button onClick={() => scrollToSection("k-12")}>K-12 Disaster Education Resources</button>
                <button onClick={() => scrollToSection("volunteer")}>Volunteer & Assist in Recovery</button>
            </div>

            {/* Disaster Preparedness Courses */}
            <div id="prepare">
                <h2>Disaster Preparedness Courses (Red Cross, FEMA ICS)</h2>
                <h3>FEMA Independent Study Courses (ICS)</h3>
                <p><strong>Website:</strong> <a href="https://training.fema.gov" target="_blank" rel="noopener noreferrer">training.fema.gov</a></p>
                <p>Some Important Courses:</p>
                <ul>
                    <li>IS-100.C: Introduction to the Incident Command System (ICS)</li>
                    <li>IS-200.C: ICS for Single Resources & Initial Action Incidents</li>
                    <li>IS-700.B: National Incident Management System (NIMS)</li>
                </ul>

                <h3>American Red Cross Disaster Preparedness Training</h3>
                <p><strong>Website:</strong> <a href="https://www.redcross.org/take-a-class" target="_blank" rel="noopener noreferrer">www.redcross.org/take-a-class</a></p>
                <ul>
                    <li>Disaster Preparedness for Families & Individuals</li>
                    <li>First Aid/CPR/AED Certification</li>
                    <li>Psychological First Aid</li>
                </ul>
            </div>

            {/* Community Response Training */}
            <div id="training">
                <h2>Community Response Training (CERT)</h2>
                <p><strong>Website:</strong> <a href="https://www.ready.gov/cert" target="_blank" rel="noopener noreferrer">www.ready.gov/cert</a></p>
                <ul>
                    <li>Light search & rescue techniques</li>
                    <li>Basic first aid & triage</li>
                    <li>Fire safety & extinguishing small fires</li>
                    <li>Disaster psychology & crisis management</li>
                </ul>
            </div>

            {/* Online Webinars & Workshops */}
            <div id="webinars">
                <h2>Online Webinars & Workshops</h2>
                <h3>FEMA Webinars & Workshops</h3>
                <p><strong>Website:</strong> <a href="https://www.fema.gov/training" target="_blank" rel="noopener noreferrer">www.fema.gov/training</a></p>
                <ul>
                    <li>Disaster resilience planning</li>
                    <li>Cybersecurity in disaster response</li>
                    <li>Financial preparedness for emergencies</li>
                </ul>

                <h3>National Weather Service (NWS) Storm Spotter Training</h3>
                <p><strong>Website:</strong> <a href="https://www.weather.gov/skywarn" target="_blank" rel="noopener noreferrer">www.weather.gov/skywarn</a></p>
                <ul>
                    <li>Identifying severe weather patterns</li>
                    <li>Reporting storms to emergency services</li>
                </ul>
            </div>

            {/* K-12 Disaster Education Resources */}
            <div id="k-12">
                <h2>K-12 Disaster Education Resources</h2>
                <h3>FEMA Ready Kids Program</h3>
                <p><strong>Website:</strong> <a href="https://www.ready.gov/kids" target="_blank" rel="noopener noreferrer">www.ready.gov/kids</a></p>

                <h3>American Red Cross Pillowcase Project</h3>
                <p><strong>Website:</strong> <a href="https://www.redcross.org/youth-preparedness" target="_blank" rel="noopener noreferrer">www.redcross.org/youth-preparedness</a></p>

                <h3>Sesame Street Disaster Preparedness for Kids</h3>
                <p><strong>Website:</strong> <a href="https://sesameworkshop.org/topics/emergencies/" target="_blank" rel="noopener noreferrer">https://sesameworkshop.org/topics/emergencies/</a></p>
            </div>

            {/* Volunteer & Assist in Disaster Recovery */}
            <div id="volunteer">
                <h2>Volunteer & Assist in Disaster Recovery</h2>
                <h3>Red Cross Disaster Relief Volunteer</h3>
                <p><strong>Website:</strong> <a href="https://www.redcross.org/volunteer" target="_blank" rel="noopener noreferrer">www.redcross.org/volunteer</a></p>

                <h3>Team Rubicon (Veterans Disaster Response)</h3>
                <p><strong>Website:</strong> <a href="https://www.teamrubiconusa.org" target="_blank" rel="noopener noreferrer">www.teamrubiconusa.org</a></p>

                <h3>Habitat for Humanity Disaster Response</h3>
                <p><strong>Website:</strong> <a href="https://www.habitat.org" target="_blank" rel="noopener noreferrer">www.habitat.org</a></p>

                <h3>Feeding America Disaster Relief</h3>
                <p><strong>Website:</strong> <a href="https://www.feedingamerica.org" target="_blank" rel="noopener noreferrer">www.feedingamerica.org</a></p>

                <h3>Medical Reserve Corps (MRC) – Volunteer for Medical Response</h3>
                <p><strong>Website:</strong> <a href="https://www.mrc.hhs.gov" target="_blank" rel="noopener noreferrer">www.mrc.hhs.gov</a></p>
            </div>

            {/* Back to Local Resources Button */}
            <div className="back-button-container">
                <button className="mt-4" onClick={() => navigate("/LocalResources")}>Back Local Resources</button>
            </div>
        </div>
    );
}

export default TrainingAndEdu;
