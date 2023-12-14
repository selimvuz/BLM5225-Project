const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const newData = express.Router();

newData.use(cors()); // Enable CORS for all routes
newData.use(express.json()); // Parse JSON bodies

// Connect to your SQLite database
const db = new sqlite3.Database('C:/Users/PC/Desktop/Klasor/workspace/github.com/selimvuz/BLM5225-Project/database/car.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the car database. 2');
});

// POST endpoint for entering new data
newData.post('/enter', (req, res) => {
    const { table, data } = req.body; // Expecting 'table' and 'data' in the request body

    switch (table) {
        case 'Müşteri':
            const { CustomerName, ContactInfo } = data;
            if (!CustomerName || !ContactInfo) {
                return res.status(400).send('Missing required fields');
            }

            db.run("INSERT INTO Customer (CustomerName, ContactInfo) VALUES (?, ?)",
                [CustomerName, ContactInfo],
                function (err) {
                    if (err) {
                        console.error('Insert error:', err);
                        res.status(500).send('Server error during Customer insert');
                        return;
                    }
                    res.json({ CustomerID: this.lastID });
                }
            );
            break;

        case 'Satıcı':
            const { DealerName, Location } = data;
            db.run("INSERT INTO Dealer (DealerName, Location) VALUES (?, ?)",
                [DealerName, Location],
                function (err) {
                    if (err) {
                        console.error('Insert error:', err);
                        res.status(500).send('Server error during Customer insert');
                        return;
                    }
                    res.json({ CustomerID: this.lastID });
                }
            );
            break;

        case 'Araba':
            const { Marka, Model } = data;
            db.serialize(() => {
                // Start a transaction
                db.run("BEGIN TRANSACTION");

                // Get the last inserted ID from the Brand table
                const brandId = this.lastID + 1;

                db.run("INSERT INTO Brand (BrandID, BrandName) VALUES (?, ?)", [brandId, Marka], function (err) {
                    if (err) {
                        console.error('Insert error in Brand:', err);
                        db.run("ROLLBACK");
                        res.status(500).send('Server error during Brand insert');
                        return;
                    }

                    db.run("INSERT INTO Model (BrandID, ModelName) VALUES (?, ?)", [brandId, Model], function (err) {
                        if (err) {
                            console.error('Insert error in Model:', err);
                            db.run("ROLLBACK");
                            res.status(500).send('Server error during Model insert');
                            return;
                        }

                        // If everything was successful, commit the transaction
                        db.run("COMMIT");
                        res.json({ ModelID: this.lastID });
                    });
                });
            });
            break;

        default:
            res.status(400).send('Invalid table name');
    }
});

module.exports = newData;
