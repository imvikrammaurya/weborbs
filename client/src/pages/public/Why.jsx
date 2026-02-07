import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  ShieldCheck,
  Rocket,
  Briefcase,
  Clock,
  Ribbon,
  Smile,
} from "lucide-react";

const reasons = [
  {
    id: 1,
    title: "One Partner. Complete Ownership.",
    text: "From idea to launch to long-term maintenance, Vooklu takes full responsibility for your digital product so you never have to juggle multiple teams.",
    category: "End-to-End Responsibility",
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: "Designed to Scale With You",
    text: "We don’t build for today. We engineer systems that stay fast, secure, and reliable as your business grows.",
    category: "Built for Growth",
    icon: Rocket,
  },
  {
    id: 3,
    title: "We Think Like Business Owners",
    text: "Your goals come first. Technology is only a tool to achieve measurable business results.",
    category: "Business-First Thinking",
    icon: Briefcase,
  },
  {
    id: 4,
    title: "We Stay After Launch",
    text: "Updates, improvements, security, and performance monitoring are handled by us so your product remains future-ready.",
    category: "Long-Term Support",
    icon: Clock,
  },
  {
    id: 5,
    title: "No Compromises on Quality",
    text: "Clean code, pixel-perfect design, and enterprise-level standards in every project we deliver.",
    category: "Quality Without Shortcuts",
    icon: Ribbon,
  },
  {
    id: 6,
    title: "You Focus on Growth. We Handle the Tech.",
    text: "Vooklu removes technical stress so you can focus on running and scaling your business.",
    category: "Peace of Mind",
    icon: Smile,
  },
];

const Why = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track entry progress (0 -> 1 as section scrolls into view)
  const { scrollYProgress: entryProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  // Track internal scroll progress (for sticky content)
  const { scrollYProgress: contentProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(entryProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(entryProgress, [0, 0.5], [0.5, 1]);

  // Smooth progress for the bar
  const smoothProgress = useSpring(contentProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Map content progress to active index
  useEffect(() => {
    const unsubscribe = contentProgress.on("change", (latest) => {
      const index = Math.min(
        Math.floor(latest * reasons.length),
        reasons.length - 1,
      );
      setActiveIndex(index);
    });
    return () => unsubscribe();
  }, [contentProgress]);

  return (
    // Outer Section: Light background matching Hero
    <section
      ref={containerRef}
      className="relative w-full bg-bigchill/5 font-sans"
    >
      {/* Desktop Sticky Scroll */}
      <div className="hidden lg:block h-[700vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden perspective-1000">
          {/* Ambient Background Elements (Hero Style) */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-bigchill/20 rounded-full blur-[100px] mix-blend-multiply opacity-50 animate-blob" />
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-50/50 rounded-full blur-[100px] mix-blend-multiply opacity-70 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] bg-bigchill/20 rounded-full blur-[100px] mix-blend-multiply opacity-50 animate-blob animation-delay-4000" />
          </div>

          {/* The "Antigravity" IDE Box */}
          <motion.div
            style={{ scale, opacity }}
            className="relative z-10 w-[90%] max-w-[1600px] h-[85vh] bg-[#0c0c0c] rounded-[40px] shadow-2xl border border-white/10 flex flex-col overflow-hidden"
          >
            {/* Box Header (Mac Window Controls) */}
            <div className="h-14 border-b border-white/5 flex items-center px-6 gap-2 bg-white/[0.02]">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <div className="ml-4 text-xs font-mono text-gray-500">
                web-orbs-core — why.jsx
              </div>
            </div>

            {/* Box Content */}
            <div className="flex-1 flex flex-col p-8 md:p-12 relative overflow-hidden">
              {/* Header Row */}
              <div className="flex justify-between items-end mb-12 relative z-10">
                <div>
                  <motion.h2 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">
                    Why Vooklu?
                  </motion.h2>
                  <p className="text-gray-400 mt-2 text-xl font-light">
                    We’re not just developers. We’re your long-term digital
                    partner.
                  </p>
                </div>
                <div className="text-right">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-7xl font-heading font-bold text-white/5 select-none"
                  >
                    0{activeIndex + 1}
                  </motion.div>
                </div>
              </div>

              {/* Inner Split Layout */}
              <div className="flex-1 flex items-center justify-between gap-20 relative z-10">
                {/* Left Side: Navigation */}
                <div className="w-1/3 flex flex-col space-y-3">
                  {reasons.map((reason, idx) => (
                    <div
                      key={reason.id}
                      className={`text-xl font-medium transition-all duration-300 cursor-pointer flex items-center gap-4 ${idx === activeIndex
                          ? "text-white translate-x-2"
                          : "text-gray-600 hover:text-gray-400"
                        }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIndex
                            ? "bg-bigchill shadow-[0_0_8px_#0EA5A4]"
                            : "bg-gray-700"
                          }`}
                      />
                      {reason.category}
                    </div>
                  ))}
                </div>

                {/* Right Side: Dynamic Content */}
                <div className="flex-1 relative h-full flex items-center pb-8">
                  {reasons.map((reason, idx) => (
                    <motion.div
                      key={reason.id}
                      className="absolute inset-0 flex flex-col justify-center pl-10 border-l border-white/5"
                      initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                      animate={{
                        opacity: idx === activeIndex ? 1 : 0,
                        x: idx === activeIndex ? 0 : 50,
                        filter:
                          idx === activeIndex ? "blur(0px)" : "blur(10px)",
                        pointerEvents: idx === activeIndex ? "auto" : "none",
                      }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <div className="mb-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-bigchill/20 to-teal-500/20 border border-bigchill/30 flex items-center justify-center text-bigchill">
                        <reason.icon size={32} strokeWidth={1.5} />
                      </div>

                      <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                        {reason.title}
                      </h3>

                      <p className="text-lg md:text-xl text-gray-400/90 leading-relaxed font-light">
                        {reason.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Stars/Particles Background inside the Box (Antigravity feel) */}
              <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute top-10 left-1/2 w-1 h-1 bg-white rounded-full animate-pulse" />
                <div className="absolute top-1/4 right-20 w-1 h-1 bg-white rounded-full animate-pulse animation-delay-2000" />
                <div className="absolute bottom-1/3 left-20 w-1.5 h-1.5 bg-bigchill rounded-full animate-pulse" />
              </div>

              {/* Progress Line */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/5">
                <motion.div
                  className="h-full bg-bigchill shadow-[0_0_15px_#0EA5A4]"
                  style={{ scaleX: smoothProgress, transformOrigin: "0%" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Version: Dark Cards on Light Background */}
      <div className="lg:hidden py-20 px-4 flex flex-col gap-12 bg-white/95">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-heading font-bold text-gray-900">
            Why Vooklu?
          </h2>
          <p className="text-gray-600 mt-2 text-lg">
            We’re not just developers. We’re your long-term digital partner.
          </p>
        </div>

        {reasons.map((reason, idx) => (
          <motion.div
            key={reason.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-[#0c0c0c] p-8 rounded-3xl shadow-2xl relative overflow-hidden text-white"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 text-bigchill">
              <reason.icon size={120} />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-bigchill">
                  <reason.icon size={16} />
                </div>
                <span className="text-bigchill text-sm font-bold tracking-widest uppercase">
                  {reason.category}
                </span>
              </div>

              <h3 className="text-3xl font-heading font-bold text-white mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                {reason.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Why;
