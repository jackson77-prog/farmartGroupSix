import React from 'react';
import './AnimalCard.css';

const AnimalCard = ({ animal }) => {
    return (
        <div className="animal-card">
            <img src={animal.image_url} alt={animal.breed} />
            <div className="animal-details">
                <h3>{animal.breed}</h3>
                <p>Price: ${animal.price}</p>
                <p>County: {animal.county}</p>
                <p>Town: {animal.town}</p>
                <p>Farmer: {animal.farmer_email}</p>
                <button>Add to Cart</button>
            </div>
        </div>
    );
};

export default AnimalCard;
