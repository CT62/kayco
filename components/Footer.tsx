"use client";
import Link from "next/link";
import { motion } from "framer-motion";


const Footer = () => {
  const tabs = [
    {title:"Our Heart", href:"/",},
    {title:"Our Purpose", href:"ourpurpose",},
    {title:"Our People",href:"ourpeople",},
    {title:"Mechano-Chemistry",href:"mechanochemistry",},
    {title:"Join Us",href:"joinus",},
  ];

  return (
    <footer className="bg-white text-black relative overflow-hidden">
        <div className="absolute -bottom-20 -right-32 w-96 h-96 bg-[#FF6B6B] opacity-10 rounded-full blur-3xl pointer-events-none z-0" />
      {/* Main Footer Content */}
      <div className="max-w-screen-2xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Company */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-4 text-black">Kayco</h3>
            <p className="text-gray-800 mb-4 max-w-md">
	    Building a better future through mechano-chemistry and sustainable solutions.
            </p>
            <div className="text-gray-800 space-y-1">
              <p>Email: lena.kadri@kayco.co.nz</p>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-md font-semibold mb-4 text-black">Navigation</h4>
            <ul className="space-y-2">
              {tabs.map((tab) => {
                return (
                  <li key={tab}>
                    <Link
                      href={tab.href}
                      className="text-gray-800 hover:text-red-600 transition-colors duration-200"
                    >
                      {tab.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
      </div>

<div className="bg-red-500 h-10 overflow-hidden relative mt-[var(--navbar-height,80px)] sm:hidden">
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
  Kayco | Pre-Launch &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kayco | Pre-Launch &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kayco | Pre-Launch &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kayco | Pre-Launch &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kayco | Pre-Launch &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kayco | Pre-Launch &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kayco | Pre-Launch &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kayco | Pre-Launch &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kayco | Pre-Launch &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kayco | Pre-Launch &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kayco | Pre-Launch &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span>
<span className="whitespace-nowrap text-white font-semibold text-sm px-4">
  Kayco | Pre-Launch &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kayco | Pre-Launch &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kayco | Pre-Launch &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kayco | Pre-Launch &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kayco | Pre-Launch &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kayco | Pre-Launch &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kayco | Pre-Launch &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kayco | Pre-Launch &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kayco | Pre-Launch &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kayco | Pre-Launch &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kayco | Pre-Launch &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kayco | Pre-Launch &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span>

        </motion.div>
      </div>


 <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">


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
    </footer>
  );
};

export default Footer;
