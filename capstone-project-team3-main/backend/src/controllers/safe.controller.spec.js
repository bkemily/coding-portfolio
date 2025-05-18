const request = require('supertest');
const SafePostService = require('../services/safe.service'); // Import service to mock

jest.mock('../services/safe.service', () => ({
    getSafePosts: jest.fn(),
    createSafePost: jest.fn(),
    updateSafePost: jest.fn(),
    deleteSafePost: jest.fn()
}));

describe('Safe Posts API', () => {
    
    let app;

    beforeEach(() => {
        app = require('../app'); // Import Express app
        jest.clearAllMocks(); // Reset mocks before each test
    });

    // GET SAFE POSTS
    describe('Get Safe Posts', () => {

        // Test for missing last name
        it('should return 400 for missing last name', async () => {
            const res = await request(app).get('/api/safe-posts').query({
                phoneNumber: '123-456-7890',
                homeAddress: '123 Main St',
                homeCity: 'Anytown',
                homeState: 'New York'
            });

            expect(res.status).toBe(400);
            expect(res.text).toBe('Missing required fields');
        });

        // Test for missing phone number
        it('should return 400 for missing phone number', async () => {
            const res = await request(app).get('/api/safe-posts').query({
                lastName: 'Doe',
            });
            expect(res.status).toBe(400);
            expect(res.text).toBe('Missing required fields');
        });

        // Test for missing home address
        it('should return 400 for missing home address', async () => {
            const res = await request(app).get('/api/safe-posts').query({
                lastName: 'Doe',
                homeCity: 'Anytown',
                homeState: 'New York'
            });
            expect(res.status).toBe(400);
            expect(res.text).toBe('Missing required fields');
        });
                
        // Test for missing home city
        it('should return 400 for missing home city', async () => {
            const res = await request(app).get('/api/safe-posts').query({
                lastName: 'Doe',
                homeAddress: '123 Main St',
                homeState: 'New York'
            });
            expect(res.status).toBe(400);
            expect(res.text).toBe('Missing required fields');
        });

        // Test for missing home state
        it('should return 400 for missing home state', async () => {
            const res = await request(app).get('/api/safe-posts').query({
                lastName: 'Doe',
                homeAddress: '123 Main St',
                homeCity: 'Anytown'
            });
            expect(res.status).toBe(400);
            expect(res.text).toBe('Missing required fields');
        });

        // Test for successful retrieval of safe posts
        it('should return 200 with safe posts', async () => {
            const mockData = [{ id: 1, lastName: 'Doe', phoneNumber: '123-456-7890' }];
            SafePostService.getSafePosts.mockResolvedValue(mockData);

            const res = await request(app).get('/api/safe-posts').query({ lastName: 'Doe', phoneNumber: '123-456-7890' });

            expect(res.status).toBe(200);
            expect(res.body.success).toBe(true);
            expect(res.body.data).toEqual(mockData);
        });
    });

    // CREATE SAFE POST
    describe('Create Safe Post', () => {

        // Test for missing last name
        it('should return 400 for missing last name', async () => {
            const res = await request(app).post('/api/safe-posts').send({
                phoneNumber: '123-456-7890',
                homeAddress: '123 Main St',
                homeCity: 'Anytown',
                homeState: 'New York'
            });

            expect(res.status).toBe(400);
            expect(res.text).toBe('Missing required fields');
        });

        // Test for missing phone number
        it('should return 400 for missing phone number', async () => {
            const res = await request(app).post('/api/safe-posts').send({
                lastName: 'Doe',
            });
            expect(res.status).toBe(400);
            expect(res.text).toBe('Missing required fields');
        });

        // Test for missing home address
        it('should return 400 for missing home address', async () => {
            const res = await request(app).post('/api/safe-posts').send({
                lastName: 'Doe',
                homeCity: 'Anytown',
                homeState: 'New York'
            });
            expect(res.status).toBe(400);
            expect(res.text).toBe('Missing required fields');
        });

        // Test for missing home city
        it('should return 400 for missing home city', async () => {
            const res = await request(app).post('/api/safe-posts').send({
                lastName: 'Doe',
                homeAddress: '123 Main St',
                homeState: 'New York'
            });
            expect(res.status).toBe(400);
            expect(res.text).toBe('Missing required fields');
        });

        // Test for missing home state
        it('should return 400 for missing home state', async () => {
            const res = await request(app).post('/api/safe-posts').send({
                lastName: 'Doe',
                homeAddress: '123 Main St',
                homeCity: 'Anytown'
            });
            expect(res.status).toBe(400);
            expect(res.text).toBe('Missing required fields');
        });

        // Test for successful creation of safe post
        it('should return 200 for successful safe post creation', async () => {
            SafePostService.createSafePost.mockResolvedValue(undefined);

            const res = await request(app).post('/api/safe-posts').send({
                lastName: 'Doe',
                phoneNumber: '123-456-7890',
                homeAddress: '123 Main St',
                homeCity: 'Anytown',
                homeState: 'New York'
            });

            expect(res.status).toBe(200);
            expect(res.body.success).toBe(true);
            expect(res.body.message).toBe('Safe post created successfully');
        });
    });

    // UPDATE SAFE POST
    describe('Update Safe Post', () => {

        // Test for missing ID
        it('should return 400 for missing ID', async () => {
            const res = await request(app).put('/api/safe-posts').send({
                lastName: 'Doe',
                phoneNumber: '123-456-7890'
            });

            expect(res.status).toBe(400);
            expect(res.text).toBe('Missing required fields');
        });

        // Test for successful update of safe post
        it('should return 200 for successful update', async () => {
            SafePostService.updateSafePost.mockResolvedValue({ id: '12345', lastName: 'Doe', phoneNumber: '123-456-7890' });

            const res = await request(app).put('/api/safe-posts').send({
                id: '12345',
                lastName: 'Doe',
                phoneNumber: '123-456-7890',
                homeAddress: '123 Main St'
            });

            expect(res.status).toBe(200);
            expect(res.body.success).toBe(true);
            expect(res.body.message).toBe('Safe post updated successfully');
        });

        // Test for safe post not found
        it('should return 404 if safe post not found', async () => {
            SafePostService.updateSafePost.mockResolvedValue(null);

            const res = await request(app).put('/api/safe-posts').send({
                id: '12345',
                lastName: 'Doe',
                phoneNumber: '123-456-7890',
                homeAddress: '123 Main St'
            });

            expect(res.status).toBe(404);
            expect(res.text).toBe('Safe post not found');
        });
    });

    // DELETE SAFE POST
    describe('Delete Safe Post', () => {

        // Test for missing ID
        it('should return 400 for missing ID', async () => {
            const res = await request(app).delete('/api/safe-posts').send({
                lastName: 'Doe'
            });

            expect(res.status).toBe(400);
            expect(res.text).toBe('Missing required fields');
        });

        // Test for successful deletion
        it('should return 200 for successful deletion', async () => {
            SafePostService.deleteSafePost.mockResolvedValue({ id: '12345', lastName: 'Doe' });

            const res = await request(app).delete('/api/safe-posts').send({ id: '12345' });

            expect(res.status).toBe(200);
            expect(res.body.success).toBe(true);
            expect(res.body.message).toBe('Safe post deleted successfully');
        });

        // Test for safe post not found
        it('should return 404 if safe post not found', async () => {
            SafePostService.deleteSafePost.mockResolvedValue(null);

            const res = await request(app).delete('/api/safe-posts').send({ id: '12345' });

            expect(res.status).toBe(404);
            expect(res.text).toBe('Safe post not found');
        });
    });
});