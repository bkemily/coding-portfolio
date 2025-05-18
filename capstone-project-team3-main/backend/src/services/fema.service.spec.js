const axios = require('axios');
const Shelter = require('../../mongodb/shelters.model');
const { getFEMADisasterDeclarations, getFEMAOpenShelters } = require('./fema.service');

jest.mock('axios'); // Mock the axios module
jest.mock('../../mongodb/shelters.model'); // Mock the Shelter model

describe('FEMA Service', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test
  });

  // Test cases for getFEMADisasterDeclarations function
  describe('getFEMADisasterDeclarations', () => {

    // Test for the last 90 days disaster declarations
    it('should return disaster declarations from the last 90 days', async () => {
      
        // Mock the API response
      const mockResponse = {
        data: {
          DisasterDeclarationsSummaries: [
            { disasterNumber: 1, declarationDate: new Date().toISOString() },
            { disasterNumber: 2, declarationDate: new Date().toISOString() },
          ],
        },
      };

      // Mock axios.get to return the mock response
      axios.get.mockResolvedValue(mockResponse);
      const result = await getFEMADisasterDeclarations();
      
      expect(result).toEqual(mockResponse.data.DisasterDeclarationsSummaries);
    });

    // Test for disaster declarations with no results
    it('should return an empty array if no disasters are found', async () => {
      
      // Mock the API response with no disasters
      const mockResponse = { data: { DisasterDeclarationsSummaries: null } };
      axios.get.mockResolvedValue(mockResponse);
      const result = await getFEMADisasterDeclarations();

      expect(result).toEqual([]);
    });

    // Test for disaster declarations with an error
    it('should throw an error if the API call fails', async () => {
      // Mock an API error
      axios.get.mockRejectedValue(new Error('API Error'));
      await expect(getFEMADisasterDeclarations()).rejects.toThrow('API Error');
    });
  });

  // Test cases for getFEMAOpenShelters function
  describe('getFEMAOpenShelters', () => {

    // Test for open shelters from the API
    it('should return open shelters from the API', async () => {
      
        // Mock the API response
      const mockResponse = {
        data: {
          features: [{ id: 1, name: 'Shelter 1' }, { id: 2, name: 'Shelter 2' }],
        },
      };

      // Mock axios.get to return the mock response
      axios.get.mockResolvedValue(mockResponse);
      const result = await getFEMAOpenShelters();

      expect(result).toEqual(mockResponse.data.features);
    });

    // Test for open shelters with no results
    it('should return cached shelters from the database if the API fails', async () => {
      
    // Mock the Axios API failure
      axios.get.mockRejectedValue(new Error('API Error'));

      // Mock the database response
      const mockShelters = [{ id: 1, name: 'Cached Shelter 1' }, { id: 2, name: 'Cached Shelter 2' }];
      Shelter.findOne.mockResolvedValue({ shelters: mockShelters });

      const result = await getFEMAOpenShelters();

      expect(Shelter.findOne).toHaveBeenCalled(); // Ensure the database was queried
      expect(result).toEqual(mockShelters);
    });

    // Test for open shelters with no cached data
    it('should throw an error if both the API and database fail', async () => {
      // Mock the API failure
      axios.get.mockRejectedValue(new Error('API Error'));

      // Mock the database failure
      Shelter.findOne.mockRejectedValue(new Error('Database Error'));

      await expect(getFEMAOpenShelters()).rejects.toThrow(
        'Failed to retrieve data from both the API and the database.'
      );
    });
  });
});