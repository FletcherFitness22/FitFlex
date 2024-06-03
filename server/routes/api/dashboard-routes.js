const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middleware/authMiddleware');
const { fetchExercises } = require('../controllers/exercise-controller');

// Dashboard route
router.get('/dashboard', isAuthenticated, async (req, res) => {
  try {
    // Fetch exercises from the API
    const exercises = await fetchExercises(); // Assuming you have a function to fetch exercises
    // Render the dashboard page with the fetched exercises
    res.render('dashboard', { exercises });
  } catch (error) {
    console.error('Error fetching exercises:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
