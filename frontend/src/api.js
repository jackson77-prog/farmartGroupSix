const API_BASE_URL = 'https://farmartgroupsix-8.onrender.com';

export const fetchAnimals = async (page = 1, limit = 6) => {
    try {
        const response = await fetch(`${API_BASE_URL}/animals?page=${page}&limit=${limit}`);
        if (!response.ok) {
            throw new Error('Failed to fetch animals');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const registerUser = async (email, password, userType, phone, county, town) => {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, user_type: userType, phone, county, town }),
        });
        
        if (!response.ok) {
            throw new Error('Registration failed');
        }
        
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const loginUser = async (email, password) => {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        
        if (!response.ok) {
            throw new Error('Login failed');
        }
        
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const addAnimal = async (animalData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/animals`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(animalData),
        });
        
        if (!response.ok) {
            throw new Error('Failed to add animal');
        }
        
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const addToCart = async (cartId, animalId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/cart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cart_id: cartId, animal_id: animalId }),
        });
        
        if (!response.ok) {
            throw new Error('Failed to add to cart');
        }
        
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const fetchCart = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/cart`);
        if (!response.ok) {
            throw new Error('Failed to fetch cart');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};
