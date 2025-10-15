const express = require('express');
const router = express.Router();

// Example route for marks
router.post('/marks', (req, res) => {
    res.send('Marks added');
});

// Example route for attendance
router.post('/attendance', (req, res) => {
    res.send('Attendance recorded');
});

module.exports = router;
