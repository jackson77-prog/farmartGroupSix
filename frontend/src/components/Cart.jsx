import React, { useState, useEffect } from 'react';
import { fetchCart } from '../api';
import './Cart.css';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const getCartItems = async () => {
            const data = await fetchCart();
            setCartItems(data);
        };
        getCartItems();
    }, []);

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.animal.price, 0);
    };

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            <div className="cart-items">
                {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={item.animal.image_url} alt={item.animal.breed} />
                        <div className="item-details">
                            <h3>{item.animal.breed}</h3>
                            <p>Price: ${item.animal.price}</p>
                            <p>County: {item.animal.county}</p>
                            <p>Town: {item.animal.town}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-total">
                <h3>Total: ${calculateTotal()}</h3>
            </div>
        </div>
    );
};

export default Cart;
