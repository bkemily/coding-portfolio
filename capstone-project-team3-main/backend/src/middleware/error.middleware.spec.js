const request = require('supertest');
const express = require('express');
const errorMiddleware = require('./error.middleware');

describe('Error Handling Middleware', () => {

    let app;

    beforeEach(() => {
      app = express(); // Create a new app instance for each test
      app.use(express.json()); // Add JSON parsing middleware
    });

    // Test for 404 Not Found
    it('should return 404 for non-existent routes', async () => {
        const res = await request(app).get('/non-existent-route');
        expect(res.status).toBe(404);
    });

    // Test for 500 Internal Server Error
    it('should return 500 for internal server errors', async () => {
        
        // Mock an internal server error function
        app.get('/internal-error', (req, res) => {
            throw new Error('Internal Server Error');
        });

        app.use(errorMiddleware); // Use the error middleware

        const res = await request(app).get('/internal-error');
        expect(res.status).toBe(500);
    });
});