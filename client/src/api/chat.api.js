import axios from 'axios';

const API_URL = 'http://localhost:5000/api/chat';

// Axios instance with interceptor for token (reusing auth token logic if not globally set, 
// but usually we rely on the global interceptor in auth.api.js if it was exported. 
// For now, let's assume we need to attach token or use the same instance. 
// Best practice: Export the axios instance from auth.api.js or a separate api.js file.
// Let's check auth.api.js to see if it exports the instance. For now, I'll create a new one but it's better to reuse.)

// Actually, let's use a standard fetch or create a new axios instance and attach token from localStorage.
const chatApi = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

chatApi.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const sendMessage = async (recipientId, content) => {
    try {
        const response = await chatApi.post('/send', { recipientId, content });
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || 'Failed to send message';
    }
};

export const getMessages = async (userId) => {
    try {
        const response = await chatApi.get(`/${userId}`);
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || 'Failed to get messages';
    }
};

export const markMessagesAsRead = async (senderId) => {
    try {
        const response = await chatApi.put('/read', { senderId });
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || 'Failed to mark messages as read';
    }
};
