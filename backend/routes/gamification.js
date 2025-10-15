const express = require('express');
const router = express.Router();

// Example route for gamification
router.get('/gamification', (req, res) => {
    res.send('Gamification data');
});

module.exports = router;
