import React, { useState } from 'react';
import { addAnimal } from '../api';
import './AddAnimalForm.css';

const AddAnimalForm = () => {
    const [formData, setFormData] = useState({
        farmer_email: '',
        price: '',
        county: '',
        town: '',
        breed: '',
        category: '',
        image_url: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await addAnimal(formData);
        console.log(response);
        setFormData({
            farmer_email: '',
            price: '',
            county: '',
            town: '',
            breed: '',
            category: '',
            image_url: ''
        });
    };

    return (
        <div className="add-animal-form">
            <h2>Add New Animal</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Farmer Email:
                    <input type="email" name="farmer_email" value={formData.farmer_email} onChange={handleChange} required />
                </label>
                <label>
                    Price:
                    <input type="number" name="price" value={formData.price} onChange={handleChange} required />
                </label>
                <label>
                    County:
                    <input type="text" name="county" value={formData.county} onChange={handleChange} required />
                </label>
                <label>
                    Town:
                    <input type="text" name="town" value={formData.town} onChange={handleChange} required />
                </label>
                <label>
                    Breed:
                    <input type="text" name="breed" value={formData.breed} onChange={handleChange} required />
                </label>
                <label>
                    Category:
                    <input type="text" name="category" value={formData.category} onChange={handleChange} required />
                </label>
                <label>
                    Image URL:
                    <input type="url" name="image_url" value={formData.image_url} onChange={handleChange} required />
                </label>
                <button type="submit">Add Animal</button>
            </form>
        </div>
    );
};

export default AddAnimalForm;
