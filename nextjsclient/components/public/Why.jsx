"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import WhyMobile from "./WhyMobile";

// Dynamically import desktop code so the framer-motion library never ships to mobile devices
const WhyDesktop = dynamic(() => import("./WhyDesktop"), {
    ssr: false,
});

export default function Why() {
    const [isDesktop, setIsDesktop] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        // The 'lg' breakpoint in Tailwind is typically 1024px
        const checkDevice = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };

        checkDevice();
        window.addEventListener("resize", checkDevice);

        return () => window.removeEventListener("resize", checkDevice);
    }, []);

    // Prevent server/client hydration mismatch errors
    if (!mounted) return null;

    // Serve the respective component based on screen size
    return isDesktop ? <WhyDesktop /> : <WhyMobile />;
}