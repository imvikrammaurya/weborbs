import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, ShieldCheck, Zap } from "lucide-react";
import { Link } from "react-router-dom";

// Import assets
import dashboardImg from "../../assets/dashboard_analytics_dark_1767871281648.png";

import serverImg from "../../assets/server_metrics_card_1767871336352.png";
// import heroDashboardImg from '../../assets/hero-dashboard.png';
import heroDashboardImg2 from "../../assets/hero-dashboard-2.png";
import heroDashboardImg3 from "../../assets/hero-dashboard-3.png";
import heroDashboardImg4 from "../../assets/hero-dashboard-4.png";
import heroDashboardImg5 from "../../assets/hero-dashboard-5.png";
import heroDashboardImg6 from "../../assets/hero-dashboard-6.png";
import heroDashboardImg7 from "../../assets/hero-dashboard-7.png";

const HeroSection = ({ openModal }) => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen overflow-hidden bg-bigchill/5 flex flex-col items-center justify-center pt-32 pb-12 px-4 md:px-8"
    >
      {/* Background Gradient/Mesh (Subtle) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-bigchill/20 rounded-full blur-[100px] mix-blend-multiply opacity-50 animate-blob" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-50/50 rounded-full blur-[100px] mix-blend-multiply opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] bg-bigchill/20 rounded-full blur-[100px] mix-blend-multiply opacity-50 animate-blob animation-delay-4000" />
      </div>

      {/* Floating Images Container */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block">
        {/* Top Left - Dashboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -15, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.2 },
            scale: { duration: 0.8, delay: 0.2 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-[15%] left-[-5%] md:left-[2%] lg:left-[2%] xl:left-[3%] 2xl:left-[4%] w-48 md:w-48 lg:w-52 xl:w-64 2xl:w-80 shadow-2xl rounded-2xl overflow-hidden glass-panel"
          style={{ opacity: 0.9 }}
        >
          <img
            src={heroDashboardImg2}
            alt="Dashboard Analytics"
            className="w-full h-auto rounded-2xl"
          />
        </motion.div>

        {/* Top Right - Code Snippet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, 15, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.4 },
            scale: { duration: 0.8, delay: 0.4 },
            y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 },
          }}
          className="absolute top-[18%] right-[-5%] md:right-[2%] lg:right-[2%] xl:right-[5%] 2xl:right-[3%] w-52 md:w-52 lg:w-56 xl:w-80 2xl:w-96 shadow-2xl rounded-xl overflow-hidden glass-panel"
        >
          <img
            src={heroDashboardImg5}
            alt="Code Snippet"
            className="w-full h-auto rounded-xl"
          />
        </motion.div>

        {/* Bottom Left - Server/Metrics */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -10, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.6 },
            scale: { duration: 0.8, delay: 0.6 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 },
          }}
          className="absolute bottom-[15%] left-[2%] md:left-[5%] lg:left-[5%] xl:left-[10%] 2xl:left-[10%] w-40 md:w-40 lg:w-44 xl:w-60 2xl:w-64 shadow-xl rounded-2xl overflow-hidden glass-panel"
        >
          <img
            src={heroDashboardImg4}
            alt="Server Metrics"
            className="w-full h-auto rounded-2xl"
          />
        </motion.div>

        {/* Bottom Right - Mobile UI */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, 12, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.8 },
            scale: { duration: 0.8, delay: 0.8 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
          }}
          className="absolute bottom-[10%] right-[2%] md:right-[5%] lg:right-[5%] xl:right-[12%] 2xl:right-[10%] w-36 md:w-36 lg:w-44 xl:w-52 2xl:w-56 shadow-xl rounded-3xl overflow-hidden glass-panel"
        >
          <img
            src={serverImg}
            alt="Mobile UI"
            className="w-full h-auto rounded-3xl"
          />
        </motion.div>

        {/* Extra Image 1 - Top Center/Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -20, 0],
          }}
          transition={{
            opacity: { duration: 1, delay: 0.5 },
            scale: { duration: 1, delay: 0.5 },
            y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
          }}
          className="absolute top-[8%] right-[30%] w-32 xl:w-32 2xl:w-40 opacity-80 shadow-lg rounded-xl overflow-hidden glass-panel z-[-1] hidden xl:block"
        >
          <img
            src={heroDashboardImg6}
            alt="Server Metrics Small"
            className="w-full h-auto rounded-xl"
          />
        </motion.div>

        {/* Extra Image 2 - Mid Left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 0.9,
            scale: 1,
            y: [0, 20, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.7 },
            scale: { duration: 0.8, delay: 0.7 },
            y: { duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 },
          }}
          className="absolute top-[40%] left-[0.1%] w-36 xl:w-36 2xl:w-48 shadow-lg rounded-xl overflow-hidden glass-panel hidden xl:block"
        >
          <img
            src={dashboardImg}
            alt="Dashboard Small"
            className="w-full h-auto rounded-xl"
          />
        </motion.div>

        {/* Extra Image 3 - Bottom Center */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 0.7,
            scale: 1,
            y: [0, -15, 0],
          }}
          transition={{
            opacity: { duration: 1, delay: 0.9 },
            scale: { duration: 1, delay: 0.9 },
            y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 },
          }}
          className="absolute bottom-[-5%] left-[40%] w-40 xl:w-40 2xl:w-52 opacity-70 shadow-lg rounded-xl overflow-hidden glass-panel z-[-1] hidden xl:block"
        >
          <img
            src={heroDashboardImg3}
            alt="Dashboard Image"
            className="w-full h-auto rounded-xl"
          />
        </motion.div>

        {/* Extra Image 4 - Far Right Mid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 0.9,
            scale: 1,
            y: [0, 15, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.6 },
            scale: { duration: 0.8, delay: 0.6 },
            y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 },
          }}
          className="absolute top-[50%] right-[0.1%] w-36 xl:w-36 2xl:w-44 shadow-lg rounded-xl overflow-hidden glass-panel hidden xl:block"
        >
          <img
            src={heroDashboardImg7}
            alt="Mobile UI Small"
            className="w-full h-auto rounded-xl"
          />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center space-x-2 mb-6"
        >
          <span className="px-3 py-1 text-sm font-medium text-bigchill bg-white rounded-full border border-bigchill/30 shadow-sm">
            Vooklu = Built Digital Products for Scale.
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1] drop-shadow-[0_0_25px_rgba(255,255,255,1)]"
        >
          Build Faster. <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-bigchill to-teal-600">
            Scale Without Limits.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed backdrop-blur-[6px] bg-white/55 px-4 py-3 rounded-[10px]"
        >
          Vooklu delivers the high-performance digital infrastructure you need.
          Clean code, pixel-perfect design, and enterprise reliability—shipped
          at startup speed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Link
            to="/pricing"
            className="w-full sm:w-auto px-8 py-4 bg-bigchill text-white font-semibold rounded-lg hover:brightness-110 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            Let’s Build Your Product
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/learn-more"
            className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 font-semibold rounded-lg border border-gray-200 hover:bg-gray-50 hover:border-bigchill/30 transition-all duration-200 flex items-center justify-center gap-2"
          >
            Learn More
            <Code className="w-4 h-4 text-gray-500" />
          </Link>
        </motion.div>

        {/* Secondary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          onClick={openModal}
          className="!mt-2 pb-4 text-m font-medium text-gray-400 grayscale opacity-80 hover:opacity-100 transition-opacity cursor-pointer drop-shadow-[0_0_25px_rgba(255,255,255,1)]"
        >
          Not sure yet? Book a free 10-minute call.
        </motion.div>

        {/* Trust Badges / Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="pt-4 pb-8 flex items-center justify-center gap-8 text-bigchill opacity-80 drop-shadow-[0_0_25px_rgba(255,255,255,1)]"
        >
          {/* Simple SVG logos or text for trust proofs */}
          <div className="flex items-center gap-2 ">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-sm font-medium">SOC2 Compliant</span>
          </div>
          <div className="border-r border-gray-300 h-4 mx-2"></div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5" />
            <span className="text-sm font-medium">99.99% Uptime</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
