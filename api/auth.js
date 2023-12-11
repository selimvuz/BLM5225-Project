const express = require('express');
const sqlite3 = require('sqlite3');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

// Connect to SQLite database
const db = new sqlite3.Database('C:/Users/PC/Desktop/Klasor/workspace/github.com/selimvuz/BLM5225-Project/database/car.db');

app.use(express.json());

app.use(cors({ origin: 'http://localhost:3000' }));

// Sample user registration endpoint
app.post('/register', async (req, res) => {
    const { email, password } = req.body;

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user data to the database
    db.run('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword], (err) => {
        if (err) {
            return res.status(500).json({ error: 'Error registering user' });
        }
        res.status(200).json({ message: 'User registered successfully' });
    });
});

// Sample login endpoint
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Retrieve user data from the database
    db.get('SELECT * FROM users WHERE email = ?', [email], async (err, user) => {
        if (err) {
            return res.status(500).json({ error: 'Error retrieving user' });
        }

        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Compare the provided password with the hashed password from the database
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Generate a JWT token
        const token = jwt.sign({ userId: user.id, email: user.email }, 'your-secret-key', { expiresIn: '1h' });

        res.status(200).json({ token });
    });
});

module.exports = app;