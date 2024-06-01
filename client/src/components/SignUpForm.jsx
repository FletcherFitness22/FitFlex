// SignUpForm.jsx
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createUser } from '../utils/api';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: ''
  });
  const history = useHistory();

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createUser(formData);
      if (response.status === 200) {
        // Signup successful
        // Redirect the user to the login page or any other page
        history.push('/login');
      } else {
        // Handle signup error
        console.error('Error occurred while signing up:', response.data.message);
      }
    } catch (error) {
      console.error('Error occurred while signing up:', error);
    }
  };

  return (
    <div>
      <h2>Sign-Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Sign-Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;

