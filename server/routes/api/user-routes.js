const express = require('express');
const router = express.Router();
const { createUser: createUserAuth } = require('../../controllers/auth-controllers'); // Renamed the import

// Import user controller and middleware
const { getSingleUser, createUser, login } = require('../../controllers/user-controller'); // This line is fine, assuming `createUser` is different from `createUserAuth`
const { authMiddleware } = require('../../utils/auth');

// POST /signup route to create a new user
router.post('/signup', createUserAuth); // Used the renamed import

router.route('/login')
  .post(login); // Login user

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });

    // Check if user exists and password is correct
    if (!user || !user.validPassword(password)) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Authentication successful, create session or issue token
    // Example: create a session
    req.session.userId = user._id;

    // Return success response
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.route('/me')
  .get(getSingleUser); // Get single user (requires authentication)

// Import favorites controller
const { getAllFavorites, createFavorite, deleteFavorite } = require('../../controllers/favorites-controller');

// Favorites routes
router.route('/favorites')
  .get(getAllFavorites) // Get all favorites
  .post(createFavorite) // Create a favorite (requires authentication)
  .delete(deleteFavorite); // Delete a favorite (requires authentication)

module.exports = router;
