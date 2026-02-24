import React from 'react';

const Products = () => {
    return (
        <div className="pt-24 pb-16 min-h-screen flex items-center justify-center bg-slate-50 relative z-10">
            <div className="text-center px-4 max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                    Our Products
                </h1>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                    We are currently building innovative software products to help streamline your business seamlessly. Check back soon for updates and early access opportunities!
                </p>
                <button
                    onClick={() => window.history.back()}
                    className="px-8 py-3 bg-[var(--color-bigchill)] text-white font-medium rounded-xl hover:bg-[#097a7a] transition-colors shadow-sm"
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default Products;
