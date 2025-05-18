import React from "react";
import "../css/FAQ.css";

function FAQPage() {
	return (
        <div id="guides-container" className="container">
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
				<p className="FAQ-container">
					<b>Q: How does ReliefConnect work?</b>
					<br />
					A: ReliefConnect allows individuals to register their safety status, search for loved ones, and access real-time disaster updates and resources. Users can also connect with their community through a localized discussion board.
					</p>
				<p className="FAQ-container">
					<b>Q: Who can use ReliefConnect?</b>
					<br />
					A: Anyone affected by a disaster, as well as their friends, family, and neighbors who are looking for updates on their safety and well-being.
					</p>
				<p className="FAQ-container">
					<b>Q: How long does it take for my status update to appear?</b>
					<br />
					A: Your “Safe and Well” status is updated in real time once you submit the form.
				</p>
				<p className="FAQ-container">
					<b>Q: Can I search for someone who hasn’t registered on ReliefConnect?</b>
					<br />
					A: No, the search feature only returns results for users who have voluntarily registered their safety status.
				</p>
				<p className="FAQ-container">
					<b>Q: What information is visible when someone searches for me?</b>
					<br />
					A: Only your first name, last name, registration date and time, and any optional message you provided will be visible.
				</p>
				<p className="FAQ-container">
					<b>Q: How accurate is the resource and shelter information?</b>
					<br />
					A: Your “Safe and Well” status is updated in real time once you submit the form.
				</p>				
				<p className="FAQ-container">
					<b>Q: How accurate is the resource and shelter information?</b>
					<br />
					A: We use official sources such as FEMA, Google Maps, and the American Red Cross to provide real-time updates. However, resource availability may change rapidly during disasters.
				</p>
		</div>
	);
}

export default FAQPage;