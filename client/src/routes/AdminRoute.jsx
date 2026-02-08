import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AdminRoute = () => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>;
    }

    if (!user) {
        return <Navigate to="/admin/login" replace />;
    }

    // Check if user is authenticated AND is an admin
    return user.role === 'admin' ? <Outlet /> : <Navigate to="/" replace />;
};

export default AdminRoute;
