import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import "bootstrap/dist/css/bootstrap.min.css"; 
import "../css/SafeWellSearch.css";  

// Define the required fields and validation rules
const requiredFields = ["firstName", "lastName", "searchOption"];

// Define the validation rules for phone number and zip code
const rules = {
    phoneNumber: /^\d{10}$|^\(\d{3}\)\s?\d{3}-\d{4}$|^\d{3}-\d{3}-\d{4}$/,
    homeZipCode: /^\d{5}(-\d{4})?$/
};

function SafeWellSearch() {
    const navigate = useNavigate(); 

    // Initialize the search data and errors state
    const [searchData, setSearchData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        homeAddress: "",
        homeAddress2: "",
        homeCity: "",
        homeState: "",
        homeZipCode: "",
        searchOption: "" 
    });

    // Initialize the errors state and isValid state
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {

        // Check required fields
        let isBasicRequiredFilled = searchData["firstName"] && searchData["lastName"] && searchData["searchOption"];
        
        if (searchData.searchOption === "phoneNumber") {

            // Check if the phone number and basic required fields are valid
            const isPhoneNumberValid = rules.phoneNumber.test(searchData.phoneNumber);
            let isRequiredFilled = isBasicRequiredFilled && searchData["phoneNumber"].trim();

            // Check if there are any errors in the required fields and phone number
            let noRequiredFieldErrors = !Object.keys(errors).some((key) => requiredFields.includes(key) && errors[key]);
            setIsValid(isRequiredFilled && noRequiredFieldErrors && isPhoneNumberValid);
        } 
        else if (searchData.searchOption === "homeAddress") {

            // Check if the zip code and basic required fields are valid
            const isZipCodeValid = rules.homeZipCode.test(searchData.homeZipCode);
            let isRequiredFilled = isBasicRequiredFilled && 
                                   searchData["homeAddress"].trim() && 
                                   searchData["homeCity"].trim() && 
                                   searchData["homeState"].trim() && 
                                   searchData["homeZipCode"].trim();

            // Check if there are any errors in the required fields and zip code
            let noRequiredFieldErrors = !Object.keys(errors).some((key) => requiredFields.includes(key) && errors[key]);
            setIsValid(isRequiredFilled && noRequiredFieldErrors && isZipCodeValid);
        }
        else {
            // If no search option is selected, the search is invalid
            setIsValid(false);
        }

    }, [searchData, errors]);

    // Validate the field based on the name and value
    const validateField = (name, value) => {

        if (requiredFields.includes(name) && !value.trim()) {
            return "* This field is required.";
        } 
        else if (name === "phoneNumber" && !rules.phoneNumber.test(value)) {
            return "* Please enter a valid phone number (e.g., 123-456-7890).";
        } 
        else if (name === "homeZipCode" && !rules.homeZipCode.test(value)) {
            return "* Please enter a valid zip code (e.g., 12345 or 12345-6789).";
        }

        return "";
    };

    // Handle the change event for the input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearchData({ ...searchData, [name]: value });

        // Validate the field when the value changes, and update the errors state
        const error = validateField(name, value);
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: error
        }));
    };

    // Handle the change event for the search option
    const handleOptionChange = (e) => {
        const selectedOption = e.target.value;
        setSearchData({ ...searchData, searchOption: selectedOption });
    };

    // Handle the search event, validate the search option, and navigate to the search results page
    const handleSearch = (e) => {
        e.preventDefault();

        // Check if the search options are valid, if not, set the errors state
        if (!isValid) {
            setErrors({
                ...errors,
                searchOption: searchData.searchOption ? "" : "* Please select a search option."
            });
            return;
        }

        // Navigate to the search results page with the search data
        navigate("/search-results", { state: searchData });
    };

    return (
        <div className="container mt-5">
            <h1>Safe and Well Search</h1>
            <p className="my-4">
                This page allows you to search for individuals who have registered themselves as "safe and well."
                To begin your search, enter the First Name and Last Name of the person you are looking for,
                and then select either Phone Number or Home Address to proceed.
            </p>

            <form onSubmit={handleSearch} className="mt-3">
                <h2 className="text-secondary mb-4">Search for a Loved One</h2>

                <div className="row">
                    <div className="col-md-6">
                        <label className="required-label">First Name:</label>
                        <input 
                            type="text" 
                            name="firstName" 
                            value={searchData.firstName} 
                            onChange={handleChange} 
                            className="form-control mt-2"
                            placeholder="Enter First Name"
                        />
                        {errors.firstName && <div className="alert alert-danger mt-2">{errors.firstName}</div>}
                    </div>

                    <div className="col-md-6">
                        <label className="required-label">Last Name:</label>
                        <input 
                            type="text" 
                            name="lastName" 
                            value={searchData.lastName} 
                            onChange={handleChange} 
                            className="form-control mt-2"
                            placeholder="Enter Last Name"
                        />
                        {errors.lastName && <div className="alert alert-danger mt-2">{errors.lastName}</div>}
                    </div>
                </div>

                <h3 className="text-secondary my-4">Select One Additional Search Option:</h3>

                <div className="form-check">
                    <input 
                        type="radio" 
                        className="form-check-input" 
                        name="searchOption" 
                        value="phoneNumber" 
                        checked={searchData.searchOption === "phoneNumber"}
                        onChange={handleOptionChange}
                    />
                    <label className="form-check-label required-label ms-2"> Phone Number:</label>
                </div> 

                <div className="mx-5">
                    <label>Phone Number:</label>
                    <input type="tel" 
                        name="phoneNumber" 
                        value={searchData.phoneNumber} 
                        onChange={handleChange} 
                        className="form-control mt-2" 
                        placeholder="123-456-7890" 
                        disabled={searchData.searchOption !== "phoneNumber"}
                    />
                    {searchData.searchOption === "phoneNumber" && errors.phoneNumber && (
                        <div className="alert alert-danger mt-2">{errors.phoneNumber}</div>
                    )}
                </div>

                <div className="form-check mt-3">
                    <input 
                        type="radio" 
                        className="form-check-input" 
                        name="searchOption" 
                        value="homeAddress" 
                        checked={searchData.searchOption === "homeAddress"}
                        onChange={handleOptionChange}
                    />
                    <label className="form-check-label required-label ms-2"> Home Address:</label>
                </div>

                <div className="mx-5">
                    <label className="required-label mt-2">Home Address (Line 1):</label>
                    <input type="text" 
                        name="homeAddress" 
                        value={searchData.homeAddress} 
                        onChange={handleChange} 
                        className="form-control mt-2" 
                        placeholder="Home Address Line 1" 
                        disabled={searchData.searchOption !== "homeAddress"}
                    />
                    {searchData.searchOption === "homeAddress" && errors.homeAddress && (
                        <div className="alert alert-danger mt-2">{errors.homeAddress}</div>
                    )}

                    <label>Home Address (Line 2):</label>
                    <input type="text" 
                        name="homeAddress2" 
                        value={searchData.homeAddress2} 
                        onChange={handleChange} 
                        className="form-control mt-2" 
                        placeholder="Apartment, Suite, etc. (optional)" 
                        disabled={searchData.searchOption !== "homeAddress"}
                    />

                    <label className="required-label">Home City:</label>
                    <input type="text" 
                        name="homeCity" 
                        value={searchData.homeCity} 
                        onChange={handleChange} 
                        className="form-control mt-2" 
                        placeholder="City" 
                        disabled={searchData.searchOption !== "homeAddress"}
                    />

                    <label className="required-label">Home State:</label>
                    <input type="text" 
                        name="homeState" 
                        value={searchData.homeState} 
                        onChange={handleChange} 
                        className="form-control mt-2" 
                        placeholder="State" 
                        disabled={searchData.searchOption !== "homeAddress"}
                    />

                    <label className="required-label">Home Zip Code:</label>
                    <input type="text" 
                        name="homeZipCode" 
                        value={searchData.homeZipCode} 
                        onChange={handleChange} 
                        className="form-control mt-2" 
                        placeholder="12345 or 12345-6789" 
                        disabled={searchData.searchOption !== "homeAddress"}
                    />
                    {searchData.searchOption === "homeAddress" && errors.homeZipCode && (
                        <div className="alert alert-danger mt-2">{errors.homeZipCode}</div>
                    )}
                </div>

                <button type="submit" className="btn btn-primary mt-4" disabled={!isValid}>
                    Search
                </button>
            </form>
        </div>
    );
}

export default SafeWellSearch;
