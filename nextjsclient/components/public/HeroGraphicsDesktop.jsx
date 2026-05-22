"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroGraphicsDesktop = () => {
    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -15, 0],
                }}
                transition={{
                    opacity: { duration: 0.8, delay: 0.05 },
                    scale: { duration: 0.8, delay: 0.05 },
                    y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute top-[15%] left-[-5%] md:left-[2%] lg:left-[2%] xl:left-[3%] 2xl:left-[4%] w-48 md:w-48 lg:w-52 xl:w-64 2xl:w-80 shadow-2xl rounded-2xl overflow-hidden glass-panel"
                style={{ opacity: 0.9 }}
            >
                <Image
                    priority
                    fetchPriority="high"
                    src="/images/hero-dashboard-2.avif"
                    alt="Dashboard Analytics"
                    width={320}
                    height={200}
                    className="w-full h-auto rounded-2xl"
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, 15, 0],
                }}
                transition={{
                    opacity: { duration: 0.8, delay: 0.1 },
                    scale: { duration: 0.8, delay: 0.1 },
                    y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.25 },
                }}
                className="absolute top-[18%] right-[-5%] md:right-[2%] lg:right-[2%] xl:right-[5%] 2xl:right-[3%] w-52 md:w-52 lg:w-56 xl:w-80 2xl:w-96 shadow-2xl rounded-xl overflow-hidden glass-panel"
            >
                <Image
                    loading="lazy"
                    src="/images/hero-dashboard-5.avif"
                    alt="Code Snippet"
                    width={384}
                    height={200}
                    className="w-full h-auto rounded-xl"
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -10, 0],
                }}
                transition={{
                    opacity: { duration: 0.8, delay: 0.15 },
                    scale: { duration: 0.8, delay: 0.15 },
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                }}
                className="absolute bottom-[15%] left-[2%] md:left-[5%] lg:left-[5%] xl:left-[10%] 2xl:left-[10%] w-40 md:w-40 lg:w-44 xl:w-60 2xl:w-64 shadow-xl rounded-2xl overflow-hidden glass-panel"
            >
                <Image
                    loading="lazy"
                    src="/images/server_metrics_card_1767871336352.avif"
                    alt="Server Metrics"
                    width={256}
                    height={200}
                    className="w-full h-auto rounded-2xl"
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, 12, 0],
                }}
                transition={{
                    opacity: { duration: 0.8, delay: 0.2 },
                    scale: { duration: 0.8, delay: 0.2 },
                    y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.35 },
                }}
                className="absolute bottom-[10%] right-[2%] md:right-[5%] lg:right-[5%] xl:right-[12%] 2xl:right-[10%] w-36 md:w-36 lg:w-44 xl:w-52 2xl:w-56 shadow-xl rounded-3xl overflow-hidden glass-panel"
            >
                <Image
                    loading="lazy"
                    src="/images/hero-dashboard-6.avif"
                    alt="Mobile UI"
                    width={224}
                    height={200}
                    className="w-full h-auto rounded-3xl"
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -20, 0],
                }}
                transition={{
                    opacity: { duration: 1, delay: 0.12 },
                    scale: { duration: 1, delay: 0.12 },
                    y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.12 },
                }}
                className="absolute top-[8%] right-[30%] w-32 xl:w-32 2xl:w-40 opacity-80 shadow-lg rounded-xl overflow-hidden glass-panel z-[-1] hidden xl:block"
            >
                <Image
                    loading="lazy"
                    src="/images/hero-dashboard-3.avif"
                    alt="Server Metrics Small"
                    width={160}
                    height={100}
                    className="w-full h-auto rounded-xl"
                />
            </motion.div>
        </div>
    );
};

export default HeroGraphicsDesktop;