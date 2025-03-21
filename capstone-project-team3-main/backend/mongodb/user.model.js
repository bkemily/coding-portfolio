const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the User schema
const User = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    dateOfBirth: { type: Date, required: false }
});

// Create the User model
module.exports = mongoose.model('User', User);