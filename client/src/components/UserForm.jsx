import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUser } from '../utils/api';

const SignUpForm = (props = {}) => {
  const [formData, setFormData] = useState({
    email: '',
    username: '', // Added username field
    password: ''
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createUser(formData);
      if (response.status === 200) {
        // Signup successful
        // No redirect here without useHistory, handle it in your parent component
        // history.push('/login');
      } else {
        // Handle signup error
        console.error('Error occurred while signing up:', response.data.message);
      }
    } catch (error) {
      console.error('Error occurred while signing up:', error);
    }
  };

  return (
    <div className="card bg-white card-rounded w-25">
      <div className="card-header bg-dark text-center">
        <h1>{props.formName}</h1>
      </div>
      <div className="card-body m-5">
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              name="email"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Username:</label> {/* Added username field */}
            <input
              type="text"
              className="form-control"
              placeholder="Enter your username"
              name="username"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              name="password"
              onChange={handleInputChange}
            />
          </div>
          <button className="btn btn-danger d-block mx-auto mt-3" type="submit">
            Sign Up
          </button>
        </form>
      </div>
      <div className="card-footer bg-dark text-white text-center">
        <p>Already have an account? <Link to="/login" className="text-white">Log in</Link></p>
      </div>
    </div>
  );
};

export default SignUpForm;
