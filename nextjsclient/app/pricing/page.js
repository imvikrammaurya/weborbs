"use client";

import React, { useState } from "react";
import { m, LazyMotion, domMax, AnimatePresence } from "framer-motion";
import BookingModal from "../../components/public/BookingModal";
import { ArrowUpRight, Check, X, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

const Pricing = () => {
    const [activeTab, setActiveTab] = useState("Per Project");
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);


    const projectTiers = [
        {
            id: "basic",
            name: "Basic",
            description: "Perfect for static websites, landing pages, and portfolios.",
            price: "₹ 7,999",
            deliveryTime: "1-3 days",
            features: [
                "Up to 5 Pages",
                "Responsive Design",
                "Basic SEO Setup",
                "Contact Form Integration",
                "1 Month Support",
            ],
            notIncluded: ["CMS Integration", "E-commerce Functionality", "Custom Animations"],
            extras: [
                "1-Year Domain Included",
                "Hosting Setup Included",
                "SSL Security Setup",
                "Google Maps Integration",
                "WhatsApp Chat Integration"
            ],
            includedValue: "🎁 FREE EXTRAS WORTH ₹7,999 — Yours at No Extra Cost!",
            color: "from-blue-500/20 to-cyan-500/20",
            borderColor: "border-blue-500/30 hover:border-blue-500",
            badge: "Perfect For Beginners"
        },
        {
            id: "intermediate",
            name: "Intermediate",
            description: "Ideal for businesses needing dynamic content and CRUD operations.",
            price: "₹ 25,000",
            priceNote: "",
            deliveryTime: "1-2 weeks",
            features: [
                "Up to 15 Pages",
                "Custom Database (CRUD)",
                "Admin Dashboard",
                "User Authentication",
                "Advanced SEO Setup",
                "3 Months Support",
            ],
            notIncluded: ["Payment Gateway Setup", "Complex E-commerce"],
            extras: [
                "1-Year Domain Included",
                "Hosting Configuration Included",
                "Analytics Integration",
                "Speed Optimization",
                "Admin Dashboard Walkthrough",
                "Basic Logo Assistance"
            ],
            includedValue: "🎁 FREE EXTRAS WORTH ₹16499 — Yours at No Extra Cost!",
            color: "from-[var(--color-bigchill)]/20 to-teal-500/20",
            borderColor: "border-[var(--color-bigchill)]/50 hover:border-[var(--color-bigchill)]",
            badge: "Most Popular"
        },
        {
            id: "advanced",
            name: "Enterprise",
            description: "Full-scale e-commerce solutions and complex web applications.",
            price: "₹ 49,999 +",
            deliveryTime: "4-6 weeks",
            features: [
                "Unlimited Pages (Dynamic)",
                "Full E-commerce Functionality",
                "Payment Gateway Integration",
                "Advanced Admin Controls",
                "Third-party API Integrations",
                "Custom GSAP Animations",
                "6 Months Support",
            ],
            notIncluded: [],
            extras: [
                "Premium Hosting Configuration",
                "Custom Logo Assistance",
                "Performance Optimization",
                "Social Media Setup",
                "Google Business Profile Setup",
                "Post-launch Testing"
            ],
            includedValue: "🎁 FREE EXTRAS WORTH ₹27000 — Yours at No Extra Cost!",
            color: "from-purple-500/20 to-pink-500/20",
            borderColor: "border-purple-500/30 hover:border-purple-500"
        }
    ];

    return (
        <LazyMotion features={domMax} strict>
            <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[var(--color-bigchill)] selection:text-white pb-24">
                {/* Background Gradients */}
                <div className="fixed inset-0 pointer-events-none z-0 hidden md:block">
                    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[var(--color-bigchill)]/5 rounded-full blur-[100px] mix-blend-multiply opacity-70 animate-blob" />
                    <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-purple-200/40 rounded-full blur-[100px] mix-blend-multiply opacity-50 animate-blob animation-delay-2000" />
                    <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-blue-200/30 rounded-full blur-[100px] mix-blend-multiply opacity-60 animate-blob animation-delay-4000" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
                </div>

                <div className="relative z-10 pt-32 px-4 md:px-8 max-w-7xl mx-auto">
                    {/* Header */}
                    <m.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mobile-static text-center mb-16"
                    >
                        <span className="inline-block px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-[var(--color-bigchill)] mb-4">
                            Transparent Pricing
                        </span>
                        <h1 className="text-5xl md:text-7xl font-extrabold font-heading leading-[1.1] tracking-tight text-slate-900 mb-6 drop-shadow-sm">
                            Let's build your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-bigchill)] to-teal-600">product.</span>
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed text-balance bg-white/40 backdrop-blur-sm p-4 rounded-2xl">
                            Choose the pricing model that fits your needs. From single landing pages to robust enterprise applications, we scale with you.
                        </p>
                    </m.div>

                    {/* Pricing Toggle */}
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="mobile-static flex justify-center mb-16"
                    >
                        <div className="bg-white/80 backdrop-blur-md p-1.5 rounded-full border border-slate-200 shadow-sm inline-flex relative">
                            {["Per Page", "Per Hour", "Per Project"].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`relative px-6 py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 z-10 ${activeTab === tab ? "text-white" : "text-slate-600 hover:text-slate-900"
                                        }`}
                                >
                                    {activeTab === tab && (
                                        <m.div
                                            layoutId="activeTab"
                                            className="mobile-static absolute inset-0 bg-[var(--color-bigchill)] rounded-full shadow-md"
                                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                            style={{ zIndex: -1 }}
                                        />
                                    )}
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </m.div>

                    {/* Pricing Content */}
                    <div className="min-h-[500px]">
                        <AnimatePresence mode="wait">
                            {activeTab === "Per Project" ? (
                                <m.div
                                    key="project"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="mobile-static grid grid-cols-1 md:grid-cols-3 gap-8"
                                >
                                    {projectTiers.map((tier, index) => (
                                        <m.div
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1, duration: 0.5 }}
                                            key={tier.id}
                                            className={` mobile-static group relative bg-white/90 backdrop-blur-xl rounded-3xl p-6 lg:p-8 border ${tier.borderColor} shadow-xl flex flex-col transition-transform hover:-translate-y-2 duration-300`}
                                        >
                                            {tier.badge && (
                                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                                                    <span className={`text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-md whitespace-nowrap inline-block ${tier.id === 'basic' ? 'bg-slate-800' : 'bg-gradient-to-r from-[var(--color-bigchill)] to-teal-500'}`}>
                                                        {tier.badge}
                                                    </span>
                                                </div>
                                            )}
                                            <div className="mb-8">
                                                <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                                                <p className="text-slate-500 text-sm h-12 lg:h-10">{tier.description}</p>
                                            </div>

                                            <div className="mb-4 pb-6 border-b border-slate-100 flex flex-col gap-3">
                                                <div className="flex flex-wrap items-start gap-2">
                                                    <span className="text-3xl lg:text-4xl font-extrabold text-slate-900">{tier.price}</span>
                                                    {tier.priceNote && (
                                                        <span className="text-lg font-bold text-slate-500 mt-1">
                                                            {tier.priceNote}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="text-sm font-semibold text-[var(--color-bigchill)] bg-[var(--color-bigchill)]/10 self-start px-3 py-1 rounded-full border border-[var(--color-bigchill)]/20">
                                                    Delivery: {tier.deliveryTime}
                                                </div>
                                            </div>

                                            <ul className="space-y-4 mb-8 flex-1">
                                                {tier.features.map((feature, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                                                            <Check className="w-3 h-3 text-emerald-600" />
                                                        </div>
                                                        <span className="text-slate-700">{feature}</span>
                                                    </li>
                                                ))}
                                                {tier.notIncluded.map((feature, i) => (
                                                    <li key={`not-${i}`} className="flex items-start gap-3 opacity-50">
                                                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center">
                                                            <X className="w-3 h-3 text-slate-400" />
                                                        </div>
                                                        <span className="text-slate-500 line-through">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* Extras Section */}
                                            <div className="mb-8 pt-6 border-t border-slate-100 relative">
                                                <div className="mb-4">
                                                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-bigchill)] flex items-center gap-1.5">
                                                        <span>✨</span> Included Extras
                                                    </span>
                                                </div>
                                                <ul className="space-y-3 mb-5">
                                                    {tier.extras.map((extra, i) => (
                                                        <li key={i} className="flex items-start gap-2.5">
                                                            <div className="mt-1 flex-shrink-0 w-3.5 h-3.5 rounded-full bg-teal-50 flex items-center justify-center border border-teal-100/50">
                                                                <Check className="w-2 h-2 text-teal-600" strokeWidth={3} />
                                                            </div>
                                                            <span className="text-slate-600 text-[13px]">{extra}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <div className="flex items-center justify-center text-center bg-slate-50/80 rounded-lg p-3 border border-slate-100/80 mt-2">
                                                    <span className="text-[11px] font-bold text-[var(--color-bigchill)] uppercase tracking-wide">{tier.includedValue}</span>
                                                </div>
                                            </div>

                                            <Link
                                                href="/contact"
                                                className="w-full py-4 rounded-xl font-bold text-center transition-all duration-300 bg-slate-100 text-slate-800 group-hover:bg-[var(--color-bigchill)] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[var(--color-bigchill)]/40 hover:!bg-[#097a7a]"
                                            >
                                                Get Started
                                            </Link>
                                        </m.div>
                                    ))}
                                </m.div>
                            ) : activeTab === "Per Page" ? (
                                <m.div
                                    key="page"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="mobile-static max-w-3xl mx-auto bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl"
                                >
                                    <div className="text-center mb-10">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Pay Per Page</h2>
                                        <p className="text-slate-600 text-lg">Flexible pricing for when you just need a few specific pages designed and developed.</p>
                                    </div>

                                    <div className="flex flex-col md:flex-row items-center justify-between bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
                                        <div>
                                            <h3 className="text-2xl font-bold text-slate-900 mb-1">Standard Page</h3>
                                            <p className="text-slate-500">About us, Services, Contact, Blog post templates, etc.</p>
                                        </div>
                                        <div className="mt-4 md:mt-0 text-right">
                                            <div className="text-3xl font-extrabold text-[var(--color-bigchill)]">₹ 500 <span className="text-xl text-slate-400 font-medium">-</span> ₹ 700</div>
                                            <div className="text-sm text-slate-400 font-medium">per page</div>
                                        </div>
                                    </div>

                                    <div className="space-y-6 mb-10">
                                        <h4 className="font-semibold text-slate-900 text-lg">What's included per page:</h4>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {[
                                                "Custom responsive design", "Clean React components", "Brand color integration",
                                                "Basic animations", "SEO optimization tags", "Cross-browser testing"
                                            ].map((feature, i) => (
                                                <li key={i} className="flex items-center gap-3">
                                                    <Check className="w-5 h-5 text-[var(--color-bigchill)]" />
                                                    <span className="text-slate-700">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="text-center">
                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all hover:scale-105 shadow-lg w-full md:w-auto"
                                        >
                                            Request a Quote
                                            <ArrowUpRight size={20} />
                                        </Link>
                                    </div>
                                </m.div>
                            ) : activeTab === "Per Hour" ? (
                                <m.div
                                    key="hour"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="mobile-static max-w-3xl mx-auto bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl"
                                >
                                    <div className="text-center mb-10">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Hourly Consulting & Build</h2>
                                        <p className="text-slate-600 text-lg">Best for ongoing maintenance, feature additions, or consulting on existing projects.</p>
                                    </div>

                                    <div className="flex flex-col md:flex-row items-center justify-between bg-[var(--color-bigchill)]/5 p-8 rounded-2xl border border-[var(--color-bigchill)]/20 mb-8 mx-auto w-full md:w-3/4">
                                        <div className="flex items-center gap-4 mb-4 md:mb-0">
                                            <div className="p-3 bg-white rounded-full shadow-sm">
                                                <Zap className="w-8 h-8 text-[var(--color-bigchill)]" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-slate-900">Hourly Rate</h3>
                                        </div>
                                        <div className="text-center md:text-right">
                                            <div className="text-4xl font-extrabold text-slate-900">₹ 999</div>
                                            <div className="text-sm text-[var(--color-bigchill)] font-bold tracking-wide uppercase">/ hour</div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                            <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-emerald-500" /> Suitable For</h4>
                                            <ul className="space-y-2 text-slate-600 text-sm">
                                                <li>• UI/UX design tweaks</li>
                                                <li>• Bug fixing & performance updates</li>
                                                <li>• API Integrations</li>
                                                <li>• Code reviews & refactoring</li>
                                            </ul>
                                        </div>
                                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                            <h4 className="font-bold text-slate-900 mb-3">How it works</h4>
                                            <ul className="space-y-2 text-slate-600 text-sm">
                                                <li>1. Discuss requirements</li>
                                                <li>2. Receive time estimate</li>
                                                <li>3. Approve hours</li>
                                                <li>4. Delivery & payment</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-bigchill)] text-white font-bold rounded-xl hover:bg-[#097a7a] transition-all hover:scale-105 shadow-lg w-full md:w-auto"
                                        >
                                            Hire Us Hourly
                                            <ArrowUpRight size={20} />
                                        </Link>
                                    </div>
                                </m.div>
                            ) : null}
                        </AnimatePresence>

                        <div className="mt-12 text-center text-slate-500 font-medium text-lg">
                            100% satisfaction guarantee  ·  Free consultation  ·  No hidden charges  ·  Mobile optimized  ·  Fast delivery
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <m.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mobile-static mt-20 text-center bg-slate-900 rounded-[3rem] p-10 md:p-12 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--color-bigchill)]/20 rounded-full blur-[100px] pointer-events-none" />

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl font-bold font-heading text-white mb-4">
                                Still have questions?
                            </h2>
                            <p className="text-slate-400 mb-8">
                                We know every project is unique. Contact us to discuss your specific requirements.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href="/contact"
                                    className="w-full sm:w-auto px-8 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition-colors shadow-lg"
                                >
                                    Contact Us
                                </Link>
                                <button
                                    onClick={() => setIsBookingModalOpen(true)}
                                    className="w-full sm:w-auto px-8 py-3 border border-slate-700 text-slate-300 font-medium rounded-lg hover:bg-slate-800 transition-colors"
                                >
                                    Book a Free Call
                                </button>
                            </div>
                        </div>
                    </m.div>

                </div>

                <BookingModal
                    isOpen={isBookingModalOpen}
                    onClose={() => setIsBookingModalOpen(false)}
                />
            </div>
        </LazyMotion>
    );
};

export default Pricing;
