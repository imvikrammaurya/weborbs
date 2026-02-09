import axios from 'axios';

// Create axios instance with base URL
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api', // Fallback for dev without env
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor to add auth token to requests
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const loginUser = async ({ email, password }) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
};

// Ensure signup payload matches backend expectations for manual signup
export const registerUser = async (userData) => {
    const payload = {
        name: userData.name,
        email: userData.email,
        password: userData.password,
        contactInfo: {
            phone: userData?.contactInfo?.phone || userData.phone,
            company: userData?.contactInfo?.company || userData.company
        }
    };
    const response = await api.post('/auth/register', payload);
    return response.data;
};

export const getCurrentUser = async () => {
    const response = await api.get('/auth/me');
    return response.data;
};

export const completeProfile = async (userData) => {
    const response = await api.post('/auth/complete-profile', userData);
    return response.data;
};

export default api;
