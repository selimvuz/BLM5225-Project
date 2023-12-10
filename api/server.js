const express = require('express');
const sqlite3 = require('sqlite3');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors()); // Enable CORS for all routes

// Connect to your SQLite database
const db = new sqlite3.Database('C:/Users/PC/Desktop/Klasor/workspace/github.com/selimvuz/BLM5225-Project/database/car.db');

// Define an API endpoint to fetch data
app.get('/api/data1', (req, res) => {
    const query = 'SELECT Model.ModelID, Model.ModelName, Brand.BrandID, Brand.BrandName FROM Brand, Model WHERE Brand.BrandID = Model.BrandID ORDER BY Brand.BrandID;';

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

app.get('/api/data2', (req, res) => {
    const query = 'SELECT CustomerID, CustomerName, ContactInfo FROM Customer;';

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

app.get('/api/data3', (req, res) => {
    const query = 'SELECT DealerID, DealerName, Location FROM Dealer;';

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

app.get('/api/data4', (req, res) => {
    const query = 'SELECT VIN, ModelID, DealerID, CustomerID FROM Car;';

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
