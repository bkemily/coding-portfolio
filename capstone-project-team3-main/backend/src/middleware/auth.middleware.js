const express = require('express');
const router = express.Router();

// Only allow authenticated users to access the routes
router.use((req, res, next) => {
    if(!req.user) {
        return res.status(401).json({
            success: false,
            message: 'Unauthorized access'
        });
    }
    next();
  });
  

module.exports = router;