import React from 'react';

const StatCard = ({ title, value, icon, trend, trendValue, color = "blue" }) => {
    const colorClasses = {
        blue: "bg-blue-500/10 text-blue-500",
        green: "bg-green-500/10 text-green-500",
        purple: "bg-purple-500/10 text-purple-500",
        orange: "bg-orange-500/10 text-orange-500",
    };

    return (
        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:border-zinc-700 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-zinc-400 text-sm font-medium mb-1">{title}</h3>
                    <div className="text-2xl font-bold text-white">{value}</div>
                </div>
                <div className={`p-2 rounded-lg ${colorClasses[color]}`}>
                    {icon}
                </div>
            </div>
            {trend && (
                <div className="flex items-center text-xs">
                    <span className={trend === 'up' ? 'text-green-500' : 'text-red-500'}>
                        {trend === 'up' ? '↑' : '↓'} {trendValue}
                    </span>
                    <span className="text-zinc-500 ml-1">vs last month</span>
                </div>
            )}
        </div>
    );
};

export default StatCard;
