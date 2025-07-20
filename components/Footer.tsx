"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const tabs = [
    "Our Story",
    "Our Purpose",
    "Our People",
    "Mechano-Chemistry",
    "Join Us",
  ];

  const toLowerCase = (text: string) => {
    return `/${text.toLowerCase().replace(/\s+/g, "").replace(/[^a-z0-9-]/gi, "")}`;
  };

  return (
    <footer className="bg-gray-100 text-white relative overflow-hidden">
      <div className="bg-red-500 h-10 overflow-hidden relative sm:hidden">
        <motion.div
          className="absolute inset-0 flex items-center"
          initial={{ x: "0%" }}
          animate={{ x: "-500%" }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "linear",
          }}
        >
          <span className="whitespace-nowrap text-white font-semibold text-sm px-4">
            Kayco | Coming Soon &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kayco | Coming Soon &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kayco | Coming Soon &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kayco | Coming Soon &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kayco | Coming Soon &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kayco | Coming Soon &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kayco | Coming Soon &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kayco | Coming Soon &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kayco | Coming Soon &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kayco | Coming Soon &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kayco | Coming Soon &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kayco | Coming Soon &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span className="whitespace-nowrap text-white font-semibold text-sm px-4">
            Kayco | Coming Soon &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kayco | Coming Soon &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kayco | Coming Soon &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kayco | Coming Soon &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kayco | Coming Soon &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kayco | Coming Soon &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kayco | Coming Soon &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kayco | Coming Soon &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kayco | Coming Soon &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kayco | Coming Soon &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kayco | Coming Soon &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kayco | Coming Soon &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        </motion.div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-screen-2xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Company */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-4 text-black">Kayco</h3>
            <p className="text-gray-800 mb-4 max-w-md">
              Leading innovation in mechano-chemistry and sustainable solutions. 
              Building a better future through science and technology.
            </p>
            <div className="text-gray-800 space-y-1">
              <p>Email: lenaKadri@kayco-health.co.nz</p>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-md font-semibold mb-4 text-black">Navigation</h4>
            <ul className="space-y-2">
              {tabs.map((tab) => {
                const href = toLowerCase(tab);
                return (
                  <li key={tab}>
                    <Link
                      href={href}
                      className="text-gray-800 hover:text-red-600 transition-colors duration-200"
                    >
                      {tab}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-gray-300 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2025 Kayco. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://nz.linkedin.com/in/lena-kadri-phd-7b4ab3158"
              className="hover:text-red-600 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
