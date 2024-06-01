import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { loginUser } from '../utils/api'; // Import your API function for login

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const history = useHistory();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    try {
      // Make HTTP request to login endpoint
      const response = await loginUser(formData);

      // Handle successful login
      // For example, if your API returns a token upon successful login,
      // you can save it to local storage or session storage for authentication
      // and then redirect the user to another page
      if (response.ok) {
        // Save token to local storage
        localStorage.setItem('token', response.data.token);

        // Redirect user to another page (e.g., dashboard)
        history.push('/dashboard');
      } else {
        // Handle login error (e.g., display error message)
        console.error('Login failed:', response.error);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
