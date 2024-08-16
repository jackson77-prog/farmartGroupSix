import React, { useState } from 'react';
import { loginUser } from '../api';
import './Login.css';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('farmer');
    const [message, setMessage] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await loginUser(email, password);

            // Check if the response contains a success message
            if (response.message === "Login successful!") {
                setMessage(response.message); // Display the success message
            } else {
                setMessage('Login failed: ' + response.message); // Display the actual backend error message if login fails
            }
        } catch (error) {
            setMessage('Login failed due to a network error or server issue'); // Handle errors like network failure
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
            {message && <p>{message}</p>}
            <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
        </div>
    );
};

export default LoginForm;
