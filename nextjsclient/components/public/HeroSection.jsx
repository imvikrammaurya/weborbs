"use client";

import React from "react";
import { ArrowRight, Code, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import dynamic from 'next/dynamic';

const HeroGraphicsDesktop = dynamic(() => import('./HeroGraphicsDesktop'), {
  ssr: false
});
const HeroSection = ({ openModal }) => {
  const [isMounted, setIsMounted] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);


  React.useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);


  return (

    <section
      id="hero"
      className="relative w-full min-h-screen overflow-hidden bg-bigchill/5 flex flex-col items-center justify-center pt-32 pb-12 px-4 md:px-8"
    >




      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <div
          className="flex items-center justify-center space-x-2 mb-6"
        >
          <span className="px-3 py-1 text-sm font-medium text-bigchill-dark bg-white rounded-full border border-bigchill/30 shadow-sm">
            Vooklu = Built Digital Products for Scale.
          </span>
        </div>

        <h1

          className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1] "
        >
          Build Faster. <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-bigchill to-teal-600">
            Scale Without Limits.
          </span>
        </h1>

        <p

          className="text-xl text-gray-800 max-w-2xl mx-auto leading-relaxed  bg-white/55 px-4 py-3 rounded-[10px]"
        >
          Vooklu delivers the high-performance digital infrastructure you need.
          Clean code, pixel-perfect design, and enterprise reliability—shipped
          at startup speed.
        </p>

        <div

          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Link
            href="/pricing"
            className="w-full sm:w-auto px-8 py-4 bg-bigchill text-white text-lg font-semibold rounded-lg hover:bg-bigchill-dark hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            Let’s Build Your Product
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/learn-more"
            className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 font-semibold rounded-lg border border-gray-200 hover:bg-gray-50 hover:border-bigchill/30 transition-all duration-200 flex items-center justify-center gap-2"
          >
            Explore Our Services
            <Code className="w-4 h-4 text-gray-500" />
          </Link>
        </div>

        <div

          onClick={openModal}
          className="!mt-2 pb-4 text-m font-medium text-gray-700  hover:opacity-100 transition-opacity cursor-pointer "
        >
          Not sure yet? Book a free 10-minute call.
        </div>

        <div
          className="pt-4 pb-8 flex items-center justify-center gap-8 text-bigchill-dark opacity-100"
        >
          <div className="flex items-center gap-2 ">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-sm font-medium">SOC2 Compliant</span>
          </div>
          <div className="border-r border-gray-300 h-4 mx-2"></div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5" />
            <span className="text-sm font-medium">99.99% Uptime</span>
          </div>
        </div>
      </div>
      {isMounted && !isMobile && <HeroGraphicsDesktop />}
    </section>
  );
};

export default HeroSection;
