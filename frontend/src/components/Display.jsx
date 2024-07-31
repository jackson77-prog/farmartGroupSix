import React from 'react';
import './Display.css';

const Display = () => {
    return (
        <section className="display">
            <h2>We Have What You're Looking For</h2>
            <div className="columns">
                <div className="column">
                    <h3>For Food</h3>
                    <div className="icon-text">
                        <i className="icon">🍎</i>
                        <p>Eliminate middlemen and buy directly from the source, ensuring authenticity and transparency.</p>
                    </div>
                    {/* Add other icon-text pairs here */}
                </div>
                <div className="column">
                    <h3>For Companionship</h3>
                    <div className="icon-text">
                        <i className="icon">🐕</i>
                        <p>Find the perfect pet for your home.</p>
                    </div>
                    {/* Add other icon-text pairs here */}
                </div>
                <div className="column">
                    <h3>For Work</h3>
                    <div className="icon-text">
                        <i className="icon">🚜</i>
                        <p>Get the best livestock for your farm work needs.</p>
                    </div>
                    {/* Add other icon-text pairs here */}
                </div>
            </div>
        </section>
    );
};

export default Display;
