import React from "react";

import testingAndDeployment from "../assets/Process-testing_and_deployment.png";

export default function Process() {
  const steps = [
    {
      title: "1. Discovery and strategy",
      description:
        "We listen, ask the right questions, and build a roadmap that aligns with your goals.",
      image:
        "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=2574&auto=format&fit=crop",
    },
    {
      title: "2. Design and development",
      description:
        "Our team creates clean, modern interfaces backed by solid code architecture.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop",
    },
    {
      title: "3. Testing and Deployment",
      description:
        "Every detail is tested across devices and browsers before your site goes live.",
      image: testingAndDeployment,
    },
  ];

  return (
    <section className="relative w-full py-12 px-4 md:px-8 bg-bigchill/5 overflow-hidden">
      {/* Background Gradient/Mesh (Subtle) - Matched to HeroSection */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-bigchill/20 rounded-full blur-[100px] mix-blend-multiply opacity-50 animate-blob" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-50/50 rounded-full blur-[100px] mix-blend-multiply opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] bg-bigchill/20 rounded-full blur-[100px] mix-blend-multiply opacity-50 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12 space-y-3">
          <p className="text-bigchill font-bold tracking-wide uppercase text-sm">
            Process
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-gray-900">
            Three steps from idea
            <br className="hidden md:block" /> to live
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            We move fast without cutting corners. Every project follows a proven
            workflow designed for clarity and results.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-8">
          {steps.map((step, index) => (
            <div key={index} className="text-left group cursor-pointer">
              <div className="overflow-hidden rounded-2xl mb-6 aspect-[4/3] shadow-lg">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-500 leading-relaxed font-medium">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-center gap-6">
          <button className="bg-bigchill hover:bg-[#0b8a89] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5">
            Launch
          </button>
          {/* Arrow button removed as requested */}
        </div>
      </div>
    </section>
  );
}
