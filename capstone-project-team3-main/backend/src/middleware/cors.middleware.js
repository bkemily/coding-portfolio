// Initialize express router
const express = require('express');
const router = express.Router();

// CORs middleware, only allow requests from the frontend
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', process.env.FRONTEND_URL);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

module.exports = router;