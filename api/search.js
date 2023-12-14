const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const searchRoutes = express.Router();

searchRoutes.use(cors()); // Enable CORS for all routes

// Connect to your SQLite database
const db = new sqlite3.Database('C:/Users/PC/Desktop/Klasor/workspace/github.com/selimvuz/BLM5225-Project/database/car.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the car database.');
});

searchRoutes.get('/search', (req, res) => {
    const searchTerm = req.query.query;
    db.all("SELECT * FROM Model WHERE ModelName LIKE ?", [`%${searchTerm}%`], (err, rows) => {
        if (err) {
            console.error('Search error:', err);
            res.status(500).send('Server error');
            return;
        }
        console.log(rows);
        res.json(rows);
    });
});

module.exports = searchRoutes;
