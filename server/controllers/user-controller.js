// import user model
const { User } = require('../models');
// import sign token function from auth
const { signToken } = require('../utils/auth');

module.exports = {
  // get a single user by either their id or their username
  async getSingleUser({ user = null, params }, res) {
    const foundUser = await User.findOne({
      $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
    });

    if (!foundUser) {
      return res.status(400).json({ message: 'Cannot find a user with this id!' });
    }

    res.json(foundUser);
  },
  // // create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)
  // async createUser({ body }, res) {
  //   const user = await User.create(body);

  //   if (!user) {
  //     return res.status(400).json({ message: 'Something is wrong!' });
  //   }
  //   const token = signToken(user);
  //   res.json({ token, user });
  // },
  // login a user, sign a token, and send it back (to client/src/components/LoginForm.js)
  // {body} is destructured req.body
  async login( req , res) {
      const { email, password } = req.body;
console.log('Hello');
  try {
    // Find user by email
    const user = await User.findOne({ email });

    // Check if user exists and password is correct
    if (!user || !user.isCorrectPassword(password)) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Authentication successful, create session or issue token
    // Example: create a session
    // req.session.userId = user._id;

    // Return success response
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
  },
};