const request = require('supertest');
const express = require('express');
const corsMiddleware = require('./cors.middleware');

describe('CORS Middleware', () => {
  let app;

  beforeEach(() => {
    app = express();
    process.env.FRONTEND_URL = 'http://example.com'; // Mock the allowed origin
    app.use(corsMiddleware); // Apply the CORS middleware
    app.get('/', (req, res) => res.send('OK')); // Add a test route
  });

  // Test for the CORS middleware for Allowed Origin
  it('should allow requests from the allowed origin', async () => {
    const res = await request(app)
      .get('/')
      .set('Origin', 'http://example.com'); // Simulate a request from the allowed origin

    expect(res.status).toBe(200); // Ensure the route works
    expect(res.headers['access-control-allow-origin']).toBe('http://example.com'); // Check the CORS header
    expect(res.headers['access-control-allow-credentials']).toBe('true'); // Check credentials header
  });

  // Test for the CORS middleware for Disallowed Origin
  it('should not block requests from an untrusted origin but still set CORS headers', async () => {
    const res = await request(app)
      .get('/')
      .set('Origin', 'http://notallowed.com'); // Simulate a request from an untrusted origin

    expect(res.status).toBe(200); // Middleware does not block requests
    expect(res.headers['access-control-allow-origin']).toBe('http://example.com'); // The middleware always sets this to process.env.FRONTEND_URL
  });

// Test for the CORS middleware for OPTIONS method
  it('should handle preflight OPTIONS requests', async () => {
    const res = await request(app)
      .options('/')
      .set('Origin', 'http://example.com'); // Simulate a preflight request from the allowed origin

    expect(res.status).toBe(200); // Ensure the preflight request is handled
    expect(res.headers['access-control-allow-origin']).toBe('http://example.com'); // Check the CORS header
    expect(res.headers['access-control-allow-methods']).toContain('GET'); // Check allowed methods
  });
});