import React, { useState, useEffect } from 'react';
import { fetchAnimals } from '../api';
import AnimalCard from './AnimalCard';
import './AnimalList.css';

const AnimalList = () => {
    const [animals, setAnimals] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const getAnimals = async () => {
            const data = await fetchAnimals(page);
            setAnimals(data);
        };
        getAnimals();
    }, [page]);

    return (
        <div className="animal-list">
            <h2>Animals</h2>
            <div className="animal-cards">
                {animals.map(animal => (
                    <AnimalCard key={animal.id} animal={animal} />
                ))}
            </div>
            <div className="pagination">
                <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
                <span>Page {page}</span>
                <button onClick={() => setPage(page + 1)}>Next</button>
            </div>
        </div>
    );
};

export default AnimalList;
