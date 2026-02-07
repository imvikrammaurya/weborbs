import React from "react";
import {
  ChartSpline,
  LifeBuoy,
  Sliders,
  ArrowUpZA,
  Briefcase,
  Layers,
  ArrowRight,
} from "lucide-react";

const questions = [
  {
    icon: <ChartSpline className="w-8 h-8" />,
    title: "How long does a project take?",
    description:
      "Timeline depends on scope, but we typically deliver websites in four to eight weeks.",
  },
  {
    icon: <LifeBuoy className="w-8 h-8" />,
    title: "Do you offer ongoing support?",
    description:
      "Yes. We provide maintenance packages tailored to your needs after launch.",
  },
  {
    icon: <Sliders className="w-8 h-8" />,
    title: "What's your development process?",
    description:
      "We follow discovery, design, development, testing, and launch phases with regular client communication.",
  },
  {
    icon: <ArrowUpZA className="w-8 h-8" />,
    title: "Can you scale existing systems?",
    description:
      "Absolutely. We specialize in modernizing and scaling legacy applications.",
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Do you work with startups?",
    description:
      "We work with businesses of all sizes, from early-stage startups to established enterprises.",
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "What technologies do you use?",
    description:
      "We use modern, proven tech stacks chosen based on project requirements and performance goals.",
  },
];

export default function Questions({ openModal }) {
  return (
    <section
      id="contact"
      className="relative pt-15 pb-20 bg-bigchill/5 overflow-hidden border-t-1"
      style={{ borderColor: "#7C3AED" }}
    >
      {/* Background Gradient/Mesh (Subtle) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-bigchill/20 rounded-full blur-[100px] mix-blend-multiply opacity-50 animate-blob" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-50/50 rounded-full blur-[100px] mix-blend-multiply opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] bg-bigchill/20 rounded-full blur-[100px] mix-blend-multiply opacity-50 animate-blob animation-delay-4000" />
      </div>
      <div className="relative container mx-auto px-6 z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about working with us.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {questions.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-4 rounded-2xl bg-gray-50 text-gray-900 ring-1 ring-gray-900/5 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-25 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Reach out directly and we'll answer anything.
          </p>
          <button
            onClick={openModal}
            className="px-8 py-4 bg-bigchill text-white font-semibold rounded-lg hover:brightness-110 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center gap-2 group cursor-pointer"
          >
            Book a Free Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
