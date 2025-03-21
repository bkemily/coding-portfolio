const express = require('express');
const { pino } = require('pino');
const session = require('express-session');
const flash = require('express-flash');
const cookieParser = require('cookie-parser');

// Create a new express app and logger
let app = express();
let logger = pino();

// Import environment variables from .env file
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

// Enables body parsing, sessions, and flash messages
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(flash());
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: { secure: false },
}));

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Declare Middleware and Controller Instances
const userController = require('./controllers/user.controller');
const contactController = require('./controllers/contact.controller');
const safeController = require('./controllers/safe.controller');
const communityController = require('./controllers/community.controller');
const resourcesController = require('./controllers/resources.controller');
const femaController = require('./controllers/fema.controller');

const corsMiddleware = require('./middleware/cors.middleware');
const errorMiddleware = require('./middleware/error.middleware');

// Connect the CORS middleware to the app
app.use(corsMiddleware);

// Connect the controllers to the app
app.use(userController);
app.use(contactController);
app.use(safeController);
app.use(communityController);
app.use(resourcesController);
app.use(femaController);

// Connect the error middleware to the app
app.use(errorMiddleware);

module.exports = app;