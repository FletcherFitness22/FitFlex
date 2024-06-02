import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        // If login is successful, redirect the user to the portal page
        window.location.href = '/portal';
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
            <label>Username:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your username"
              name="username"
              value={formData.username}
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
