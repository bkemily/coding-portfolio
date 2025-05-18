const mongoose = require('mongoose');
require('dotenv').config({path: '../.env'});

// Choose which URL to use for this connection
let dbConnectionString = process.env.MONGODB_CONNECTION_STRING;

// Mongoose connection options
let options = {};

// Connect to MongoDB
const connectWithRetry = () => {
    mongoose.connect(dbConnectionString, options).then(() => {
    }).catch(err => {
        setTimeout(connectWithRetry, 5000); // Retry after 5 seconds
    });
};

connectWithRetry();

// Connection events for logging
mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to Database`);
});

// Log an error if the connection fails
mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:', err.message);
});

// Log when the connection is disconnected
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});
  
const gracefulShutdown = async (msg, callback) => {
    await mongoose.connection.close();
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
};

// For nodemon restarts                                 
process.once('SIGUSR2', () => {
    gracefulShutdown('Nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});

// For app termination
process.on('SIGINT', () => {
    gracefulShutdown('App termination', () => {
        process.exit(0);
    });
});

// For DigitalOcean app termination
process.on('SIGTERM', () => {
    gracefulShutdown('DigitalOcean app shutdown', () => {
        process.exit(0);
    });
});

// Require the specific schemas
require('./user.model');
require('./contact.model');
require('./safe.model');
require('./shelters.model');