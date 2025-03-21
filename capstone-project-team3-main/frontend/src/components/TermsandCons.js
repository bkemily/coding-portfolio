import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function TermsandCons() {
    const navigate = useNavigate();
    const location = useLocation();
    const formData = location.state; // Get submitted form data

    return (
        <div className="container">
            <h1>Thank You!</h1>
            <p>Your Safe and Well submission has been received.</p>
            <p>Your loved ones will be able to search and view your message.</p>
        </div>
    );
}

export default TermsandCons;
