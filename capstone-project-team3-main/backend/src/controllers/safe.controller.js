// Initialize express router
const express = require('express');
const router = express.Router();

const SafeService = require('../services/safe.service');

// Get safe posts by last name and either phone number or home address, city, state
router.get('/api/safe-posts', async (req, res) => {
    
    try {

        const query = req.query;

        const lastName = query.lastName;
        let phoneNumber = query.phoneNumber;
        const homeAddress = query.homeAddress;
        const homeCity = query.homeCity;
        const homeState = query.homeState;

        // Validate the request, ensuring that the last name and either phone number or home address, city, state are provided
        if(!lastName || (!phoneNumber && (!homeAddress || !homeCity || !homeState))) {
            return res.status(400).send('Missing required fields');
        }

        // Map the phone number to the correct format
        if(phoneNumber) {
            phoneNumber = phoneNumber.replace(/[^0-9]/g, '');
        }

        // Get the safe posts
        const safePosts = await SafeService.getSafePosts(lastName, phoneNumber, homeAddress, homeCity, homeState);

        return res.status(200).json({
            success: true,
            message: 'Safe posts retrieved successfully',
            data: safePosts
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Unable to retrieve safe posts at this time, please try again later'
        });
    }
});

// Create a new safe post with last name and either phone number or home address, city, state
router.post('/api/safe-posts', async (req, res) => {
    
    try {
        const safePost = req.body;

        // Validate the request, ensuring that the last name and either phone number or home address, city, state are provided
        if(!safePost || !safePost.lastName || (!safePost.phoneNumber && (!safePost.homeAddress || !safePost.homeCity || !safePost.homeState))) {
            return res.status(400).send('Missing required fields');
        }

        // Map the phone number to the correct format
        if(safePost.phoneNumber) {
            safePost.phoneNumber = safePost.phoneNumber.replace(/[^0-9]/g, '');
        }

        // Create the safe post
        const newSafePost = await SafeService.createSafePost(safePost);

        return res.status(200).json({
            success: true,
            message: 'Safe post created successfully',
            data: newSafePost
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Unable to create safe post at this time, please try again later'
        });
    }
});

// Update a safe post by ID, ensuring that the last name and either phone number or home address, city, state
router.put('/api/safe-posts', async (req, res) => {
    
    try {
        const safePost = req.body;

        // Validate the request, ensuring that the last name and either phone number or home address, city, state are provided
        if(!safePost || !safePost.id || !safePost.lastName || (!safePost.phoneNumber && (!safePost.homeAddress || !safePost.homeCity || !safePost.homeState))) {
            return res.status(400).send('Missing required fields');
        }

        // Map the phone number to the correct format
        if(safePost.phoneNumber) {
            safePost.phoneNumber = safePost.phoneNumber.replace(/[^0-9]/g, '');
        }

        // Update the safe post
        const updatedSafePost = await SafeService.updateSafePost(safePost);

        // If the safe post is not found, return a 404 error
        if(!updatedSafePost) {
            return res.status(404).send('Safe post not found');
        }

        return res.status(200).json({
            success: true,
            message: 'Safe post updated successfully',
            data: updatedSafePost
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Unable to update safe post at this time, please try again later'
        });
    }
});

// Delete a safe post by ID
router.delete('/api/safe-posts', async (req, res) => {

    try {
        const safePost = req.body;

        // Validate the request, ensuring that the ID is provided
        if(!safePost || !safePost.id) {
            return res.status(400).send('Missing required fields');
        }
 
        // Delete the safe post
        const deletedSafePost = await SafeService.deleteSafePost(safePost);

        // If the safe post is not found, return a 404 error
        if(!deletedSafePost) {
            return res.status(404).send('Safe post not found');
        }

        return res.status(200).json({
            success: true,
            message: 'Safe post deleted successfully',
            data: deletedSafePost
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Unable to delete safe post at this time, please try again later'
        });
    }
});

module.exports = router;