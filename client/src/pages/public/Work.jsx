import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

// Placeholder images - using existing assets where possible or external placeholders
import dashboardImg from "../../assets/dashboard_analytics_dark_1767871281648.png";
import serverImg from "../../assets/server_metrics_card_1767871336352.png";

const projects = [
    {
        id: 1,
        title: "Yellow Cryon Bakery",
        category: "Bakery Website",
        description: "A modern full-stack bakery web application built with React (Vite) and Express, integrated with Supabase for backend services, featuring authentication with JWT, secure password handling, and smooth UI animations using GSAP.",
        image: "https://ik.imagekit.io/vooklu/VOOKLU%20WEBSITE/WORK/image.png",
        tech: ["React", "Tailwind", "Node.js"],
        link: "https://bakery-sample-2.vercel.app/",
        color: "from-blue-500/20 to-purple-500/20",
        price: "₹ 16,799.00",
        tags: ["Bakery", "Business"]
    },
    {
        id: 2,
        title: "Brown Bakery Theme",
        category: "Bakery Website",
        description: "A simple bakery web project template that demonstrates a basic front-end layout for a bakery business, showcasing pages like home, menu, and maybe bakery info using standard web technologies.",
        image: "https://ik.imagekit.io/vooklu/VOOKLU%20WEBSITE/WORK/bakery-sample-1.png", // Placeholder
        tech: ["React", "Tailwind", "Node.js"],
        link: "https://bakery-simple-1.vercel.app/",
        color: "from-emerald-500/20 to-teal-500/20",
        price: "₹ 8,499.00",
        tags: ["Bakery", "Business"]
    },
    {
        id: 3,
        title: "Property Dealer Website",
        category: "Property Dealer Website",
        description: "A sample starter project demonstrating the core structure of a real estate/property listing application — likely includes features to display properties, manage listings, and serve as a template for building property-based web apps.",
        image: "https://ik.imagekit.io/vooklu/VOOKLU%20WEBSITE/WORK/property-sample-1.png",
        tech: ["Next.js", "PostgreSQL", "TypeScript"],
        link: "https://property-sample-1.vercel.app/",
        color: "from-cyan-500/20 to-blue-500/20",
        price: "₹ 12,499.00",
        tags: ["Business", "Property"]
    },
    {
        id: 4,
        title: "Salon Booking & Management Sample App",
        category: "Salon Website",
        description: "A simple sample project demonstrating a salon booking/management system, showcasing how customers can view services and schedule appointments while exploring basic UI and backend logic typical of salon-style applications.",
        image: "https://ik.imagekit.io/vooklu/VOOKLU%20WEBSITE/WORK/salon-sample-1.png",
        tech: ["React", "Framer Motion", "GSAP"],
        link: "https://salon-sample-1.vercel.app/",
        color: "from-orange-500/20 to-red-500/20",
        price: "₹ 8,499.00",
        tags: ["Salon", "Business"]
    },
    {
        id: 5,
        title: "Red Heart Bakery",
        category: "Bakery Website",
        description: "A modern  bakery web application built with React (Vite) and Express, integrated with Supabase for backend services, featuring authentication with JWT, secure password handling, and smooth UI animations using GSAP.",
        image: "https://ik.imagekit.io/vooklu/VOOKLU%20WEBSITE/WORK/Bakery-sample-4.png",
        tech: ["React", "WebRTC", "Socket.io"],
        link: "#",
        color: "from-rose-500/20 to-pink-500/20",
        price: "₹ 14,399",
        tags: ["Bakery", "Business"]
    },
    {
        id: 6,
        title: "Property Website",
        category: "Property Website",
        description: "A modern property web application built with React (Vite) and Express, integrated with Supabase for backend services, featuring authentication with JWT, secure password handling, and smooth UI animations using GSAP.",
        image: "https://ik.imagekit.io/vooklu/VOOKLU%20WEBSITE/random%20images/image.png",
        tech: ["Web3.js", "Solidity", "React"],
        link: "#",
        color: "from-indigo-500/20 to-violet-500/20",
        price: "₹ 15,499.00",
        tags: ["Property", "Business"]
    }
];

const filterTags = ["All", "Property", "Bakery", "Salon", "Business", "Shopify"];

const Work = () => {
    const [activeTag, setActiveTag] = useState("All");
    const [filteredProjects, setFilteredProjects] = useState(projects);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (activeTag === "All") {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter(p => p.tags.includes(activeTag)));
        }
    }, [activeTag]);

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[var(--color-bigchill)] selection:text-white">
            {/* Background Gradients */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[var(--color-bigchill)]/5 rounded-full blur-[100px] mix-blend-multiply opacity-70 animate-blob" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-200/40 rounded-full blur-[100px] mix-blend-multiply opacity-70 animate-blob animation-delay-2000" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
            </div>

            <div className="relative z-10 pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-[var(--color-bigchill)] mb-4">
                        Our Portfolio
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold font-heading leading-[1.1] tracking-tight text-slate-900 mb-6">
                        Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-bigchill)] to-teal-600">Works</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed text-balance">
                        We don't just build websites; we build digital experiences that drive growth. Check out some of our recent projects.
                    </p>
                </motion.div>

                {/* Filter Tags */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex flex-wrapjustify-center gap-2 mb-16 overflow-x-auto pb-4 md:pb-0" // Added overflow handling for mobile
                >
                    <div className="flex flex-wrap justify-center gap-2 w-full">
                        {filterTags.map((tag) => (
                            <button
                                key={tag}
                                onClick={() => setActiveTag(tag)}
                                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${activeTag === tag
                                    ? "bg-[var(--color-bigchill)] text-white border-[var(--color-bigchill)] shadow-lg shadow-[var(--color-bigchill)]/20"
                                    : "bg-white text-slate-600 border-slate-200 hover:border-[var(--color-bigchill)] hover:text-[var(--color-bigchill)]"
                                    }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-[var(--color-bigchill)]/30 hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
                            >
                                {/* Image Section */}
                                <a
                                    href={project.link}
                                    // target="_blank" // For external links
                                    // rel="noopener noreferrer"
                                    className="relative h-64 overflow-hidden bg-slate-100 block cursor-pointer group/image"
                                >
                                    <motion.img
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.6 }}
                                        loading="lazy"
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-contain bg-slate-50"
                                    />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                                        <div className="bg-white text-slate-900 px-4 py-2 rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover/image:translate-y-0 transition-transform duration-300 shadow-lg">
                                            <ExternalLink size={16} />
                                            <span>Visit Website</span>
                                        </div>
                                    </div>
                                </a>

                                {/* Content Section */}
                                <div className="p-6 flex flex-col flex-1 relative group/desc">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-bigchill)] bg-[var(--color-bigchill)]/5 px-2 py-1 rounded-md">
                                            {project.category}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[var(--color-bigchill)] transition-colors">
                                        {project.title}
                                    </h3>

                                    <div className="relative mb-6 flex-1">
                                        <p className="text-slate-500 leading-relaxed group-hover/desc:blur-[2px] transition-all duration-300">
                                            {project.description}
                                        </p>
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/desc:opacity-100 transition-opacity duration-300 pointer-events-none">
                                            <button className="bg-slate-900 text-white text-sm px-4 py-2 rounded-full font-medium shadow-xl transform scale-90 group-hover/desc:scale-100 transition-transform duration-300">
                                                Read more about this website
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.price && (
                                            <div className="w-full mb-3 pb-3 border-b border-slate-100 flex items-center justify-between">
                                                <span className="text-sm font-medium text-slate-500">Price</span>
                                                <span className="text-lg font-bold text-[var(--color-bigchill)]">{project.price}</span>
                                            </div>
                                        )}
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="text-xs font-medium text-slate-500 bg-slate-50 border border-slate-100 px-2 py-1 rounded">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 text-center bg-slate-900 rounded-[3rem] p-12 relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--color-bigchill)]/20 rounded-full blur-[100px] pointer-events-none" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
                            Have a project in mind?
                        </h2>
                        <p className="text-slate-400 text-lg mb-8">
                            We'd love to help you bring your ideas to life. Let's discuss your next big thing.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-bigchill)] text-white font-bold rounded-xl hover:bg-[#0b8a89] transition-all hover:scale-105 shadow-lg shadow-[var(--color-bigchill)]/25"
                        >
                            Start Your Project
                            <ArrowUpRight size={20} />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Work;
