import React from "react";
import { Instagram, Linkedin, Youtube, Twitter } from "lucide-react";
import Logo from "../assets/weborbs.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-8 py-12 md:px-16 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Logo and Subscribe Section */}
        <div className="col-span-1 md:col-span-1">
          <img src={Logo} alt="Logo" className="h-16 mb-4 object-contain" />
          <p className="text-gray-300 mb-6 text-sm">
            Get updates on new features and releases.
          </p>
          <div className="flex gap-2 mb-4">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent border border-gray-800 rounded px-4 py-2 text-sm text-gray-300 w-full focus:outline-none focus:border-gray-600"
            />
            <button className="bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white px-6 py-2 rounded text-sm font-medium transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-[10px] text-gray-400">
            We respect your privacy and only send what matters.
          </p>
        </div>

        {/* Services Column */}
        <div className="col-span-1">
          <h3 className="font-bold mb-6 text-sm md:text-base">Services</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Web design
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                App development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Maintenance
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Scaling
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Company
              </a>
            </li>
          </ul>
        </div>

        {/* About us Column */}
        <div className="col-span-1">
          <h3 className="font-bold mb-6 text-sm md:text-base">About us</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Our work
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Follow us
              </a>
            </li>
          </ul>
        </div>

        {/* Facebook / Socials Column */}
        <div className="col-span-1">
          <h3 className="font-bold mb-6 text-sm md:text-base">Facebook</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>
              <a
                href="#"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Instagram size={20} />
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231h.001zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>X</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Youtube size={20} />
                <span>YouTube</span>
              </a>
            </li>
          </ul>

          <div className="mt-8 text-sm text-gray-400 flex items-start gap-2">
            <span className="mt-1">&copy;</span>
            <p>
              2025 Generic
              <br />
              Digital Services
              <br />
              Studio.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center text-sm text-gray-400 gap-4">
        <div>
          <a href="#" className="hover:text-white transition-colors">
            Privacy policy
          </a>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">
            Terms of service
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Cookies settings
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Cookies Settings
          </a>
        </div>
      </div>
    </footer>
  );
}
