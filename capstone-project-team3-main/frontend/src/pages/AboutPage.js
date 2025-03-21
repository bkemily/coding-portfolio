import React from "react";
import "../css/AboutUs.css";


function AboutPage() {

	return (
		<div className="container about-page">
			<h1 className="m-4">About Us</h1>
			<p>
				ReliefConnect is a secure, web-based platform that enhances disaster communication by enabling real-time safety status updates, localized resource sharing, and community-driven support. During crises, communication networks are often overwhelmed, leaving families struggling to verify the safety of loved ones and access critical resources. ReliefConnect addresses these challenges by allowing individuals to register their safety status, search for loved ones, and locate essential services such as shelters and emergency aid centers.
			</p>
			<p>
				The platform uses a JavaScript-based technology stack, React, and Bootstrap, for a user-friendly interface. Express.js handles API management and server-side functionality, with MongoDB Atlas as the database. The platform will be deployed on DigitalOcean, ensuring reliable cloud hosting and GitHub for version control, CI/CD pipelines, and project tracking through GitHub Projects. FEMA, Google Maps, and the American Red Cross APIs provide real-time disaster data to inform users of changing conditions.
			</p>
			<p>
				ReliefConnect incorporates several key features to improve disaster response efforts. The real-time safety registration and search function allows users to mark themselves as safe and locate loved ones based on name, phone number, or address. A resource location and mapping feature integrates Google Maps and FEMA APIs to display nearby shelters, emergency services, and disaster-affected zones, helping users make informed decisions. The community discussion board fosters collaboration by allowing neighbors to share updates, offer assistance, and coordinate aid efforts. Security is a top priority, with the implementation of secure authentication, encrypted data transmission, and role-based access controls to protect user privacy. Additionally, the platform utilizes GitHub Actions for CI/CD, streamlining automated testing and deployment processes.
			</p>
			<p>
				ReliefConnect redefines disaster communication by modernizing and expanding upon the now-discontinued Red Cross Safe and Well Program. It provides a real-time, community-driven, and secure platform. Its combination of accessibility, privacy, and innovative features empowers individuals and families to stay connected and make informed decisions when it matters most.
			</p>
		</div>
	);
}

export default AboutPage;