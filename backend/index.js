const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// JWT Authentication Middleware
const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).send('Access Denied');

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send('Invalid Token');
    }
};

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Tuition ERP Backend');
});

const studentsRouter = require('./routes/students');
const marksRouter = require('./routes/marks');
const gamificationRouter = require('./routes/gamification');

app.use('/api', studentsRouter);
app.use('/api', marksRouter);
app.use('/api', gamificationRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
