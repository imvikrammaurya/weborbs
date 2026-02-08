import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AuthCallback = () => {
    const { isAuthenticated, loading } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!loading) {
            if (isAuthenticated) {
                const params = new URLSearchParams(location.search);
                const redirectPath = params.get('redirect') || '/dashboard';
                navigate(redirectPath);
            } else {
                navigate('/login');
            }
        }
    }, [isAuthenticated, loading, navigate, location]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
            <div className="flex flex-col items-center gap-4">
                <div className="w-10 h-10 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin"></div>
                <p className="text-zinc-400">Completing authentication...</p>
            </div>
        </div>
    );
};

export default AuthCallback;
