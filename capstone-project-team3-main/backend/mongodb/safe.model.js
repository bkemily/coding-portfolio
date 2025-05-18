const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the SafePost schema
const SafePost = new Schema({
    disasterType: {type: String, required: false},
    firstName: {type: String, required: false},
    lastName: {type: String, required: false},
    phoneNumber: {type: String, required: false},
    emailAddress: {type: String, required: false},
    homeAddress: {type: String, required: false},
    homeAddress2: {type: String, required: false},
    homeCity: {type: String, required: false},
    homeState: {type: String, required: false},
    homeZipCode: {type: String, required: false},
    safeLocations: {type: [String], required: false},
    message: {type: String, required: false}
});

// Create the SafePost model
module.exports = mongoose.model('SafePost', SafePost);