// Initialize express router
const express = require('express');
const router = express.Router();

const ContactService = require('../services/contact.service');

// Get all contact messages
router.get('/api/contact-messages', async (req, res) => {
    try {

        const contactMessages = await ContactService.getAllContactMessages();

        return res.status(200).json({
            success: true,
            message: 'Contact messages retrieved successfully',
            data: contactMessages
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Unable to retrieve contact messages at this time, please try again later',
            data: error.message
        });
    }
});

// Create a new contact message
router.post('/api/contact-messages', async (req, res) => {
    
    try {
        const contact = req.body;

        // Validate the request, ensuring that the first name, last name, email address, and message are provided
        if(!contact || !contact.name|| !contact.emailAddress || !contact.subject || !contact.message) {
            return res.status(400).send('Missing required fields');
        }

        // Create the contact message
        await ContactService.createNewContactMessage(contact);

        return res.status(200).json({
            success: true,
            message: 'Contact message created successfully'
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Unable to create contact message at this time, please try again later',
            data: error.message
        });
    }
});

module.exports = router;