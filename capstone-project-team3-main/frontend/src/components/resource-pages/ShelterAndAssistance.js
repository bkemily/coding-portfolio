import React from "react";
//import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "../../css/IndividualResources.css";


function ShelterAndAssistance() {
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
            <h1>Shelter and Assistance Resources</h1>
            {/* Navigation Buttons */}
            <div className="nav-buttons">
                <button onClick={() => scrollToSection("fema")}>FEMA Disaster Assistance</button>
                <button onClick={() => scrollToSection("shelters")}>Emergency Shelters</button>
                <button onClick={() => scrollToSection("local-relief")}>Local & State Disaster Relief Agencies</button>
                <button onClick={() => scrollToSection("temp-housing")}>Temporary Housing Programs</button>
                <button onClick={() => scrollToSection("food-water")}>Food & Water Distribution Centers</button>
            </div>
            {/* FEMA Disaster Assistance */}
            <div id="fema">
                <h2>FEMA Disaster Assistance</h2>
                <p><strong>Website:</strong> <a href="https://www.fema.gov/assistance" target="_blank" rel="noopener noreferrer">www.fema.gov</a></p>
                <p><strong>Phone:</strong> 1-800-621-FEMA (3362)</p>

                <h3>What FEMA Provides:</h3>
                <ul>
                    <li>Financial Assistance for temporary housing, home repairs, and disaster-related expenses.</li>
                    <li>Hotel & Lodging Reimbursement for displaced families.</li>
                    <li>Rental Assistance for long-term temporary housing.</li>
                    <li>Disaster Case Management to help survivors with recovery planning.</li>
                </ul>

                <h3>How to Apply for FEMA Assistance:</h3>
                <ul>
                    <li>Register Online at <a href="https://www.disasterassistance.gov/DAC-RI/en/assessment/captcha" target="_blank" rel="noopener noreferrer">www.disasterassistance.gov</a> or call 1-800-621-3362.</li>
                    <li>Provide documentation (ID, proof of residence, damage photos, insurance claims).</li>
                    <li>Schedule a FEMA home inspection (if required).</li>
                    <li>Receive aid via direct deposit or check.</li>
                </ul>
                <p><strong>Deadlines Apply:</strong> Applications must be submitted within 60 days of the disaster declaration.</p>
            </div>

            {/* Emergency Shelters */}
            <div id="shelters">
                <h2>Emergency Shelters</h2>
                <p><strong>Website:</strong> <a href="https://www.redcross.org" target="_blank" rel="noopener noreferrer">www.redcross.org</a></p>
                <p><strong>Phone:</strong> 1-800-RED-CROSS (1-800-733-2767)</p>

                <h3>Services Provided:</h3>
                <ul>
                    <li>Safe temporary shelters (schools, churches, community centers).</li>
                    <li>Cots, blankets, and personal hygiene kits for displaced individuals.</li>
                    <li>Emergency first aid and medical care.</li>
                    <li>Emotional support and crisis counseling.</li>
                </ul>

                <h3>How to Find a Red Cross Shelter:</h3>
                <ul>
                    <li>Use the Red Cross Emergency App (Available on iOS & Android).</li>
                    <li>Visit <a href="https://www.redcross.org/shelter" target="_blank" rel="noopener noreferrer">www.redcross.org/shelter</a>.</li>
                    <li>Call 1-800-RED-CROSS for the nearest shelter location.</li>
                </ul>
                <p><strong>Pets Policy:</strong> Red Cross shelters do not accept pets (except service animals). Check for pet-friendly shelters through local animal shelters or Humane Societies.</p>
            </div>

            {/* Local & State Disaster Relief Agencies */}
            <div id="local-relief">
                <h2>Local & State Disaster Relief Agencies</h2>
                <p>Each state and local emergency management office coordinates disaster response efforts, including shelter,
                    food, and financial aid.</p>

                <h3>How to Find Local Disaster Relief Services:</h3>
                <ul>
                    <li>Visit your state’s emergency management website (e.g., FloridaDisaster.org, CalOES.ca.gov).</li>
                    <li>Call 211 for referrals to local shelters, food programs, and financial aid services.</li>
                    <li>Check county websites and social media pages for real-time updates.</li>
                </ul>

                <h3>Key Resources by State:</h3>
                <ul>
                    <li><strong>Florida Division of Emergency Management:</strong> <a href="https://www.floridadisaster.org"
                        target="_blank" rel="noopener noreferrer">www.floridadisaster.org</a></li>
                    <li><strong>California Office of Emergency Services (CalOES):</strong> <a
                        href="https://www.caloes.ca.gov" target="_blank" rel="noopener noreferrer">www.caloes.ca.gov</a>
                    </li>
                    <li><strong>New York State Emergency Management:</strong> <a href="https://www.dhses.ny.gov"
                        target="_blank" rel="noopener noreferrer">www.dhses.ny.gov</a></li>
                </ul>
            </div>

            {/* Temporary Housing Programs */}
            <div id="temp-housing">
                <h2>Temporary Housing Programs</h2>

                <h3>FEMA Housing Assistance </h3>
                <p><strong>Website:</strong> <a href="https://www.fema.gov/assistance/individual/housing" target="_blank" rel="noopener noreferrer">www.fema.gov/assistance/individual/transitional-sheltering</a>
                </p>

                <h3>Housing Assistance</h3>
                <ul>
                    <li><strong>Rental Assistance: </strong>money you can use to rent housing if you are displaced from your home because of the disaster.</li>
                    <li><strong>Lodging Expense Reimbursement: </strong>money to reimburse you for emergency lodging expenses such as hotel or motel if you are displaced from your home because of the disaster.</li>
                    <li><strong>Home Repair or Replacement: </strong>money to help you repair or replace your home damaged by the disaster.</li>
                    <li><strong>Accessibility Needs: </strong>money to help survivors with a disability address specific repairs to ensure their home is accessible.</li>
                    <li><strong>Privately-owned Roads, Bridges, Docks: </strong>money for survivors whose only access to their home has been damaged by the disaster.</li>
                    <li><strong>Temporary Housing Unit: </strong>if approved for the disaster, when you cannot use rental assistance due to a lack of available housing resources.</li>
                    <li><strong>Hazard Mitigation: </strong>Money for specific measures to help eligible homeowners repair or rebuild stronger, more durable homes</li>

                </ul>

                <h3>U.S. Department of Housing & Urban Development (HUD) Disaster Housing Assistance</h3>
                <p><strong>Website:</strong> <a href="https://www.hud.gov" target="_blank"
                    rel="noopener noreferrer">www.hud.gov</a></p>
            </div>

            {/* Food & Water Distribution Centers */}
            <div id="food-water">
                <h2>Food & Water Distribution Centers</h2>

                <h3>FEMA Emergency Food Assistance</h3>
                <p><strong>Website:</strong> <a href="https://www.fns.usda.gov/tefap" target="_blank" rel="noopener noreferrer">www.fns.usda.gov/tefap</a></p>

                <h3>Red Cross Food Distribution</h3>
                <p><strong>Website:</strong> <a href="https://www.redcross.org" target="_blank" rel="noopener noreferrer">www.redcross.org</a></p>

                <h3>Feeding America Disaster Response</h3>
                <p><strong>Website:</strong> <a href="https://www.feedingamerica.org" target="_blank" rel="noopener noreferrer">www.feedingamerica.org</a></p>
                <p><strong>Phone:</strong> 1-800-771-2303</p>

                <h3>Salvation Army Emergency Food Assistance</h3>
                <p><strong>Website:</strong> <a href="https://www.salvationarmyusa.org" target="_blank" rel="noopener noreferrer">www.salvationarmyusa.org</a></p>

                <h3>World Central Kitchen (WCK) Emergency Relief</h3>
                <p><strong>Website:</strong> <a href="https://www.wck.org" target="_blank" rel="noopener noreferrer">www.wck.org</a></p>
            </div>
            {/* Back to Local Resources Button */}
            <div className="back-button-container">
                <button className="mt-4" onClick={() => navigate("/LocalResources")}>Back Local Resources</button>
            </div>
        </div>
    );
}

export default ShelterAndAssistance;
