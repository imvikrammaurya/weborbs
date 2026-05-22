"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import ProcessMobile from "./ProcessMobile";

// Dynamically import desktop code so it never ships to mobile devices
const ProcessDesktop = dynamic(() => import("./ProcessDesktop"), {
    ssr: false
});

export default function Process() {
    const [isDesktop, setIsDesktop] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        // Check screen width to determine the bundle to serve
        const checkDevice = () => {
            setIsDesktop(window.innerWidth >= 900);
        };

        checkDevice();
        window.addEventListener("resize", checkDevice);

        return () => window.removeEventListener("resize", checkDevice);
    }, []);

    // Prevent server/client hydration mismatch errors
    if (!mounted) return null;

    // Serve the respective component
    return isDesktop ? <ProcessDesktop /> : <ProcessMobile />;
}