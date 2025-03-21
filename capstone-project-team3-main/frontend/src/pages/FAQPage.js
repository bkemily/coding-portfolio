import React from "react";
import "../css/FAQ.css";

function FAQPage() {
	return (
		<div className="FAQ-page container">
				<h1 className="m-4">ReliefConnect - FAQs</h1>
				<br />
				<p className="FAQ-container">
					<b>Q: What is ReliefConnect?</b>
					<br />
					A: ReliefConnect is a secure, web-based platform that enhances disaster communication by enabling real-time safety status updates, localized resource sharing, and community-driven support.
				</p>
				<p className="FAQ-container">
					<b>Q: How do I declare myself as Safe and Well</b>
					<br />
					A: Click on the Safe and Well button on this website and fill out the form. You can also search through our database to find loved ones who have also declared themselves as Safe and Well.
				</p>
				<p className="FAQ-container">
					<b>Q: Who can I contact for support?</b>
					<br />
					A: You can contact our support team by clicking on the Help link on the website and filling out the form. We will get back to you as soon as possible.
				</p>
				<p className="FAQ-container">
					<b>Q: Is ReliefConnect free to use?</b>
					<br />
					A: Yes, ReliefConnect is completely free to use for all individuals and neighborhoods.
				</p>
				<p className="FAQ-container">
					<b>Q: How do we get our data?</b>
					<br />
					A: ReliefConnect utilizes FEMA, Google Maps, and the American Red Cross APIs to provide real-time disaster data to inform users of changing conditions.
				</p>
				<p className="FAQ-container">
					<b>Q: How do we protect your data?</b>
					<br />
					A: ReliefConnect incorporates secure authentication, encrypted data transmission, and role-based access controls to protect user privacy.
				</p>
		</div>
	);
}

export default FAQPage;