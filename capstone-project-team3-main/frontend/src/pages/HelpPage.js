import React, { useState } from "react";
import "../css/Help.css";

function HelpPage() {

    const [formData, setFormData] = useState({
        name: "",
        emailAddress: "",
        subject: "",
        message: ""
    });

    const requiredFields = {
        name: "Name",
        emailAddress: "Email",
        subject: "Subject",
        message: "Message"
    };

    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);
    const [alert, setAlert] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    // Function to validate form fields
    const validateForm = (name, value) => {

        // Check if the field is required and if it is empty
        if(requiredFields[name] && !value.trim()) {
            return `* ${requiredFields[name]} is required.`;
        }

        // Regular expressions for phone number, emailAddress address, and zip code
        const rules = {
            emailAddress: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        };

        // Check if the field value does not match the regular expression
        if (rules[name] && !rules[name].test(value)) {
            if(name === "emailAddress"){
                return "* Please enter a valid emailAddress address (e.g., example@emailAddress.com).";
            }
        }

        return "";
    };

    // Function to handle form field changes
    const handleChange = (e) => {

        // Destructure the name, value, type, and checked properties from the event target
        const { name, value } = e.target;
        let updatedForm = { ...formData };

        // Update the form data with the new value based on the field name
        updatedForm[name] = value;

        // Validate the form field and update the error message
        let errorMessage = validateForm(name, value);

        // Update the errors object with the new error message
        const newErrors = { 
            ...errors, 
            [name]: errorMessage
        };

        // Update the form data, errors, and form validity
        setFormData(updatedForm);
        setErrors(newErrors);

        // Ensure the form is valid if all required fields are filled and there are no errors
        let isNoErrors = Object.values(newErrors).every((err) => err === "");
        let isRequiredFields = Object.keys(requiredFields).every((field) => updatedForm[field]?.trim());

        setIsValid(
            isNoErrors && isRequiredFields
        );
    };

    // Function to submit the form data to the API. Fills out the form
    const submitDataToAPI = async () => {
        return await fetch(`${process.env.REACT_APP_API_URL}/api/contact-messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => {

            if(!response.ok) {
                setAlert("Unable to submit the form. Please try again later.");
                return null;
            }

            return response.json();
        })
        .catch(error => {
            setAlert("Unable to submit the form. Please try again later.");
            return null;
        });
    };

    // Function to handle form submission, navigate to the thank you page if the form is valid
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isValid) {
            setAlert("Please fill in all required fields.");
            return;
        }

        // Submit the form data to the API
        submitDataToAPI().then((response) => {
            if (!response) {
                return;
            }

            // Redirect to the thank you page with the form data
            setAlert("");
            setSuccessMessage("Your message has been sent successfully.");

            // Clear the form data and errors
            setFormData({
                name: "",
                emailAddress: "",
                subject: "",
                message: ""
            });
            setErrors({});
            setIsValid(false);
        });
    };

	return (
        <div id="guides-container" className="container">
            <h1 className="my-4">Contact Us</h1>
            <p className="mb-4">
                If you have any questions or concerns, please fill out the form below, and we will get back to you as soon as possible. 
                Our mission is to provide you with the best support possible, and we are here to help you with any issues you may have.
            </p>
            
            <form className="help-form" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6 form-group">
                        <label htmlFor="name" className="required-label">Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-control" placeholder="Enter your name" required />
                        {errors.name && <div className="alert alert-danger mt-2">{errors.name}</div>}
                    </div>

                    <div className="col-md-6 form-group">
                        <label htmlFor="emailAddress"className="required-label">Email:</label>
                        <input type="text" id="emailAddress" name="emailAddress" value={formData.emailAddress} onChange={handleChange} className="form-control" placeholder="Enter your Email Address" required />
                        {errors.emailAddress && <div className="alert alert-danger mt-2">{errors.emailAddress}</div>}
                    </div>
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="subject" className="required-label">Subject:</label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="form-control" placeholder="Enter the subject of your message" required />
                    {errors.subject && <div className="alert alert-danger mt-2">{errors.subject}</div>}
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="message" className="required-label">Message:</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="form-control" rows="5" placeholder="Type your message here..." required></textarea>
                    {errors.message && <div className="alert alert-danger mt-2">{errors.message}</div>}
                </div>

                <button type="submit" disabled={!isValid} className="btn btn-primary mt-3">Submit</button>
                {alert && <div className="alert alert-danger mt-3">{alert}</div>}
                {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
            </form>
        </div>
    );
}

export default HelpPage;
