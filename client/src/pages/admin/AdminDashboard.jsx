import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import StatCard from '../../components/dashboard/StatCard';
import DataTable from '../../components/dashboard/DataTable';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('overview');

    // Mock Data
    const stats = [
        { title: 'Total Revenue', value: '$45,231.89', icon: '💰', trend: 'up', trendValue: '+20.1%', color: 'green' },
        { title: 'Active Projects', value: '12', icon: '🚀', trend: 'up', trendValue: '+4', color: 'blue' },
        { title: 'New Clients', value: '5', icon: '👥', trend: 'up', trendValue: '+2', color: 'purple' },
        { title: 'Pending Tasks', value: '7', icon: '📝', trend: 'down', trendValue: '-1', color: 'orange' },
    ];

    const projects = [
        { id: 'PRJ-101', name: 'E-Commerce Redesign', client: 'Acme Corp', status: 'In Progress', budget: '$12,000' },
        { id: 'PRJ-102', name: 'Mobile App Dev', client: 'StartUp Inc', status: 'Pending', budget: '$8,500' },
        { id: 'PRJ-103', name: 'SEO Optimization', client: 'Local Biz', status: 'Completed', budget: '$1,200' },
    ];

    const clients = [
        { id: 'CLT-001', name: 'Acme Corp', email: 'contact@acme.com', status: 'Active' },
        { id: 'CLT-002', name: 'StartUp Inc', email: 'hello@startup.io', status: 'Active' },
    ];

    const renderProjectRow = (project) => (
        <>
            <td className="px-6 py-4 font-medium text-white">{project.name}</td>
            <td className="px-6 py-4">{project.client}</td>
            <td className="px-6 py-4">
                <span className={`px-2 py-1 rounded text-xs font-medium ${project.status === 'Completed' ? 'bg-green-500/10 text-green-500' :
                        project.status === 'In Progress' ? 'bg-blue-500/10 text-blue-500' :
                            'bg-orange-500/10 text-orange-500'
                    }`}>
                    {project.status}
                </span>
            </td>
            <td className="px-6 py-4 text-zinc-300">{project.budget}</td>
            <td className="px-6 py-4 text-right">
                <button className="text-zinc-400 hover:text-white mr-2">Edit</button>
            </td>
        </>
    );

    return (
        <div className="min-h-screen bg-black text-white flex">
            {/* Sidebar */}
            <aside className="w-64 bg-zinc-900 border-r border-zinc-800 hidden md:flex flex-col">
                <div className="p-6">
                    <h2 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        WebOrbs
                    </h2>
                    <p className="text-xs text-red-500 mt-1 font-semibold tracking-wider">ADMIN PORTAL</p>
                </div>

                <nav className="flex-1 px-4 space-y-2 mt-4">
                    {['Overview', 'Projects', 'Clients', 'Invoices', 'Settings'].map((item) => (
                        <button
                            key={item}
                            onClick={() => setActiveTab(item.toLowerCase())}
                            className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-colors ${activeTab === item.toLowerCase()
                                    ? 'bg-blue-600/10 text-blue-500 font-medium border border-blue-500/20'
                                    : 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </nav>

                <div className="p-4 border-t border-zinc-800">
                    <div className="flex items-center gap-3 mb-4 px-2">
                        <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center font-bold text-xs">
                            A
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-sm font-medium truncate">{user?.name || 'Administrator'}</p>
                            <p className="text-xs text-zinc-500 truncate">{user?.email}</p>
                        </div>
                    </div>
                    <button
                        onClick={logout}
                        className="w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs py-2 rounded-lg transition-colors border border-zinc-700"
                    >
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                {/* Mobile Header */}
                <header className="md:hidden bg-zinc-900 border-b border-zinc-800 p-4 flex justify-between items-center sticky top-0 z-10">
                    <span className="font-bold text-red-500">Admin Portal</span>
                    <button onClick={logout} className="text-xs bg-zinc-800 px-3 py-1.5 rounded border border-zinc-700">
                        Logout
                    </button>
                </header>

                <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
                    <div className="flex justify-between items-end mb-8">
                        <div>
                            <h1 className="text-2xl font-bold">Dashboard</h1>
                            <p className="text-zinc-400 mt-1">System Overview & Analytics</p>
                        </div>
                        <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                            + New Project
                        </button>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {stats.map((stat, index) => (
                            <StatCard key={index} {...stat} />
                        ))}
                    </div>

                    {/* Recent Projects Table */}
                    <div className="mb-8">
                        <DataTable
                            title="Recent Projects"
                            headers={['Project Name', 'Client', 'Status', 'Budget', 'Actions']}
                            data={projects}
                            renderRow={renderProjectRow}
                            actions={<button className="text-sm text-blue-500 hover:underline">View All Projects</button>}
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Client Activity Feed Placeholder */}
                        <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                            <h3 className="font-semibold mb-4">Activity Feed</h3>
                            <div className="space-y-6">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></div>
                                        <div>
                                            <p className="text-sm text-zinc-300">
                                                <span className="font-medium text-white">Acme Corp</span> uploaded a new document.
                                            </p>
                                            <p className="text-xs text-zinc-500 mt-1">2 hours ago</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Implementation Status */}
                        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                            <h3 className="font-semibold mb-4 text-green-500">System Health</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center p-3 bg-zinc-800/50 rounded-lg">
                                    <span className="text-sm">Database</span>
                                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Connected</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-zinc-800/50 rounded-lg">
                                    <span className="text-sm">API Server</span>
                                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Online</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-zinc-800/50 rounded-lg">
                                    <span className="text-sm">Storage</span>
                                    <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">45% Used</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
