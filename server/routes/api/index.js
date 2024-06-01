const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const exerciseRoutes = require('./exercise-routes.js');
const favoritesRoutes = require('./favorite-routes.js');

router.use('/user', userRoutes);
router.use('/exercise', exerciseRoutes);
router.use('/favorites', favoritesRoutes );

module.exports = router;
