"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import Link from 'next/link';


const cards = [
  {
    id: 1,
    badge: "Perfect For Starters",
    title: "Your Digital Storefront",
    subtitle: "For businesses ready to show up online properly.",
    description:
      "A professionally designed, Google-ready website built specifically around your business. Not a template. Not generic. Built to rank, built to convert, and built to make the right first impression — every single time.",
    features: [
      "Custom design tailored to your brand",
      "SEO built in from day one",
      "Fast, mobile-first performance",
    ],
    price: "₹7,899",
    priceNote: "one-time",
    popular: false,
    accent: "#0ea5a4",
  },
  {
    id: 2,
    badge: "Most Popular",
    title: "Your Business, On Autopilot",
    subtitle: "For businesses ready to stop managing chaos.",
    description:
      "A complete operational system — not just a website. Your customers book online. You manage everything from one dashboard. Staff, bookings, history, services — all in one place. Less chaos, more growth.",
    features: [
      "Customer-facing booking portal",
      "Full admin dashboard & controls",
      "Staff and history management",
    ],
    price: "₹24,899",
    priceNote: "one-time",
    popular: true,
    accent: "#2dd4bf",
  },
  {
    id: 3,
    badge: "Enterprise",
    title: "Built Around Your Vision",
    subtitle: "For businesses building something bigger.",
    description:
      "Everything in the first two — plus solutions built specifically around your business problems. Own your customer data. Run offers. Automate what slows you down. This is for the business that doesn't want to fit a template — they want to set the standard.",
    features: [
      "Everything in both plans",
      "Custom features built for your workflow",
      "Data ownership & customer analytics",
    ],
    price: "₹40,000+",
    priceNote: "scoped to your needs",
    popular: false,
    accent: "#5eead4",
  },
];

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

function Card({ card, index }) {
  const [ref, visible] = useInView();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      className="relative flex flex-col"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s cubic-bezier(0.23,1,0.32,1) ${index * 0.15}s`,
      }}
    >
      {/* Floating badge at top center — same as screenshot */}
      <div className="absolute -top-4 left-0 right-0 flex justify-center z-10">
        <span
          className="text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full whitespace-nowrap"
          style={{
            color: card.popular ? "#020f0e" : card.accent,
            background: card.popular ? card.accent : `${card.accent}18`,
            border: `1px solid ${card.accent}60`,
          }}
        >
          {card.badge}
        </span>
      </div>

      {/* Card */}
      <div
        className="relative flex flex-col flex-1 rounded-3xl pt-9 px-7 pb-7 overflow-hidden transition-all duration-300"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: card.popular
            ? "linear-gradient(160deg, #0c1f1f 0%, #081515 100%)"
            : "linear-gradient(160deg, #080f0f 0%, #0a1414 100%)",
          border: card.popular
            ? `1px solid ${card.accent}60`
            : `1px solid ${card.accent}25`,
          boxShadow: hovered
            ? `0 20px 60px rgba(14,165,164,0.15), 0 0 0 1px ${card.accent}20`
            : card.popular
              ? `0 0 48px rgba(45,212,191,0.1)`
              : "0 4px 24px rgba(0,0,0,0.4)",
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
        }}
      >
        {/* Title */}
        <h3 className="text-2xl font-bold text-white leading-snug tracking-tight mb-1">
          {card.title}
        </h3>

        {/* Subtitle */}
        <p className="text-[13px] text-neutral-300 mb-6 leading-relaxed">
          {card.subtitle}
        </p>

        {/* Price */}
        <p className="text-4xl font-extrabold text-white tracking-tight leading-none mb-1">
          {card.price}
        </p>
        <p className="text-[15px] text-neutral-400 mb-6">{card.priceNote}</p>

        {/* Divider */}
        <div
          className="h-px mb-6"
          style={{
            background: `linear-gradient(90deg, ${card.accent}40, transparent)`,
          }}
        />

        {/* Description */}
        <p className="text-[16px] text-neutral-300 leading-relaxed mb-6">
          {card.description}
        </p>

        {/* Features — same check style as screenshot */}
        <ul className="flex flex-col gap-3.5 mb-8">
          {card.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3">
              <span
                className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center"
                style={{
                  background: `${card.accent}18`,
                  color: card.accent,
                }}
              >
                <Check className="w-3 h-3" strokeWidth={2.5} />
              </span>
              <span className="text-[14px] text-neutral-300">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Full-width CTA — same as screenshot */}
        <div className="mt-auto">
          <Link href="/pricing">
            <button

              className="w-full py-4 rounded-2xl text-[14px] font-semibold flex items-center justify-center gap-2 transition-all duration-300"
              style={{
                background: card.popular
                  ? hovered ? "#1ab8b7" : card.accent
                  : hovered ? card.accent : "transparent",
                border: `1px solid ${card.accent}55`,
                color: card.popular || hovered ? "#020f0e" : card.accent,
              }}
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

const WhatWeBuild = () => {
  const [headerRef, headerVisible] = useInView(0.2);
  const [noteRef, noteVisible] = useInView(0.2);

  return (
    <section
      id="what-we-build"
      className="relative bg-black text-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Ambient teal glow top */}
      <div
        className="absolute -top-28 left-1/2 -translate-x-1/2 w-[700px] h-80 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(14,165,164,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">

        {/* Section header */}
        <div
          ref={headerRef}
          className="text-center mb-20 space-y-5"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.7s ease, transform 0.7s cubic-bezier(0.23,1,0.32,1)",
          }}
        >
          <span
            className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full"
            style={{
              color: "#0ea5a4",
              background: "rgba(14,165,164,0.1)",
              border: "1px solid rgba(14,165,164,0.25)",
            }}
          >
            What We Build
          </span>

          {/* h2 picks up Unbounded from globals.css */}
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tigh"

          >
            <span className="text-bigchill" > Your business deserves better</span>
            <br className="hidden md:block" />
            <span className="text-white font-sans" >than a website that just exists.</span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto pt-2">
            Every day a bad first impression costs you a customer. We build the
            thing that makes them stay, trust you, and choose you — before you
            say a word.
          </p>
        </div>

        {/* Cards — pt-5 so floating badges aren't clipped */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-5">
          {cards.map((card, index) => (
            <Card key={card.id} card={card} index={index} />
          ))}
        </div>

        {/* Bottom note */}
        <div
          ref={noteRef}
          className="relative text-center mt-14 px-8 py-6 rounded-2xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #080f0f, #0c1515)",
            border: "1px solid rgba(14,165,164,0.15)",
            opacity: noteVisible ? 1 : 0,
            transform: noteVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, rgba(14,165,164,0.04), rgba(45,212,191,0.06), rgba(14,165,164,0.04))",
            }}
          />
          <p className="relative text-sm text-neutral-400 leading-relaxed">
            We're not here to just build you a website.{" "}
            <span className="text-neutral-200">
              We're here to build the thing your business has been missing.
            </span>{" "}
            <span className="font-semibold" style={{ color: "#0ea5a4" }}>
              — Vooklu
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;
