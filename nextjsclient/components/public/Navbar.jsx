"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Services");
  const [flashingKey, setFlashingKey] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  const isHomePage = pathname === "/";

  const handleInteraction = (key) => {
    setFlashingKey(key);
    setTimeout(() => setFlashingKey(null), 200);
  };

  const handleNavigation = (href) => {
    if (!href.startsWith("#")) {
      return;
    }

    if (isHomePage) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/${href}`);
    }
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 70) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }

        if (currentScrollY > 10) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }

        lastScrollY = currentScrollY;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      setIsVisible(true);
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Services", href: "/learn-more" },
    { name: "Products", href: "/products" },
    { name: "Case Studies", href: "/work" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${isScrolled
          ? "bg-white/[0.96] backdrop-blur-md shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] py-2"
          : "bg-transparent py-3"
          } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-6 relative">
            <div
              className="flex-shrink-0 flex items-center gap-2 cursor-pointer group"
              onClick={() => router.push("/")}
            >
              <Image
                src="/images/name_logo.png"
                alt="Vooklu"
                width={200}
                height={40}
                priority
                fetchPriority="high"
                className="h-5 w-auto object-contain"
                sizes="(max-width: 768px) 120px, 200px"
              />
            </div>

            <div className="hidden md:flex items-center space-x-6 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) =>
                link.href.startsWith("#") ? (
                  <button
                    key={link.name}
                    onClick={() => {
                      setActiveLink(link.name);
                      handleInteraction(link.name);
                      handleNavigation(link.href);
                    }}
                    className={`text-sm font-medium transition-colors ${flashingKey === link.name
                      ? "text-bigchill"
                      : activeLink === link.name && isHomePage
                        ? "text-slate-900"
                        : "text-slate-600 hover:text-slate-900"
                      }`}
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setActiveLink(link.name);
                      handleInteraction(link.name);
                    }}
                    className={`text-sm font-medium transition-colors ${flashingKey === link.name
                      ? "text-bigchill"
                      : pathname === link.href
                        ? "text-slate-900"
                        : "text-slate-600 hover:text-slate-900"
                      }`}
                  >
                    {link.name}
                  </Link>
                ),
              )}
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="focus:outline-none p-2 min-w-[44px] min-h-[44px] flex items-center justify-center  transition-colors text-slate-800 hover:text-slate-600"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[60] bg-white md:hidden transition-transform duration-300 ease-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
              <Image src="/images/name_logo.png" alt="Vooklu" width={100} height={24} className="h-6 w-auto object-contain" />
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 -mr-2 text-slate-500 hover:text-slate-900 focus:outline-none"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 flex flex-col px-6 py-6 overflow-y-auto">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) =>
                link.href.startsWith("#") ? (
                  <button
                    key={link.name}
                    onClick={() => {
                      handleInteraction(link.name);
                      setActiveLink(link.name);
                      handleNavigation(link.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-lg font-medium py-3 border-b border-slate-50 transition-colors text-left ${flashingKey === link.name
                      ? "text-bigchill"
                      : activeLink === link.name && isHomePage
                        ? "text-slate-900"
                        : "text-slate-600"
                      }`}
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-lg font-medium py-3 border-b border-slate-50 transition-colors text-left ${flashingKey === link.name
                      ? "text-bigchill"
                      : pathname === link.href
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
                  </Link>
                ),
              )}
            </div>

            <div className="mt-auto pt-8 pb-4">
              <Link
                href="/contact"
                className={`w-full text-lg font-medium py-4 rounded-xl shadow-sm transition-all text-center block ${flashingKey === "startproject-mobile"
                  ? "bg-white text-bigchill border-2 border-bigchill"
                  : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                onClick={() => {
                  handleInteraction("startproject-mobile");
                  setIsMobileMenuOpen(false);
                }}
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
