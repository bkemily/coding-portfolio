import React from "react";
//import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "../../css/IndividualResources.css";


function FraudProtection() {
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
            <h1>Cybersecurity and Fraud Prevention</h1>
            <p>Natural disasters create chaos, and cybercriminals exploit the situation through scams, phishing attacks, and fraudulent relief efforts. Protecting your personal data and ensuring online safety is crucial before, during, and after a disaster.</p>

            {/* Navigation Buttons */}
            <div className="nav-buttons">
                <button onClick={() => scrollToSection("disaster-scams")}>Avoiding Disaster-Related Scams</button>
                <button onClick={() => scrollToSection("digital-docs")}>Secure Important Documents Digitally</button>
                <button onClick={() => scrollToSection("scams")}>Recognizing Fake Charity & Scams</button>
                <button onClick={() => scrollToSection("report")}>Emergency Reporting & Verification Tools</button>
            </div>
            <div id="disaster-scams">
                <h2>Avoiding Disaster-Related Scams</h2>
                <p>Scammers take advantage of emergencies by posing as relief organizations, government agencies, or even fake landlords offering emergency housing. Here’s how to spot and avoid these scams:</p>
                <p>Beware of phishing emails & fake alerts – Scammers often send fake disaster relief emails that mimic FEMA, Red Cross, or insurance companies.</p>
                <ul>
                    <li> How to stay safe:</li>
                    <ul>
                        <li>Verify emails by visiting official websites (e.g., fema.gov, redcross.org).</li>
                        <li>Look for misspellings, urgent language, or generic greetings (“Dear Customer”).</li>
                        <li>Never click on links or download attachments from unknown senders.</li>
                    </ul>
                </ul>
                <p>Fake contractors & repair scams – Fraudulent repair companies may demand upfront payments and disappear.</p>
                <ul>
                    <li> How to stay safe:</li>
                    <ul>
                        <li>Check licenses & reviews on official state websites before hiring.</li>
                        <li>Avoid paying in full upfront—pay only after work is completed.</li>
                        <li>Get everything in writing, including cost, work timeline, and materials.</li>
                    </ul>
                </ul>

                <p>Fraudulent FEMA & government representatives – Scammers may pose as FEMA officials asking for fees or personal data.</p>
                <ul>
                    <li> How to stay safe:</li>
                    <ul>
                        <li>FEMA never charges for disaster assistance.</li>
                        <li>Official representatives always have a government-issued ID—ask for verification.</li>
                        <li>Report fraud to FEMA’s Disaster Fraud Hotline: 866-720-5721.</li>
                    </ul>
                </ul>

                <p>Fake rental listings & emergency housing scams – Scammers post fake rental listings to trick disaster victims into sending deposits for non-existent housing.</p>
                <ul>
                    <li> How to stay safe:</li>
                    <ul>
                        <li>Verify listings on official sites like FEMA, Red Cross, or local housing authorities.</li>
                        <li>Never wire money or pay in advance without visiting the property.</li>
                        <li>Be suspicious of landlords who rush you into signing a lease or refuse to meet in person.</li>
                    </ul>
                </ul>

                <p>Price gouging & supply hoarding – Some businesses may inflate prices on essentials like food, gas, and emergency supplies.</p>
                <ul>
                    <li> How to stay safe:</li>
                    <ul>
                        <li>Check your state’s price-gouging laws and report violations to the State Attorney General’s office.</li>
                        <li>Compare prices with multiple sellers before purchasing.</li>
                    </ul>
                </ul>
            </div>
            <div id="digital-docs">
                <h2>How to Secure Important Documents Digitally</h2>
                <p><strong>Step 1: Scan & Backup Critical Documents</strong></p>
                <ul>
                    <li>Use a scanner or smartphone scanning app (e.g., Adobe Scan, CamScanner).</li>
                    <li>Save copies of:
                        <ul>
                            <li>Driver’s license / Passport</li>
                            <li>Social Security card</li>
                            <li>Birth & marriage certificates</li>
                            <li>Insurance policies (home, health, car)</li>
                            <li>Bank account & credit card info</li>
                            <li>Deeds, wills, and medical records</li>
                        </ul>
                    </li>
                </ul>

                <p><strong>Step 2: Store Documents Securely</strong></p>
                <ul>
                    <li>Cloud storage (encrypted) – Google Drive, Dropbox, iCloud (with two-factor authentication).</li>
                    <li>Encrypted USB drive – Store a backup in a waterproof, fireproof container.</li>
                    <li>Password-protected PDF files – Secure sensitive documents with strong passwords.</li>
                </ul>

                <p><strong>Step 3: Share Securely</strong></p>
                <ul>
                    <li>Use secure password managers (1Password, Bitwarden) to store logins and document access.</li>
                    <li>Share copies with a trusted family member or attorney.</li>
                </ul>
            </div>
            <div id="scams">
                <h2>Recognizing Fake Charity & Relief Scams</h2>
                <p>Scammers often create fake charity websites or impersonate legitimate organizations to steal donations meant for disaster relief.</p>

                <p>Signs of a Fake Charity Scam:</p>
                <ul>
                    <li>Rushed or pressured donation requests – Scammers insist you donate immediately.</li>
                    <li>Requests for gift cards, wire transfers, or cryptocurrency – Legitimate charities never ask for untraceable payments.</li>
                    <li>Fake websites that resemble real charities – Scammers copy Red Cross, UNICEF, or FEMA branding.</li>
                    <li>Suspicious social media fundraisers – Fake GoFundMe campaigns often surface after disasters.</li>
                </ul>

                <p>How to Verify a Charity:</p>
                <ul>
                    <li>Check charity ratings on:
                        <ul>
                            <li><a href="https://www.charitynavigator.org" target="_blank" rel="noopener noreferrer">Charity Navigator</a></li>
                            <li><a href="https://www.give.org" target="_blank" rel="noopener noreferrer">BBB Wise Giving Alliance</a></li>
                            <li><a href="https://www.guidestar.org" target="_blank" rel="noopener noreferrer">GuideStar</a></li>

                        </ul>
                    </li>
                    <li>Donate directly via the charity’s official website—don’t click links from emails or social media.</li>
                    <li>Verify GoFundMe campaigns by researching the organizer’s legitimacy.</li>
                </ul>

                <p>Report charity fraud to the Federal Trade Commission (FTC): <a href="https://reportfraud.ftc.gov" target="_blank" rel="noopener noreferrer">ReportFraud.ftc.gov</a></p>
            </div>
            <div id="report">
                <h2>Online Emergency Reporting & Verification Tools</h2>
                <p>When disaster strikes, misinformation spreads fast. Use trusted platforms to verify reports, check emergency updates, and mark yourself safe.</p>

                <p>Emergency Alert & Verification Tools:</p>
                <ul>
                    <li>FEMA App – Official disaster alerts, shelter locations, and resources</li>
                    <li>Google Crisis Response – Real-time crisis maps and emergency shelter info</li>
                    <li>Facebook Safety Check – Allows users to mark themselves safe during a disaster</li>
                    <li>Red Cross Emergency App – First aid tips, storm tracking, and shelter finder</li>
                    <li>National Weather Service (NWS) & NOAA – Real-time storm updates</li>
                    <li>InciWeb – Wildfire tracking and official updates</li>
                </ul>

                <p>How to Verify Information During a Disaster:</p>
                <ul>
                    <li>Fact-check sources before sharing – Scammers spread fake evacuation orders and false donation appeals.</li>
                    <li>Cross-check reports with official agencies:</li>
                    <ul>
                        <li><a href="https://www.fema.gov" target="_blank" rel="noopener noreferrer">FEMA</a></li>
                        <li><a href="https://www.weather.gov" target="_blank" rel="noopener noreferrer">NOAA</a></li>
                        <li>Local emergency management websites</li>
                    </ul>
                </ul>
            </div>
            {/* Back to Local Resources Button */}
            <div className="back-button-container">
                <button className="mt-4" onClick={() => navigate("/LocalResources")}>Back Local Resources</button>
            </div>
        </div>
    );
}

export default FraudProtection;
