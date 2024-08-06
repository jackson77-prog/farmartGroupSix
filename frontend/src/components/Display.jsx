import React from 'react';
import './Display.css';

const Display = () => {
    return (
        <section className="display">
            <h2>Farmart: Empowering Farmers, Enhancing Trust</h2>
            <div className="columns">
                <div className="column">
                    <h3>Direct from the Source</h3>
                    <div className="icon-text">
                        <i className="icon">🍎</i>
                        <p>Purchase directly from farmers, ensuring transparency and authenticity in every transaction.</p>
                    </div>
                    <div className="icon-text">
                        <i className="icon">🌾</i>
                        <p>Support sustainable farming practices by connecting with local producers.</p>
                    </div>
                    <div className="icon-text">
                        <i className="icon">🥩</i>
                        <p>Enjoy fresh, high-quality produce and livestock without the middleman markup.</p>
                    </div>
                </div>
                <div className="column">
                    <h3>Companionship and Care</h3>
                    <div className="icon-text">
                        <i className="icon">🐕</i>
                        <p>Find loyal companions and pets that bring joy to your home.</p>
                    </div>
                    <div className="icon-text">
                        <i className="icon">🐈</i>
                        <p>Adopt animals that are cared for by responsible and dedicated farmers.</p>
                    </div>
                    <div className="icon-text">
                        <i className="icon">🐎</i>
                        <p>Choose from a variety of animals bred for companionship and care.</p>
                    </div>
                </div>
                <div className="column">
                    <h3>Enhance Your Farm</h3>
                    <div className="icon-text">
                        <i className="icon">🚜</i>
                        <p>Source robust livestock that are essential for efficient farm operations.</p>
                    </div>
                    <div className="icon-text">
                        <i className="icon">🐄</i>
                        <p>Invest in quality animals to improve productivity and yield.</p>
                    </div>
                    <div className="icon-text">
                        <i className="icon">🐑</i>
                        <p>Get expert recommendations from farmers for your specific farm needs.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Display;
