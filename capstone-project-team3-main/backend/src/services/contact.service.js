const contactDao = require('../daos/contact.dao'); 

// Get all contact messages
const getAllContactMessages = async () => {
    return await contactDao.getAllContactMessages();
}

// Create a new contact message
const createNewContactMessage = async (contact) => {
    return await contactDao.createNewContactMessage(contact);
}

module.exports = {
    getAllContactMessages,
    createNewContactMessage
};