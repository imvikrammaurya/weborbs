import React, { useState } from "react";
import { motion } from "framer-motion";
import WorkWithUsModal from "./WorkWithUsModal";
import ThreeDCarousel from "./ThreeDCarousel";
import ScrollTimeline from "./ScrollTimeline";
import {
  ShieldCheck,
  Ruler,
  ArrowRight,
  Server,
  Cpu,
  Globe,
  Network,
  CheckCircle,
  XCircle,
  PenTool,
  Code2,
  Workflow,
  Layout,
  ClipboardCheck,
} from "lucide-react";

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Section = ({ children, className = "" }) => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeInUp}
    className={`py-16 px-6 md:px-12 lg:px-24 ${className}`}
  >
    {children}
  </motion.section>
);

// --- SVG Logos (Simplified for clarity) ---
const TechLogos = {
  React: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-12 h-12"
    >
      <circle cx="12" cy="12" r="3" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
    </svg>
  ),
  NextJS: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="w-12 h-12"
    >
      <path d="M4 4h16v16H4z" strokeOpacity="0.5" />
      <path d="M9 8l6 8" />
      <path d="M15 8v8" />
      <path d="M9 16V8" />
    </svg>
  ),
  NodeJS: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-12 h-12"
    >
      <path d="M12 3l9 5v8l-9 5-9-5V8l9-5z" />
      <path d="M12 12v9" />
      <path d="M12 12l9-5" />
      <path d="M12 12L3 7" />
    </svg>
  ),
  AWS: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-12 h-12"
    >
      <path d="M4 14c2 3 8 4 11 2 2-1 3-3 3-3" />
      <path d="M9 9l3 3-3 3" />
      <path d="M17 9l-1 1" />
    </svg>
  ),
  TypeScript: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="w-12 h-12"
    >
      <rect x="4" y="4" width="16" height="16" rx="2" strokeOpacity="0.5" />
      <path d="M8 18v-6h4" />
      <path d="M16 18c0-2-3-2-3-4s3-2 3 0" />
    </svg>
  ),
  Docker: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-12 h-12"
    >
      <path d="M4 16h16v4H4z" />
      <path d="M4 12h4v4H4z" />
      <path d="M8 12h4v4H8z" />
      <path d="M12 12h4v4h-4z" />
      <path d="M12 8h4v4h-4z" />
      <path d="M8 8h4v4H8z" />
    </svg>
  ),
  PostgreSQL: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-12 h-12"
    >
      <path d="M12 3c-4.5 0-8 3-8 8 0 3.5 2.5 6.5 6 7.5l-1 2.5h6l-1-2.5c3.5-1 6-4 6-7.5 0-5-3.5-8-8-8z" />
      <path d="M12 8v4" />
    </svg>
  ),
  Tailwind: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-12 h-12"
    >
      <path d="M4 12c0-2 2-4 4-4 2 0 4 2 4 4 0 2-2 4-4 4-2 0-4-2-4-4z" />
      <path d="M16 12c0-2 2-4 4-4 2 0 4 2 4 4 0 2-2 4-4 4-2 0-4-2-4-4z" />
      <path d="M8 16c2 2 6 2 8 0" />
    </svg>
  ),
};

// --- Sub-Components ---

const BentoCard = ({
  title,
  subtitle,
  icon: Icon,
  size = "medium",
  bgClass = "bg-white/5",
  iconColor = "text-[var(--color-bigchill)]",
}) => {
  const sizeClasses = {
    large: "md:col-span-2 md:row-span-2 min-h-[300px]",
    medium: "md:col-span-1 md:row-span-1 min-h-[200px]",
    wide: "md:col-span-2 min-h-[200px]",
  };

  // Center content for large cards
  const isLarge = size === "large";

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -5 }}
      className={`relative overflow-hidden rounded-3xl p-8 border border-white/10 ${isLarge ? "bg-[#0a0a0a]" : "bg-[#111]"} ${sizeClasses[size]} group flex flex-col shadow-xl`}
    >
      {/* Watermark Icon */}
      <div
        className={`absolute pointer-events-none opacity-5 transition-opacity duration-500 group-hover:opacity-10 
                ${isLarge ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150" : "top-0 right-0 p-4"}`}
      >
        <Icon
          size={isLarge ? 240 : 120}
          className={iconColor}
          strokeWidth={isLarge ? 0.5 : 1}
        />
      </div>

      {/* Centered Radial Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-[var(--color-bigchill)]/40 blur-[80px] rounded-full pointer-events-none" />


      <div
        className={`relative z-10 h-full flex flex-col ${isLarge ? "justify-center items-center text-center" : "justify-end"}`}
      >
        <div
          className={`mb-6 p-4 ${isLarge ? "bg-[var(--color-bigchill)]/10 text-[var(--color-bigchill)] w-20 h-20 flex items-center justify-center rounded-2xl" : `${iconColor === "text-white" ? "bg-white/20" : "bg-[var(--color-bigchill)]/20"} w-fit rounded-xl ${iconColor}`}`}
        >
          <Icon
            size={isLarge ? 48 : 32}
            fill="currentColor"
            fillOpacity={0.2}
            strokeWidth={2}
          />
        </div>
        <h3
          className={`text-2xl md:text-3xl font-bold font-serif mb-4 text-white ${isLarge ? "" : ""}`}
        >
          {title}
        </h3>
        <p
          className={`text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed ${isLarge ? "text-lg max-w-lg" : ""}`}
        >
          {subtitle}
        </p>
      </div>
    </motion.div>
  );
};

const EcoCard = ({ title, icon: Icon, text, tags, number }) => (
  <motion.div
    variants={fadeInUp}
    className="group relative p-8 rounded-3xl border border-white/10 bg-[#111] hover:border-[var(--color-bigchill)]/30 transition-all duration-300 h-full flex flex-col shadow-lg"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-bigchill)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

    {/* Centered Radial Gradient (Added for consistency) */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-[var(--color-bigchill)]/20 blur-[60px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div className="relative z-10 flex flex-col h-full">
      <div className="flex justify-between items-start mb-6">
        <div className="p-4 bg-white/5 w-fit rounded-2xl border border-white/5 group-hover:bg-[var(--color-bigchill)]/20 group-hover:border-[var(--color-bigchill)]/30 transition-colors">
          <Icon
            size={32}
            className="text-[var(--color-bigchill)]"
            strokeWidth={1.5}
          />
        </div>
        {number && (
          <span className="text-4xl font-serif font-bold text-white/10 group-hover:text-[var(--color-bigchill)]/40 transition-colors">
            {number}
          </span>
        )}
      </div>

      <h3 className="text-2xl font-bold font-sans mb-4 text-white group-hover:text-[var(--color-bigchill)] transition-colors">
        {title}
      </h3>

      <p className="text-gray-400 leading-relaxed mb-6 flex-grow">{text}</p>

      <div className="mt-auto">
        <p className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-widest opacity-80">
          Core Capabilities
        </p>
        <div className="w-full bg-[var(--color-bigchill)]/10 text-[var(--color-bigchill)] border border-[var(--color-bigchill)]/20 rounded-xl px-4 py-3 text-sm font-medium leading-relaxed">
          {tags.join(" • ")}
        </div>
      </div>
    </div>
  </motion.div>
);

const TimelineStep = ({ step, title, description, isActive, isCompleted }) => (
  <div
    className={`flex-1 relative group min-w-[140px] md:min-w-0 ${isActive || isCompleted ? "opacity-100" : "opacity-60 hover:opacity-100"} transition-opacity p-2`}
  >
    <div className="flex items-center mb-4">
      <div
        className={`relative w-12 h-12 rounded-full flex items-center justify-center border-2 font-bold z-10 transition-all duration-500 
                ${isActive || isCompleted
            ? "border-[var(--color-bigchill)] bg-[var(--color-bigchill)] text-white" +
            (isActive
              ? " shadow-[0_0_20px_rgba(14,165,164,0.6)] scale-110"
              : "")
            : "border-white/20 bg-black/50 text-gray-400 group-hover:border-[var(--color-bigchill)] group-hover:text-[var(--color-bigchill)]"
          }`}
      >
        {step}
      </div>
      <div
        className={`flex-1 h-0.5 ml-3 transition-colors duration-500 rounded-full ${isCompleted ? "bg-[var(--color-bigchill)] shadow-[0_0_10px_rgba(14,165,164,0.4)]" : "bg-white/10 group-hover:bg-[var(--color-bigchill)]/30"}`}
      />
    </div>
    <h4
      className={`text-lg font-bold mb-1 transition-colors ${isActive || isCompleted ? "text-[var(--color-bigchill)]" : "text-gray-200 group-hover:text-white"}`}
    >
      {title}
    </h4>
    <p className="text-gray-500 text-sm group-hover:text-gray-300 transition-colors duration-300 leading-snug">
      {description}
    </p>
  </div>
);

const TechMarquee = () => {
  // Array of Logo Components
  const logos = [
    { c: TechLogos.React, n: "React" },
    { c: TechLogos.NextJS, n: "Next.js" },
    { c: TechLogos.TypeScript, n: "TypeScript" },
    { c: TechLogos.NodeJS, n: "Node.js" },
    { c: TechLogos.AWS, n: "AWS" },
    { c: TechLogos.Docker, n: "Docker" },
    { c: TechLogos.PostgreSQL, n: "PostgreSQL" },
    { c: TechLogos.Tailwind, n: "Tailwind" },
  ];

  return (
    <div className="w-full overflow-hidden bg-[var(--color-bigchill)]/5 py-12 border-y border-[var(--color-bigchill)]/10 text-gray-900">
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee-right group-hover:[animation-play-state:paused] whitespace-nowrap flex gap-20 items-center pl-10">
          {[...logos, ...logos, ...logos].map((item, i) => (
            <div
              key={i}
              className="group/logo flex flex-col items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer transform hover:scale-110"
            >
              <item.c />
            </div>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee-right-2 group-hover:[animation-play-state:paused] whitespace-nowrap flex gap-20 items-center pl-10">
          {[...logos, ...logos, ...logos].map((item, i) => (
            <div
              key={`dup-${i}`}
              className="group/logo flex flex-col items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer transform hover:scale-110"
            >
              <item.c />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen text-gray-900 selection:bg-[var(--color-bigchill)] selection:text-white font-sans relative">


      <div className="relative z-10">
        {/* 1. Narrative Hero */}
        <Section className="min-h-[85vh] flex flex-col justify-center items-center text-center pt-32 pb-20 relative overflow-hidden">
          {/* Removed local background gradient to expose global one */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 px-5 py-2 rounded-full border border-bigchill/20 bg-bigchill/10 text-sm font-bold text-bigchill tracking-wide uppercase relative z-10"
          >
            Engineering Value, Not Just Code
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold font-serif mb-8 tracking-tight max-w-5xl leading-[1.1] relative z-10 text-gray-900"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-bigchill to-teal-600">Vooklu</span>{" "}
            Story
          </motion.h1>

          <motion.div
            variants={fadeInUp}
            className="max-w-3xl mx-auto space-y-8 text-lg md:text-xl text-gray-900 leading-relaxed font-medium relative z-10"
          >
            <p>
              At Vooklu, we noticed a flaw in the software industry: businesses
              were forced to choose between{" "}
              <span className="text-black font-bold">expensive</span>,{" "}
              <span className="text-black font-bold">
                slow-moving agencies
              </span>{" "}
              or{" "}
              <span className="text-black font-bold">
                unreliable, solitary freelancers
              </span>
              . We built{" "}
              <span className="text-bigchill font-bold">
                Vooklu
              </span>{" "}
              to be the{" "}
              <span className="text-bigchill font-bold">
                Bridge
              </span>
              .
            </p>
            <p>
              We are a modern digital agency that combines the stability of
              corporate architecture with the agility of a distributed freelance
              network. We strip away the "agency fluff"—expensive offices and
              idle employees—and pass those savings directly to you.
            </p>
          </motion.div>
        </Section>

        {/* 2. Philosophy Bento Grid */}
        <Section>
          <div className="border border-white/10 rounded-[3rem] p-6 md:p-8 bg-white/[0.02] max-w-6xl mx-auto shadow-2xl">
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-2 gap-6"
            >
              <BentoCard
                size="large"
                icon={Ruler}
                title="No One-Size-Fits-All"
                subtitle="We don’t sell you enterprise-grade AWS servers if you only need a lightweight database. Whether you are a local gym or a SaaS startup, we custom-engineer your tech stack to fit your budget."
              />

              <BentoCard
                size="medium"
                icon={Network}
                title="The Freelance Advantage"
                subtitle="Access to top-tier talent across India without the agency markup. We recruit strictly on a project basis."
                bgClass="bg-gradient-to-br from-indigo-900/20 to-black border-indigo-500/20"
                iconColor="text-indigo-400"
              />

              <BentoCard
                size="medium"
                icon={ShieldCheck}
                title="Transparent Pricing"
                subtitle="No hidden costs. Detailed contracts. You pay for engineering, not our office rent."
              />
            </motion.div>
          </div>
        </Section>

        {/* 3. Operational Operational Structure */}
        <Section>
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-gray-900">
              Our Operational Structure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We bridge the gap between complex engineering and business
              reliability. Vooklu operates as a unified machine driven by three
              core divisions.
            </p>
          </div>

          <div className="max-w-7xl mx-auto mb-12">
            <ThreeDCarousel
              items={[
                <EcoCard
                  number="01"
                  title="Product Strategy & Experience"
                  icon={PenTool}
                  text="Great software starts with clear intent. Our Strategy Division translates your business goals into user-centric digital roadmaps. We don't just design screens; we engineer user journeys, ensuring every pixel serves a business function before a single line of code is written."
                  tags={[
                    "UI/UX Architecture",
                    "Product Roadmapping",
                    "Prototype Validation",
                  ]}
                />,
                <EcoCard
                  number="02"
                  title="Core Engineering & Architecture"
                  icon={Code2}
                  text="Our development is anchored by senior technical architects who oversee every build. We adhere to strict coding standards, utilizing 'One Codebase' methodologies to deploy unified applications across Web, Mobile, and Desktop. This ensures your product is scalable, secure, and future-proof."
                  tags={[
                    "MERN Ecosystem",
                    "Cloud Infrastructure",
                    "Cross-Platform Development",
                  ]}
                />,
                <EcoCard
                  number="03"
                  title="Delivery & Operations"
                  icon={ClipboardCheck}
                  text="Execution is our product. Our Operations Unit applies corporate-grade project management rigor to agile development. We bridge the gap between complex engineering and business deadlines, ensuring that every project is delivered on time, within budget, and defect-free."
                  tags={[
                    "Agile Project Management",
                    "Quality Assurance",
                    "Deployment Strategy",
                  ]}
                />
              ]}
              itemCount={3}
              className="h-[600px] md:h-[500px]"
            />
          </div>

          {/* Squad/Pod Banner */}
          <motion.div
            variants={fadeInUp}
            className="max-w-7xl mx-auto rounded-3xl p-8 md:p-12 relative overflow-hidden text-center md:text-left border border-white bg-white/60 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] group/banner isolate"
          >
            {/* Ambient Radial Glow & Grid Mesh */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,164,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,164,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-40" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-bigchill)]/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

            <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
              <div className="max-w-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-1 bg-[var(--color-bigchill)] rounded-full shadow-[0_0_10px_rgba(14,165,164,0.4)]" />
                  <span className="font-mono text-xs text-[var(--color-bigchill)] tracking-widest uppercase font-bold">
                    System Architecture
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold font-heading mb-4 tracking-tight text-gray-900 drop-shadow-sm">
                  The Vooklu Development Squad
                </h3>

                <h4 className="text-lg font-medium text-gray-700/80 mb-6 tracking-wide font-sans flex items-center gap-2">
                  <span className="text-[var(--color-bigchill)]">///</span>
                  Engineered for Velocity & Scale
                </h4>

                <p className="text-gray-700 text-lg leading-relaxed border-l-2 border-[var(--color-bigchill)]/30 pl-6">
                  We don't just assign developers. We deploy a <span className="text-gray-900 font-bold">calibrated product pod</span> designed to ship enterprise-grade software from day one.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-auto">
                {[
                  {
                    role: "Lead Architect",
                    count: "1x",
                    desc: "System Core & Security",
                    accent: "border-cyan-500/30",
                    highlight: "text-cyan-700",
                    bgHighlight: "bg-cyan-50",
                  },
                  {
                    role: "Senior Devs",
                    count: "2-3x",
                    desc: "React / Node / Mobile",
                    accent: "border-indigo-500/30",
                    highlight: "text-indigo-700",
                    bgHighlight: "bg-indigo-50",
                  },
                  {
                    role: "QA Specialist",
                    count: "1x",
                    desc: "Automated Testing",
                    accent: "border-pink-500/30",
                    highlight: "text-pink-700",
                    bgHighlight: "bg-pink-50",
                  },
                  {
                    role: "Product Manager",
                    count: "1x",
                    desc: "Timeline & Strategy",
                    accent: "border-emerald-500/30",
                    highlight: "text-emerald-700",
                    bgHighlight: "bg-emerald-50",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`group/card relative bg-white border border-gray-100 rounded-xl p-5 w-full md:w-[260px] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden shadow-lg border-l-4 !border-l-[var(--color-bigchill)] ${i === 0 ? "sm:col-span-2 md:col-span-1" : ""}`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className={`font-mono text-xs ${item.highlight} ${item.bgHighlight} px-2 py-1 rounded border border-black/5 tracking-wider font-bold`}>
                        {item.count}
                      </div>
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover/card:bg-[var(--color-bigchill)] transition-colors" />
                    </div>

                    <h5 className="text-gray-900 font-bold text-base mb-1 group-hover/card:text-black flex items-center gap-2">
                      {item.role}
                    </h5>

                    <p className="text-gray-700 text-xs font-mono group-hover/card:text-gray-900 transition-colors">
                      // {item.desc}
                    </p>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50/50 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </Section>

        {/* 4. The Glass Kitchen (Timeline) */}
        <Section className="bg-[#0a0a0a] my-12 rounded-[3rem] mx-0 md:mx-8 border border-white/10 shadow-2xl relative">
          <div className="absolute inset-0 bg-white/5 pointer-events-none" />
          <ScrollTimeline
            title='The "Glass Kitchen" Approach'
            subtitle="We hate black boxes. Track your project's heartbeat in real-time."
            cardEffect="glow"
            timelineTitle="Project Lifecycle"
            events={[
              { year: "Phase 1", title: "Planning", description: "Scope definition, requirements gathering, and contract finalization. We align on specific deliverables." },
              { year: "Phase 2", title: "Designing", description: "UI/UX wireframes, high-fidelity prototypes, and user journey mapping. You see the product before we code." },
              { year: "Phase 3", title: "Development", description: "Sprint-based coding. You get a live staging link to watch your product come to life feature by feature." },
              { year: "Phase 4", title: "Testing", description: "Rigorous QA, security scanning, and load testing to ensure a bug-free launch." },
              { year: "Phase 5", title: "Hosting", description: "Server setup, domain configuration, and CDN integration for optimal performance." },
              { year: "Phase 6", title: "Deployment", description: "Live launch and handover. We ensure a smooth transition to production." },
            ]}
          />
        </Section>

        {/* 5. Trust Signals: Capabilities & Anti-WP */}
        <Section className="py-20">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
            {/* Capabilities Card */}
            <div className="bg-[#111] border border-white/10 p-8 rounded-2xl flex flex-col h-full shadow-lg">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-[var(--color-bigchill)]/10 rounded-lg text-[var(--color-bigchill)]">
                  <Cpu size={28} fill="currentColor" fillOpacity={0.2} />
                </div>
                <h3 className="text-3xl font-bold font-serif text-white">Capabilities</h3>
              </div>

              <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                {[
                  "Real-time Data Processing",
                  "Secure Payment Gateways",
                  "AI Integration (LLMs)",
                  "SaaS Multi-tenancy",
                  "Trading Dashboards",
                  "Custom CRM Systems",
                  "Mobile Apps (iOS/Android)",
                  "Cloud Automation",
                ].map((cap, i) => (
                  <div key={i} className="flex items-start gap-2 text-gray-300">
                    <CheckCircle
                      size={18}
                      className="text-[var(--color-bigchill)] shrink-0 mt-[3px]"
                      fill="currentColor"
                      fillOpacity={0.2}
                    />
                    <span className="text-sm font-medium">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech We Don't Use Card */}
            <div className="bg-[#1a0505] border border-red-500/10 p-8 rounded-2xl flex flex-col h-full shadow-lg">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-red-500/10 rounded-lg text-red-500">
                  <XCircle size={28} fill="currentColor" fillOpacity={0.2} />
                </div>
                <h3 className="text-3xl font-bold font-serif text-gray-200">
                  The Tech We Don't Use
                </h3>
              </div>

              <p className="text-gray-400 mb-6 text-lg">
                We prefer performance over shortcuts. That implies:
              </p>
              <ul className="space-y-4 text-gray-300 flex-1">
                <li className="flex items-center gap-3 opacity-90 p-3 bg-red-500/5 rounded-lg border border-red-500/5">
                  <span className="w-2 h-2 bg-red-500 rounded-full" />
                  No WordPress Templates
                </li>
                <li className="flex items-center gap-3 opacity-90 p-3 bg-red-500/5 rounded-lg border border-red-500/5">
                  <span className="w-2 h-2 bg-red-500 rounded-full" />
                  No "Drag-and-Drop" Site Builders
                </li>
                <li className="flex items-center gap-3 opacity-90 p-3 bg-red-500/5 rounded-lg border border-red-500/5">
                  <span className="w-2 h-2 bg-red-500 rounded-full" />
                  No Bloated Themes
                </li>
              </ul>
              <p className="mt-8 text-sm text-gray-500 border-t border-red-500/10 pt-6">
                We write custom, clean code. This ensures your application is
                fast, secure, and truly scalable.
              </p>
            </div>
          </div>
        </Section>

        {/* 6. Tech Stack Marquee (Logo Version) */}
        <div className="py-16 bg-transparent border-y border-[var(--color-bigchill)]/10">
          <p className="text-center text-xs font-bold tracking-[0.2em] text-[var(--color-bigchill)] uppercase mb-12">
            Powering Next-Gen Applications
          </p>
          <TechMarquee />
        </div>

        {/* 7. Split CTA */}
        <Section className="pb-32 pt-20 bg-black">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-12">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="p-12 bg-[#0a0a0a] border border-[var(--color-bigchill)]/30 rounded-3xl w-full relative overflow-hidden group shadow-[0_0_80px_-20px_rgba(14,165,164,0.3)]"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(14,165,164,0.2),transparent_70%)] pointer-events-none" />

              <h3 className="text-4xl md:text-5xl font-bold font-serif mb-6 relative z-10 text-white leading-tight">
                Ready to build something <br />{" "}
                <span className="text-[var(--color-bigchill)]">
                  world-class?
                </span>
              </h3>
              <p className="text-gray-300 mb-10 max-w-lg mx-auto relative z-10 text-lg">
                Stop searching. Start building. Let's engineer your vision.
              </p>

              <div className="relative z-10">
                <motion.button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  whileHover={{
                    boxShadow: "0px 0px 30px rgba(14, 165, 164, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-[var(--color-bigchill)] text-white text-lg font-bold rounded-full flex items-center gap-3 mx-auto transition-all"
                >
                  Start Your Project <ArrowRight size={20} />
                </motion.button>
              </div>
            </motion.div>

            <div className="pt-8 w-full max-w-md">
              <p className="text-gray-400 text-base mb-3 font-medium">
                Are you a top 1% developer?
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-gray-200 hover:text-white text-base font-medium flex items-center justify-center gap-2 mx-auto transition-colors group"
              >
                Join our Delivery Network{" "}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>
        </Section>
      </div>

      <WorkWithUsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default About;