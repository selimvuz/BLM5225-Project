const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    // Extract the token from the Authorization header
    const token = req.header('Authorization')

    // Read the secret key from the text file
    const secretKey = "ye8zua@8294%qiwommqhfrlu0s7s)be1@-2+9$g$0+3w9i@r3f"

    // Check if the token is present
    if (!token) {
        console.error('Unauthorized - Missing token');
        return res.status(401).json({ message: 'Unauthorized - Missing token' });
    }

    try {
        // Verify and decode the token using the secret key
        const decoded = jwt.verify(token.split(' ')[1], secretKey);

        // Attach the decoded information to the request object for later use
        req.user = decoded;

        // Continue to the next middleware or route handler
        next();
    } catch (error) {
        console.error('JWT Verification Error:', error.message);

        if (error.name === 'TokenExpiredError') {
            console.log("Token has expired")
            return res.status(401).json({ message: 'Unauthorized - Token has expired' });
        }

        if (error.name === 'JsonWebTokenError') {
            console.log("Invalid token")
            return res.status(401).json({ message: 'Unauthorized - Invalid token' });
        }

        // Handle other types of errors as needed
        console.log("Something went wrong")
        return res.status(401).json({ message: 'Unauthorized - Something went wrong' });
    }
};

module.exports = authenticateToken;