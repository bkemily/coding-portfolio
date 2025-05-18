import React, {useState, useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "../css/SafeWellSearch.css";

function SearchResultsPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const searchData = location.state; // Get search parameters from state
    
    // Set alert message state for error handling
    const [results, setResults] = useState([]);
    const [alert, setAlert] = useState(false);

    useEffect(() => {
        if (!searchData) {
            navigate('/NotFound'); // Redirect to home if no form data found
            return;
        }

        // Fetch safe posts based on search parameters
        let params = new URLSearchParams({
            firstName: searchData.firstName,
            lastName: searchData.lastName,
            phoneNumber: searchData.phoneNumber,
            homeAddress: searchData.homeAddress,
            homeAddress2: searchData.homeAddress2,
            homeCity: searchData.homeCity,
            homeState: searchData.homeState,
            homeZipCode: searchData.homeZipCode
        });

        fetch(`${process.env.REACT_APP_API_URL}/api/safe-posts?${params}`)
        .then(response => {

            if(!response.ok) {
                setAlert("Unable to retrieve the Search Results. Please try again later.");
                setResults(null);
            }
            else {
                return response.json();
            }
        })
        .then(data => {
            if(data && data.data) {

                let safePosts = data.data;

                // Reverse the order of safe posts to display the most recent posts first
                safePosts.reverse();

                // Format phone numbers
                safePosts.forEach(post => {
                    if(post.phoneNumber) {
                        post.phoneNumber = post.phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
                    }
                });

                setResults(safePosts);
            }
        })
        .catch(error => {
            setAlert("Unable to retrieve the Search Results. Please try again later.");
        });

    }, [searchData, navigate]);

    if (!searchData) {
        return null; // Prevent rendering anything before redirect
    }

    // Map home address items to a single string
    const mapHomeAddressItems = (data) => {
        let homeAddressItems = [data.homeAddress, data.homeAddress2, data.homeCity, data.homeState, data.homeZipCode];
        return homeAddressItems.filter(item => item).join(", ");
    }

    // Display search option data based on selected search option
    let searchOptionData = null;

    // Display home address data if available
    if (searchData.searchOption === "homeAddress") {
        let homeAddressItems = mapHomeAddressItems(searchData);
        searchOptionData = <p id="search-results-details"><strong>Home Address:</strong> {homeAddressItems || "N/A"}</p>;
    }

    // Display phone number data if available
    if (searchData.searchOption === "phoneNumber") {
        searchOptionData = <p id="search-results-details"><strong>Phone Number:</strong> {searchData.phoneNumber || "N/A"}</p>;
    }

    // Map search results to table rows
    let mappedResults = results.map((person, index) => {

        let safeLocations = person.safeLocations.join(" ");
        let homeAddressItems = mapHomeAddressItems(person);

        return (
            <tr key={index}>
                <td>{person.disasterType}</td>
                <td>{person.firstName}</td>
                <td>{person.lastName}</td>
                <td>{person.phoneNumber}</td>
                <td>{homeAddressItems}</td>
                <td>{safeLocations}</td>
                <td>{person.message}</td>
            </tr>
        );
    });

    return (
        <div className="container">
            <h1>Search Results</h1>
            
            <p className="my-4"> 
                This page allows users to search for their loved ones in the event of a disaster. Below are the search results for your provided information:
            </p>
            <p id="search-results-details"><strong>First Name:</strong> {searchData.firstName || "N/A"}</p>
            <p id="search-results-details"><strong>Last Name:</strong> {searchData.lastName || "N/A"}</p>
            
            {searchOptionData}

            {results && results.length > 0 &&
                <table border="1" cellPadding="10" id="search-results-table">
                    <thead>
                        <tr>
                            <th>Disaster Type</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone Number</th>
                            <th>Home Address</th>
                            <th>Safe Locations</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mappedResults}
                    </tbody>
                </table>
            }

            {results && results.length === 0 && !alert &&
                <div className="alert alert-info mt-4 text-center">No search results found</div>
            }

            {alert && <div className="alert alert-danger mt-4 mb-0 text-center">{alert}</div>}

            <button className="btn btn-primary mt-4" onClick={() => navigate("/")}>Back to Home</button>
        </div>
    );
}

export default SearchResultsPage;
