import React from "react";
import { motion } from "framer-motion";
import {
  Server,
  Smartphone,
  ShieldCheck,
  Palette,
  Cloud,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Monitor,
  Layout,
  Zap,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const Card = ({ icon: Icon, title, description, children }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ y: -5 }}
    className="glass-panel p-6 rounded-2xl h-full flex flex-col items-start border-l-4 border-l-[var(--color-bigchill)]"
  >
    <div className="p-3 bg-[var(--color-bigchill)]/10 rounded-lg mb-4 text-[var(--color-bigchill)]">
      <Icon size={32} />
    </div>
    <h3 className="text-xl font-bold mb-3 font-heading">{title}</h3>
    {description && <p className="text-gray-400 mb-4">{description}</p>}
    <div className="text-sm text-gray-400">{children}</div>
  </motion.div>
);

const About = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[var(--color-bigchill)] selection:text-white">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[var(--color-bigchill)]/10 rounded-full blur-[100px] animate-blob" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <Section className="min-h-[80vh] flex flex-col justify-center items-center text-center pt-32">
          <motion.h1
            className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            About <span className="text-[var(--color-bigchill)]">WebOrbs</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            We designs, builds, manages, and scales websites, web applications,
            and mobile applications for businesses of all sizes.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="mt-12 p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm max-w-5xl"
          >
            <p className="text-xl text-gray-200">
              Our approach is simple: deliver premium-quality products using
              modern technologies while keeping the cost as low as possible. We
              believe that great software should be smart, efficient,
              transparent, and affordable.
            </p>
          </motion.div>
        </Section>

        {/* Philosophy */}
        <Section>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              No “One-Size-Fits-All”
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We don’t build “one-size-fits-all” products. Every project is
              tailored according to your business size, audience, and goals. You
              only pay for what you actually need. No unnecessary features. No
              overpowered infrastructure. No hidden costs.
            </p>
          </div>
        </Section>

        {/* Team Structure */}
        <Section>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Our Team Structure
            </h2>
            <p className="text-gray-300 max-w-3xl text-lg">
              At WebOrbs, we operate with a distributed and highly flexible team
              model. Instead of limiting ourselves to a small in-house team, we
              collaborate with multiple skilled professionals from all over
              India on a freelance basis.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <Card
              icon={Layout}
              title="Front-End Developers"
              description="Specialists in modern UI/UX design, responsive layouts, animations, and performance-optimized interfaces."
            >
              <ul className="list-disc pl-4 space-y-1">
                <li>React, Next.js</li>
                <li>TypeScript</li>
                <li>Advanced CSS</li>
              </ul>
            </Card>

            <Card
              icon={Server}
              title="Back-End Developers"
              description="Professionals experienced in building secure, scalable, and high-performance systems."
            >
              <ul className="list-disc pl-4 space-y-1">
                <li>Node.js, Express</li>
                <li>MongoDB, PostgreSQL</li>
                <li>Cloud Services, APIs</li>
              </ul>
            </Card>

            <Card
              icon={Smartphone}
              title="Mobile App Developers"
              description="Developers focused on creating fast, smooth, and user-friendly mobile applications."
            >
              <ul className="list-disc pl-4 space-y-1">
                <li>React Native</li>
                <li>Cross-platform</li>
                <li>Modern Frameworks</li>
              </ul>
            </Card>

            <Card
              icon={ShieldCheck}
              title="Testing & QA Team"
              description="A dedicated group ensuring every product is bug-free, optimized, and secure."
            >
              <ul className="list-disc pl-4 space-y-1">
                <li>Bug-free</li>
                <li>Performance-optimized</li>
                <li>Secure & Fully functional</li>
              </ul>
            </Card>

            <Card
              icon={Palette}
              title="UI/UX Designers"
              description="Designers who craft clean, modern, and professional interfaces that focus on user experience and conversion."
            >
              <p>Modern & Professional Interfaces.</p>
            </Card>

            <Card
              icon={Cloud}
              title="DevOps & Deployment"
              description="Experts handling hosting, CI/CD pipelines, server optimization, and security."
            >
              <ul className="list-disc pl-4 space-y-1">
                <li>Hosting & CI/CD</li>
                <li>Cloud Infrastructure</li>
                <li>Security Configurations</li>
              </ul>
            </Card>
          </motion.div>

          <div className="mt-12 bg-[var(--color-bigchill)]/10 border border-[var(--color-bigchill)]/20 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold font-heading mb-4 text-[var(--color-bigchill)]">
              The Advantage
            </h3>
            <p className="text-gray-300 mb-4">
              We can scale our team instantly depending on your project size.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-black/20 p-4 rounded-lg">
                <strong className="text-white block mb-1">
                  Small Project?
                </strong>
                <span className="text-gray-400">
                  We assign a compact, efficient team.
                </span>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <strong className="text-white block mb-1">
                  Large Project?
                </strong>
                <span className="text-gray-400">
                  We deploy multiple specialists at once.
                </span>
              </div>
            </div>
            <p className="mt-4 font-semibold text-white">
              You get the power of a large development company without paying
              enterprise-level prices.
            </p>
          </div>
        </Section>

        {/* Comparison Section */}
        <Section className="bg-white/5">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8 text-center">
            Why Our Team Model Works Better
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-red-400">
                Traditional Agencies
              </h3>
              <p className="text-gray-400">
                Hire full-time employees, which increases overhead costs. Those
                costs are passed on to clients.
              </p>
              <div className="h-px bg-white/10 w-full" />
              <p className="text-gray-500 italic">
                "High Overhead = High Prices"
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[var(--color-bigchill)]">
                WebOrbs Approach
              </h3>
              <p className="text-gray-300">Our freelance-based model means:</p>
              <ul className="space-y-3">
                {[
                  "Lower operational costs",
                  "Faster hiring of specialized talent",
                  "Access to top developers from across India",
                  "More affordable pricing for clients",
                  "Better quality control",
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckCircle
                      size={20}
                      className="text-[var(--color-bigchill)]"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-300 mt-4 border-l-4 border-[var(--color-bigchill)] pl-4">
                We avoid that. We don’t compromise on skill. We only collaborate
                with freelancers who are proven in their domain and have strong
                real-world project experience.
              </p>
            </div>
          </div>
        </Section>

        {/* Project Allocation */}
        <Section>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8 text-center">
            Project-Based Team Allocation
          </h2>
          <div className="glass-panel p-8 rounded-2xl max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-300 mb-6">
              For every project, we create a custom team that may include:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "1–2 Front-End Developers",
                "1–2 Back-End Developers",
                "1 QA Engineer",
                "1 UI/UX Designer",
                "1 Deployment Specialist",
              ].map((role, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium border border-white/10 hover:bg-[var(--color-bigchill)] hover:border-[var(--color-bigchill)] transition-colors"
                >
                  {role}
                </span>
              ))}
            </div>
            <p className="mt-8 text-xl font-semibold text-[var(--color-bigchill)]">
              This ensures that your product is built by specialists, not
              generalists.
            </p>
          </div>
        </Section>

        {/* Trust */}
        <Section>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Trust Through Structure, Not Size
            </h2>
            <p className="text-gray-300 mb-8">
              We don’t believe that a company’s credibility comes from showing
              how many “core members” it has. It comes from:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Quality of Work", icon: Zap },
                { label: "Structure of Workflow", icon: Layout },
                { label: "Transparency", icon: Monitor },
                { label: "Results Delivered", icon: CheckCircle },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center p-4 bg-white/5 rounded-xl"
                >
                  <item.icon
                    className="text-[var(--color-bigchill)] mb-3"
                    size={28}
                  />
                  <span className="font-medium text-center">{item.label}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-gray-400 text-sm">
              Our distributed team structure allows us to handle multiple
              projects simultaneously while maintaining consistency, security,
              and performance in every delivery.
            </p>
          </div>
        </Section>

        {/* What We Build */}
        <Section className="bg-white/5">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8">
                What We Build
              </h2>
              <ul className="space-y-4">
                {[
                  "Static websites",
                  "Full-stack web applications",
                  "Mobile applications",
                  "Admin dashboards",
                  "SaaS platforms",
                  "Internal business tools",
                  "Subscription-based products",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center space-x-3 text-lg text-gray-300"
                  >
                    <div className="w-2 h-2 bg-[var(--color-bigchill)] rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8">
                Technology Stack
              </h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "MongoDB",
                  "PostgreSQL",
                  "TypeScript",
                  "Next.js",
                  "React",
                  "Node.js",
                  "Express",
                  "AWS",
                  "Google Cloud",
                  "React Native",
                  "TailwindCSS",
                ].map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 border border-white/20 rounded-lg text-gray-300 hover:border-[var(--color-bigchill)] hover:text-[var(--color-bigchill)] transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-gray-400 text-sm">
                We never use outdated tools. If you’re paying for a product, it
                must be built using modern, future-ready technology.
              </p>
            </div>
          </div>
        </Section>

        {/* Smart Budget & Process Grid */}
        <Section>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Smart Budget */}
            <div className="glass-panel p-8 rounded-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <DollarSign
                  className="text-[var(--color-bigchill)]"
                  size={32}
                />
                <h3 className="text-2xl font-bold font-heading">
                  Smart Budget
                </h3>
              </div>
              <p className="text-gray-300 mb-4">
                We strongly believe in intelligent infrastructure planning. We
                never force expensive infrastructure when it isn’t needed.
              </p>
              <div className="bg-black/30 p-4 rounded-xl border border-white/5 mb-4">
                <p className="text-sm text-gray-400">Small Audience?</p>
                <p className="text-white">
                  Lightweight databases & cost-efficient hosting.
                </p>
              </div>
              <div className="bg-black/30 p-4 rounded-xl border border-white/5 mb-6">
                <p className="text-sm text-gray-400">Large Audience?</p>
                <p className="text-white">
                  Scalable cloud solutions like AWS or Google Cloud.
                </p>
              </div>
              <p className="font-semibold text-[var(--color-bigchill)]">
                Target: Deliver ₹1,00,000 quality for ₹30,000–₹40,000.
              </p>
            </div>

            {/* Other Process Details */}
            <div className="space-y-6">
              <div className="glass-panel p-6 rounded-2xl">
                <h4 className="text-xl font-bold font-heading mb-2">
                  Domain & Hosting
                </h4>
                <p className="text-gray-300 text-sm">
                  Usually, clients purchase their own domain. We handle setup,
                  deployment, and configuration. We can also purchase it on your
                  behalf if needed.
                </p>
              </div>

              <div className="glass-panel p-6 rounded-2xl">
                <h4 className="text-xl font-bold font-heading mb-2">
                  Project Tracking
                </h4>
                <p className="text-gray-300 text-sm mb-3">
                  You receive a Reference ID to track every stage:
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-gray-400">
                  {[
                    "Planning",
                    "Designing",
                    "Development",
                    "Testing",
                    "Hosting",
                    "Deployment",
                  ].map((step, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-white/5 rounded border border-white/10"
                    >
                      {step}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass-panel p-6 rounded-2xl">
                <h4 className="text-xl font-bold font-heading mb-2">
                  Delivery Commitment
                </h4>
                <p className="text-gray-300 text-sm">
                  We usually deliver projects before the deadline. In rare cases
                  of delay, we notify you in advance with full transparency.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Free Consultation & Contact */}
        <Section className="bg-[var(--color-bigchill)] text-white relative overflow-hidden rounded-3xl mx-4 md:mx-12 my-12">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
                Free Consultation
              </h2>
              <p className="text-lg md:text-xl opacity-90 mb-6">
                Book a free 10-minute call. Explain your idea, and we'll suggest
                the best technical solution with a cost and timeline estimate.
              </p>
              <div className="space-y-2 mb-8">
                <p className="font-semibold">Available Slots:</p>
                <div className="grid grid-cols-2 gap-2 text-sm opacity-90">
                  <span>1:00 PM – 2:00 PM</span>
                  <span>3:00 PM – 4:00 PM</span>
                  <span>5:00 PM – 6:00 PM</span>
                  <span>7:00 PM – 8:00 PM</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl border border-white/30">
                <h3 className="font-bold text-xl mb-4">Connect With Us</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <ArrowRight size={18} /> <span>Contact Form</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ArrowRight size={18} /> <span>Request A Call</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ArrowRight size={18} /> <span>Email</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Pricing & Policy */}
        <Section>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold font-heading mb-4">
                Transparent Pricing
              </h3>
              <p className="text-gray-300 mb-2">
                All prices on our website are base prices.
              </p>
              <div className="bg-white/5 p-4 rounded-lg border-l-4 border-yellow-500 mb-6">
                <p className="text-sm text-gray-400">
                  Additional charges apply for:
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-500 rounded text-xs">
                    Extra Features
                  </span>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-500 rounded text-xs">
                    Advanced Automation
                  </span>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-500 rounded text-xs">
                    Custom Integrations
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                We discuss these clearly before starting. No surprises later.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold font-heading mb-4">
                Contract Policy
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2" />
                  <span>
                    Contract covers Total Cost, Timeline, Tech Stack, and Scope.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2" />
                  <span>5–6 Design revisions allowed.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2" />
                  <span>2 Minor changes allowed after design approval.</span>
                </li>
              </ul>
              <div className="mt-4 p-3 border border-red-500/30 bg-red-500/10 rounded-lg text-xs text-red-300">
                Major changes (Theme, New Features) require additional cost.
              </div>
            </div>
          </div>
        </Section>

        {/* More Than Client Projects */}
        <Section className="bg-white/5">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              More Than Client Projects
            </h2>
            <p className="text-gray-300 mb-8">
              WebOrbs also develops its own digital products like SaaS tools,
              Dashboards, Automation systems, and Business utilities.
            </p>
            <div className="glass-panel p-6 rounded-xl inline-block text-left">
              <h4 className="font-bold text-lg mb-2">
                Example: Gym Management Dashboard
              </h4>
              <ul className="text-gray-400 text-sm space-y-1 list-disc pl-4">
                <li>Member registration</li>
                <li>Notifications</li>
                <li>Daily operations</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Mission & CTA */}
        <Section className="pb-32">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold font-heading">
              Our Mission
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
              <div className="p-4 rounded-xl border border-white/10 hover:border-[var(--color-bigchill)] transition-colors">
                <span className="block font-bold text-lg text-white">Low</span>
                <span className="text-gray-500 text-sm">Budget</span>
              </div>
              <div className="p-4 rounded-xl border border-white/10 hover:border-[var(--color-bigchill)] transition-colors">
                <span className="block font-bold text-lg text-white">High</span>
                <span className="text-gray-500 text-sm">Quality</span>
              </div>
              <div className="p-4 rounded-xl border border-white/10 hover:border-[var(--color-bigchill)] transition-colors">
                <span className="block font-bold text-lg text-white">Full</span>
                <span className="text-gray-500 text-sm">Transparency</span>
              </div>
              <div className="p-4 rounded-xl border border-white/10 hover:border-[var(--color-bigchill)] transition-colors">
                <span className="block font-bold text-lg text-white">
                  Better
                </span>
                <span className="text-gray-500 text-sm">Standards</span>
              </div>
            </div>

            <p className="text-xl text-gray-300 italic">
              "We build trust, long-term partnerships, and scalable digital
              solutions that grow with your business."
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mt-12 p-8 bg-gradient-to-r from-gray-900 to-black border border-white/20 rounded-3xl w-full"
            >
              <h3 className="text-2xl font-bold font-heading mb-4">
                Work With Us
              </h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                If you are a skilled developer, designer, tester, or DevOps
                engineer, apply through our Join Us form. When clients read
                this, they won’t see “a small team.” They’ll see a professional
                network-driven company.
              </p>
              <button className="px-8 py-4 bg-[var(--color-bigchill)] text-white font-bold rounded-full hover:bg-opacity-90 transition-all">
                Join Our Network
              </button>
            </motion.div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default About;
