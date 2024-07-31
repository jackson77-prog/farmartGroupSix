import { postRequest } from './apiService';

export const registerUser = async (username, password, userType) => {
  try {
    const response = await postRequest('http://localhost:8000/api/register', { username, password, user_type: userType });
    console.log('Register response:', response);
    return response;
  } catch (error) {
    console.error('Register error:', error);
    throw error;
  }
};

export const loginUser = async (username, password) => {
  try {
    const response = await postRequest('http://localhost:8000/api/login', { username, password });
    console.log('Login response:', response);
    return response;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};