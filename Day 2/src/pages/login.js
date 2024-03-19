import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from './Redux/Userslice';
import '../assets/css/login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const nav = useNavigate();

    const formData = { email, password };

    const routeregister = () => {
        nav('/Signup');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};

        if (!email.trim()) {
            validationErrors.email = 'Email is required';
        }
        if (!password.trim()) {
            validationErrors.password = 'Password is required';
        } else if (password.length < 6) {
            validationErrors.password = 'Password should be at least 6 characters';
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            // If there are no validation errors, proceed with login
            // Here, you would make the API call to authenticate the user
            // For demonstration purposes, let's assume login is successful
            dispatch(login(email));
            nav('/');
        }
    };

    return (
        <div className="center">
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="email">
                    <label>
                        Email
                        <input type="email" onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <h6>{errors.email && <span>{errors.email}</span>}</h6>
                </div>
                <div className="password">
                    <label>
                        Password
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <h6>{errors.password && <span>{errors.password}</span>}</h6>
                </div>
                <div className="submitbutton">
                    <button type="submit">Submit</button>
                    <p className="p">If you don't have an account?</p>
                    <button type="button" onClick={routeregister}>Register</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
