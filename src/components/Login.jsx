import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Login.css'; // We'll create this CSS file next
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";


const Login = ({onClose}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleClose = () => {
    if (onClose) {
      onClose(); // If passed as prop (for modals)
    } else {
      navigate('/'); // Default behavior - navigate to home
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError('');
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Assuming you have a JSON file in your public folder or an API endpoint
      const response = await axios.get('http://localhost:5000/users'); // Adjust path as needed
      const users = response.data;
      
      const user = users.find(
        (u) => u.email === formData.email && u.password === formData.password
      );
      
      if (user) {
        // In a real app, you would handle authentication (e.g., set tokens)
        console.log('Login successful', user);
        navigate('/dashboard'); // Redirect to dashboard or home page
      } else {
        setLoginError('Invalid email or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      setLoginError('An error occurred during login. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // const handleSignUpClick = () => {
  //   navigate('/signup');
  // };



    return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-header">
          <h2>Login</h2>
          <button className="close-btn" onClick={handleClose} aria-label="Close">
            <FontAwesomeIcon 
              icon={faCircleXmark} 
              style={{ color: "#ff3d3d", fontSize: "1.5rem" }} 
            />
          </button>
        </div>
        
        {loginError && <div className="error-message">{loginError}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className={errors.password ? 'error' : ''}
            />
            {errors.password && <span className="error-text">{errors.password}</span>}
          </div>
          
          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        
        <div className="signup-section">
          <p>Don't have an account?</p>
          <button onClick={() => navigate("/signup")} className="signup-button">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

  

export default Login;
