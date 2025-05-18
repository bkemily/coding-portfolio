// Initialize express router
const express = require('express');
const router = express.Router();

const FemaService = require('../services/fema.service');

// Get FEMA disaster declarations
router.get('/api/fema-disasters', async (req, res) => {
    try {
        const disasters = await FemaService.getFEMADisasterDeclarations();
        return res.status(200).json({
            success: true,
            message: 'FEMA disaster declarations retrieved successfully',
            data: disasters
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Unable to retrieve FEMA disaster declarations at this time, please try again later'
        });
    }
});

// Get open FEMA shelters in the US
router.get('/api/fema-shelters', async (req, res) => {
    try {
        const shelters = await FemaService.getFEMAOpenShelters();
        return res.status(200).json({
            success: true,
            message: 'FEMA open shelters retrieved successfully',
            data: shelters
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Unable to retrieve FEMA open shelters at this time, please try again later'
        });
    }
});

module.exports = router;