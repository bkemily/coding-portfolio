const mongoose = require('mongoose');

const ShelterSchema = new mongoose.Schema({}, { strict: false });

module.exports = mongoose.model('Shelter', ShelterSchema);