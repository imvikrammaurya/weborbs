import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import "./App.css";

// Context
import { AuthProvider } from "./context/AuthContext";

// Components (Non-lazy for critical UI)
import Navbar from "./pages/public/Navbar";
import Footer from "./pages/public/Footer";
import BackgroundGradient from "./pages/public/BackgroundGradient";
import ProfileCompletionModal from "./components/auth/ProfileCompletionModal";


// Lazy Loaded Pages
const AllComponents = lazy(() => import("./pages/public/AllComponents"));
const About = lazy(() => import("./pages/public/About"));
const Work = lazy(() => import("./pages/public/Work"));
const Pricing = lazy(() => import("./pages/public/Pricing"));
const Contact = lazy(() => import("./pages/public/Contact"));
const LearnMore = lazy(() => import("./pages/public/LearnMore"));
const Login = lazy(() => import("./pages/auth/Login"));
const AdminLogin = lazy(() => import("./pages/auth/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const ClientDashboard = lazy(() => import("./pages/client/ClientDashboard"));
const AuthCallback = lazy(() => import("./pages/auth/AuthCallback"));

// Route Guards
import AdminRoute from "./routes/AdminRoute";
import ClientRoute from "./routes/ClientRoute";

// Loading Fallback
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center text-white">
    Loading...
  </div>
);

function App() {
  return (
    <Router>
      <AuthProvider>
        <BackgroundGradient />
        <Navbar />
        <ProfileCompletionModal />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<AllComponents />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/learn-more" element={<LearnMore />} />

            {/* Auth Routes */}
            <Route path="/auth/callback" element={<AuthCallback />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin/login" element={<AdminLogin />} />

            {/* Protected Admin Routes */}
            <Route path="/admin" element={<AdminRoute />}>
              <Route index element={<AdminDashboard />} />
            </Route>

            {/* Protected Client Routes */}
            <Route path="/dashboard" element={<ClientRoute />}>
              <Route index element={<ClientDashboard />} />
            </Route>
          </Routes>
        </Suspense>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
