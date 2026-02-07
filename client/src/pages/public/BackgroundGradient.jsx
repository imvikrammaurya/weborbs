import React from "react";

const BackgroundGradient = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Top Left Blob */}
            <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[var(--color-bigchill)]/20 rounded-full blur-[100px] mix-blend-multiply opacity-50 animate-blob" />

            {/* Top Right Blob */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] mix-blend-multiply opacity-70 animate-blob animation-delay-2000" />

            {/* Bottom Center Blob */}
            <div className="absolute -bottom-32 left-1/3 w-[800px] h-[800px] bg-[var(--color-bigchill)]/20 rounded-full blur-[100px] mix-blend-multiply opacity-50 animate-blob animation-delay-4000" />

            {/* Additional Blob for fuller coverage */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] mix-blend-multiply opacity-40 animate-blob animation-delay-4000" />
        </div>
    );
};

export default BackgroundGradient;
