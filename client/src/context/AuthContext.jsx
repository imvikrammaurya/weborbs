import React, { createContext, useState, useEffect, useContext } from 'react';
import { getCurrentUser, loginUser, registerUser, completeProfile } from '../api/auth.api';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [isProfileCompletionModalOpen, setIsProfileCompletionModalOpen] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            // Check for token in URL (from Google Auth redirect)
            const params = new URLSearchParams(window.location.search);
            const tokenFromUrl = params.get('token');
            const redirectPath = params.get('redirect');

            if (tokenFromUrl) {
                localStorage.setItem('token', tokenFromUrl);
                // Clear query param
                window.history.replaceState({}, document.title, window.location.pathname);
            }

            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const userData = await getCurrentUser();
                    setUser(userData);
                    setIsAuthenticated(true);

                    // Check if profile needs completion
                    if (!userData.profileCompleted) {
                        setIsProfileCompletionModalOpen(true);
                    }
                } catch (error) {
                    console.error('Auth check failed:', error);
                    localStorage.removeItem('token');
                    setUser(null);
                    setIsAuthenticated(false);
                }
            }
            setLoading(false);
        };

        checkAuth();
    }, []);

    const login = async (email, password) => {
        try {
            const data = await loginUser({ email, password });
            localStorage.setItem('token', data.token);
            setUser(data);
            setIsAuthenticated(true);
            closeAuthModal();

            if (!data.profileCompleted) {
                setIsProfileCompletionModalOpen(true);
            }

            return { success: true };
        } catch (error) {
            console.error('Login failed:', error);
            return { success: false, message: error.response?.data?.message || 'Login failed' };
        }
    };

    const register = async (userData) => {
        try {
            const data = await registerUser(userData);
            localStorage.setItem('token', data.token);
            setUser(data);
            setIsAuthenticated(true);
            closeAuthModal();

            if (!data.profileCompleted) {
                setIsProfileCompletionModalOpen(true);
            }

            return { success: true };
        } catch (error) {
            console.error('Registration failed:', error);
            return { success: false, message: error.response?.data?.message || 'Registration failed' };
        }
    };

    const completeUserProfile = async (userData) => {
        try {
            const updatedUser = await completeProfile(userData);
            setUser(prev => ({ ...prev, ...updatedUser.data }));
            setIsProfileCompletionModalOpen(false);
            return { success: true };
        } catch (error) {
            console.error('Profile completion failed:', error);
            return { success: false, message: error.response?.data?.message || 'Update failed' };
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        setIsAuthenticated(false);
        setIsProfileCompletionModalOpen(false);
    };

    const openAuthModal = () => setIsAuthModalOpen(true);
    const closeAuthModal = () => setIsAuthModalOpen(false);

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            isAuthenticated,
            login,
            register,
            logout,
            isAuthModalOpen,
            openAuthModal,
            closeAuthModal,
            isProfileCompletionModalOpen,
            completeUserProfile
        }}>
            {children}
        </AuthContext.Provider>
    );
};
