import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="contact-info">
                <p>Email: contact@farmart.com</p>
                <p>Instagram: @farmart</p>
                <p>Phone: 123-456-7890</p>
                <p>Address: 123 Farmart St, Farmville</p>
            </div>
            <div className="social-media">
                <a href="https://facebook.com" className="social-link">Facebook</a>
                <a href="https://twitter.com" className="social-link">X</a>
                <a href="https://instagram.com" className="social-link">Instagram</a>
            </div>
            <div className="newsletter">
                <input type="email" placeholder="Subscribe to our newsletter" />
                <button>Subscribe</button>
            </div>
        </footer>
    );
};

export default Footer;
