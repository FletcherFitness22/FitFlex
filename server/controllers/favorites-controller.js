// favoriteController.js
const Favorite = require('../models');

module.exports = {
    // Create a new favorite
     async createFavorite (req, res) {
        try {
            const { userId, exerciseId } = req.body;
            const favorite = new Favorite({ userId, exerciseId });
            await favorite.save();
            res.status(201).json(favorite);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Get all favorites
    async getAllFavorites (req, res) {
        try {
            const favorites = await Favorite.find();
            res.json(favorites);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Get a single favorite by ID
    async getFavoriteById (req, res) {
        try {
            const favorite = await Favorite.findById(req.params.id);
            if (!favorite) {
                return res.status(404).json({ message: 'Favorite not found' });
            }
            res.json(favorite);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Update a favorite
     async updateFavorite (req, res) {
        try {
            const { userId, exerciseId } = req.body;
            const favorite = await Favorite.findById(req.params.id);
            if (!favorite) {
                return res.status(404).json({ message: 'Favorite not found' });
            }
            if (userId) {
                favorite.userId = userId;
            }
            if (exerciseId) {
                favorite.exerciseId = exerciseId;
            }
            await favorite.save();
            res.json(favorite);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Delete a favorite
    async deleteFavorite (req, res) {
        try {
            const favorite = await Favorite.findById(req.params.id);
            if (!favorite) {
                return res.status(404).json({ message: 'Favorite not found' });
            }
            await favorite.remove();
            res.json({ message: 'Favorite deleted' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
}