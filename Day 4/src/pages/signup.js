import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import '../assets/css/signup.css';

function Signup() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const signup = { firstName, email, password };

    try {
      const response = await axios.post("http://localhost:8080/api/v1/auth/user/register", signup, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        console.log("New Register added");
        nav('/login');
      } else {
        console.error("Error during registration");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="center">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Signup</h2>
        <div className="form-group">
          <label htmlFor="firstName">First Name<h6>{errors.firstName && <span>{errors.firstName}</span>}</h6></label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email<h6>{errors.email && <span>{errors.email}</span>}</h6></label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password<h6>{errors.password && <span>{errors.password}</span>}</h6></label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
