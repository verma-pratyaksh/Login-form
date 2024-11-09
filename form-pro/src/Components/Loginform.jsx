import React, { useState } from 'react';
import './Loginform.css';

const Loginform = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  // Validation functions
  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  // Handle input change and validate onChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Inline validation as the user types
    if (name === 'username') {
      setErrors({ ...errors, username: validateEmail(value) ? '' : 'Invalid email format' });
    } else if (name === 'password') {
      setErrors({ ...errors, password: validatePassword(value) ? '' : 'Password must be at least 6 characters' });
    }
  };

  // Handle input blur for additional validation
  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (name === 'username' && !validateEmail(value)) {
      setErrors({ ...errors, username: 'Invalid email format' });
    } else if (name === 'password' && !validatePassword(value)) {
      setErrors({ ...errors, password: 'Password must be at least 6 characters' });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Final validation check before submission
    if (!validateEmail(formData.username) || !validatePassword(formData.password)) {
      alert('Please correct the errors before submitting');
      return;
    }

    alert('Form submitted successfully!');
    // Perform login logic here
  };

  // Toggle password visibility
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="logo">✈</div>
      <h2>Welcome back!</h2>
      <p>Please enter your details</p>

      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            type="email"
            name="username"
            placeholder="Email"
            value={formData.username}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.username && <div className="error">{errors.username}</div>}
        </div>

        <div className="input-field password-container">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          <span onClick={toggleShowPassword} className="show-password">
            {showPassword ? '🙈' : '👁'}
          </span>
          {errors.password && <div className="error">{errors.password}</div>}
        </div>

        <div className="checkbox-container">
          <label>
            <input type="checkbox" /> Remember for 30 days
          </label>
          <a href="#">Forgot password?</a>
        </div>

        <button type="submit" className="btn">Log In</button>

        <button type="button" className="btn btn-google">
  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google logo" width="16" />
  Log in with Google
</button>


        <div className="footer">
          Don’t have an account? <a href="#">Sign Up</a>
        </div>
      </form>
    </div>
  );
};

export default Loginform;
