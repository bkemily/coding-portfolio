import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(props) {

	let loginButton = <button className="btn btn-light" id="sign-in-button" type="button" onClick={props.handleSignIn}>Sign In</button>;

	if (props.user) {
		loginButton = <button className="btn btn-light" id="sign-in-button" type="button" onClick={props.handleSignOut}>Sign Out</button>;
	}

	return (
		<nav className="navbar navbar-expand-md navbar-dark" id="navbar">
			<div className="small-navbar">
				<div id="navbar-intro">
					<NavLink to=""><img src="/logo.png" alt="ReliefConnect Logo" id="navbar-logo" /></NavLink>
					<h1 id="navbar-header"><NavLink to="" id="navbar-title">ReliefConnect</NavLink></h1>
				</div>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
					aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
			</div>
			<div className="nav navbar-collapse collapse" id="navbarSupportedContent">
				<ul className="navbar-nav" id="navbar-page-links">
					<li className="nav-item active">
						<NavLink to="/" className="nav-link" id="nav-journals">Home</NavLink>
					</li>
					<li className="nav-item active">
						<NavLink to="/about" className="nav-link" id="nav-about">About Us</NavLink>
					</li>
					<li className="nav-item active">
						<NavLink to="/faqs" className="nav-link" id="nav-favorites">FAQs</NavLink>
					</li>
					<li className="nav-item active">
						<NavLink to="/help" className="nav-link" id="nav-favorites">Help</NavLink>
					</li>
					<li className="nav-item active">
						{loginButton}
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;