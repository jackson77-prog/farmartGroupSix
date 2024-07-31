import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="top-header">
                <div className="logo">
                <img src="src/assets/logo.png" alt="Farmart Logo" />
                </div>
                <input type="text" placeholder="Search..." className="search-bar" />
                <nav className="top-nav">
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/register" className="nav-link">Register</Link>
                    <Link to="/login" className="nav-link">Login</Link>
                    <Link to="/cart" className="nav-link">Cart</Link>
                </nav>
            </div>
            <div className="navbar">
                <Link to="/cows" className="nav-item">Cows</Link>
                <Link to="/sheep" className="nav-item">Sheep</Link>
                <Link to="/dogs" className="nav-item">Dogs</Link>
                <Link to="/rabbits" className="nav-item">Rabbits</Link>
                <Link to="/pigs" className="nav-item">Pigs</Link>
                <Link to="/goats" className="nav-item">Goats</Link>
                <Link to="/poultry" className="nav-item">Poultry</Link>
                <Link to="/camels" className="nav-item">Camels</Link>
                <Link to="/cats" className="nav-item">Cats</Link>
                <Link to="/others" className="nav-item">Others</Link>
            </div>
        </header>
    );
};

export default Header;
