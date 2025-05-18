const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Contact schema
const Contact = new Schema({
    name: { type: String, required: true },
    emailAddress: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true }
});

// Create the Contact model
module.exports = mongoose.model('Contact', Contact);