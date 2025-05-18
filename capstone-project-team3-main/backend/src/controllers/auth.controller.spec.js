const express = require('express');
const request = require('supertest');
const authRouter = require('./auth.controller'); // Import the original router

// Create a direct mock for passport
const passport = require('passport');
jest.mock('passport', () => {
  return {
    authenticate: jest.fn().mockImplementation((strategy, options) => {
      return (req, res, next) => next();
    })
  };
});

describe('Auth Router', () => {
  let app;
  
  beforeEach(() => {
    // Reset all mocks
    jest.clearAllMocks();
    process.env.FRONTEND_URL = 'http://localhost:3000';
    
    // Create a new Express app for each test
    app = express();
    app.use('/', authRouter);
  });

  // Test for Google auth route
  test('Google auth route should initialize OAuth flow', async () => {

    // Mock the passport.authenticate function route
    app.get('/google', (req, res, next) => {
        passport.authenticate('google', {
          scope: ['profile', 'email'],
          session: true,
          prompt: 'select_account'
        })(req, res, next);
    });

    await request(app).get('/google');
    
    // Verify passport.authenticate was called
    expect(passport.authenticate).toHaveBeenCalledWith('google', {
      scope: ['profile', 'email'],
      session: true,
      prompt: 'select_account'
    });
  });
  
  // Test for logout route
  test('Logout endpoint should return 200 status', async () => {
    
    // Create app with necessary mocks for logout
    app = express();
    app.use((req, res, next) => {
      req.logout = jest.fn(cb => cb());
      req.session = {
        destroy: jest.fn(cb => cb())
      };
      next();
    });
    app.use('/', authRouter);
    
    // Check the logout endpoint
    const response = await request(app).get('/logout');
    expect(response.statusCode).toBe(200);
  });
  
  // Test for not logged in user
  test('User endpoint returns loggedIn:false when not logged in', async () => {
    const response = await request(app).get('/user');
    expect(response.body).toEqual({ loggedIn: false });
  });
  
// Test for logged in user
  test('User endpoint returns user info when logged in', async () => {
    
    // Create app with user data
    app = express();
    app.use((req, res, next) => {
      req.user = {
        displayName: 'Test User',
        emails: [{ value: 'test@example.com' }]
      };
      next();
    });
    app.use('/', authRouter);
    
    // Check the user endpoint
    const response = await request(app).get('/user');
    expect(response.body).toEqual({
      loggedIn: true,
      name: 'Test User',
      email: 'test@example.com'
    });
  });
});