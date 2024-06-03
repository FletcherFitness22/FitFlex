import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getLogin } from '../utils/api';


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await getLogin (formData)
      
      if (response.ok) {
        // If login is successful, redirect to dashboard
        window.location.href = '/dashboard';
      } else {
        // If login fails, display an error message
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('An error occurred while logging in');
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="card bg-white card-rounded w-25">
      <div className="card-header bg-dark text-center">
        <h1>Login</h1>
      </div>
      <div className="card-body m-5">
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
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
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <button className="btn btn-danger d-block mx-auto mt-3" type="submit">
            Login
          </button>
        </form>
      </div>
      <div className="card-footer bg-dark text-white text-center">
        <p>New here? <Link to="/signup" className="text-white">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default Login;
