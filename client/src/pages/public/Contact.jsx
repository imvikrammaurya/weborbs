import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Send, ArrowRight, Check } from "lucide-react";

const Contact = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormState({ name: "", email: "", subject: "", message: "" });

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
    };

    const contactMethods = [
        {
            id: "call",
            title: "Direct Call",
            description: "Speak directly with our team.",
            value: "+91 98765 43210", // Placeholder, user will update or provide exact
            icon: Phone,
            href: "tel:+919876543210",
            color: "from-blue-500 to-cyan-500",
            bgLight: "bg-blue-50",
            textLight: "text-blue-600"
        },
        {
            id: "whatsapp",
            title: "WhatsApp",
            description: "Chat with us instantly.",
            value: "Message us",
            icon: MessageCircle,
            href: "https://wa.me/919876543210", // Placeholder
            color: "from-emerald-500 to-green-500",
            bgLight: "bg-emerald-50",
            textLight: "text-emerald-600"
        },
        {
            id: "email",
            title: "Email",
            description: "Send us a detailed message.",
            value: "hello@vooklu.com",
            icon: Mail,
            href: "mailto:hello@vooklu.com",
            color: "from-[var(--color-bigchill)] to-teal-500",
            bgLight: "bg-[var(--color-bigchill)]/10",
            textLight: "text-[var(--color-bigchill)]"
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[var(--color-bigchill)] selection:text-white pb-24 overflow-hidden relative">
            {/* Background Gradients & Noise */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[var(--color-bigchill)]/5 rounded-full blur-[100px] mix-blend-multiply opacity-70 animate-blob" />
                <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-teal-500/5 rounded-full blur-[100px] mix-blend-multiply opacity-50 animate-blob animation-delay-2000" />
                <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[100px] mix-blend-multiply opacity-60 animate-blob animation-delay-4000" />
            </div>

            <div className="relative z-10 pt-32 px-4 md:px-8 max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 md:mb-24"
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-[var(--color-bigchill)] mb-6 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-[var(--color-bigchill)] animate-pulse" />
                        We're ready to help
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold font-heading leading-[1.1] tracking-tight text-slate-900 mb-6 drop-shadow-sm">
                        Let's start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-bigchill)] to-teal-500">conversation.</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed text-balance bg-white/50 border border-white/20 backdrop-blur-sm p-4 rounded-2xl">
                        Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

                    {/* Left Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-7 bg-white/90 backdrop-blur-xl border border-slate-200 shadow-xl rounded-[2rem] p-8 md:p-12 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[var(--color-bigchill)]/10 to-transparent rounded-bl-[100px] pointer-events-none" />

                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Send us a message</h2>
                        <p className="text-slate-500 mb-8">We usually respond within 2-4 hours during business days.</p>

                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formState.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[var(--color-bigchill)]/50 focus:border-[var(--color-bigchill)] transition-all outline-none text-slate-900 placeholder-slate-400"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formState.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[var(--color-bigchill)]/50 focus:border-[var(--color-bigchill)] transition-all outline-none text-slate-900 placeholder-slate-400"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="block text-sm font-medium text-slate-700">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    value={formState.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[var(--color-bigchill)]/50 focus:border-[var(--color-bigchill)] transition-all outline-none text-slate-900 placeholder-slate-400"
                                    placeholder="How can we help?"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    value={formState.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[var(--color-bigchill)]/50 focus:border-[var(--color-bigchill)] transition-all outline-none resize-none text-slate-900 placeholder-slate-400"
                                    placeholder="Tell us about your project or inquiry..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${isSubmitting
                                    ? "bg-slate-200 text-slate-500 cursor-not-allowed border border-slate-200"
                                    : submitSuccess
                                        ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30"
                                        : "bg-[var(--color-bigchill)] text-white hover:bg-[#097a7a] hover:scale-[1.02] shadow-lg shadow-[var(--color-bigchill)]/30"
                                    }`}
                            >
                                {isSubmitting ? (
                                    <div className="w-6 h-6 border-2 border-slate-400 border-t-slate-600 rounded-full animate-spin" />
                                ) : submitSuccess ? (
                                    <>Message Sent Successfully <Check className="w-5 h-5" /></>
                                ) : (
                                    <>Send Message <Send className="w-5 h-5" /></>
                                )}
                            </button>
                        </form>
                    </motion.div>

                    {/* Right Column: Contact Methods & Address */}
                    <div className="lg:col-span-5 space-y-6">

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="bg-white/90 backdrop-blur-xl border border-slate-200 shadow-xl rounded-[2rem] p-8"
                        >
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Connect directly</h3>
                            <div className="space-y-4">
                                {contactMethods.map((method, i) => (
                                    <a
                                        key={method.id}
                                        href={method.href}
                                        target={method.id === 'whatsapp' ? "_blank" : "_self"}
                                        rel="noopener noreferrer"
                                        className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50 hover:border-slate-200 hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className="flex items-center gap-4 mb-3 sm:mb-0">
                                            <div className={`w-12 h-12 rounded-full ${method.color} bg-gradient-to-br flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                                <method.icon className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 group-hover:text-[var(--color-bigchill)] transition-colors">{method.title}</h4>
                                                <p className="text-sm text-slate-500">{method.description}</p>
                                            </div>
                                        </div>
                                        <div className="hidden sm:flex w-8 h-8 rounded-full bg-slate-100 items-center justify-center group-hover:bg-[var(--color-bigchill)] group-hover:text-white transition-colors text-slate-400">
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-slate-900 text-white rounded-[2rem] p-8 md:p-10 relative overflow-hidden shadow-2xl"
                        >
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-bigchill)]/20 rounded-full blur-[80px] pointer-events-none" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold">Office Address</h3>
                                </div>

                                <address className="not-italic text-slate-300 space-y-2 text-lg">
                                    <p className="font-medium text-white text-xl border-l-2 border-[var(--color-bigchill)] pl-4 py-1 mb-4">
                                        Pin Code: 110045
                                    </p>
                                    <p>New Delhi,</p>
                                    <p>India</p>
                                </address>

                                <div className="mt-8 pt-8 border-t border-slate-800">
                                    <p className="text-slate-400 text-sm">
                                        Looking for an in-person meeting? Contact us to schedule an appointment at our office.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
