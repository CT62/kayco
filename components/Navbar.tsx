'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants, Transition } from 'framer-motion';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  let navLinks = [];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    
    // Check initial scroll position
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const navElement = document.getElementById('main-nav');
      if (navElement && event.target instanceof Node && !navElement.contains(event.target)) {
        setMobileMenuOpen(false);
        setAccountDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen, accountDropdownOpen]);

  navLinks = [
    { english: "Our Heart", maori: "To Tatou Ngakau",href:"" },
    { english: "Our Purpose", maori: "Ō Mātou Tāngata", href:"ourpurpose" },
    { english: "Our People", maori: "Hono Mai", href:"ourpeople" },
    { english: "Mechano-Chemistry", maori: "Hangarau-Matū", href:"mechanochemistry" },
    { english: "Join Us", maori: "Hono Mai",href:"joinus" },
  ];

  // Animation variants
  const navVariants: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1
      }
    }
  };

  const linkVariants: Variants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15
      } as Transition
    }
  };

  const mobileMenuVariants: Variants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const mobileItemVariants: Variants = {
    hidden: { x: -50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20
      } as Transition
    }
  };

  const logoVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15
      } as Transition
    }
  };

  return (
    <>
      <motion.nav 
        id="main-nav" 
        className={`fixed top-0 z-50 w-full border-b-2 transition-all duration-300 ${
          mounted && scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-white'
        } border-[#FF0000]`}
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <div className="max-w-screen-2xl flex items-center justify-between mx-auto p-3 relative">
          <motion.a 
            href="/" 
            className="flex items-center"
            variants={logoVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              className="filter grayscale hover:grayscale-0 transition duration-300"
              src="/mobilelogo.png"
              alt="Logo"
              width={40}
              height={40}
              priority
            />
          </motion.a>

          <motion.ul 
            className="hidden lg:flex space-x-8 xl:space-x-12 absolute left-1/2 transform -translate-x-1/2"
            variants={navVariants}
          >
            {navLinks.map((link, i) => (
              <motion.li 
                key={i}
                variants={linkVariants}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <motion.a
                  href={`/${link.href}`}
                  className="text-black relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:bg-current font-black text-sm xl:text-md tracking-wide flex flex-col items-center text-center"
                  whileHover={{ 
                    color: "#FF0000",
                    transition: { duration: 0.2 }
                  }}
                >
                  <span>{link.english}</span>
                  <span className="text-xs text-gray-600 opacity-60 font-normal mt-1 tracking-normal">
                    {link.maori}
                  </span>
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>

          <div className="flex items-center space-x-4">
            {/* Mobile menu toggle */}
            <motion.button
              className="lg:hidden text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <XMarkIcon className="w-8 h-8" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Bars3Icon className="w-8 h-8" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="lg:hidden bg-gray-50/95 backdrop-blur-md shadow-md border-t border-gray-200"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <motion.ul 
                className="flex flex-col space-y-2 p-4"
                variants={mobileMenuVariants}
              >

                {navLinks.map((link, i) => (
                  <motion.li 
                    key={i}
                    variants={mobileItemVariants}
                  >
                    <motion.a
                      href={`/${link.href}`}
                      className="block py-3 text-black hover:bg-gray-100 px-3 rounded-lg font-black text-lg tracking-wide transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                      whileHover={{ 
                        x: 10,
                        color: "#FF0000",
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex flex-col">
                        <span>{link.english}</span>
                        <span className="text-sm text-gray-400 opacity-60 font-normal mt-1 tracking-normal">
                          {link.maori}
                        </span>
                      </div>
                    </motion.a>
                  </motion.li>
                ))}

              </motion.ul>

            </motion.div>


          )}
        </AnimatePresence>
      </motion.nav>

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
    </>
  );
};

export default Navbar;
