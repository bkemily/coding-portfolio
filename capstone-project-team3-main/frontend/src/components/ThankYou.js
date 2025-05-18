import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function ThankYouPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const formData = location.state; // Get submitted form data from location state

    useEffect(() => {
        if (!formData) {
            navigate('/NotFound'); // Redirect to home if no form data found
        }

        // Scroll to top of page on load
        window.scrollTo(0, 0);
    }, [formData, navigate]);

    if (!formData) {
        return null; // Prevent rendering anything before redirect
    }

    let responderDetails = (
        <div>
            <h2>Submission Details</h2>
            <p id="thank-you-details"><strong>Disaster Type:</strong> {formData.disasterType}</p>
            <p id="thank-you-details"><strong>First Name:</strong> {formData.firstName}</p>
            <p id="thank-you-details"><strong>Last Name:</strong> {formData.lastName}</p>
            <p id="thank-you-details"><strong>Phone Number:</strong> {formData.phoneNumber}</p>
            <p id="thank-you-details"><strong>Email Address:</strong> {formData.emailAddress}</p>
            <p id="thank-you-details"><strong>Home Address:</strong> {formData.homeAddress}</p>
            <p id="thank-you-details"><strong>Home Address Line 2:</strong> {formData.homeAddress || "N/A"}</p>
            <p id="thank-you-details"><strong>Home City:</strong> {formData.homeCity}</p>
            <p id="thank-you-details"><strong>Home State:</strong> {formData.homeState}</p>
            <p id="thank-you-details"><strong>Home Zip Code:</strong> {formData.homeZipCode}</p>
            <p id="thank-you-details"><strong>Safe Locations:</strong> {formData.safeLocations.join(" ")}</p>
            <p id="thank-you-details"><strong>Custom Safe Message:</strong> {formData.message || "N/A"}</p>
        </div>
    );

    return (
        <div className="container">
            <h1>Thank You!</h1>
            <p className = "my-4">
                Your Safe and Well submission has been received successfully.
                Your loved ones will be able to search and view your message by entering your name and phone number.
                Please keep yourself safe and stay connected with your family and friends.
            </p>

            <div className="submission-details">
                {responderDetails}
            </div>

            <button onClick={() => navigate("/") } className="btn btn-primary mt-4">Go Back to Home</button>
        </div>
    );
}

export default ThankYouPage;
