// favorite-routes.js
const express = require('express');
const router = express.Router();
const favoriteController = require('../../controllers/favorites-controller');

// Create a new favorite
router.post('/', favoriteController.createFavorite);

// Get all favorites
router.get('/', favoriteController.getAllFavorites);

// Get a single favorite
router.get('/:id', favoriteController.getFavoriteById);

// Update a favorite
router.patch('/:id', favoriteController.updateFavorite);

// Delete a favorite
router.delete('/:id', favoriteController.deleteFavorite);

module.exports = router;
