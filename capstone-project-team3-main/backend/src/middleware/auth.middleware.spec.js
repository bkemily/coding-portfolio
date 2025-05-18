// tests/auth.middleware.spec.js
const express = require('express');
const request = require('supertest');
const authMiddleware = require('../middleware/auth.middleware'); // adjust path as needed

// Tests for the auth middleware
describe('Auth Middleware', () => {
  let app;

  beforeEach(() => {
    app = express();
    app.use(express.json());
  });

  // Test to check if the middleware rejects requests without req.user
  it('should reject requests without req.user with 401', async () => {
    // Mount the middleware alone, then a test route
    app.use(authMiddleware);
    app.get('/test', (req, res) => res.status(200).send('OK'));

    const res = await request(app).get('/test');
    expect(res.status).toBe(401);
    expect(res.body).toEqual({
      success: false,
      message: 'Unauthorized access'
    });
  });

  // Test to check if the middleware allows requests with req.user
  it('should allow requests with req.user and call next()', async () => {
    // First inject a stub that sets req.user, then the authMiddleware
    app.use((req, res, next) => {
      req.user = { id: 'user123', name: 'Test' };
      next();
    });
    app.use(authMiddleware);
    // If authMiddleware calls next(), this route runs
    app.get('/test', (req, res) => {
      res.status(200).json({ success: true, user: req.user });
    });

    const res = await request(app).get('/test');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      success: true,
      user: { id: 'user123', name: 'Test' }
    });
  });
});
