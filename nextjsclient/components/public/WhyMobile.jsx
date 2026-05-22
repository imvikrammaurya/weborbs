import React from "react";
import { ShieldCheck, Rocket, Briefcase, Clock, Ribbon, Smile } from "lucide-react";

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

const WhyMobile = () => {
    return (
        <section className="w-full bg-white/95 py-20 px-4 flex flex-col font-sans lg:hidden">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-heading font-bold text-gray-900">
                    Why Vooklu?
                </h2>
                <p className="text-gray-600 mt-2 text-lg">
                    We’re not just developers. We’re your long-term digital partner.
                </p>
            </div>

            <div className="bg-[#0c0c0c] rounded-3xl shadow-2xl flex flex-col overflow-hidden">
                {reasons.map((reason) => (
                    <div
                        key={reason.id}
                        className="relative p-8 border-b border-white/10 last:border-b-0"
                    >
                        <div className="absolute top-1/2 right-0 -translate-y-1/2 p-6 opacity-5 text-bigchill pointer-events-none overflow-hidden">
                            <reason.icon size={160} className="translate-x-1/4" />
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

                            <h3 className="text-2xl font-heading font-bold text-white mb-4">
                                {reason.title}
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed font-light">
                                {reason.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyMobile;