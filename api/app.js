const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const databaseRoutes = require('./database');
const searchRoutes = require('./search');
const { authRoutes } = require('./auth');
const authenticateToken = require('./token');
const newData = require('./new_data');
const port = 3001;

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());

// Authentication Routes
app.use('/auth', authRoutes);

app.use('/newData', newData);

// Use the authenticateToken middleware for protecting /database routes
app.use('/database', authenticateToken, databaseRoutes);

// Use the authenticateToken middleware for protecting /search routes
app.use('/data', authenticateToken, searchRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});