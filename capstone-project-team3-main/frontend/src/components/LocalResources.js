import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Resources.css";

import MapContainer from "./MapContainer";

function LocalResources() {
    const navigate = useNavigate();

    // Define resource pages and their corresponding paths
    const resources = [
        { name: "Preparedness Guides & Checklists", path: "/GuidesAndChecklists" },
        { name: "First Aid & Medical Information", path: "/MedicalInfo" },
        { name: "Shelter & Assistance Resources", path: "/ShelterAndAssistance" },
        { name: "Recovery & Rebuilding Assistance", path: "/Rebuilding" },
        { name: "Training & Educational Materials", path: "/TrainingAndEdu" },
        { name: "Cybersecurity & Fraud Prevention", path: "/FraudProtection" }
    ];

    return (
        <div className="sw-container">
            <h1>Local Resources</h1>
            <p className="my-4">
                During emergencies, access to shelters, food, medical aid, and supplies is critical.
                Use the interactive map below to locate nearby resources, including evacuation centers,
                emergency services, and open stores. Stay informed with real-time updates from FEMA,
                Red Cross, and community reports to make the best decisions for your safety.
            </p>
            <p>Search for specific resources, apply filters for your needs, and view availability in real-time.</p>
            <p>Connect with your community by sharing resource updates and offering assistance.</p>
            <p>Stay safe and informed with the latest alerts and emergency hotlines.</p>
            <p><strong>Note:</strong> Information is user-generated and sourced from official data. Always verify availability before traveling.</p>

            <div className="container my-4">
                <MapContainer />
            </div>

            <p className="my-4">
                See below for more resources specific to what you may need.
            </p>

            {/* Resource Buttons Section */}
            <div className="row mt-4">
                {resources.map((resource, index) => (
                    <div key={index} className="col-md-6 my-2">
                        <button
                            className="resource-button w-100"
                            onClick={() => navigate(resource.path)}
                        >
                            {resource.name}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LocalResources;
