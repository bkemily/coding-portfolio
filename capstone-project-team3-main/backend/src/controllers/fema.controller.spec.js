const request = require('supertest');
const FemaService = require('../services/fema.service');

// Mock the FemaService methods
jest.mock('../services/fema.service', () => ({
    getFEMADisasterDeclarations: jest.fn(),
    getFEMAOpenShelters: jest.fn()
}));

describe('Get FEMA Disaster Declarations API', () => {

    // Test for the GET /api/fema-disasters endpoint
    it('should return 200 and a list of disaster declarations', async () => {
        const mockDisasters = [
            { disasterNumber: 1, title: 'Test Disaster 1' },
            { disasterNumber: 2, title: 'Test Disaster 2' }
        ];

        FemaService.getFEMADisasterDeclarations.mockResolvedValue(mockDisasters);
        const res = await request(require('../app'))
            .get('/api/fema-disasters')
            .set('Accept', 'application/json');
        expect(res.status).toBe(200);
        expect(res.body.success).toBe(true);
        expect(res.body.message).toBe('FEMA disaster declarations retrieved successfully');
        expect(res.body.data).toEqual(mockDisasters);
    });

    // Test for the GET /api/fema-disasters endpoint when no disasters are found
    it('should return 200 and an empty list if no disasters are found', async () => {
        FemaService.getFEMADisasterDeclarations.mockResolvedValue([]);
        const res = await request(require('../app'))
            .get('/api/fema-disasters')
            .set('Accept', 'application/json');
        expect(res.status).toBe(200);
        expect(res.body.success).toBe(true);
        expect(res.body.message).toBe('FEMA disaster declarations retrieved successfully');
        expect(res.body.data).toEqual([]);
    });
});

describe('Get FEMA Open Shelters API', () => {

    // Test for the GET /api/fema-shelters endpoint
    it('should return 200 and a list of open shelters', async () => {
        const mockShelters = [
            { name: 'Test Shelter 1', address: '123 Test St' },
            { name: 'Test Shelter 2', address: '456 Test Ave' }
        ];

        FemaService.getFEMAOpenShelters.mockResolvedValue(mockShelters);
        const res = await request(require('../app'))
            .get('/api/fema-shelters')
            .set('Accept', 'application/json');
        expect(res.status).toBe(200);
        expect(res.body.success).toBe(true);
        expect(res.body.message).toBe('FEMA open shelters retrieved successfully');
        expect(res.body.data).toEqual(mockShelters);
    });

    // Test for the GET /api/fema-shelters endpoint when no shelters are found
    it('should return 200 and an empty list if no shelters are found', async () => {
        FemaService.getFEMAOpenShelters.mockResolvedValue([]);
        const res = await request(require('../app'))
            .get('/api/fema-shelters')
            .set('Accept', 'application/json');
        expect(res.status).toBe(200);
        expect(res.body.success).toBe(true);
        expect(res.body.message).toBe('FEMA open shelters retrieved successfully');
        expect(res.body.data).toEqual([]);
    });
});