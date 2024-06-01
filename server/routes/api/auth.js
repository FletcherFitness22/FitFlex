const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/authController');

// POST /signup route to create a new user
router.post('/signup', createUser);

module.exports = router;
