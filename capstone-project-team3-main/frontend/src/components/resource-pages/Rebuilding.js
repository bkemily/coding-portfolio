import React from "react";
//import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "../../css/IndividualResources.css";


function Rebuilding() {
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
            <h1>Recovery & Rebuilding Assistance</h1>
            {/* Navigation Buttons */}
            <div className="nav-buttons">
                <button onClick={() => scrollToSection("finalcial-aid")}>Financial Aid & Insurance Claims</button>
                <button onClick={() => scrollToSection("unemployment")}>Disaster Unemployment Assistance</button>
                <button onClick={() => scrollToSection("legal-aid")}>Legal Aid for Disaster Victims</button>
                <button onClick={() => scrollToSection("rebuilding")}>Construction & Rebuilding Safety Guides</button>
                <button onClick={() => scrollToSection("nonprofits")}>Nonprofits & Community Support Organizations</button>
            </div>

            <div id="finalcial-aid">
                <h2>Financial Aid & Insurance Claims (FEMA, SBA disaster loans)</h2>

                <h3>Federal Assistance Programs:</h3>
                <ul>
                    <li>
                        <a href="https://www.disasterassistance.gov" target="_blank" rel="noopener noreferrer"> FEMA Disaster Assistance </a>
                        – Provides grants for temporary housing, home repairs, and medical needs. Covers uninsured or underinsured disaster-related expenses.
                    </li>
                    <li>
                        <a href="https://www.sba.gov" target="_blank" rel="noopener noreferrer"> Small Business Administration (SBA) Disaster Loans </a>
                        <ul>
                            <li>Homeowners & Renters: Low-interest loans for repairing damaged homes (up to $200,000).</li>
                            <li>Businesses & Nonprofits: Up to $2 million to repair/rebuild structures, equipment, and inventory.</li>
                        </ul>
                    </li>
                    <li>
                        <a href="https://www.floodsmart.gov/how-do-i-start-my-flood-claim" target="_blank" rel="noopener noreferrer"> National Flood Insurance Program (NFIP) </a>
                        – If you have flood insurance, file claims through NFIP within 60 days of the disaster.
                    </li>
                    <li>State & Local Assistance – Many states offer additional aid, including tax relief and property damage grants.</li>
                </ul>

                <h3>How to File a Disaster Insurance Claim:</h3>
                <ul>
                    <li>Document damage – Take photos/videos before cleanup.</li>
                    <li>Contact your insurance provider immediately.</li>
                    <li>Keep receipts for all repairs and temporary housing expenses.</li>
                    <li>Work with an adjuster to assess the damage.</li>
                    <li>Appeal denied claims if necessary—FEMA & state programs may provide secondary assistance.</li>
                </ul>
            </div>

            <div id="unemployment">
                <h2>Disaster Unemployment Assistance</h2>
                <p>Disaster Unemployment Assistance (DUA) provides financial relief to those who lost jobs due to a federally declared disaster.</p>
                <h3>Eligibility:</h3>
                <ul>
                    <li>Self-employed individuals, gig workers, and those who don’t qualify for regular unemployment.</li>
                    <li>Workers displaced due to business destruction or evacuation orders.</li>
                </ul>
                <h3>How to Apply:</h3>
                <ul>
                    <li>Apply through your state’s unemployment office or via FEMA’s website.</li>
                    <li>Must apply within 30 days of the disaster declaration.</li>
                </ul>
                <p>Find local assistance:{" "}
                    <a href="https://www.careeronestop.org/LocalHelp/local-help.aspx" target="_blank" rel="noopener noreferrer"> CareerOneStop Disaster Unemployment</a>
                </p>
            </div>

            <div id="legal-aid">
                <h2>Legal Aid for Disaster Victims</h2>
                <p>Disasters can bring legal challenges, including insurance disputes, landlord-tenant issues, and fraud cases.</p>
                <ul>
                    <li>
                        <a href="https://www.disasterassistance.gov/get-assistance/forms-of-assistance/4464" target="_blank" rel="noopener noreferrer"> FEMA Disaster Legal Services (DLS) </a>
                        – Provides free legal help for low-income individuals affected by a disaster.
                    </li>
                    <li>Local & State Bar Associations – Many offer free consultations for disaster-related legal matters.</li>
                    <li>
                        <a href="https://www.americanbar.org/groups/young_lawyers/about/initiatives/disaster-legal-services/" target="_blank" rel="noopener noreferrer"> American Bar Association Disaster Legal Assistance </a>
                    </li>
                </ul>
                <p>Tip: Be cautious of fraudulent lawyers or contractors offering “quick settlements” for disaster claims.</p>

            </div>

            <div id="rebuilding">
                <h2>Construction & Rebuilding Safety Guides</h2>
                <h4>Hiring Safe & Licensed Contractors</h4>
                <ul>
                    <li>Verify state licenses & certifications before hiring.</li>
                    <li>Get multiple estimates and compare costs.</li>
                    <li>Avoid contractors who demand full payment upfront.</li>
                    <li>Ensure contractors have liability insurance.</li>
                </ul>
                <h4>Safety Guidelines for Rebuilding</h4>
                <ul>
                    <li>Check structural integrity before re-entering a damaged building.</li>
                    <li>Wear protective gear – Gloves, masks, and boots to prevent injury from debris.</li>
                    <li>Inspect for gas leaks & electrical hazards – Shut off utilities before beginning work.</li>
                    <li>Use disaster-resistant building materials – Windproof roofing, flood-resistant barriers, fire-resistant insulation.</li>
                </ul>
                <h4>Rebuilding Resources:</h4>
                <ul>
                    <li>
                        <a href="https://www.fema.gov/building-science" target="_blank" rel="noopener noreferrer"> FEMA Building Code Guidelines </a>
                    </li>
                    <li>
                        <a href="https://www.hud.gov" target="_blank" rel="noopener noreferrer"> U.S. Department of Housing and Urban Development (HUD) Disaster Recovery </a>
                    </li>
                </ul>
            </div>

            <div id="nonprofits">
                <h2>Nonprofits & Community Support Organizations</h2>
                <ul>
                    <li>
                        <a href="https://www.redcross.org" target="_blank" rel="noopener noreferrer"> American Red Cross </a>
                        – Emergency shelters, financial aid, and recovery guidance.
                    </li>
                    <li>
                        <a href="https://www.habitat.org" target="_blank" rel="noopener noreferrer"> Habitat for Humanity Disaster Recovery </a>
                        – Helps rebuild homes for low-income families after disasters.
                    </li>
                    <li>
                        <a href="https://www.211.org" target="_blank" rel="noopener noreferrer"> United Way’s 211 Service </a>
                        – Connects individuals with local food, shelter, and health services.
                    </li>
                    <li>
                        <a href="https://www.salvationarmyusa.org" target="_blank" rel="noopener noreferrer"> The Salvation Army </a>
                        – Provides meals, emergency housing, and recovery programs.
                    </li>
                    <li>
                        <a href="https://www.feedingamerica.org" target="_blank" rel="noopener noreferrer"> Feeding America </a>
                        – Disaster food assistance for affected communities.
                    </li>
                </ul>
            </div>

            {/* Back to Local Resources Button */}
            <div className="back-button-container">
                <button className="mt-4" onClick={() => navigate("/LocalResources")}>Back Local Resources</button>
            </div>
        </div>
    );
}

export default Rebuilding;
