const express = require('express');
const router = express.Router();

// Example route for students
router.get('/students', (req, res) => {
    res.send('List of students');
});

module.exports = router;
