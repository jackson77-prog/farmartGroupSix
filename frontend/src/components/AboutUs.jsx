import React, { useState, useEffect } from 'react';
import './AboutUs.css';

const AboutUs = () => {
    const [stats, setStats] = useState({
        users: 100,
        animals: 7600,
        sales: 10000
    });

    useEffect(() => {
        // Simulate fetching data from an API
        const fetchData = async () => {
            // Replace with your API call
            const response = await fetch('/api/stats');
            const data = await response.json();
            setStats({
                users: data.users,
                animals: data.animals,
                sales: data.sales
            });
        };

        fetchData();
    }, []);

    return (
        <section className="about-us">
            <div className="about-icon">🌟</div>
            <h2>About Us</h2>
            <p>
                At Farmart, we revolutionize the way you buy and sell livestock. Our mission is to bridge the gap between farmers and buyers, offering a seamless, transparent platform for purchasing animals like horses, dogs, and camels. By eliminating middlemen, we ensure fair pricing and genuine connections. Farmart is built on trust and quality, supporting farmers in showcasing their livestock while providing buyers with a direct, reliable source. Discover a new way to connect with farms and bring home the best animals with confidence and ease.
            </p>
            <div className="stats">
                <div className="stat-item">
                    <h3>Users</h3>
                    <p>{stats.users}</p>
                </div>
                <div className="stat-item">
                    <h3>Animals</h3>
                    <p>{stats.animals}</p>
                </div>
                <div className="stat-item">
                    <h3>Sales</h3>
                    <p>{stats.sales}</p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
