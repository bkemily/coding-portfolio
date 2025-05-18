import React from "react";
//import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "../../css/IndividualResources.css";


function MedicalInfo() {
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
            <h1> First Aid & Medical Information</h1>
            {/* Navigation Buttons */}
            <div className="nav-buttons">
                <button onClick={() => scrollToSection("first-aid")}>Basic First Aid for Disasters</button>
                <button onClick={() => scrollToSection("injuries")}>Handling Injuries in a Crisis</button>
                <button onClick={() => scrollToSection("contacts")}>Emergency Contacts for Medical Help</button>
                <button onClick={() => scrollToSection("trama-recovery")}>Mental Health Support & Trauma Recovery</button>
            </div>
            <div id="first-aid">
                <h2>Basic First Aid for Natural Disasters</h2>
                <p>Emergency medical services may be delayed or unavailable during a natural disaster, making basic first aid knowledge crucial for survival. Knowing how to treat injuries, when to seek professional help, and where to find mental health support can save lives and aid in recovery.</p>

                <h3>Essential Items for a Disaster First Aid Kit:</h3>
                <ul>
                    <li>Bandages & dressings – Adhesive bandages, gauze pads, sterile dressings</li>
                    <li>Antiseptics & disinfectants – Alcohol wipes, hydrogen peroxide, antibiotic ointment</li>
                    <li>Pain relievers – Ibuprofen, acetaminophen, aspirin (for suspected heart attacks)</li>
                    <li>Burn treatment – Burn gel, aloe vera, sterile non-stick dressings</li>
                    <li>Wound care supplies – Tweezers, medical gloves, saline solution</li>
                    <li>Splints & supports – Elastic bandages, triangle bandages, finger splints</li>
                    <li>CPR mask & emergency blanket – For resuscitation and warmth</li>
                    <li>Allergy & respiratory care – Antihistamines, EpiPen (if needed), inhaler</li>
                    <li>Essential prescription medications – At least 7 days’ worth in a waterproof container</li>
                    <li>Emergency eyewash solution – Saline drops for chemical exposure or debris in eyes</li>
                </ul>
            </div>

            <div id="injuries">
                <h2>How to Handle Injuries in a Crisis</h2>
                <h3>Severe Bleeding:</h3>
                <ul>
                    <li>Apply direct pressure with a clean cloth or sterile dressing.</li>
                    <li>Elevate the wounded area above heart level if possible.</li>
                    <li>Use a tourniquet only as a last resort for life-threatening bleeding.</li>
                </ul>

                <h3>Burns:</h3>
                <ul>
                    <li>Cool the burn immediately with cool (not ice-cold) water for 10+ minutes.</li>
                    <li>Cover with sterile, non-stick dressing.</li>
                    <li>Do not apply butter or oils—they trap heat and worsen burns.</li>
                </ul>

                <h3>Fractures & Sprains:</h3>
                <ul>
                    <li>Immobilize the limb with a splint or rigid object.</li>
                    <li>Apply ice packs wrapped in a cloth to reduce swelling.</li>
                    <li>Do not attempt to straighten a broken bone—seek medical help.</li>
                </ul>
            </div>

            <div id="contacts">
                <h2>Emergency Contacts for Medical Help</h2>
                <ul>
                    <li>911 – Immediate medical, fire, and police assistance</li>
                    <li>Poison Control: 1-800-222-1222</li>
                    <li>Red Cross Emergency Line: 1-800-RED-CROSS (1-800-733-2767)</li>
                    <li>FEMA Disaster Assistance: 1-800-621-FEMA (1-800-621-3362)</li>
                    <li>SAMHSA Disaster Distress Helpline (Mental Health): 1-800-985-5990</li>
                </ul>
            </div>

            <div id="trama-recovery">
                <h2>Mental Health Support & Trauma Recovery</h2>
                <p>Disasters cause significant emotional distress, including anxiety, PTSD, depression, and grief. Mental health support is crucial for long-term recovery.</p>

                <h3>Common Emotional Reactions After a Disaster:</h3>
                <ul>
                    <li>Shock & disbelief – Feeling detached or numb.</li>
                    <li>Anxiety & panic – Racing thoughts, feeling unsafe.</li>
                    <li>Guilt & grief – Survivor’s guilt, mourning losses.</li>
                    <li>Sleep disturbances – Nightmares, insomnia.</li>
                    <li>Hypervigilance – Feeling on edge or easily startled.</li>
                </ul>

                <h3>How to Cope with Trauma After a Disaster:</h3>
                <ul>
                    <li>Talk to someone – Connect with family, friends, or a counselor.</li>
                    <li>Limit news exposure – Avoid constant disaster updates, which can increase stress.</li>
                    <li>Stay active – Exercise helps reduce anxiety and tension.</li>
                    <li>Practice deep breathing – Use relaxation techniques to manage panic attacks.</li>
                    <li>Stick to a routine – Helps restore a sense of normalcy.</li>
                </ul>

                <h3>When to Seek Professional Help:</h3>
                <ul>
                    <li>If symptoms persist for more than a month and interfere with daily life.</li>
                    <li>If experiencing suicidal thoughts or extreme hopelessness.</li>
                    <li>If unable to function normally at work, school, or in relationships.</li>
                </ul>

                <h3>Mental Health Support Hotlines & Resources:</h3>
                <ul>
                    <li>SAMHSA Disaster Distress Helpline: 1-800-985-5990 (24/7 crisis counseling)</li>
                    <li>National Suicide Prevention Lifeline: 988</li>
                    <li>Crisis Text Line: Text HOME to 741741</li>
                    <li>Red Cross Disaster Mental Health Services: <a href="https://www.redcross.org/about-us/our-work/disaster-relief/disaster-mental-health.html" target="_blank" rel="noopener noreferrer">redcross.org</a></li>
                    <li>Veterans Crisis Line: 988, then Press 1</li>
                </ul>

                <h3>Apps for Coping with Trauma:</h3>
                <ul>
                    <li>Calm – Guided meditation for stress relief</li>
                    <li>PTSD Coach – Tools for coping with trauma</li>
                    <li>Headspace – Mindfulness and relaxation exercises</li>
                </ul>
            </div>

            {/* Back to Local Resources Button */}
            <div className="back-button-container">
                <button className="mt-4" onClick={() => navigate("/LocalResources")}>Back Local Resources</button>
            </div>
        </div>
    );
}

export default MedicalInfo;
