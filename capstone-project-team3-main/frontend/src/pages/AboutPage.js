import React from "react";
import "../css/AboutUs.css";


function AboutPage() {

	return (
        <div id="guides-container" className="container">
			<h1 className="m-4">About Us</h1>
			<p>
				ReliefConnect is a secure, web-based platform that enhances disaster communication by enabling real-time safety status updates, localized resource sharing, and community-driven support. During crises, communication networks are often overwhelmed, leaving families struggling to verify the safety of loved ones and access critical resources. ReliefConnect addresses these challenges by allowing individuals to register their safety status, search for loved ones, and locate essential services such as shelters and emergency aid centers.
			</p>
			<p>
			To address the communication challenges during disasters, ReliefConnect is designed to support two primary user groups. The first group includes residents in the area of an ongoing natural disaster. ReliefConnect offers quick safety registration for these individuals, providing peace of mind by allowing them to mark themselves as safe during emergencies. Users can access real-time local resources and updates and utilize communication tools to coordinate with neighbors and organize assistance efforts. The second group is the family members, friends, and neighbors who are seeking to confirm the safety of their loved ones during crises. ReliefConnect provides simple and accurate search tools, enabling them to locate loved ones swiftly. Personalized safety messages offer reassurance, while up-to-date information on disaster conditions and available shelters ensures that families remain informed and connected throughout the emergency.
			</p>
			<p>
			The project aims to create a secure, user-friendly platform for disaster-affected individuals to register safety statuses and for families to receive updates. By prioritizing privacy, accessibility, and real-time information, the platform seeks to reduce anxiety and improve disaster response efforts.
			</p>	
			<p>
				The platform uses a JavaScript-based technology stack, React, and Bootstrap, for a user-friendly interface. Express.js handles API management and server-side functionality, with MongoDB Atlas as the database. The platform will be deployed on DigitalOcean, ensuring reliable cloud hosting and GitHub for version control, CI/CD pipelines, and project tracking through GitHub Projects. FEMA, Google Maps, and the American Red Cross APIs provide real-time disaster data to inform users of changing conditions.
			</p>
			<p>
				ReliefConnect incorporates several key features to improve disaster response efforts. The real-time safety registration and search function allows users to mark themselves as safe and locate loved ones based on name, phone number, or address. A resource location and mapping feature integrates Google Maps and FEMA APIs to display nearby shelters, emergency services, and disaster-affected zones, helping users make informed decisions. The community discussion board fosters collaboration by allowing neighbors to share updates, offer assistance, and coordinate aid efforts. Security is a top priority, with the implementation of secure authentication, encrypted data transmission, and role-based access controls to protect user privacy. Additionally, the platform utilizes GitHub Actions for CI/CD, streamlining automated testing and deployment processes.
			</p>
			<p>
			ReliefConnect builds on the now-discontinued Red Cross Safe and Well Program by incorporating innovative features that distinguish it from other emergency tools. Unlike traditional systems that broadcast alerts, ReliefConnect allows users to register their safety status, communicate directly with loved ones, and leverage a digital map to mark and share important areas. It also integrates real-time updates and hyper-local resources like shelters and services.  The platform also includes real-time reporting and advanced security measures to ensure user data privacy. Its community-centric design redefines disaster communication by fostering collaboration through localized chat boards, enabling neighbors to share resources and offer mutual support. By combining accessibility, privacy, and innovative community-focused tools, ReliefConnect empowers users to make informed decisions and builds a more connected and resilient response to crises.
			</p>
		</div>
	);
}

export default AboutPage;