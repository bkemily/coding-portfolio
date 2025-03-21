const axios = require('axios');

// Get disaster declarations from FEMA API, ordered by declaration date in descending order, only return the first 10 records
const getFEMADisasterDeclarations = async () => {
    try {
        const response = await axios.get(`https://www.fema.gov/api/open/v2/DisasterDeclarationsSummaries?$orderby=declarationDate desc&$top=1000`);
        let disasters = response.data.DisasterDeclarationsSummaries;

        if (!disasters) {
            return [];
        }

        // Group the disasters by disasterNumber
        let disasterMap = new Map();
        disasters.forEach(disaster => {
            disasterMap.set(disaster.disasterNumber, disaster);
        });

        // Convert the map back to an array
        let disasterArray = Array.from(disasterMap.values());

        // Return records from the last 90 days
        const currentDate = new Date();
        const last30Days = new Date(currentDate.setDate(currentDate.getDate() - 90));
       
        // Filter the disasters by declaration date
        disasterArray = disasterArray.filter(disaster => {
            return new Date(disaster.declarationDate) >= last30Days
        });

        return disasterArray;
    }
    catch (error) {
        throw new Error(error.message);
    }
}

// Get open FEMA shelters from FEMA ARCGIS API (Pending approval from FEMA)
const getFEMAOpenShelters = async () => {
    try {
        return {};
    }
    catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    getFEMADisasterDeclarations,
    getFEMAOpenShelters
};