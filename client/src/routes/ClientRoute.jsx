import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ClientRoute = () => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>;
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // Check if user is authenticated AND is a client
    return user.role === 'client' ? <Outlet /> : <Navigate to="/" replace />;
};

export default ClientRoute;
