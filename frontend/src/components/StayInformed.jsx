import React from 'react';
import './StayInformed.css';

const StayInformed = () => {
    return (
        <section className="stay-informed">
            <h2>Stay Informed</h2>
            <div className="news-container">
                <div className="news-item">
                    <div className="news-icon">📈</div>
                    <div className="news-text">
                        <h3>Livestock Insights</h3>
                        <p>Explore the latest trends and statistics in the livestock e-commerce market. Stay ahead with our comprehensive insights and data visualizations.</p>
                    </div>
                </div>
                <div className="news-item">
                    <div className="news-icon">📰</div>
                    <div className="news-text">
                        <h3>Latest Updates</h3>
                        <p>Get the latest updates about Farmart, including new features and improvements that enhance your experience.</p>
                    </div>
                </div>
            </div>
            <div className="graph-placeholder">
                {/* Placeholder for graph */}
                <div className="graph">📊</div>
                <p>Graph showing insights for livestock e-commerce</p>
            </div>
        </section>
    );
};

export default StayInformed;
