const router = require('express').Router();

// Import user controller and middleware
const { getSingleUser, createUser, login } = require('../../controllers/user-controller');
const { authMiddleware } = require('../../utils/auth');

// User routes
router.route('/')
  .post(createUser); // Create a user

router.route('/login')
  .post(login); // Login user

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

