const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const fetchAnimals = async (page = 1, limit = 6) => {
    const response = await fetch(`${API_BASE_URL}/animals?page=${page}&limit=${limit}`);
    return await response.json();
};

export const registerUser = async (email, password, userType, phone, county, town) => {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, user_type: userType, phone, county, town })
    });
    return await response.json();
};

export const loginUser = async (email, password) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });
    return await response.json();
};

export const addAnimal = async (animalData) => {
    const response = await fetch(`${API_BASE_URL}/animals`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(animalData)
    });
    return await response.json();
};

export const addToCart = async (cartId, animalId) => {
    const response = await fetch(`${API_BASE_URL}/cart`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cart_id: cartId, animal_id: animalId })
    });
    return await response.json();
};

export const fetchCart = async () => {
    const response = await fetch(`${API_BASE_URL}/cart`);
    return await response.json();
};
