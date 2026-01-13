import React from "react";
import {
  ChartSpline,
  LifeBuoy,
  Sliders,
  ArrowUpZA,
  Briefcase,
  Layers,
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

export default function Questions() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
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
      </div>
    </section>
  );
}
