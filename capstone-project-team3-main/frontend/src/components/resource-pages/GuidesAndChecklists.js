import React from "react";
//import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "../../css/IndividualResources.css";


function GuidesAndChecklists() {
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
            <h1>Preparedness Guides And Checklists</h1>
            {/* Navigation Buttons */}
            <div className="nav-buttons">
                <button onClick={() => scrollToSection("emergency-kit")}>Emergency Kit Checklists</button>
                <button onClick={() => scrollToSection("evacuation-plans")}>Evacuation Plans & Routes</button>
                <button onClick={() => scrollToSection("family-communication")}>Family Communication Plans</button>
                <button onClick={() => scrollToSection("pet-safety")}>Pet & Livestock Safety</button>
                <button onClick={() => scrollToSection("home-protection")}>Home & Property Protection</button>
            </div>

            {/* Emergency Kit Checklists */}
            <div id="emergency-kit">
                <h2>Emergency Kit Checklists</h2>
                <p>A disaster emergency kit should contain essentials to sustain individuals and families for at least 72 hours</p>
                <p>Basic Emergency Kit Essentials:</p>
                <ul>
                    <li>Water: 1 gallon per person per day (for at least 3 days)</li>
                    <li>Non-perishable food: Canned goods, protein bars, dried fruits, nuts</li>
                    <li>Manual can opener: In case of power loss</li>
                    <li>First aid kit: Bandages, antiseptic, pain relievers, medical gloves, gauze</li>
                    <li>Medications: Prescription medications, over-the-counter pain relievers</li>
                    <li>Flashlights & extra batteries</li>
                    <li>Emergency blanket: Space blanket for warmth</li>
                    <li>Clothing & sturdy shoes</li>
                    <li>Hygiene items: Soap, hand sanitizer, toothbrush, feminine hygiene products</li>
                    <li>Important documents: Copies of ID, insurance, medical records</li>
                    <li>Multi-tool or Swiss Army knife</li>
                    <li>Cash: ATMs may not work after a disaster</li>
                    <li>Chargers & power bank: To keep phones operational</li>
                    <li>Whistle: To signal for help</li>
                    <li>Dust mask: Protects against debris and contaminants</li>
                </ul>
            </div>

            {/* Evacuation Plans */}
            <div id="evacuation-plans">
                <h2>Evacuation Plans & Routes (by disaster type)</h2>
                <h3>General Evacuation Guidelines:</h3>
                <ul>
                    <li>Know multiple exit routes from your home, workplace, and neighborhood.</li>
                    <li>Identify emergency shelters or pre-arranged safe locations.</li>
                    <li>Have a transportation plan – Ensure access to a vehicle or arrange alternative transport.</li>
                    <li>Keep a go-bag ready with essential supplies for at least 72 hours.</li>
                    <li>Prepare for roadblocks or traffic delays – Follow real-time updates from local authorities.</li>
                </ul>

                <h3>Evacuation Plans by Disaster Type:</h3>

                <h4>Hurricane Evacuation:</h4>
                <ul>
                    <li>Follow official evacuation orders from emergency management agencies.</li>
                    <li>Use designated hurricane evacuation routes – Check <a href="https://www.ready.gov/hurricanes" target="_blank"
                        rel="noopener noreferrer">Ready.gov</a> for updated maps.</li>
                    <li>Stay at least 50 miles inland if possible to avoid storm surges.</li>
                    <li>Secure your home – Board up windows, unplug appliances, and shut off utilities.</li>
                </ul>

                <h4>Wildfire Evacuation:</h4>
                <ul>
                    <li>Leave immediately when an evacuation order is issued – Wildfires spread rapidly.</li>
                    <li>Have an alternate evacuation route in case roads are blocked by fire.</li>
                    <li>Wear protective clothing (long sleeves, pants, goggles) and bring an N95 mask.</li>
                    <li>Monitor local wildfire updates via <a href="https://www.nifc.gov" target="_blank"
                        rel="noopener noreferrer">National Interagency Fire Center</a>.</li>
                </ul>

                <h4>Flood Evacuation:</h4>
                <ul>
                    <li>Never drive through flooded roads – Turn Around, Don’t Drown!</li>
                    <li>Move to higher ground immediately if flood warnings are issued.</li>
                    <li>Evacuate if directed by authorities, even if the flooding appears minor.</li>
                    <li>Stay informed with real-time flood alerts from <a href="https://www.weather.gov" target="_blank"
                        rel="noopener noreferrer">National Weather Service</a>.</li>
                </ul>

                <h4>Tornado Evacuation:</h4>
                <ul>
                    <li>Evacuation is usually not advised – Seek shelter in a basement or interior room.</li>
                    <li>Mobile home residents should relocate to a sturdy building or tornado shelter.</li>
                    <li>Monitor local tornado warnings via the <a href="https://www.spc.noaa.gov" target="_blank"
                        rel="noopener noreferrer">Storm Prediction Center</a>.</li>
                </ul>

                <h4>Earthquake Evacuation:</h4>
                <ul>
                    <li>Do not evacuate during the shaking – Drop, Cover, and Hold On.</li>
                    <li>Exit buildings only when safe – Beware of aftershocks and falling debris.</li>
                    <li>Stay clear of bridges, overpasses, and power lines during aftershocks.</li>
                    <li>Check for gas leaks before turning on electrical devices.</li>
                </ul>

                <h3>How to Find Evacuation Routes:</h3>
                <ul>
                    <li>Check local emergency management websites for official routes.</li>
                    <li>Use Google Crisis Response Maps for real-time road conditions.</li>
                    <li>Download FEMA's mobile app for evacuation shelters and road updates.</li>
                    <li>Follow state-specific evacuation maps from agencies like <a href="https://www.floridadisaster.org/evacuation"
                        target="_blank" rel="noopener noreferrer">Florida Disaster Management</a>.</li>
                </ul>
            </div>

            {/* Family Communication Plans */}
            <div id="family-communication">
                <h2>Family Communication Plans</h2>
                <p>Disasters can knock out phone lines and internet services</p>
                <ul>
                    <li>Designate an out-of-town emergency contact</li>
                    <li>Create a contact list</li>
                    <li>Set a primary meeting location</li>
                    <li>Use text messages instead of calls</li>
                    <li>Download emergency apps</li>
                </ul>
            </div>

            {/* Pet & Livestock Safety */}
            <div id="pet-safety">
                <h2>Pet & Livestock Safety Guidelines</h2>
                <p>Animals are vulnerable in disasters</p>
                <ul>
                    <li>Microchip & ID tags</li>
                    <li>Pet-friendly shelter options</li>
                    <li>Emergency pet kit: Food, water, leash, medications</li>
                    <li>Evacuating with livestock</li>
                </ul>
            </div>

            {/* Home & Property Protection */}
            <div id="home-protection">
                <h2>Home & Property Protection Tips</h2>
                <p>Protecting your home from damage can reduce repair costs</p>
                <ul>
                    <li>Install storm shutters or board up windows</li>
                    <li>Secure doors with heavy-duty locks</li>
                    <li>Trim trees to prevent branches from causing damage</li>
                    <li>Use water-resistant materials in flood-prone areas</li>
                    <li>Secure heavy furniture & appliances in case of earthquakes</li>
                </ul>
            </div>

            {/* Back to Local Resources Button */}
            <div className="back-button-container">
                <button className="mt-4" onClick={() => navigate("/LocalResources")}>Back Local Resources</button>
            </div>
        </div>
    );
}

export default GuidesAndChecklists;
