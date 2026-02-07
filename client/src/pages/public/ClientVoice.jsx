import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "They delivered exactly what we needed on time and under budget. The code quality is exceptional.",
    name: "Sarah Mitchell",
    role: "CEO, TechVenture Inc",
    image: "https://i.pravatar.cc/150?u=sarah",
    company: "Vooklu",
  },
  {
    quote:
      "The team understood our vision immediately and brought it to life with precision and creativity.",
    name: "James Chen",
    role: "Founder, Digital Innovations",
    image: "https://i.pravatar.cc/150?u=james",
    company: "Vooklu",
  },
  {
    quote:
      "Professional, responsive, and genuinely invested in our success. Highly recommended.",
    name: "Emma Rodriguez",
    role: "Product Manager, Growth Labs",
    image: "https://i.pravatar.cc/150?u=emma",
    company: "Vooklu",
  },
];

import SplashCursor from "./SplashCursor";

export default function ClientVoice() {
  return (
    <div
      id="testimonials"
      className="relative bg-[#111] text-white py-20 px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      <SplashCursor />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            Client voices
          </h2>
          <p className="text-gray-400 text-lg">
            Trusted by companies that demand excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col h-full justify-between">
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-white text-white" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
                  "{testimonial.quote}"
                </blockquote>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover bg-gray-700"
                  />
                  <div>
                    <h4 className="font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-white font-bold text-lg">
                  {/* Simple Webflow logo representation */}
                  <svg
                    width="24"
                    height="15"
                    viewBox="0 0 24 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white fill-current"
                  >
                    <path d="M7.5 15L4.5 5.5L1.5 15H0L4 2.5L7.5 12.5L11 2.5L14.5 12.5L18 2.5L22 15H20.5L17.5 5.5L14.5 15L11 5.5L7.5 15Z" />
                  </svg>
                  <span>{testimonial.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
