const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middleware/authMiddleware');
const { fetchExercises } = require('../controllers/exercise-controller');

// Portal page route
router.get('/', isAuthenticated, async (req, res) => {
  try {
    // Fetch exercises from the API
    const exercises = await fetchExercises(); // Assuming you have a function to fetch exercises
    // Render the portal page with the fetched exercises
    res.render('portal', { exercises });
  } catch (error) {
    console.error('Error fetching exercises:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
