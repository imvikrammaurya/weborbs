import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, error } = useAuth();
    const navigate = useNavigate();
    const [localError, setLocalError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLocalError('');

        if (!email || !password) {
            setLocalError('Please fill in all fields');
            return;
        }

        const result = await login(email, password);
        if (result.success) {
            navigate('/dashboard'); // Redirect to client dashboard
        } else {
            setLocalError(result.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white p-4">
            <div className="max-w-md w-full bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 backdrop-blur-sm">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold tracking-tighter mb-2">Welcome Back</h1>
                    <p className="text-zinc-400">Sign in to your client dashboard</p>
                </div>

                {(error || localError) && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-3 rounded-lg mb-6 text-sm">
                        {localError || error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                            placeholder="you@company.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                        Sign In
                    </button>
                </form>

                <div className="mt-8 text-center text-sm text-zinc-500">
                    <Link to="/admin/login" className="hover:text-white transition-colors">
                        Admin Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
