const express = require('express');
const sqlite3 = require('sqlite3');
const cors = require('cors');
const app = express();
const port = 3001; // Choose a suitable port

app.use(cors()); // Enable CORS for all routes

// Connect to your SQLite database (replace 'your-database.db' with your actual database file)
const db = new sqlite3.Database('../database/car_db.db');

// Define an API endpoint to fetch data
app.get('/api/data', (req, res) => {
    const query = 'SELECT Brand.BrandID, Brand.BrandName, Model.ModelID, Model.ModelName FROM Brand, Model WHERE Brand.BrandID = Model.BrandID;';

    // Execute the query
    db.all(query, (err, rows) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(rows);
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
