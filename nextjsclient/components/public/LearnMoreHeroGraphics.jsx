"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const dashboardImg = "/images/dashboard_analytics_dark_1767871281648.avif";
const mobileImg = "/images/hero-dashboard-7.avif";





export default function LearnMoreHeroGraphics() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();

        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);
    return (

        <div className="hidden lg:flex relative h-[400px] md:h-[500px] w-full items-center justify-center perspective-[1000px]">
            {/* Desktop Dashboard Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateY: 10 }}
                animate={
                    isMobile
                        ? { opacity: 1, scale: 1, rotateY: -5 }
                        : {
                            opacity: 1,
                            scale: 1,
                            rotateY: -5,
                            y: [0, -10, 0],
                        }
                }
                transition={
                    isMobile
                        ? {
                            opacity: { duration: 0.4 }
                        }
                        : {
                            opacity: { duration: 0.8 },
                            y: {
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                            },
                        }
                }
                className="absolute w-[80%] md:w-[75%] z-10 bg-white p-3 rounded-2xl shadow-2xl border border-slate-100/50"
            >
                <Image
                    src={dashboardImg}
                    alt="Dashboard"
                    width={600}
                    height={400}
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-full h-auto rounded-xl border border-slate-100"
                />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm border border-slate-100">
                    Analytics Ready
                </div>
            </motion.div>

            {/* Mobile App Card */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={
                    isMobile
                        ? { opacity: 1, x: 0, rotateZ: 3 }
                        : { opacity: 1, x: 0, y: [0, 15, 0], rotateZ: 3 }
                }
                transition={
                    isMobile
                        ? {
                            opacity: { duration: 0.4 }
                        }
                        : {
                            opacity: { duration: 0.8, delay: 0.2 },
                            y: {
                                duration: 7,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1,
                            },
                        }
                }
                className="absolute right-0 md:-right-4 bottom-10 w-[30%] md:w-[28%] z-20 bg-white p-2 rounded-3xl shadow-xl border border-slate-100/50 transform rotate-3"
            >
                <Image
                    src={mobileImg}
                    alt="Mobile App"
                    width={200}
                    height={400}

                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-full h-auto rounded-2xl border border-slate-100"
                />
                <div className="absolute -bottom-3 -left-3 bg-[var(--color-bigchill)] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    Mobile First
                </div>
            </motion.div>

            {/* Code Snippet Card */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={
                    isMobile
                        ? { opacity: 1, x: 0, rotateZ: 3 }
                        : { opacity: 1, x: 0, y: [0, 15, 0], rotateZ: 3 }
                }
                transition={
                    isMobile
                        ? {
                            opacity: { duration: 0.4 }
                        }
                        : {
                            opacity: { duration: 0.8, delay: 0.2 },
                            y: {
                                duration: 7,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1,
                            },
                        }
                }
                className="absolute left-0 md:-left-2 top-20 w-[40%] md:w-[35%] z-20 bg-slate-900 p-4 rounded-xl shadow-xl border border-slate-800 transform -rotate-3"
            >
                <div className="flex gap-1.5 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                </div>
                <div className="space-y-2 font-mono text-[10px] md:text-xs text-slate-400">
                    <div className="flex"><span className="text-purple-400 mr-2">const</span> <span className="text-blue-400">App</span> = () ={">"} {"{"}</div>
                    <div className="pl-4 text-green-400">return (</div>
                    <div className="pl-6 text-slate-300">{"<Scale />"}</div>
                    <div className="pl-4 text-green-400">);</div>
                    <div>{"}"}</div>
                </div>
                <div className="absolute -top-3 -right-3 bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-slate-100">
                    Clean Code
                </div>
            </motion.div>
        </div>
    );
}