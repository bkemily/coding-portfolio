// Initialize express router
const express = require('express');
const router = express.Router();

// 404 catch-all handler (middleware)
router.use((req, res) => {
    res.status(404);
    res.send("404");
});

// 500 error handler (middleware)
router.use((err, req, res) => {
    console.error(err.stack);
    res.status(500);
    res.send("500");
});

module.exports = router;