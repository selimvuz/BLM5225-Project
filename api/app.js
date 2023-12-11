const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const databaseRoutes = require('./database');
const { authRoutes } = require('./auth');
const authenticateToken = require('./token');
const port = 3001;

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());

// Authentication Routes
app.use('/auth', authRoutes);

// Use the authenticateToken middleware for protecting /database routes
app.use('/database', authenticateToken, databaseRoutes);

// Other API Routes

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});