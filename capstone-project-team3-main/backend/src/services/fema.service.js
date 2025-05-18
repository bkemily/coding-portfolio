const axios = require('axios');
const Shelter = require('../../mongodb/shelters.model');

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

// Get open FEMA shelters from FEMA ARCGIS API
// Tries to get the data from the API. If successful, then cache the data in the database. If the API fails, then get the data from the database.
const getFEMAOpenShelters = async () => {
    try {

        // Try to get the data from the API
        const response = await axios.get(`https://gis.fema.gov/arcgis/rest/services/NSS/OpenShelters/MapServer/0/query?outFields=*&where=1%3D1&f=geojson`);
        let shelters = response.data.features;

        if (!shelters) {
            return [];
        }

        // Return the data immediately, then cache the data in the database
        setImmediate(async () => {
            try {
                // Clear the database and cache the new data
                await Shelter.deleteMany({});
                await Shelter.updateOne({}, { shelters }, { upsert: true });
            } 
            catch (dbError) {}
        });

        return shelters;
    }
    catch (error) {
        try {
            // If the API call fails, get the data from the database
            const cachedSheltersDoc = await Shelter.findOne({});
            
            // If the data is available in the database, return it
            if (cachedSheltersDoc && cachedSheltersDoc.shelters) {
                return cachedSheltersDoc.shelters;
            } 
            else {
                // If the data is not available in the database, throw an error
                throw new Error("No cached data available in the database.");
            }
        } 
        catch (dbError) {
            // If the database call fails, throw an error
            throw new Error("Failed to retrieve data from both the API and the database.");
        }
    }
}

module.exports = {
    getFEMADisasterDeclarations,
    getFEMAOpenShelters
};