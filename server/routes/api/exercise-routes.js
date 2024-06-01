const router = require('express').Router();
const { getSingleExercise } = require('../../controllers/exercise-controller');

router.route('/').get(getSingleExercise);

module.exports = router;
