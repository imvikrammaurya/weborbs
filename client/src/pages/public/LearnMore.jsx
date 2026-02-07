import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
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
import dashboardImg from "../../assets/dashboard_analytics_dark_1767871281648.png";
import serverImg from "../../assets/server_metrics_card_1767871336352.png";
import mobileImg from "../../assets/hero-dashboard-7.png"; // Assuming this is mobile-like

const LearnMore = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Custom Web Apps",
      description:
        "High-performance React & Next.js applications tailored to your business logic.",
      icon: <LayoutTemplate size={28} />,
    },
    {
      title: "Mobile Development",
      description:
        "Native-grade iOS & Android apps built with React Native for seamless user experiences.",
      icon: <Smartphone size={28} />,
    },
    {
      title: "SaaS Platforms",
      description:
        "Scalable, multi-tenant architectures designed for rapid growth and subscription models.",
      icon: <Cloud size={28} />,
    },
    {
      title: "Enterprise Systems",
      description:
        "Robust internal tools, CRMs, and ERPs that streamline your operations.",
      icon: <Server size={28} />,
    },
  ];

  const technologies = {
    web: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    mobile: ["React Native", "Expo", "Swift", "Kotlin"],
    backend: ["Node.js", "Express", "Python", "Go"],
    database: ["PostgreSQL", "MongoDB", "Redis", "Supabase"],
    cloud: ["AWS", "Google Cloud", "Vercel", "Docker"],
    devops: ["CI/CD", "GitHub Actions", "Terraform", "Kubernetes"],
  };

  const processSteps = [
    {
      title: "Discovery",
      desc: "We dive deep into your goals.",
      icon: <Globe size={24} />,
    },
    {
      title: "Architecture",
      desc: "Planning the tech stack.",
      icon: <Layers size={24} />,
    },
    {
      title: "Design",
      desc: "UI/UX that converts.",
      icon: <LayoutDashboard size={24} />,
    },
    {
      title: "Development",
      desc: "Clean, scalable code.",
      icon: <Code2 size={24} />,
    },
    {
      title: "Testing",
      desc: "Bug-free guarantee.",
      icon: <Shield size={24} />,
    },
    {
      title: "Launch",
      desc: "Deploy to production.",
      icon: <Zap size={24} />,
    },
  ];

  const pricingPlans = [
    {
      title: "MVP Starter",
      price: "₹30k - ₹50k",
      icon: "🚀",
      features: [
        "Core Features Implementation",
        "React/Next.js Frontend",
        "Basic Database Setup",
        "1 Month Support",
      ],
    },
    {
      title: "Business Growth",
      price: "₹60k - ₹1L",
      icon: "📈",
      features: [
        "Advanced Features",
        "Full-Stack Development",
        "Admin Dashboard",
        "Payment Gateway Integration",
        "3 Months Support",
      ],
    },
    {
      title: "Enterprise Scale",
      price: "₹1.5L+",
      icon: "🏢",
      features: [
        "Microservices Architecture",
        "High Scalability Setup",
        "Custom AI Integration",
        "Advanced Security",
        "6 Months Priority Support",
      ],
    },
    {
      title: "Dedicated Team",
      price: "Custom",
      icon: "🤝",
      features: [
        "Full-time Developers",
        "Project Manager",
        "QA Specialist",
        "Daily Updates",
        "Long-term Partnership",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[var(--color-bigchill)] selection:text-white overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-4 md:px-8 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[var(--color-bigchill)]/10 rounded-full blur-[100px] mix-blend-multiply opacity-70 animate-blob" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-200 rounded-full blur-[100px] mix-blend-multiply opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute bottom-[20%] left-[20%] w-[40%] h-[40%] bg-pink-100 rounded-full blur-[100px] mix-blend-multiply opacity-70 animate-blob animation-delay-4000" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 text-center lg:text-left">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-600 mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-bigchill)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-bigchill)]"></span>
              </span>
              Modern Tech Standards
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold font-heading leading-[1.1] tracking-tight text-slate-900">
              Build Products That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-bigchill)] to-cyan-500">
                Pop.
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-balance font-medium">
              We design and develop high-performance digital products. No fluff, just scalable tech for modern businesses.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#pricing"
                className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 hover:shadow-lg transition-all flex items-center justify-center gap-2 group transform hover:-translate-y-1"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 font-bold rounded-xl border-2 border-slate-100 hover:border-slate-200 hover:shadow-md transition-all flex items-center justify-center gap-2"
              >
                Book a Free Call
              </button>
            </div>
          </motion.div>

          {/* Visual Animation (Floating Cards) */}
          <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center perspective-[1000px]">
            {/* Desktop Dashboard Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: -5, y: [0, -10, 0] }}
              transition={{
                opacity: { duration: 0.8 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute w-[80%] md:w-[75%] z-10 bg-white p-3 rounded-2xl shadow-2xl border border-slate-100/50"
            >
              <img
                src={dashboardImg}
                alt="Dashboard"
                className="w-full h-auto rounded-xl border border-slate-100"
              />
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm border border-slate-100">
                Analytics Ready
              </div>
            </motion.div>

            {/* Mobile App Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0, y: [0, 15, 0], rotateZ: 3 }}
              transition={{
                opacity: { duration: 0.8, delay: 0.2 },
                y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 },
              }}
              className="absolute right-0 md:-right-4 bottom-10 w-[30%] md:w-[28%] z-20 bg-white p-2 rounded-3xl shadow-xl border border-slate-100/50 transform rotate-3"
            >
              <img
                src={mobileImg}
                alt="Mobile App"
                className="w-full h-auto rounded-2xl border border-slate-100"
              />
              <div className="absolute -bottom-3 -left-3 bg-[var(--color-bigchill)] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                Mobile First
              </div>
            </motion.div>

            {/* Code Snippet Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0, y: [0, 12, 0], rotateZ: -3 }}
              transition={{
                opacity: { duration: 0.8, delay: 0.4 },
                y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 },
              }}
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
        </div>
      </section>

      {/* --- WHAT WE DO SECTION --- */}
      <section className="py-24 px-4 relative bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-slate-900 tracking-tight">
              What We Do
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Full-cycle product development tailored for modern growth engines.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[var(--color-bigchill)] hover:bg-white hover:shadow-xl transition-all duration-300 cursor-default"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 text-[var(--color-bigchill)] shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-300 group-hover:bg-[var(--color-bigchill)] group-hover:text-white">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold mb-3 font-heading text-slate-900">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TECHNOLOGIES SECTION --- */}
      <section className="py-32 px-4 bg-slate-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-bigchill)]/5 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100 rounded-full blur-[120px] mix-blend-multiply" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-[var(--color-bigchill)] font-bold tracking-wider uppercase text-sm mb-2 block">Our Stack</span>
            <h2 className="text-4xl md:text-6xl font-extrabold font-heading mb-6 tracking-tight text-slate-900">
              Technologies We Use
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed text-balance">
              We choose the best tools for the job. Fast, scalable, and reliable.
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
                  className="group relative bg-white border border-slate-200 rounded-3xl p-8 hover:border-[var(--color-bigchill)]/40 transition-all duration-300 hover:shadow-2xl overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                    <Icon className="w-32 h-32 text-[var(--color-bigchill)]" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-[var(--color-bigchill)] group-hover:text-white transition-colors duration-300">
                        <Icon className="w-6 h-6 text-slate-700 group-hover:text-white" />
                      </div>
                      <h3 className="text-2xl font-bold capitalize text-slate-900 tracking-tight">
                        {category}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      {items.map((tech) => (
                        <div
                          key={tech}
                          className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-semibold text-slate-600 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-100 transition-all cursor-default"
                        >
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
      <section className="py-24 px-4 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-heading mb-4 text-slate-900">
              How We Build
            </h2>
            <p className="text-slate-500 text-lg">
              From concept to launch in 6 simple steps.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-[50px] left-0 w-full h-[2px] bg-slate-100 z-0 rounded-full" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 relative z-10">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-24 h-24 rounded-2xl bg-white border-2 border-slate-100 flex flex-col items-center justify-center mb-6 group-hover:border-[var(--color-bigchill)] group-hover:shadow-[0_10px_30px_-10px_vars(--color-bigchill)] transition-all duration-300 relative z-10">
                    <div className="text-slate-400 mb-1 group-hover:text-[var(--color-bigchill)] transition-colors duration-300 transform group-hover:scale-110">
                      {step.icon}
                    </div>
                    <span className="absolute -top-3 -right-3 w-8 h-8 flex items-center justify-center bg-slate-900 text-white text-xs font-bold rounded-full border-4 border-white">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 px-2 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- MAINTENANCE & SCALING SECTION --- */}
      <section className="py-24 px-4 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading leading-tight text-slate-900">
              Don’t Just Survive. <br />
              <span className="text-[var(--color-bigchill)]">Thrive & Grow.</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              We provide complete maintenance and scaling solutions to ensure your product stays fast, secure, and ready for millions of users.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Security Updates",
                "Speed Optimization",
                "Database Scaling",
                "Error Monitoring",
                "Cost Management",
                "New Features",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-3 p-4 bg-white rounded-xl border border-slate-200 shadow-sm"
                >
                  <CheckCircle
                    size={20}
                    className="text-[var(--color-bigchill)] text-shrink-0"
                  />
                  <span className="text-sm font-semibold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Animated Scaling Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px] w-full bg-white rounded-3xl border border-slate-200 p-8 shadow-2xl flex flex-col justify-end overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
            {/* Graph Lines */}
            <svg
              className="absolute inset-0 w-full h-full p-8"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M0,400 C100,380 200,420 300,300 C400,180 500,220 600,100 L600,500 L0,500 Z"
                fill="url(#gradient)"
                fillOpacity="0.1"
              />
              <motion.path
                d="M0,400 C100,380 200,420 300,300 C400,180 500,220 600,100"
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="5"
                strokeLinecap="round"
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
              className="absolute top-1/4 left-1/4 bg-white p-4 rounded-xl border border-slate-100 shadow-xl z-10"
            >
              <Server size={28} className="text-blue-500" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute top-1/3 right-1/4 bg-white p-4 rounded-xl border border-slate-100 shadow-xl z-10"
            >
              <Zap size={28} className="text-yellow-500" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
              className="absolute bottom-1/3 left-1/2 bg-white p-4 rounded-xl border border-slate-100 shadow-xl z-10"
            >
              <Shield size={28} className="text-[var(--color-bigchill)]" />
            </motion.div>

            <div className="relative z-10 mt-auto bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-slate-100 w-fit">
              <h3 className="text-xl font-bold font-heading text-slate-900">
                Auto-Scaling Included
              </h3>
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wide">
                AWS / GCP / Cloudflare
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* --- PRICING SECTION --- */}
      <section id="pricing" className="py-24 px-4 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-slate-900">
              Clear Pricing
            </h2>
            <p className="text-slate-500 text-lg">
              No hidden fees. Scale as you grow.
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
                className={`p-8 rounded-3xl flex flex-col transition-all duration-300 ${index === 2
                  ? "bg-slate-900 text-white shadow-2xl scale-105 transform z-10"
                  : "bg-white border border-slate-200 hover:border-slate-300 hover:shadow-xl text-slate-900"
                  }`}
              >
                {index === 2 && (
                  <span className="mb-6 inline-block bg-[var(--color-bigchill)] text-white text-[10px] font-bold px-3 py-1 rounded-full w-fit uppercase tracking-widest">
                    Best Value
                  </span>
                )}
                <div className="text-4xl mb-4">{plan.icon}</div>
                <h3 className={`text-xl font-bold mb-2 ${index === 2 ? 'text-white' : 'text-slate-900'}`}>
                  {plan.title}
                </h3>
                <div className={`text-2xl font-bold mb-6 ${index === 2 ? 'text-[var(--color-bigchill)]' : 'text-slate-900'}`}>
                  {plan.price}
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className={`flex items-start text-sm ${index === 2 ? 'text-slate-300' : 'text-slate-600'}`}
                    >
                      <CheckCircle
                        size={18}
                        className={`mr-2 mt-0.5 shrink-0 ${index === 2 ? 'text-[var(--color-bigchill)]' : 'text-slate-400'}`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`w-full py-4 rounded-xl text-center font-bold text-sm transition-all ${index === 2
                    ? "bg-[var(--color-bigchill)] text-white hover:bg-[#0b8a89]"
                    : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                    }`}
                >
                  Choose Plan
                </a>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center text-slate-500 text-sm max-w-3xl mx-auto space-y-4">
            <p>
              * Prices are indicative for MVP versions. Final quote depends on complexity.
            </p>
            <p className="p-4 bg-slate-50 rounded-xl border border-slate-200 inline-block font-medium text-slate-700">
              Need a custom enterprise solution? <button onClick={() => setIsBookingModalOpen(true)} className="text-[var(--color-bigchill)] hover:underline ml-1">Contact Sales</button>
            </p>
          </div>
        </div>
      </section>

      {/* --- PHILOSOPHY & TRACKING SECTION --- */}
      <section className="py-24 px-4 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Philosophy Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading leading-tight text-slate-900">
              Premium Quality. <br />
              <span className="text-cyan-500">Startup Pricing.</span>
            </h2>
            <div className="space-y-4 text-lg text-slate-600 font-medium">
              <p>
                We cut the agency fluff. No expensive offices, no idle employees. You pay for code, design, and strategy. Nothing else.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm border-l-4 border-l-[var(--color-bigchill)]">
              <p className="text-xl font-bold text-slate-900 italic">
                "Same enterprise quality, at 1/3rd the cost."
              </p>
            </div>

            <div className="pt-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <LayoutDashboard className="text-[var(--color-bigchill)]" />
                Live Project Tracking
              </h3>
              <p className="text-slate-500 mb-6">
                You get a unique Reference ID to track your project in real-time. Total transparency.
              </p>
              <div className="flex items-center gap-2 text-sm text-slate-500 overflow-x-auto whitespace-nowrap pb-4 scrollbar-hide">
                <span className="bg-white border border-slate-200 px-4 py-2 rounded-lg text-slate-700 font-semibold shadow-sm">
                  Planning
                </span>
                <ChevronRight size={16} className="text-slate-300" />
                <span className="bg-white border border-slate-200 px-4 py-2 rounded-lg text-slate-700 font-semibold shadow-sm">
                  Design
                </span>
                <ChevronRight size={16} className="text-slate-300" />
                <span className="bg-slate-900 px-4 py-2 rounded-lg text-white font-bold shadow-md ring-2 ring-slate-200">
                  Development
                </span>
                <ChevronRight size={16} className="text-slate-300" />
                <span className="bg-white border border-slate-200 px-4 py-2 rounded-lg text-slate-700 font-semibold shadow-sm opacity-50">
                  Testing
                </span>
              </div>
            </div>
          </motion.div>

          {/* Tracking Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-200 to-[var(--color-bigchill)] blur-[80px] opacity-40 pointer-events-none" />
            <div className="relative z-10 bg-white border border-slate-200 rounded-3xl shadow-2xl p-8">
              <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-6">
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                    Project Reference
                  </div>
                  <div className="text-xl font-mono font-bold text-slate-900 bg-slate-100 px-3 py-1 rounded">
                    #WO-8842
                  </div>
                </div>
                <div className="px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-bold animate-pulse">
                  ● LIVE
                </div>
              </div>

              <div className="space-y-6">
                {[
                  {
                    label: "Concept",
                    status: "Done",
                    date: "Jan 10",
                  },
                  {
                    label: "UI Design",
                    status: "Done",
                    date: "Jan 18",
                  },
                  {
                    label: "Development",
                    status: "Active",
                    date: "Current",
                    active: true,
                  },
                  {
                    label: "QA Testing",
                    status: "Pending",
                    date: "-",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between ${item.active ? "opacity-100" : "opacity-60"}`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center ${item.status === "Done" ? "bg-green-500 text-white" : item.active ? "bg-[var(--color-bigchill)]" : "bg-slate-200"}`}
                      >
                        {item.status === "Done" && <CheckCircle size={10} />}
                      </div>
                      <span
                        className={`text-sm ${item.active ? "text-slate-900 font-bold" : "text-slate-500 font-medium"}`}
                      >
                        {item.label}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-slate-400 bg-slate-50 px-2 py-1 rounded">
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
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-2 block">Our DNA</span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-slate-900">
              Why Choose Web OPS?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {[
              {
                title: "Modern Tech",
                desc: "We use the latest frameworks. No legacy code.",
                icon: <Zap size={24} />,
              },
              {
                title: "Scalable",
                desc: "Built to handle millions of requests.",
                icon: <Server size={24} />,
              },
              {
                title: "Cost Effective",
                desc: "Enterprise grade, startup prices.",
                icon: <Database size={24} />,
              },
              {
                title: "Transparent",
                desc: "You see every step of the process.",
                icon: <LayoutDashboard size={24} />,
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-[var(--color-bigchill)] mb-6 bg-white w-14 h-14 rounded-2xl flex items-center justify-center mx-auto shadow-sm border border-slate-100">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-500">{card.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Network Team Section */}
          <div className="relative bg-slate-900 rounded-[3rem] p-10 md:p-20 text-white overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--color-bigchill)]/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h3 className="text-3xl md:text-5xl font-bold font-heading tracking-tight">
                Built by a Global Network
              </h3>
              <p className="text-xl text-slate-300 leading-relaxed font-light">
                We tap into a curated network of expert developers. Need an AI specialist? We have one. Need a blockchain dev? We have one.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm">React Experts</span>
                <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm">UI Designers</span>
                <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm">DevOps Engineers</span>
                <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm">QA Testers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-32 px-4 bg-white text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-10"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold font-heading text-slate-900 tracking-tighter">
            Let's Build something <br />
            <span className="text-[var(--color-bigchill)]">Crazy Good.</span>
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="px-12 py-6 bg-slate-900 text-white text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all cursor-pointer flex items-center gap-3"
            >
              Start Project <ArrowRight />
            </button>
          </div>
        </motion.div>
      </section>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
};

export default LearnMore;
