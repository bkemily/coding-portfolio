import React from "react";
import "../css/Home.css";
import { useNavigate } from "react-router-dom"; // Import navigation hook

function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="homepage-container">
            <h1>Welcome to ReliefConnect</h1>
            <div className="button-container">
                <button onClick={() => navigate("/SafeWellSubmission")}>Register as Safe and Well</button>
                <button onClick={() => navigate("/SafeWellSearch")}>Locate Loved Ones</button>
            </div>
        </div>
    );
}

export default HomePage;
