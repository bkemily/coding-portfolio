require('mongoose');
const Contact = require('../../mongodb/contact.model');

// Get all contact messages
const getAllContactMessages = async () => {
    return await Contact.find();
}

// Create a new contact message
const createNewContactMessage = async (contact) => {
    return await Contact.create(contact);
}

module.exports = {
    getAllContactMessages,
    createNewContactMessage
};