import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// No framer-motion imports here
export default function ProcessMobile() {
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
        <section id="process" className="w-full py-24 px-4 bg-bigchill/5">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-10">
                    From Concept to Digital Reality
                </h2>

                <div className="grid grid-cols-1 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
                            <div className="overflow-hidden rounded-2xl mb-6 aspect-[4/3] relative">
                                <Image src={step.image} alt={step.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 400px" loading="lazy" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                            <p className="text-gray-500">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}