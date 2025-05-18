import { useEffect, useState } from "react";
import Map from "./Map";

const stateMap = {
    "AL": "Alabama", "AK": "Alaska", "AZ": "Arizona", "AR": "Arkansas", "CA": "California",
    "CO": "Colorado", "CT": "Connecticut", "DE": "Delaware", "FL": "Florida", "GA": "Georgia", 
    "HI": "Hawaii", "ID": "Idaho", "IL": "Illinois", "IN": "Indiana", "IA": "Iowa",
    "KS": "Kansas", "KY": "Kentucky", "LA": "Louisiana", "ME": "Maine", "MD": "Maryland", "MA": "Massachusetts",
    "MI": "Michigan", "MN": "Minnesota", "MS": "Mississippi", "MO": "Missouri", "MT": "Montana",
    "NE": "Nebraska", "NV": "Nevada", "NH": "New Hampshire", "NJ": "New Jersey", "NM": "New Mexico",
    "NY": "New York", "NC": "North Carolina", "ND": "North Dakota", "OH": "Ohio", "OK": "Oklahoma",
    "OR": "Oregon", "PA": "Pennsylvania", "RI": "Rhode Island", "SC": "South Carolina",
    "SD": "South Dakota", "TN": "Tennessee", "TX": "Texas", "UT": "Utah", "VT": "Vermont",
    "VA": "Virginia", "WA": "Washington", "WV": "West Virginia", "WI": "Wisconsin", "WY": "Wyoming"
};

const MapContainer = () => {
    const [mapData, setMapData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [alert, setAlert] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedFilters, setSelectedFilters] = useState({});
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedShelter, setSelectedShelter] = useState(null); // Track the selected shelter

    useEffect(() => {
        // Fetch shelter data from the API
        fetch(`${process.env.REACT_APP_API_URL}/api/fema-shelters`)
            .then((response) => response.json())
            .then((data) => {
                let currentData = data.data;

                currentData.forEach((item) => {
                    item.properties.state = stateMap[item.properties.state] || item.properties.state;
                });

                setMapData(currentData);
                setLoading(false);
            })
            .catch((error) => {
                setAlert("Failed to retrieve shelter data. Please try again later.");
            });
    }, []);

    // Define the filters for the dropdown
    const filters = [
        { key: "GENPOPSHEL", label: "General Shelters" },
        { key: "EMEREVAC", label: "Emergency Centers" },
        { key: "ADA", label: "ADA Compliant" }, // New filter for ADA compliance
        { key: "PETS", label: "Pets Allowed" }, // New filter for Pets Allowed
    ];

    // Initialize selected filters based on the filters array
    const activeFilters = Object.keys(selectedFilters).filter((key) => selectedFilters[key]);

    // Function to handle search by name, address, city, state, etc.
    const filteredData = mapData.filter((item) => {
        // Concatenate the relevant fields for searching
        const searchFields = [
            item.properties.shelter_name,
            item.properties.address,
            item.properties.city,
            item.properties.state,
            item.properties.zip,
        ];

        // Check if the item matches the search term in any of the fields
        const matchesSearch = searchFields.some((field) =>
            field.toLowerCase().includes(searchTerm.toLowerCase())
        );

        // Check if the item matches the selected filters
        const matchesFilter =
            (activeFilters.length === 0 || activeFilters.includes(item.properties.subfacility_code)) &&
            (!selectedFilters["ADA"] || item.properties.ada_compliant) &&
            (!selectedFilters["PETS"] || item.properties.pets_allowed);

        return matchesSearch && matchesFilter;
    });

    // Function to toggle filters
    const toggleFilter = (key) => {
        setSelectedFilters((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    // Function to handle shelter selection
    const handleShelterClick = (shelter) => {
        setSelectedShelter((prev) => (prev?.properties.shelter_id === shelter.properties.shelter_id ? null : shelter));
    };

    // Render the filter checkboxes based on the filters array
    const renderFilters = filters.map(({ key, label }) => {
        return (
            <div className="form-check" key={key}>
                <input
                    className="form-check-input"
                    type="checkbox"
                    id={key}
                    checked={selectedFilters[key] || false}
                    onChange={() => toggleFilter(key)}
                />
                <label className="form-check-label" htmlFor={key}>
                    {label}
                </label>
            </div>
        );
    });

    // Render the filtered results based on the search term and selected filters.
    let renderResults = <p className="alert alert-primary m-0">No results found.</p>;
    if (filteredData.length !== 0) {
        let filteredItems = filteredData.map((item) => (
            <li
                key={item.properties.shelter_id}
                className={`list-group-item ${selectedShelter?.properties.shelter_id === item.properties.shelter_id ? "bg-primary text-white" : ""}`}
                style={{ cursor: "pointer" }}
                onClick={() => handleShelterClick(item)}
            >
                <h6 className="m-0">
                    {item.properties.shelter_name} - {item.properties.address}, {item.properties.city}, {item.properties.state} {item.properties.zip}
                </h6>
            </li>
        ));

        renderResults = <ul className="list-group">{filteredItems}</ul>;
    }

    return (
        <div className="my-6">
            {/* Search & Filters Row */}
            <div className="d-flex flex-column flex-md-row align-items-stretch gap-3 mb-4">
                {/* Search Bar */}
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search for a Shelter"
                        value={searchTerm || ""}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Filter Dropdown */}
                <div className="dropdown">
                    <button
                        className="btn btn-outline-secondary dropdown-toggle w-100"
                        type="button"
                        onClick={() => setShowDropdown(!showDropdown)}
                    >
                        Filter Resources
                    </button>
                    <div
                        className={`dropdown-menu p-3 ${showDropdown ? "show" : ""}`}
                        style={{ minWidth: "250px" }}
                    >
                        {renderFilters}
                    </div>
                </div>
            </div>

            {/* Map */}
            <div className="border rounded mb-4" style={{ height: "400px" }}>
                {alert && !loading && <div className="alert alert-danger">{alert}</div>}
                <Map mapData={filteredData} loading={loading} setAlert={setAlert} selectedShelter={selectedShelter} />
            </div>

            {/* Filtered Results */}
            <div>
                <h5>Matching Results:</h5>
                <div className="border rounded p-3" style={{ maxHeight: "200px", overflowY: "auto" }}>
                    {renderResults}
                </div>
            </div>
        </div>
    );
};

export default MapContainer;
