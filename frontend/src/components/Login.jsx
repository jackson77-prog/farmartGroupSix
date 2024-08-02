import React, { useState } from 'react';
import { loginUser } from '../api';
import './Login.css';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('farmer');

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await loginUser(email, password);
            console.log(response); // Handle the response as needed
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <div className="login">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label>
                    Account Type:
                    <select value={userType} onChange={(e) => setUserType(e.target.value)}>
                        <option value="farmer">Farmer</option>
                        <option value="buyer">Buyer</option>
                    </select>
                </label>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </label>
                <button type="submit">Login</button>
            </form>
            <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
        </div>
    );
};

export default LoginForm;
