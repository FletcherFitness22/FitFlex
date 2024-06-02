const User = require('../models/user');

// Controller function to create a new user
const createUser = async (req, res) => {
  const { email, username, password } = req.body;
console.log("createUser");
  try {
    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already registered' });
    }

    // Create a new user record
    const newUser = new User({ email, username, password });
    await newUser.save();

    // Return success response
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createUser };
