"use client";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import { Atom, Zap, DollarSign, Clock, Leaf, Shield } from "lucide-react";

const MechanochemistryPage = () => {
  const router = useRouter();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const backgroundParticles = Array.from({ length: 15 }).map((_, i) => {
    const size = Math.random() * 60 + 30;
    const xStart = Math.random() * 100;
    const yStart = Math.random() * 100;
    const xMove = (Math.random() - 0.5) * 300;
    const yMove = (Math.random() - 0.5) * 300;
    const duration = 15 + Math.random() * 10;
    return {
      id: i,
      size,
      xStart,
      yStart,
      xMove,
      yMove,
      duration,
      delay: Math.random() * 5,
    };
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient background elements */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#FF6B6B] opacity-8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#FF6B6B] opacity-8 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          className="relative z-10 text-center px-4 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex justify-center items-center mb-8"
            variants={itemVariants}
          >
            <div className="relative p-8 bg-white rounded-full shadow-2xl">
              <Atom className="w-24 h-24 text-[#FF6B6B]" strokeWidth={1.5} />
              <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-pink-100 rounded-full opacity-20" />
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight"
            variants={itemVariants}
          >
            Mechano<span className="text-[#FF6B6B]">chemistry</span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-12 font-light leading-relaxed max-w-4xl mx-auto"
            variants={itemVariants}
          >
            <span className="text-[#FF6B6B] font-medium">Smarter, cleaner, faster</span> drug manufacturing —{" "}
            <br className="hidden sm:block" />
            built for the future.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            variants={itemVariants}
          >
          </motion.div>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-24 px-4 sm:px-8 md:px-16 bg-gray-50">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
              Better <span className="text-[#FF6B6B]">Methods</span>,
              <br />
              Better <span className="text-[#FF6B6B]">Medicine</span>
            </h2>
            <div className="h-1 bg-red-300 w-32 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg sm:text-xl text-gray-700 font-light leading-relaxed">
                At <span className="text-[#FF6B6B] font-medium">Kayco</span>, we believe better medicines begin with better methods. That's why we're building a new kind of pharmaceutical company — one that puts{" "}
                <span className="text-[#FF6B6B] font-medium">sustainability, innovation, and patient access</span> at the heart of everything we do.
              </p>
              <div className="space-y-4 text-lg sm:text-xl text-gray-700 font-light leading-relaxed">
                <p>What if we could make medicine that's better for people <em>and</em> the planet?</p>
                <p>What if we could lower costs, cut emissions, and unlock new treatments — all at once?</p>
                <p className="text-[#FF6B6B] font-medium text-2xl">That's what mechano-chemistry makes possible.</p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col items-center text-center space-y-2">
                    <Leaf className="w-12 h-12 text-green-500" />
                    <span className="text-sm font-medium text-gray-600">Sustainable</span>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-2">
                    <Zap className="w-12 h-12 text-yellow-500" />
                    <span className="text-sm font-medium text-gray-600">Innovative</span>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-2">
                    <Shield className="w-12 h-12 text-blue-500" />
                    <span className="text-sm font-medium text-gray-600">Patient-Focused</span>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-2">
                    <DollarSign className="w-12 h-12 text-[#FF6B6B]" />
                    <span className="text-sm font-medium text-gray-600">Accessible</span>
                  </div>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-red-100/20 to-pink-100/20 rounded-3xl blur-xl -z-10" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Core Technology Section */}
      <section className="relative py-24 px-4 sm:px-8 md:px-16">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
              Our Core <span className="text-[#FF6B6B]">Technology</span>
            </h2>
            <div className="h-1 bg-red-300 w-32 mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-xl sm:text-2xl text-gray-700 font-light leading-relaxed">
                At Kayco, our core technology is <span className="text-[#FF6B6B] font-medium">mechano-chemistry</span> — a revolutionary way to make medicine{" "}
                <span className="font-medium">without solvents, waste, or lengthy processes.</span>
              </p>
              
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 border-l-4 border-[#FF6B6B]">
                <p className="text-lg text-gray-700 font-light leading-relaxed">
                  Mechanochemistry uses <span className="text-[#FF6B6B] font-bold">mechanical energy</span> instead of harmful solvents to drive chemical reactions.
                </p>
              </div>

              <p className="text-lg text-gray-700 font-light leading-relaxed">
                This means fewer toxic chemicals, less waste, lower energy use — and new ways to develop medicines that may otherwise be impossible to access.
              </p>

              <p className="text-lg text-gray-700 font-light leading-relaxed">
                At Kayco, we're turning the research into reality. Mechanochemistry is the foundation of how we make better medicine — for patients, for the planet, and for the future.
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="text-center space-y-6">
                  <div className="relative inline-block">
                    <Atom className="w-32 h-32 text-[#FF6B6B] mx-auto" strokeWidth={1} />
                    <motion.div
                      className="absolute inset-0 border-2 border-[#FF6B6B] rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                      className="absolute inset-4 border-2 border-red-300 rounded-full"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Mechanical Energy</h3>
                  <p className="text-gray-600">Driving chemical reactions without harmful solvents</p>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-br from-red-100/30 to-pink-100/30 rounded-3xl blur-2xl -z-10" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-24 px-4 sm:px-8 md:px-16 bg-gray-50">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
              Real <span className="text-[#FF6B6B]">Impact</span>
            </h2>
            <div className="h-1 bg-red-300 w-32 mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Cost Savings */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-green-100 rounded-full">
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Real Cost Savings</h3>
              </div>
              
              <div className="space-y-6">
                <div className="text-center py-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
                  <p className="text-4xl font-bold text-green-600 mb-2">90%</p>
                  <p className="text-lg text-gray-700">Reduction in production costs</p>
                </div>
                
                <p className="text-lg text-gray-700 font-light">
                  For the cost of making <span className="font-bold text-[#FF6B6B]">one</span> drug the traditional way, you could make{" "}
                  <span className="font-bold text-[#FF6B6B]">eight or nine</span> drugs using our process.
                </p>
                
                <div className="space-y-3">
                  <p className="font-medium text-gray-800 mb-3">How?</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-[#FF6B6B] mt-1">•</span>
                      <span>Lower costs on raw solvents</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-[#FF6B6B] mt-1">•</span>
                      <span>Significantly reduced waste and disposal needs</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-[#FF6B6B] mt-1">•</span>
                      <span>Fewer compliance and regulatory challenges</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Efficiency */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">More Efficient & Faster</h3>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 font-light">
                  Mechanochemical technologies such as <span className="font-medium text-[#FF6B6B]">twin-screw extrusion</span> and{" "}
                  <span className="font-medium text-[#FF6B6B]">ball milling</span> enable continuous, scalable production under controlled and reproducible conditions.
                </p>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
                  <p className="font-medium text-gray-800 mb-4">This results in:</p>
                  <div className="grid gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">Shorter processing times</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">Higher yields</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">Minimal or no purification steps</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default MechanochemistryPage;
