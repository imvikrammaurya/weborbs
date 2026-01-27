import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Globe } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Services");
  const [flashingKey, setFlashingKey] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const handleInteraction = (key) => {
    setFlashingKey(key);
    setTimeout(() => setFlashingKey(null), 200);
  };

  // Scroll detection
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine visibility based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 70) {
        setIsVisible(false); // Hide when scrolling down
        setIsResourcesOpen(false); // Close dropdown when scrolling down
      } else {
        setIsVisible(true); // Show when scrolling up
      }

      // Determine appearance based on position
      if (currentScrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      setIsVisible(true); // Ensure visible when menu is open
    } else {
      document.body.style.overflow = "unset";
      // isVisible is handled by scroll
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Solutions", href: "#process" },
    { name: "Work", href: "#testimonials" },
    { name: "About", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-white/[0.96] backdrop-blur-md shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] py-2"
            : "bg-transparent py-3"
        } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-6">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
              <div
                className={`w-6 h-6 rounded flex items-center justify-center transition-colors ${isScrolled ? "bg-slate-900 text-white" : "bg-slate-900 text-white"}`}
              >
                <Globe size={14} strokeWidth={2.5} />
              </div>
              <span
                className={`font-bold text-base tracking-tight transition-colors ${isScrolled ? "text-slate-900" : "text-slate-900"}`}
              >
                WebOrbs
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.name);
                    handleInteraction(link.name);
                    setIsResourcesOpen(false); // Close dropdown if other link clicked
                  }}
                  className={`text-sm font-medium transition-colors ${
                    flashingKey === link.name
                      ? "text-bigchill"
                      : activeLink === link.name
                        ? "text-slate-900"
                        : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                </a>
              ))}

              <div className="relative group">
                <button
                  onClick={() => {
                    handleInteraction("resources");
                    setIsResourcesOpen(!isResourcesOpen);
                  }}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors focus:outline-none ${
                    flashingKey === "resources"
                      ? "text-bigchill"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Resources
                  <ChevronDown
                    size={11}
                    className={`transition-transform duration-200 ${isResourcesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown Menu (Click Toggle Only) */}
                <div
                  className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 transition-all duration-200 delay-150 transform origin-top-left ring-1 ring-black/5 ${
                    isResourcesOpen
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  }`}
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                  >
                    Blog
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                  >
                    Case Studies
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                  >
                    Documentation
                  </a>
                </div>
              </div>
            </div>

            {/* Desktop Right Actions */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="#"
                onClick={() => handleInteraction("signin")}
                className={`font-medium text-sm transition-colors border border-slate-200 hover:border-slate-400 px-4 py-1 rounded-full ${
                  flashingKey === "signin"
                    ? "text-bigchill border-bigchill"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Sign in
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-800 hover:text-slate-600 focus:outline-none p-1"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-[60] bg-white md:hidden transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
            {/* Mobile Logo */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded flex items-center justify-center bg-slate-900 text-white">
                <Globe size={14} strokeWidth={2.5} />
              </div>
              <span className="font-bold text-base tracking-tight text-slate-900">
                WebOrbs
              </span>
            </div>
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 -mr-2 text-slate-500 hover:text-slate-900 focus:outline-none"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Content */}
          <div className="flex-1 flex flex-col px-6 py-6 overflow-y-auto">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-lg font-medium py-3 border-b border-slate-50 transition-colors ${
                    flashingKey === link.name
                      ? "text-bigchill"
                      : activeLink === link.name
                        ? "text-slate-900"
                        : "text-slate-600"
                  }`}
                  onClick={() => {
                    handleInteraction(link.name);
                    setActiveLink(link.name);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Subtle Divider before Resources */}
            <div className="my-2"></div>

            <div className="flex flex-col">
              <button
                className={`w-full flex items-center justify-between text-lg font-medium py-3 border-b border-slate-50 transition-colors ${flashingKey === "resources-mobile" ? "text-bigchill" : "text-slate-600"}`}
                onClick={() => {
                  handleInteraction("resources-mobile");
                  setIsResourcesOpen(!isResourcesOpen);
                }}
              >
                Resources
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${isResourcesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Mobile Submenu */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isResourcesOpen
                    ? "max-h-40 opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="flex flex-col space-y-3 pl-4 border-l-2 border-slate-100 ml-1">
                  {["Blog", "Case Studies", "Documentation"].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="text-base text-slate-500 hover:text-slate-900 font-medium transition-colors"
                      onClick={() => {
                        handleInteraction(item);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Sign In Link (below nav links) */}
            <div className="mt-6">
              <a
                href="#"
                className={`inline-block text-base font-medium transition-colors ${flashingKey === "signin-mobile" ? "text-bigchill" : "text-slate-900 hover:text-slate-600"}`}
                onClick={() => {
                  handleInteraction("signin-mobile");
                  setIsMobileMenuOpen(false);
                }}
              >
                Sign in
              </a>
            </div>

            {/* Primary CTA at Bottom */}
            <div className="mt-auto pt-8 pb-4">
              <a
                href="#contact"
                className={`w-full text-lg font-medium py-4 rounded-xl shadow-sm transition-all text-center block ${
                  flashingKey === "startproject-mobile"
                    ? "bg-white text-bigchill border-2 border-bigchill"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
                onClick={() => {
                  handleInteraction("startproject-mobile");
                  setIsMobileMenuOpen(false);
                }}
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
