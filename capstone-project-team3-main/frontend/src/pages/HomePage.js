import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Home.css";
import React from "react";

function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="homepage-container">
            <div id="home-container" className="home-container">
                <h1 className="hero-title">Stay Connected   <br />   When It Matters Most</h1>
                <p className="hero-description">
                    <strong>ReliefConnect</strong> empowers communities during disasters by providing real-time communication tools. Easily register your safety status, check on loved ones, and access critical local resources—all in one secure platform.
                </p>

                <p className="hero-description">
                    Click any of the buttons below to register your safety status, locate loved ones, access the map and local resources, or join community discussions.
                </p>

                <div className="card-container">
                    <div className="card-subcontainer">
                        <div className="custom-card" onClick={() => navigate("/SafeWellSubmission")}>
                            <img src="/submission.jpg" alt="Safe & Well Submission" className="card-image" />
                            <h1 className="card-text">Safety Submission</h1>
                        </div>
                        <div className="custom-card" onClick={() => navigate("/SafeWellSearch")}>
                            <img src="/search.jpg" alt="Safe & Well Search" className="card-image" />
                            <h1 className="card-text">Safety Search</h1>
                        </div>
                    </div>
                    <div className="card-subcontainer">
                        <div className="custom-card" onClick={() => navigate("/LocalResources")}>
                            <img src="/map.jpg" alt="Local-Resources" className="card-image" />
                            <h1 className="card-text">Local Resources</h1>
                        </div>
                        <div className="custom-card" onClick={() => navigate("/Chat")}>
                            <img src="/chat.jpg" alt="Community-Chat" className="card-image" />
                            <h1 className="card-text">Community Chat</h1>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            );
}

            export default HomePage;
