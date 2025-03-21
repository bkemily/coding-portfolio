import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <nav className="sidebar" id="sidebar">
            <div className="sidebar-content">
                <ul className="sidebar-links">
                    <li className="sidebar-item">
                        <NavLink to="/SafeWellSubmission" className="sidebar-link">Register as Safe and Well</NavLink>
                    </li>
                    <li className="sidebar-item">
                        <NavLink to="/SafeWellSearch" className="sidebar-link">Locate Safe and Well Loved Ones</NavLink>
                    </li>
                    <li className="sidebar-item">
                        <NavLink to="/Map" className="sidebar-link">Safe and Well Map</NavLink>
                    </li>
                    <li className="sidebar-item">
                        <NavLink to="/LocalResources" className="sidebar-link">Local Resources</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Sidebar;
