import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Smartphone,
  LayoutDashboard,
  Wrench,
  Shield,
  Server,
  Database,
  Cloud,
  Lock,
  Zap,
  CheckCircle,
  Smartphone as MobileIcon,
  Monitor,
  Globe,
  ChevronRight,
  Terminal,
  Cpu,
  Code2,
  Layers,
  GitBranch,
  Globe2,
  LayoutTemplate,
} from "lucide-react";
import { Link } from "react-router-dom";

// Import images (reusing from HeroSection for consistency until new assets are provided)
import dashboardImg from "../assets/dashboard_analytics_dark_1767871281648.png";
import serverImg from "../assets/server_metrics_card_1767871336352.png";
import mobileImg from "../assets/hero-dashboard-7.png"; // Assuming this is mobile-like

const LearnMore = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[var(--color-bigchill)] selection:text-white overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-4 md:px-8 bg-gradient-to-b from-[#0a0a0a] via-[#0f1014] to-[#0a0a0a]">
        {/* Background Glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[var(--color-bigchill)]/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] mix-blend-screen" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 text-center lg:text-left">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold font-heading leading-tight tracking-tight">
              We Build Modern Digital Products That{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-bigchill)] to-cyan-400">
                Scale With Your Business
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-balance">
              From high-performance websites to mobile apps, CRM systems, and
              scalable platforms, Web OPS delivers future-ready technology using
              the latest tools in the industry.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#pricing"
                className="w-full sm:w-auto px-8 py-4 bg-[var(--color-bigchill)] text-white font-bold rounded-lg hover:brightness-110 hover:shadow-[0_0_20px_rgba(14,165,164,0.4)] transition-all flex items-center justify-center gap-2 group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white font-semibold rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2"
              >
                Book a Free Call
              </a>
            </div>
          </motion.div>

          {/* Visual Animation (Floating Devices) */}
          <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center perspective-[1000px]">
            {/* Desktop Dashboard */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0, y: [0, -10, 0] }}
              transition={{
                opacity: { duration: 0.8 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute w-[80%] md:w-[70%] z-10 glass-panel p-2 rounded-xl shadow-2xl border border-white/10 bg-[#111]/80 backdrop-blur-xl"
            >
              <img
                src={dashboardImg}
                alt="Dashboard"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-[var(--color-bigchill)] text-white text-xs px-3 py-1 rounded-full shadow-lg">
                Web Platform
              </div>
            </motion.div>

            {/* Mobile App */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0, y: [0, 15, 0] }}
              transition={{
                opacity: { duration: 0.8, delay: 0.2 },
                y: {
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                },
              }}
              className="absolute right-0 md:right-4 bottom-0 w-[30%] md:w-[25%] z-20 glass-panel p-1.5 rounded-2xl shadow-2xl border border-white/10 bg-[#111]/90 backdrop-blur-md"
            >
              <img
                src={mobileImg}
                alt="Mobile App"
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute -bottom-2 -left-2 bg-purple-500 text-white text-xs px-3 py-1 rounded-full shadow-lg">
                iOS & Android
              </div>
            </motion.div>

            {/* Code Element */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0, y: [0, 12, 0] }}
              transition={{
                opacity: { duration: 0.8, delay: 0.4 },
                y: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                },
              }}
              className="absolute left-0 md:left-4 top-10 w-[40%] md:w-[35%] z-0 glass-panel p-3 rounded-xl shadow-2xl border border-white/5 bg-[#0a0a0a]/80"
            >
              <div className="space-y-2 font-mono text-xs text-gray-400">
                <div className="h-2 w-1/2 bg-gray-700 rounded animate-pulse"></div>
                <div className="h-2 w-3/4 bg-gray-700 rounded animate-pulse delay-75"></div>
                <div className="h-2 w-2/3 bg-[var(--color-bigchill)]/50 rounded animate-pulse delay-150"></div>
              </div>
              <div className="absolute -top-3 -right-3 bg-cyan-500 text-white text-xs px-3 py-1 rounded-full shadow-lg">
                Clean Code
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- WHAT WE DO SECTION --- */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-white">
              What We Do
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Full-cycle product development services tailored for growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--color-bigchill)]/50 hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-bigchill)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="w-14 h-14 bg-[#0a0a0a] rounded-xl flex items-center justify-center mb-6 text-[var(--color-bigchill)] group-hover:scale-110 transition-transform shadow-lg border border-white/5 group-hover:border-[var(--color-bigchill)]/30">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold mb-3 font-heading group-hover:text-[var(--color-bigchill)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TECHNOLOGIES SECTION --- */}
      <section className="py-32 px-4 bg-[#0a0a0a] relative overflow-hidden">
        {/* Background Grid & Effects */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-bigchill)]/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold font-heading mb-6 tracking-tight">
              Technologies{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-bigchill)] to-cyan-400">
                We Use
              </span>
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-[var(--color-bigchill)] to-cyan-500 mx-auto rounded-full mb-8" />
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed text-balance">
              Built on a fast, scalable, and unified JavaScript ecosystem. We
              meticulously select the best-in-class tools to ensure your product
              performs flawlessly.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {Object.entries(technologies).map(([category, items], index) => {
              // Icon Mapping
              let Icon = Code2;
              if (category === "web") Icon = Globe2;
              if (category === "mobile") Icon = Smartphone;
              if (category === "desktop") Icon = Monitor;
              if (category === "backend") Icon = Terminal;
              if (category === "database") Icon = Database;
              if (category === "cloud") Icon = Cloud;
              if (category === "devops") Icon = GitBranch;

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-[#0f1014] border border-white/5 rounded-3xl p-8 hover:border-[var(--color-bigchill)]/40 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] overflow-hidden"
                >
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-bigchill)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10 group-hover:scale-110 group-hover:border-[var(--color-bigchill)]/30 group-hover:bg-[var(--color-bigchill)]/10 transition-all duration-300 shadow-inner">
                        <Icon className="w-6 h-6 text-[var(--color-bigchill)]" />
                      </div>
                      <h3 className="text-xl font-bold capitalize text-white group-hover:text-[var(--color-bigchill)] transition-colors tracking-wide">
                        {category}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      {items.map((tech) => (
                        <div
                          key={tech}
                          className="px-3.5 py-1.5 bg-[#1a1b1f] border border-white/5 rounded-full text-sm font-medium text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2 cursor-default group/tech"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-bigchill)] opacity-50 group-hover/tech:opacity-100 group-hover/tech:shadow-[0_0_8px_var(--color-bigchill)] transition-all" />
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section className="py-24 px-4 bg-[#0a0a0a] relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-white">
              How We Build Your Product
            </h2>
            <p className="text-gray-400">
              Streamlined process from concept to launch.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-[60px] left-0 w-full h-1 bg-white/10 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-28 h-28 aspect-square rounded-full bg-[#111] border border-white/10 flex flex-col items-center justify-center mb-6 group-hover:border-[var(--color-bigchill)] group-hover:shadow-[0_0_30px_rgba(14,165,164,0.2)] transition-all duration-500 relative bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-100">
                    <div className="text-[var(--color-bigchill)] mb-2 group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    <span className="text-xs font-mono text-gray-500 group-hover:text-white transition-colors absolute top-4 right-4">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- MAINTENANCE & SCALING SECTION --- */}
      <section className="py-24 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading leading-tight">
              Products That Don’t Just Survive,{" "}
              <span className="text-[var(--color-bigchill)]">They Grow.</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              more than code. We provide complete maintenance and scaling
              solutions to ensure your product stays fast, secure, and ready for
              millions of users.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Security Updates & Patches",
                "Performance Optimization",
                "Server & Database Scaling",
                "24/7 Error Monitoring",
                "Cloud Cost Management",
                "Feature Enhancements",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg border border-white/5"
                >
                  <CheckCircle
                    size={18}
                    className="text-[var(--color-bigchill)] text-shrink-0"
                  />
                  <span className="text-sm font-medium text-gray-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-6 bg-[var(--color-bigchill)]/10 border-l-4 border-[var(--color-bigchill)] rounded-r-lg">
              <p className="text-gray-300 italic">
                "We make sure your product doesn’t just survive traffic — it
                grows with it."
              </p>
            </div>
          </motion.div>

          {/* Animated Scaling Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px] w-full bg-[#0a0a0a] rounded-2xl border border-white/10 p-8 shadow-2xl flex flex-col justify-end overflow-hidden group"
          >
            {/* Graph Lines */}
            <svg
              className="absolute inset-0 w-full h-full p-8"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M0,400 C100,380 200,420 300,300 C400,180 500,220 600,100 L600,500 L0,500 Z"
                fill="url(#gradient)"
                fillOpacity="0.2"
              />
              <motion.path
                d="M0,400 C100,380 200,420 300,300 C400,180 500,220 600,100"
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-bigchill)" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
                <linearGradient
                  id="lineGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#4f46e5" />
                  <stop offset="50%" stopColor="#0ea5e9" />
                  <stop offset="100%" stopColor="var(--color-bigchill)" />
                </linearGradient>
              </defs>
            </svg>

            {/* Floating Icons */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-1/4 left-1/4 bg-[#111] p-3 rounded-lg border border-white/10 shadow-xl z-10"
            >
              <Server size={24} className="text-blue-400" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute top-1/3 right-1/4 bg-[#111] p-3 rounded-lg border border-white/10 shadow-xl z-10"
            >
              <Zap size={24} className="text-yellow-400" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
              className="absolute bottom-1/3 left-1/2 bg-[#111] p-3 rounded-lg border border-white/10 shadow-xl z-10"
            >
              <Shield size={24} className="text-[var(--color-bigchill)]" />
            </motion.div>

            <div className="relative z-10 mt-auto">
              <h3 className="text-2xl font-bold font-heading text-white">
                Auto-Scaling Infrastructure
              </h3>
              <p className="text-gray-500 text-sm">
                AWS / GCP / Cloudflare Integration
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* --- PRICING SECTION --- */}
      <section id="pricing" className="py-24 px-4 bg-[#0a0a0a] relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-white">
              Transparent Starter Pricing
            </h2>
            <p className="text-gray-400">
              Clear baseline costs. Scale as you grow.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl border flex flex-col ${index === 2 ? "bg-[var(--color-bigchill)]/10 border-[var(--color-bigchill)]" : "bg-white/5 border-white/10"} hover:transform hover:-translate-y-2 transition-all duration-300`}
              >
                {index === 2 && (
                  <span className="mb-4 inline-block bg-[var(--color-bigchill)] text-white text-xs font-bold px-3 py-1 rounded-full w-fit">
                    POPULAR COMBO
                  </span>
                )}
                <div className="text-4xl mb-2">{plan.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {plan.title}
                </h3>
                <div className="text-2xl font-bold text-[var(--color-bigchill)] mb-4">
                  {plan.price}
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start text-sm text-gray-400"
                    >
                      <CheckCircle
                        size={16}
                        className="text-[var(--color-bigchill)] mr-2 mt-0.5 shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`w-full py-3 rounded-lg text-center font-bold text-sm transition-colors ${index === 2 ? "bg-[var(--color-bigchill)] text-white hover:bg-opacity-90" : "bg-white/10 text-white hover:bg-white/20"}`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center text-gray-500 text-sm max-w-3xl mx-auto space-y-4">
            <p>
              * These are starter prices. As features, scale, and complexity
              increase, pricing adjusts accordingly.
            </p>
            <p className="p-4 bg-white/5 rounded-lg border border-white/10 inline-block">
              <span className="text-[var(--color-bigchill)] font-bold">
                Flexible Maintenance:
              </span>{" "}
              Monthly, Quarterly, or Custom Scaling Packages available.
            </p>
          </div>
        </div>
      </section>

      {/* --- PHILOSOPHY & TRACKING SECTION --- */}
      <section className="py-24 px-4 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Philosophy Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading leading-tight">
              Enterprise Quality at <br />
              <span className="text-cyan-400">Startup-Friendly Pricing.</span>
            </h2>
            <div className="space-y-4 text-lg text-gray-300">
              <p>
                We believe you shouldn't have to pay for expensive overhead. We
                cut out the fluff and focus purely on what your business needs.
              </p>
              <p>No forced infrastructure. No unnecessary features.</p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-r from-[var(--color-bigchill)]/20 to-transparent border-l-4 border-[var(--color-bigchill)]">
              <p className="text-xl font-bold text-white">
                "If the market charges ₹1,00,000, we aim to deliver the same
                value in ₹30,000–₹40,000."
              </p>
            </div>

            <div className="pt-8">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <LayoutDashboard className="text-[var(--color-bigchill)]" />
                Full Transparency Tracking
              </h3>
              <p className="text-gray-400 mb-4">
                Every client gets a unique Reference ID to track their project
                in real-time:
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500 overflow-x-auto whitespace-nowrap pb-2">
                <span className="bg-white/10 px-3 py-1 rounded text-white">
                  Planning
                </span>
                <ChevronRight size={14} />
                <span className="bg-white/10 px-3 py-1 rounded text-white">
                  Design
                </span>
                <ChevronRight size={14} />
                <span className="bg-white/10 px-3 py-1 rounded text-white">
                  Development
                </span>
                <ChevronRight size={14} />
                <span className="bg-white/10 px-3 py-1 rounded text-white">
                  Testing
                </span>
                <ChevronRight size={14} />
                <span className="bg-[var(--color-bigchill)] px-3 py-1 rounded text-white font-bold">
                  Deployment
                </span>
              </div>
            </div>
          </motion.div>

          {/* Tracking Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-[var(--color-bigchill)] blur-[100px] opacity-20 pointer-events-none" />
            <div className="relative z-10 bg-[#111] border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8">
              <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">
                    Project ID
                  </div>
                  <div className="text-xl font-mono text-white">
                    #WO-2024-8842
                  </div>
                </div>
                <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-bold animate-pulse">
                  LIVE STATUS: BUILDING
                </div>
              </div>

              <div className="space-y-6">
                {[
                  {
                    label: "Requirement Gathering",
                    status: "Completed",
                    date: "Jan 10",
                  },
                  {
                    label: "UI/UX Design",
                    status: "Completed",
                    date: "Jan 18",
                  },
                  {
                    label: "Frontend Development",
                    status: "In Progress",
                    date: "Current",
                    active: true,
                  },
                  {
                    label: "Backend Integration",
                    status: "Pending",
                    date: "-",
                  },
                  { label: "Final Testing", status: "Pending", date: "-" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between ${item.active ? "opacity-100" : "opacity-50"}`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-3 h-3 rounded-full ${item.status === "Completed" ? "bg-green-500" : item.active ? "bg-[var(--color-bigchill)] animate-ping" : "bg-gray-700"}`}
                      />
                      <span
                        className={`text-sm ${item.active ? "text-white font-bold" : "text-gray-400"}`}
                      >
                        {item.label}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-gray-600">
                      {item.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- WHY US & TEAM SECTION --- */}
      <section className="py-24 px-4 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-white">
              Why Web OPS?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We are not just a dev shop. We are a network of modern tech
              experts.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {[
              {
                title: "Modern Tech",
                desc: "We never use outdated tools. Always latest stack.",
                icon: <Zap size={24} />,
              },
              {
                title: "Smart Architecture",
                desc: "Built to scale without rebuilding from scratch.",
                icon: <Server size={24} />,
              },
              {
                title: "Budget Optimized",
                desc: "Powerful solutions without overpricing.",
                icon: <Database size={24} />,
              },
              {
                title: "Full Transparency",
                desc: "You always know what we’re building and why.",
                icon: <LayoutDashboard size={24} />,
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <div className="text-[var(--color-bigchill)] mb-4 flex justify-center">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-400">{card.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Network Team Section */}
          <div className="relative bg-[#0f1014] rounded-3xl p-8 md:p-16 border border-white/5 overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <h3 className="text-3xl font-bold text-white font-heading">
                Our Network-Driven Team
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                We work with a nationwide network of{" "}
                <span className="text-[var(--color-bigchill)] font-bold">
                  expert developers, designers, testers, and DevOps engineers
                </span>
                .
              </p>
              <p className="text-gray-400">
                This allows us to scale instantly based on project size and
                deliver enterprise-level quality without enterprise-level
                pricing.
              </p>

              {/* Simple visualized network */}
              <div className="flex flex-wrap justify-center gap-4 mt-8 opacity-70">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                      <div className="w-2 h-2 bg-[var(--color-bigchill)] rounded-full animate-ping"></div>
                    </div>
                    {i < 6 && (
                      <div className="w-8 h-[1px] bg-white/20 hidden md:block"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-24 px-4 bg-gradient-to-t from-[var(--color-bigchill)]/20 to-[#0a0a0a] text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold font-heading text-white">
            Ready to Build Something <br />
            <span className="text-[var(--color-bigchill)]">Powerful?</span>
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#contact"
              className="px-10 py-5 bg-[var(--color-bigchill)] text-white text-lg font-bold rounded-full shadow-[0_0_40px_rgba(14,165,164,0.4)] hover:shadow-[0_0_60px_rgba(14,165,164,0.6)] hover:-translate-y-1 transition-all"
            >
              Get a Free Consultation
            </a>
            <Link
              to="/about"
              className="px-10 py-5 bg-white/10 text-white text-lg font-bold rounded-full border border-white/20 hover:bg-white/20 transition-all flex items-center gap-2"
            >
              Join Our Network <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

// --- DATA ---

const pricingPlans = [
  {
    title: "Basic Website",
    price: "₹8k - ₹10k",
    icon: "🟢",
    features: [
      "Static or simple dynamic website",
      "Responsive design",
      "Basic SEO",
      "Starter hosting setup",
    ],
  },
  {
    title: "Basic Mobile App",
    price: "₹15k - ₹18k",
    icon: "📱",
    features: [
      "Android + iOS Support",
      "Single Codebase",
      "Basic Features",
      "Clean UI/UX",
    ],
  },
  {
    title: "Web + Mobile",
    price: "₹22,000",
    icon: "🚀",
    features: [
      "Complete Website",
      "Mobile App (Android/iOS)",
      "Unified Backend",
      "Best Value Starter",
    ],
  },
  {
    title: "Desktop App",
    price: "₹15k - ₹20k",
    icon: "🖥",
    features: [
      "Windows & macOS",
      "Built with Electron/Tauri",
      "Offline Capabilities",
      "Auto-updates",
    ],
  },
];

const services = [
  {
    title: "Modern Websites",
    description:
      "Fast, responsive, SEO-optimized websites built for performance and growth using Next.js and React.",
    icon: <Globe size={28} />,
  },
  {
    title: "Mobile Applications",
    description:
      "High-performance Android & iOS apps with smooth UI and native-like experience via React Native.",
    icon: <Smartphone size={28} />,
  },
  {
    title: "CRM & Dashboards",
    description:
      "Smart management systems and desktop software (Windows & macOS) for business efficiency.",
    icon: <LayoutDashboard size={28} />,
  },
  {
    title: "Maintenance & Scale",
    description:
      "Long-term maintenance, security updates, and scalability planning to keep your product future-ready.",
    icon: <Wrench size={28} />,
  },
];

const technologies = {
  web: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  mobile: ["React Native", "Expo"],
  desktop: ["Electron.js", "Tauri"],
  backend: ["Node.js", "Express"],
  database: ["MongoDB", "PostgreSQL"],
  cloud: ["AWS", "Google Cloud", "Vercel"],
  devops: ["Docker", "CI/CD Pipelines"],
};

const processSteps = [
  {
    title: "Understand",
    desc: "We learn your business and goals.",
    icon: <MobileIcon size={32} />,
  }, // Using MobileIcon as placeholder for 'Puzzle' concept if Puzzle not avail
  {
    title: "Plan",
    desc: "We choose only what you need.",
    icon: <Code size={32} />,
  },
  {
    title: "Design",
    desc: "Modern UI + conversion-focused UX.",
    icon: <LayoutDashboard size={32} />,
  },
  {
    title: "Build",
    desc: "Clean code, scalable architecture.",
    icon: <Server size={32} />,
  },
  {
    title: "Test",
    desc: "Bug-free, optimized, secure.",
    icon: <Shield size={32} />,
  }, // Using Shield as placeholder
  {
    title: "Launch",
    desc: "Fast deployment + tracking.",
    icon: <Zap size={32} />,
  },
];

export default LearnMore;
