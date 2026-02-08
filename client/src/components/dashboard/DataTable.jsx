import React from 'react';

const DataTable = ({ headers, data, renderRow, actions, title }) => {
    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
            <div className="p-6 border-b border-zinc-800 flex justify-between items-center">
                <h3 className="font-semibold text-white">{title}</h3>
                {actions}
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-zinc-400">
                    <thead className="bg-zinc-900/50 text-xs uppercase font-medium border-b border-zinc-800">
                        <tr>
                            {headers.map((header, index) => (
                                <th key={index} className="px-6 py-3">{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800">
                        {data.length === 0 ? (
                            <tr>
                                <td colSpan={headers.length} className="px-6 py-8 text-center text-zinc-500">
                                    No data available
                                </td>
                            </tr>
                        ) : (
                            data.map((item, index) => (
                                <tr key={index} className="hover:bg-zinc-800/50 transition-colors">
                                    {renderRow(item)}
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataTable;
