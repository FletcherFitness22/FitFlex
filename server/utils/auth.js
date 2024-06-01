const jwt = require('jsonwebtoken');

// Generate a JWT
const generateToken = (userId) => {
  // Set the payload (data you want to include in the token)
  const payload = {
    userId: userId
    // Add more claims (key-value pairs) as needed
  };

  // Sign the token with a secret key
  const secretKey = 'your_secret_key';
  const options = {
    expiresIn: '12h' // Token expiration time (e.g., 1 hour)
  };

  // Generate the JWT
  const token = jwt.sign(payload, secretKey, options);
  return token;
};

// Example usage
const userId = 'user123';
const token = generateToken(userId);
console.log('JWT:', token);

