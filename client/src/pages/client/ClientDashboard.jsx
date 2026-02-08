import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import StatCard from '../../components/dashboard/StatCard';
import DataTable from '../../components/dashboard/DataTable';
import { useNavigate } from 'react-router-dom';

const ClientDashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('overview');

    // Mock Data for UI demonstration
    const stats = [
        { title: 'Active Projects', value: '1', icon: '🚀', color: 'blue' },
        { title: 'Pending Invoices', value: '$1,200', icon: '💳', color: 'orange' },
        { title: 'Unread Messages', value: '3', icon: '💬', color: 'green' },
    ];

    const messages = [
        { id: 1, sender: 'Admin Team', content: 'We need your approval on the new design mockups.', time: '2 hours ago', unread: true },
        { id: 2, sender: 'Support', content: 'Your ticket #402 has been resolved.', time: '1 day ago', unread: false },
    ];

    const invoices = [
        { id: 'INV-001', date: 'Oct 24, 2023', amount: '$1,200', status: 'Pending' },
        { id: 'INV-002', date: 'Sep 15, 2023', amount: '$800', status: 'Paid' },
    ];

    const renderInvoiceRow = (invoice) => (
        <>
            <td className="px-6 py-4 font-medium text-white">{invoice.id}</td>
            <td className="px-6 py-4">{invoice.date}</td>
            <td className="px-6 py-4">{invoice.amount}</td>
            <td className="px-6 py-4">
                <span className={`px-2 py-1 rounded text-xs font-medium ${invoice.status === 'Paid' ? 'bg-green-500/10 text-green-500' : 'bg-orange-500/10 text-orange-500'
                    }`}>
                    {invoice.status}
                </span>
            </td>
            <td className="px-6 py-4 text-right">
                <button className="text-blue-500 hover:text-blue-400 text-xs">Download</button>
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
                    <p className="text-xs text-zinc-500 mt-1">Client Portal</p>
                </div>

                <nav className="flex-1 px-4 space-y-2 mt-4">
                    {['Overview', 'Projects', 'Messages', 'Invoices', 'Settings'].map((item) => (
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
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-xs">
                            {user?.name?.[0] || 'C'}
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-sm font-medium truncate">{user?.name}</p>
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
                    <span className="font-bold">WebOrbs Client</span>
                    <button onClick={logout} className="text-xs bg-zinc-800 px-3 py-1.5 rounded border border-zinc-700">
                        Logout
                    </button>
                </header>

                <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold">Welcome back, {user?.name?.split(' ')[0]}!</h1>
                        <p className="text-zinc-400 mt-1">Here's what's happening with your projects today.</p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {stats.map((stat, index) => (
                            <StatCard key={index} {...stat} />
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Column */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Invoices Table */}
                            <DataTable
                                title="Recent Invoices"
                                headers={['Invoice ID', 'Date', 'Amount', 'Status', 'Actions']}
                                data={invoices}
                                renderRow={renderInvoiceRow}
                                actions={<button className="text-sm text-blue-500 hover:underline">View All</button>}
                            />

                            {/* Project Status Placeholder */}
                            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="font-semibold">Active Project: E-Commerce Platform</h3>
                                    <span className="bg-blue-500/20 text-blue-400 text-xs px-2 py-1 rounded-full border border-blue-500/20">In Progress</span>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between text-sm text-zinc-400 mb-1">
                                        <span>Development Phase</span>
                                        <span>65%</span>
                                    </div>
                                    <div className="w-full bg-zinc-800 rounded-full h-2">
                                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                                    </div>
                                    <p className="text-sm text-zinc-500 mt-2">
                                        Current Sprint: Backend API Integration & Database Optimization.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Side Column */}
                        <div className="space-y-8">
                            {/* Recent Messages */}
                            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                                <h3 className="font-semibold mb-4">Recent Messages</h3>
                                <div className="space-y-4">
                                    {messages.map((msg) => (
                                        <div key={msg.id} className="p-3 bg-zinc-800/50 rounded-lg border border-zinc-800 hover:bg-zinc-800 transition-colors cursor-pointer">
                                            <div className="flex justify-between items-start mb-1">
                                                <span className="font-medium text-sm">{msg.sender}</span>
                                                <span className="text-[10px] text-zinc-500">{msg.time}</span>
                                            </div>
                                            <p className="text-xs text-zinc-400 line-clamp-2">{msg.content}</p>
                                        </div>
                                    ))}
                                </div>
                                <button className="w-full mt-4 py-2 text-sm text-zinc-400 hover:text-white bg-zinc-800 rounded-lg transition-colors">
                                    Open Chat
                                </button>
                            </div>

                            {/* Project Manager Contact */}
                            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-xl p-6">
                                <h3 className="font-semibold mb-2">Need Help?</h3>
                                <p className="text-sm text-zinc-400 mb-4">Contact your project manager directly.</p>
                                <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                                    Contact Support
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ClientDashboard;
