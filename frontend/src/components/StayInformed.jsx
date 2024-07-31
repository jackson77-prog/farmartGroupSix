import React from 'react';
import './StayInformed.css';

const StayInformed = () => {
    return (
        <section className="stay-informed">
            <h2>Stay Informed</h2>
            <div className="images">
                <div className="image-text">
                    <img src="path_to_image1.jpg" alt="News 1" />
                    <div className="text">Latest News 1</div>
                </div>
                <div className="image-text">
                    <img src="path_to_image2.jpg" alt="News 2" />
                    <div className="text">Latest News 2</div>
                </div>
            </div>
        </section>
    );
};

export default StayInformed;
