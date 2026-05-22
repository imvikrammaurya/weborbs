"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function Process() {
  const [isMounted, setIsMounted] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 900);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description:
        "We listen, ask the right questions, and build a roadmap that aligns with your goals.",
      image:
        "/images/discoveryandstrategy.avif",
    },
    {
      number: "02",
      title: "Design & Development",
      description:
        "Our team creates clean, modern interfaces backed by solid code architecture.",
      image:
        "/images/designanddev.avif",
    },
    {
      number: "03",
      title: "Testing & Deployment",
      description:
        "Every detail is tested across devices and browsers before your site goes live.",
      image: "/images/Process-testing_and_deployment.avif",
      isLocal: true,
    },
  ];

  return (
    <section
      id="process"
      className="relative w-full py-24 px-4 md:px-8 bg-bigchill/5 overflow-hidden"
    >


      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Header (Fade Up) */}
        <motion.div
          initial={(isMounted && isMobile) ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: (isMounted && isMobile) ? 0 : 0.6 }}
          className="mb-20 space-y-4"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-bigchill/10 text-bigchill-dark font-bold text-xs tracking-wider uppercase mb-2 border border-bigchill/20">
            Our Process
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-gray-900">
            From Concept to <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bigchill to-teal-600">
              Digital Reality
            </span>
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We move fast without cutting corners. A proven three steps workflow
            designed for clarity, velocity, and results.
          </p>
        </motion.div>

        {/* Steps Section */}
        <div className="relative mb-20">
          {/* Connector Line (Desktop) with Flow Animation */}
          {(!isMounted || !isMobile) && (
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 hidden md:block z-0 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-transparent via-bigchill to-transparent w-1/2 opacity-50"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={(isMounted && isMobile) ? { opacity: 1 } : { opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: (isMounted && isMobile) ? 0 : 0.6,
                  delay: (isMounted && isMobile) ? 0 : index * 0.2
                }}
              >
                {/* Floating Wrapper (Breathing Animation) */}
                <motion.div
                  animate={(isMounted && isMobile) ? { y: 0 } : { y: [0, -15, 0] }}
                  transition={(isMounted && isMobile) ? { duration: 0 } : {
                    duration: 4 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                  className="h-full"
                >
                  {/* Card Body */}
                  <motion.div
                    whileHover={(isMounted && isMobile) ? {} : {
                      y: -5,
                      rotate: index % 2 === 0 ? 1 : -1,
                      transition: { duration: 0.2 },
                    }}
                    className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 transition-shadow duration-300 hover:shadow-2xl hover:shadow-bigchill/10 h-full flex flex-col"
                  >
                    {/* Image Container with Zoom & Overlay */}
                    <div className="overflow-hidden rounded-2xl mb-6 aspect-[4/3] shadow-md relative group-hover:shadow-xl transition-all duration-500">
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 z-10" />
                      {step.isLocal ? (
                        <Image
                          src={step.image}
                          alt={step.title}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <motion.img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover"
                          whileHover={(isMounted && isMobile) ? {} : { scale: 1.05 }}
                          transition={{ duration: (isMounted && isMobile) ? 0 : 0.5 }}
                        />
                      )}

                      {/* Step Number Badge */}
                      <motion.div
                        initial={(isMounted && isMobile) ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (isMounted && isMobile) ? 0 : 0.4 + index * 0.1, duration: (isMounted && isMobile) ? 0 : 0.4 }}
                        whileHover={(isMounted && isMobile) ? {} : { scale: 1.1 }}
                        className="absolute top-4 left-4 z-20 bg-white text-bigchill-dark font-bold text-sm px-4 py-1.5 rounded-full border border-bigchill/20 shadow-lg"
                      >
                        Step {step.number}
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="text-left flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-bigchill-dark animate-pulse" />
                        <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Phase {step.number}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-bigchill transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed font-medium text-base">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Decorative Flow Connector (Mobile) */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute -bottom-12 left-1/2 -translate-x-1/2 w-[2px] h-12 bg-gray-200">
                    <motion.div
                      className="w-full bg-bigchill"
                      animate={(isMounted && isMobile) ? { height: "100%" } : { height: ["0%", "100%"] }}
                      transition={(isMounted && isMobile) ? { duration: 0 } : { duration: 2, repeat: Infinity }}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Action */}
        <motion.div
          initial={(isMounted && isMobile) ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: (isMounted && isMobile) ? 0 : 0.5 }}
          className="flex items-center justify-center relative z-20"
        >
          <a
            href="#contact"
            className="relative overflow-hidden bg-bigchill text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-bigchill/30 group transition-all hover:scale-105 hover:shadow-2xl hover:shadow-bigchill/40 cursor-pointer flex items-center gap-2"
          >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:animate-[shimmer_1.5s_infinite] w-[200%]" />

            <span className="relative z-10 flex items-center gap-2">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
