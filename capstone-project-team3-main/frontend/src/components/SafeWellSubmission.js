import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/SafeWellSubmission.css";
import FishCaptcha from "./FishCaptcha"; // Import the FishCaptcha component

function SafeWellSubmission() {
    const navigate = useNavigate();

    // State to store form data
    const [formData, setFormData] = useState({
        disasterType: "", firstName: "", lastName: "", phoneNumber: "", emailAddress: "",
        homeAddress: "", homeAddress2: "", homeCity: "", homeState: "", homeZipCode: "",
        message: "", safeLocations: []
    });

    // Map with required fields to formal names
    const requiredFields = {
        disasterType: "Disaster Type", firstName: "First Name", lastName: "Last Name",
        phoneNumber: "Phone Number", emailAddress: "Email Address", homeAddress: "Home Address",
        homeCity: "Home City", homeState: "Home State", homeZipCode: "Home Zip Code"
    }

    // Array of checkbox options for Safe and Well Notice
    const checkboxOptions = [
        "I am safe and well.", "Family and I are safe and well.", "Currently at shelter.", "Currently at home.",
        "Currently at friend/family member/neighbor's house.", "Currently at a hotel.", "Will make phone calls when able.",
        "Will email when able.", "I am safe and in the process of evacuating.", "I have evacuated and I am safe.",
        "I am evacuating to a Shelter.", "I am currently/remaining at home.", "I am evacuating to the house of a family member/friend."
    ];

    // State to hold disaster options
    const backUpDisasterOptions = ["Hurricane", "Earthquake", "Wildfire", "Flood", "Tornado", "Other"];
    const [disasterOptions, setDisasterOptions] = useState(null);

    // State to store error messages and form validity
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);
    const [alert, setAlert] = useState(false);
    const [captchaVisible, setCaptchaVisible] = useState(false); // State to show/hide CAPTCHA modal
    const [captchaCompleted, setCaptchaCompleted] = useState(false); // State to track CAPTCHA completion

    useEffect(() => {
        // Fetch disaster options from the API
        fetch(`${process.env.REACT_APP_API_URL}/api/fema-disasters`)
            .then(response => {
                if (!response.ok) {
                    setAlert("Unable to retrieve disaster options. Please try again later.");
                    setDisasterOptions(null);
                }
                else {
                    return response.json();
                }
            })
            .then(data => {
                if (data && data.data) {
                    setDisasterOptions(data.data);
                }
                else {
                    setDisasterOptions(null);
                }
            })
            .catch(error => {
                setAlert("Unable to retrieve disaster options. Please try again later.");
            });
    }, []);

    // Function to validate form fields
    const validateForm = (name, value, updatedForm) => {

        // Check if the field is required and if it is empty
        if (requiredFields[name] && !value.trim()) {
            return `* ${requiredFields[name]} is required.`;
        }

        // Regular expressions for phone number, email address, and zip code
        const rules = {
            phoneNumber: /^\+?[1-9]\d{0,2}([-\s]?\(?\d{1,4}\)?){1,2}([-\s]?\d{1,4}){1,4}$/,
            emailAddress: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            homeZipCode: /^\d{5}(-\d{4})?$/
        };

        // Check if the field value does not match the regular expression
        if (rules[name] && !rules[name].test(value)) {
            if (name === "phoneNumber") {
                return "* Please enter a valid phone number (e.g., 123-456-7890).";
            }

            if (name === "emailAddress") {
                return "* Please enter a valid email address (e.g., example@email.com).";
            }

            if (name === "homeZipCode") {
                return "* Please enter a valid zip code (e.g., 12345 or 12345-6789).";
            }
        }

        // Check if the safeLocations field is empty
        if (name === "safeLocations" && updatedForm.safeLocations.length === 0) {
            return "* Please select at least one option.";
        }

        return "";
    };

    // Function to handle form field changes
    const handleChange = (e) => {

        // Destructure the name, value, type, and checked properties from the event target
        const { name, value, type, checked } = e.target;
        let updatedForm = { ...formData };

        // Update the form data based on the field type
        if (type === "checkbox") {
            let updatedSafeLocations = [...updatedForm.safeLocations];

            // Add or remove the value from the safeLocations array based on the checkbox status
            if (checked) {
                updatedSafeLocations.push(value);
            }
            else {
                updatedSafeLocations = updatedSafeLocations.filter(location => location !== value);
            }

            updatedForm.safeLocations = updatedSafeLocations;
        }
        else {
            // Update the form data with the new value based on the field name
            updatedForm[name] = value;
        }

        // Validate the form field and update the error message
        let errorMessage = validateForm(name, value, updatedForm);

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
        let isSafeLocations = updatedForm.safeLocations.length > 0;

        setIsValid(
            isNoErrors && isRequiredFields && isSafeLocations
        );
    };

    // Function to handle form submission, navigate to the thank you page if the form is valid
    const handleSubmit = (e) => {
        if (e) e.preventDefault();

        if (!captchaCompleted) {
            setCaptchaVisible(true); // Show the CAPTCHA modal
            return;
        }

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
            navigate("/thank-you", { state: formData });
        });
    };

    // Function to submit the form data to the API. Fills out the form
    const submitDataToAPI = async () => {
        return await fetch(`${process.env.REACT_APP_API_URL}/api/safe-posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(response => {

                if (!response.ok) {
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

    const handleCaptchaComplete = () => {
        setCaptchaCompleted(true);
    };

    const handleCaptchaUnsolve = () => {
        setCaptchaCompleted(false); // Mark CAPTCHA as unsolved
    };

    const handleCaptchaSubmit = () => {
        if (captchaCompleted) {
            setCaptchaVisible(false); // Hide the CAPTCHA modal
            handleSubmit(); // Submit the form
        } else {
            setAlert("Please complete the CAPTCHA correctly before submitting.");
        }
    };

    // Map the checkbox options to form elements
    const mappedCheckboxOptions = checkboxOptions.map((option, index) => {
        return (
            <div className="form-check my-2" key={option}>
                <input id={`safe-and-well-notice-${index}`} type="checkbox" className="form-check-input" name="safeLocations" value={option} onChange={handleChange} />
                <label className="form-check-label ms-2" for={`safe-and-well-notice-${index}`} >{option}</label>
            </div>
        );
    });

    let disasterOptionsList = null;

    // Map the disaster options to form elements, or use the backup options if the API call fails
    if (disasterOptions) {

        disasterOptionsList = disasterOptions.map((disaster, index) => {

            let formattedDate = new Date(disaster.declarationDate).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });

            // take all uppercase titles and make them title case
            let formattedTitle = disaster.declarationTitle.toLowerCase().split(' ').map((word) => {
                return word.charAt(0).toUpperCase() + word.slice(1);
            }).join(' ');

            let disasterType = `${formattedTitle}, ${disaster.state} - ${formattedDate}`;

            return (
                <option key={index} value={disasterType}>{disasterType}</option>
            )
        });
    }
    else {
        disasterOptionsList = backUpDisasterOptions.map((disaster, index) => {
            return (
                <option key={index} value={disaster}>{disaster}</option>
            )
        });
    }

    return (
            <div className="sw-container">
                <h1>Safe and Well Registration</h1>
                <p className="my-4">
                    If you have been affected by a disaster, you can use this page to post "safe and well messages" that your loved ones can view.
                    Registering yourself on the Safe and Well website is completely voluntary, and you can update your entry at any time.
                </p>
      
                  {/* CAPTCHA Modal */}
            {captchaVisible && (
                <div className="captcha-modal">
                    <div className="captcha-content">
                        <h2>Complete the CAPTCHA</h2>
                        <FishCaptcha onComplete={handleCaptchaComplete} onUnsolve={handleCaptchaUnsolve} />
                        <button
                            className="btn btn-primary mt-3"
                            onClick={handleCaptchaSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            )}

                <form onSubmit={handleSubmit} className="mt-3">
                    <h2 className="text-secondary">Disaster Information</h2>
                    <label className="required-label">Select Disaster Type:</label>
                    <select name="disasterType" value={formData.disasterType} onChange={handleChange} className="form-control">
                        <option value="">-- Select a Disaster --</option>
                        {disasterOptionsList}
                    </select>
                    {errors.disasterType && <div className="alert alert-danger mt-2">{errors.disasterType}</div>}

                    <h2 className="text-secondary mt-4">About Me</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <label className="required-label" for="first-name">First Name:</label>
                            <input id="first-name" type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="form-control" placeholder="Enter your First Name" />
                            {errors.firstName && <div className="alert alert-danger mt-2">{errors.firstName}</div>}
                        </div>
                        <div className="col-md-6">
                            <label className="required-label" for="last-name">Last Name:</label>
                            <input id="last-name" type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="form-control" placeholder="Enter your Last Name" />
                            {errors.lastName && <div className="alert alert-danger mt-2">{errors.lastName}</div>}
                        </div>
                    </div>

                    <label className="required-label" for="phone-number">Phone Number:</label>
                    <input id="phone-number" type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="form-control" placeholder="123-456-7890" />
                    {errors.phoneNumber && <div className="alert alert-danger mt-2">{errors.phoneNumber}</div>}

                    <label className="required-label" for="email-address">Email Address:</label>
                    <input id="email-address" type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} className="form-control" placeholder="example@email.com" />
                    {errors.emailAddress && <div className="alert alert-danger mt-2">{errors.emailAddress}</div>}

                    <h2 className="text-secondary mt-4">Location Information</h2>
                    <label className="required-label" for="home-address">Home Address:</label>
                    <input id="home-address" type="text" name="homeAddress" value={formData.homeAddress} onChange={handleChange} className="form-control" placeholder="Home Address Line 1" />
                    {errors.homeAddress && <div className="alert alert-danger mt-2">{errors.homeAddress}</div>}

                    <label for="home-address-two">Home Address (Line 2):</label>
                    <input id="home-address-two" type="text" name="homeAddress2" value={formData.homeAddress2} onChange={handleChange} className="form-control" placeholder="Apartment, Suite, etc. (optional)" />

                    <label className="required-label" for="home-city">Home City:</label>
                    <input id="home-city" type="text" name="homeCity" value={formData.homeCity} onChange={handleChange} className="form-control" placeholder="City" />
                    {errors.homeCity && <div className="alert alert-danger mt-2">{errors.homeCity}</div>}

                    <label className="required-label" for="home-state">Home State:</label>
                    <input id="home-state" type="text" name="homeState" value={formData.homeState} onChange={handleChange} className="form-control" placeholder="State" />
                    {errors.homeState && <div className="alert alert-danger mt-2">{errors.homeState}</div>}

                    <label className="required-label" for="home-zip-code">Home Zip Code:</label>
                    <input id="home-zip-code" type="text" name="homeZipCode" value={formData.homeZipCode} onChange={handleChange} className="form-control" placeholder="12345 or 12345-6789" />
                    {errors.homeZipCode && <div className="alert alert-danger mt-2">{errors.homeZipCode}</div>}

                    <h2 className="text-secondary mt-4">Safe and Well Information</h2>

                    <p className="required-label">Safe and Well Notice:</p>
                    <div className="checkbox-group">
                        {mappedCheckboxOptions}
                    </div>
                    {errors.safeLocations && <div className="alert alert-danger mt-2">{errors.safeLocations}</div>}

                    <label for="additional-message">Additional Message (Optional):</label>
                    <textarea id="additional-message" name="message" value={formData.message} onChange={handleChange} className="form-control" rows="3" placeholder="Enter any additional information..."></textarea>

                    <button type="submit" className="btn btn-primary mt-4" disabled={!isValid}>Submit</button>

                    {alert && <div className="alert alert-danger mt-4 text-center">{alert}</div>}
                </form>
            </div>
    );
}

export default SafeWellSubmission;
