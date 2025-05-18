const express = require('express');
const path = require('path');
const session = require('express-session');
const flash = require('express-flash');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { pino } = require('pino');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const logger = pino();

// Middleware setup
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(flash());

// Session must be set up BEFORE passport.session()
app.use(session({
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 1000 * 60 * 60 * 24, // 1 day
    secure: false, // Set to true in production with HTTPS
  }
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Configure Google OAuth2
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:3001/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  return done(null, profile);
}));

// Session serialization
passport.serializeUser((user, done) => {
  done(null, user); // You could save just user.id here in production
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// JSON & URL body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers and controllers
const contactController = require('./controllers/contact.controller');
const safeController = require('./controllers/safe.controller');
const communityController = require('./controllers/community.controller');
const femaController = require('./controllers/fema.controller');
const authController = require('./controllers/auth.controller');

// Middleware
const corsMiddleware = require('./middleware/cors.middleware');
const errorMiddleware = require('./middleware/error.middleware');

// Apply CORS and auth middleware before controllers
app.use(corsMiddleware);

// Hook up all routes
app.use(authController);
app.use(contactController);
app.use(safeController);
app.use(communityController);
app.use(femaController);
app.use(communityController);

// Global error handler
app.use(errorMiddleware);

module.exports = app;
