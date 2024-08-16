import React, { useState } from 'react';
import { registerUser } from '../api';
import './Register.css';

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userType, setUserType] = useState('farmer');
    const [phone, setPhone] = useState('');
    const [county, setCounty] = useState('');
    const [town, setTown] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setMessage('Passwords do not match!');
            return;
        }

        try {
            const response = await registerUser(email, password, userType, phone, county, town);

            // Check if the response contains a success message
            if (response.message === "User registered successfully!") {
                setMessage(response.message); // Display the success message
            } else {
                setMessage('Registration failed: ' + response.message); // Display the actual backend error message if registration fails
            }
        } catch (error) {
            setMessage('Registration failed due to a network error or server issue'); // Handle errors like network failure
        }
    };

    return (
        <div className="register">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
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
                    Phone:
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </label>
                <label>
                    County:
                    <input type="text" value={county} onChange={(e) => setCounty(e.target.value)} />
                </label>
                <label>
                    Town:
                    <input type="text" value={town} onChange={(e) => setTown(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </label>
                <label>
                    Confirm Password:
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                </label>
                <button type="submit">Register</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default RegisterForm;
