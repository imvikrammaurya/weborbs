import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { completeProfile } from '../../api/auth.api';
import { User, Phone, Briefcase, CheckCircle } from 'lucide-react';

const ProfileCompletionModal = () => {
    const { user, setUser } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        phone: '',
        company: ''
    });

    useEffect(() => {
        // Check if user is logged in but profile is incomplete
        if (user && user.profileCompleted === false) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, [user]);

    if (!isOpen) return null;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await completeProfile({
                phone: formData.phone,
                companyName: formData.company // API expects companyName
            });

            if (response.success) {
                // Update local user state
                const updatedUser = { ...user, ...response.data, profileCompleted: true };
                setUser(updatedUser);
                localStorage.setItem('user', JSON.stringify(updatedUser));
                setIsOpen(false);
            } else {
                setError(response.message || 'Failed to update profile');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
            <div className="bg-zinc-900 border border-zinc-700 rounded-2xl w-full max-w-md overflow-hidden relative shadow-2xl animate-fade-in-up">

                <div className="p-8">
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500">
                            <User size={32} />
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-center mb-2 text-white">
                        Complete Your Profile
                    </h2>
                    <p className="text-zinc-400 text-center mb-8 text-sm">
                        Please provide a few more details to finish setting up your account.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="relative">
                            <Phone className="absolute left-3 top-3 text-zinc-500" size={18} />
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                            />
                        </div>

                        <div className="relative">
                            <Briefcase className="absolute left-3 top-3 text-zinc-500" size={18} />
                            <input
                                type="text"
                                name="company"
                                placeholder="Company Name"
                                value={formData.company}
                                onChange={handleChange}
                                required
                                className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                            />
                        </div>

                        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    <span>Complete Setup</span>
                                    <CheckCircle size={18} />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfileCompletionModal;
