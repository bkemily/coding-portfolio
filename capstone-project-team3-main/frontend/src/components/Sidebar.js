import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Sidebar.css';

function Sidebar() {
    return (
        <div className="navbar-container">
            <nav className="navbar navbar-expand-md navbar-dark" id="sidebar-navbar">
                <div className="small-sidebar-navbar d-flex align-items-center gap-2">
                    <h1 id="navbar-header" className="d-md-none mb-0">
                        <NavLink to="" id="navbar-subtitle">Features</NavLink>
                    </h1>
                    <button
                        className="navbar-toggler custom-toggle-spacing"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#sidebarNavbarContent"
                        aria-controls="sidebarNavbarContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span style={{color: 'white' }}>&#8942;</span>
                    </button>

                </div>

                <div className="nav navbar-collapse collapse" id="sidebarNavbarContent">
                    <ul className="navbar-nav" id="navbar-page-links">
                        <li className="nav-item active">
                            <NavLink to="/SafeWellSubmission" className="nav-link">Register as Safe and Well</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink to="/SafeWellSearch" className="nav-link">Search for Loved Ones</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink to="/LocalResources" className="nav-link">Local Resources and Map</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink to="/Chat" className="nav-link">Community Chat</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Sidebar;
