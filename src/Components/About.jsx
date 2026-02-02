import React, { useState } from "react";
import { motion } from "framer-motion";
import WorkWithUsModal from "./WorkWithUsModal";
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
      className={`relative overflow-hidden rounded-3xl p-8 glass-panel border border-white/5 ${bgClass} ${sizeClasses[size]} group flex flex-col`}
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
          className={`text-2xl md:text-3xl font-bold font-serif mb-4 ${isLarge ? "" : ""}`}
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

const FounderCard = ({
  name,
  role,
  description,
  icon: Icon,
  skills,
  align = "left",
}) => (
  <motion.div
    variants={fadeInUp}
    className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-[var(--color-bigchill)]/50 transition-all duration-300 relative overflow-hidden h-full"
  >
    <div className={`flex flex-col gap-6 relative z-10 h-full`}>
      {/* Header */}
      <div
        className={`flex flex-col md:flex-row gap-5 items-center ${align === "right" ? "md:flex-row-reverse md:text-right" : "md:flex-row md:text-left"}`}
      >
        <div
          className={`w-24 h-24 shrink-0 rounded-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-black border-2 border-white/10 shadow-xl group-hover:border-[var(--color-bigchill)]/30`}
        >
          <Icon
            size={40}
            className="text-gray-300"
            fill="currentColor"
            fillOpacity={0.2}
            strokeWidth={1.5}
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <div className={align === "right" ? "md:text-right" : ""}>
            <h3 className="text-2xl font-bold font-serif mb-1">{name}</h3>
            <p className="text-[var(--color-bigchill)] font-bold tracking-wide text-sm uppercase">
              {role}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        className={`flex-1 ${align === "right" ? "md:text-right" : "md:text-left"}`}
      >
        <p className="text-gray-300 leading-relaxed text-base opacity-90">
          {description}
        </p>
      </div>

      {/* Skills */}
      <div
        className={`flex flex-wrap gap-2 mt-auto pt-6 ${align === "right" ? "justify-center md:justify-end" : "justify-center md:justify-start"}`}
      >
        {skills.map((skill, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-white/5 rounded-full text-xs font-semibold text-gray-400 border border-white/5 hover:bg-white/10 hover:text-white transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
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
                ${
                  isActive || isCompleted
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
    <div className="w-full overflow-hidden bg-white/5 py-12 border-y border-white/5">
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap flex gap-20 items-center pl-10">
          {[...logos, ...logos, ...logos].map((item, i) => (
            <div
              key={i}
              className="group/logo flex flex-col items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer transform hover:scale-110"
            >
              <item.c />
            </div>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 group-hover:[animation-play-state:paused] whitespace-nowrap flex gap-20 items-center pl-10">
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
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[var(--color-bigchill)] selection:text-white font-sans">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[var(--color-bigchill)]/5 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10">
        {/* 1. Narrative Hero */}
        <Section className="min-h-[85vh] flex flex-col justify-center items-center text-center pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-gray-400 tracking-wide uppercase"
          >
            Engineering Value, Not Just Code
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold font-serif mb-8 tracking-tight max-w-5xl leading-[1.1]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            The <span className="text-[var(--color-bigchill)]">WebOrbs</span>{" "}
            Story
          </motion.h1>

          <motion.div
            variants={fadeInUp}
            className="max-w-3xl mx-auto space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed font-light"
          >
            <p>
              At WebOrbs, we noticed a flaw in the software industry: businesses
              were forced to choose between{" "}
              <span className="text-gray-500 font-normal">expensive</span>,{" "}
              <span className="text-gray-500 font-normal">
                slow-moving agencies
              </span>{" "}
              or{" "}
              <span className="text-gray-500 font-normal">
                unreliable, solitary freelancers
              </span>
              . We built{" "}
              <span className="text-[var(--color-bigchill)] font-semibold">
                WebOrbs
              </span>{" "}
              to be the{" "}
              <span className="text-[var(--color-bigchill)] font-semibold">
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
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-2 gap-6 max-w-6xl mx-auto"
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
        </Section>

        {/* 3. Leadership & Core Strategy */}
        <Section>
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
              Leadership & Core Strategy
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              WebOrbs is driven by two distinct forces: Creative Innovation and
              Corporate Stability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8 auto-rows-fr">
            <FounderCard
              name="Vikram Maurya"
              role="Head of Product & Design"
              icon={Cpu}
              description="With a deep focus on Product Strategy and User Interface Design, Vikram ensures your product isn't just built, but crafted for user retention. As a specialist in Generative AI, he orchestrates the integration of AI tools to accelerate development."
              skills={[
                "Product Strategy",
                "UI/UX Design",
                "Generative AI",
                "Web Security",
              ]}
            />

            <FounderCard
              name="Nishant Singh"
              role="Head of Engineering & Operations"
              icon={Server}
              align="right"
              description="Coming from a rigorous background in US Healthcare Operations, Nishant brings unmatched discipline to our infrastructure. He oversees the technical delivery network, ensuring that our systems scale seamlessly without crashing."
              skills={[
                "System Architecture",
                "Cloud Operations",
                "Scalability",
                "Team Management",
              ]}
            />
          </div>

          {/* The Delivery Network Card */}
          <motion.div
            variants={fadeInUp}
            className="max-w-6xl mx-auto rounded-3xl p-10 relative overflow-hidden glass-panel border border-white/10 group mt-8"
          >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="absolute top-0 right-0 p-10 opacity-30 text-[var(--color-bigchill)] pointer-events-none">
              <Globe size={300} strokeWidth={0.5} />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="p-6 bg-white/5 rounded-full border border-white/10 shrink-0">
                <Network
                  size={48}
                  className="text-[var(--color-bigchill)]"
                  fill="currentColor"
                  fillOpacity={0.2}
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold font-serif mb-3">
                  The Delivery Network
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                  Beyond our core leadership, WebOrbs operates a vetted network
                  of{" "}
                  <span className="text-white font-semibold">
                    10+ specialized engineers
                  </span>
                  . From Cloud Architects to React Native experts, we assemble
                  the perfect squad for your specific project scale.
                </p>
              </div>
            </div>
          </motion.div>
        </Section>

        {/* 4. The Glass Kitchen (Timeline) */}
        <Section className="bg-white/5 my-12 rounded-[3rem] mx-4 md:mx-8 border border-white/5">
          <div className="text-center mb-16 pt-8">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
              The "Glass Kitchen" Approach
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We hate black boxes. That’s why we introduced the WebOrbs Live
              Tracker. When you sign a contract, you receive a unique{" "}
              <strong>Reference ID</strong> to see exactly where your project
              stands in real-time.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 max-w-7xl mx-auto px-6 overflow-x-auto pb-12 items-start justify-between">
            {[
              { step: 1, title: "Planning", desc: "Scope & Contract" },
              { step: 2, title: "Designing", desc: "UI/UX Wireframes" },
              { step: 3, title: "Development", desc: "Coding phase" }, // Active
              { step: 4, title: "Testing", desc: "QA & Security" },
              { step: 5, title: "Hosting", desc: "Server Setup" },
              { step: 6, title: "Deployment", desc: "Live Launch" },
            ].map((item, index) => (
              <TimelineStep
                key={index}
                step={item.step}
                title={item.title}
                description={item.desc}
                isActive={index === 2} // Make step 3 active for demo
                isCompleted={index < 2}
              />
            ))}
          </div>
        </Section>

        {/* 5. Trust Signals: Capabilities & Anti-WP */}
        <Section className="py-20">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
            {/* Capabilities Card */}
            <div className="glass-panel border border-white/10 p-8 rounded-2xl flex flex-col h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-[var(--color-bigchill)]/10 rounded-lg text-[var(--color-bigchill)]">
                  <Cpu size={28} fill="currentColor" fillOpacity={0.2} />
                </div>
                <h3 className="text-3xl font-bold font-serif">Capabilities</h3>
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
            <div className="bg-red-900/5 border border-red-500/10 p-8 rounded-2xl flex flex-col h-full">
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
        <div className="py-16 bg-black border-y border-white/5">
          <p className="text-center text-xs font-bold tracking-[0.2em] text-gray-600 uppercase mb-12">
            Powering Next-Gen Applications
          </p>
          <TechMarquee />
        </div>

        {/* 7. Split CTA */}
        <Section className="pb-32 pt-20">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-12">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="p-12 bg-gradient-to-b from-[var(--color-bigchill)]/10 to-black border border-[var(--color-bigchill)]/30 rounded-3xl w-full relative overflow-hidden group shadow-[0_0_80px_-20px_rgba(14,165,164,0.3)]"
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
              <p className="text-gray-600 text-sm mb-3 font-medium">
                Are you a top 1% developer?
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-gray-400 hover:text-white text-sm font-medium flex items-center justify-center gap-2 mx-auto transition-colors group"
              >
                Join our Delivery Network{" "}
                <ArrowRight
                  size={14}
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
