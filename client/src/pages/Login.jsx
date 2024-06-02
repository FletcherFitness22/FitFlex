import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
  };

  const handleInputChange = (event) => {
    // Handle input change logic
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
              type="email"
              className="form-control"
              placeholder="Enter your email"
              name="email"
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
