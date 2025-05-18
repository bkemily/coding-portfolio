const request = require('supertest');
const ContactService = require('../services/contact.service'); // Import ContactService to mock

// Mock the ContactService methods
jest.mock('../services/contact.service', () => ({
    createNewContactMessage: jest.fn()
}));

describe('Get All Contact Messages API', () => {

    let app;

    // Initialize the app before each test, resetting the mocks
    beforeEach(() => {
        app = require('../app');
        jest.clearAllMocks();
    });

    // Test for the GET /api/contact-messages endpoint
    it('should return 200 and a list of contact messages', async () => {
        const mockMessages = [
            "Test Message 1",
            "Test Message 2"
        ];

        ContactService.getAllContactMessages = jest.fn().mockResolvedValue(mockMessages);
        const res = await request(app)
            .get('/api/contact-messages')
            .set('Accept', 'application/json');
        expect(res.status).toBe(200);
        expect(res.body.success).toBe(true);
        expect(res.body.message).toBe('Contact messages retrieved successfully');
        expect(res.body.data).toEqual(mockMessages);
        expect(ContactService.getAllContactMessages).toHaveBeenCalled();
    });
});

describe('Create Contact Message API', () => {
    
    let app;

    // Initialize the app before each test
    beforeEach(() => {
        app = require('../app'); 
        jest.clearAllMocks();
    });

    // Test for the POST /api/contact-messages endpoint
    it('should return 200 for a valid contact message', async () => {
        const newMessage = {
            name: 'John Doe',
            emailAddress: 'john@example.com',
            subject: 'Inquiry',
            message: 'Hello, I need help.'
        };

        ContactService.createNewContactMessage.mockResolvedValue(undefined);

        const res = await request(app)
            .post('/api/contact-messages')
            .send(newMessage);

        expect(res.status).toBe(200);
        expect(res.body.success).toBe(true);
        expect(res.body.message).toBe('Contact message created successfully');
        expect(ContactService.createNewContactMessage).toHaveBeenCalledWith(newMessage);
    });

    // Test for the POST /api/contact-messages endpoint with missing fields
    it('should return 400 for missing name', async () => {
        const res = await request(app)
            .post('/api/contact-messages')
            .send({
                emailAddress: 'test@test.com',
                subject: 'Test Subject',
                message: 'Test Message'
            });

        expect(res.status).toBe(400);
        expect(res.text).toBe('Missing required fields');
    });

    // Test for the POST /api/contact-messages endpoint with missing email address
    it('should return 400 for missing email address', async () => {
        const res = await request(app)
            .post('/api/contact-messages')
            .send({
                name: 'Test Name',
                subject: 'Test Subject',
                message: 'Test Message'
            });

        expect(res.status).toBe(400);
        expect(res.text).toBe('Missing required fields');
    });

    // Test for the POST /api/contact-messages endpoint with missing subject
    it('should return 400 for missing subject', async () => {
        const res = await request(app)
            .post('/api/contact-messages')
            .send({
                name: 'Test Name',
                emailAddress: 'test@test.com',
                message: 'Test Message'
            });

        expect(res.status).toBe(400);
        expect(res.text).toBe('Missing required fields');
    });

    // Test for the POST /api/contact-messages endpoint with missing message
    it('should return 400 for missing message', async () => {
        const res = await request(app)
            .post('/api/contact-messages')
            .send({
                name: 'Test Name',
                emailAddress: 'test@test.com',
                subject: 'Test Subject'
            });

        expect(res.status).toBe(400);
        expect(res.text).toBe('Missing required fields');
    });
});
