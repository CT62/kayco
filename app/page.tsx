"use client"
import Jumbotron from "@/components/Jumbotron"
import { motion } from "framer-motion";
import { FlaskConical, Zap, Users, Target, Heart, Globe, Microscope, Building2, Handshake,DollarSign,Clock } from "lucide-react";

export default function Home() {
  return (
    <>
      <Jumbotron/>
      
      <section className="relative py-20 px-6 sm:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-red-400 pb-4">Who We Are</h2>
            <div className="w-24 h-1 bg-[#FF6B6B] mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center space-y-6">
                <p className="text-lg sm:text-xl text-black font-bold leading-relaxed">
                  At Kayco, we unlock the potential of essential medicines.
                </p>
                
                <p className="text-lg sm:text-xl text-gray-700 font-light leading-relaxed">
                  We reformulate poorly soluble drugs to make them more effective, accessible, and patient-friendly.
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B] to-pink-400 rounded-3xl blur opacity-20"></div>
                <div className="relative bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-10 border border-red-100 backdrop-blur-sm">
                  <p className="text-lg text-gray-700 font-light leading-relaxed pl-8">
                    Our focus is on <span className="text-black font-bold">off-patent drugs</span> and <span className="text-black font-bold">failed molecules</span> where solubility has limited success — creating new opportunities for patients and partners alike.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="relative py-24 px-4 sm:px-8 md:px-16 bg-gradient-to-b from-white to-gray-50">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
                <span className="text-[#FF6B6B]">About Us</span>

              </h2>
            <div className="w-24 h-1 bg-[#FF6B6B] mx-auto rounded-full"></div>
            </motion.div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B] to-pink-400 rounded-3xl blur-lg opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-12 border border-red-200 backdrop-blur-sm">
                <div className="mb-10">
                  <div className="relative w-fit mx-auto mb-6">
                    <div className="absolute inset-0 bg-[#FF6B6B] rounded-full blur opacity-20"></div>
                    <div className="relative p-4 bg-red-100 rounded-full flex items-center justify-center">
                      <FlaskConical className="w-8 h-8 text-[#FF6B6B]" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-800 text-center">Pioneering Pharmaceutical Innovation</h3>
                </div>
                
                <div className="space-y-8">
                  <p className="text-lg text-gray-700 font-light leading-relaxed">
                    Kayco is a pharmaceutical company pioneering <span className="font-bold text-black">sustainable, solvent-free mechanochemistry</span> to reformulate essential medicines.
                  </p>
                  
                  <p className="text-lg text-gray-700 font-light leading-relaxed">
                    Our platform enhances solubility and bioavailability, accelerating development and expanding treatment options for patients worldwide.
                  </p>
                  
                  <p className="text-lg text-gray-700 font-light leading-relaxed">
                    Our formulations are developed by Kayco&apos;s team of scientists, clinicians, and strategists with deep expertise in solubility science, formulation, and commercialization.
                  </p>
                  
                  <div className="relative">
                    <div className="absolute inset-0 bg-white rounded-2xl shadow-lg opacity-80"></div>
                    <div className="relative bg-white rounded-2xl p-8 border-l-4 border-[#FF6B6B] shadow-sm">
                      <p className="text-lg text-gray-700 font-light leading-relaxed">
                        Through our growing portfolio, we aim to deliver <span className="font-bold text-black">accessible, affordable, and sustainable medicines</span> — making a lasting impact on global health.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Our Science Section */}
      <section className="relative py-24 px-4 sm:px-8 md:px-16 bg-gradient-to-b from-gray-50 to-white">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
                <span className="text-[#FF6B6B]">Our Science</span>
              </h2>
              <div className="w-24 h-1 bg-[#FF6B6B] mx-auto rounded-full"></div>
            </motion.div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-10">
            <motion.div
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B] to-pink-400 rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-xl border border-red-100 group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#FF6B6B] rounded-full blur opacity-20"></div>
                    <div className="relative p-3 bg-red-100 rounded-full">
                      <Zap className="w-8 h-8 text-[#FF6B6B]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-extrabold text-gray-800">Green Technology</h3>
                </div>
                <p className="text-lg text-gray-700 font-light leading-relaxed">
                  Green, sustainable and scalable mechanochemical technology.
                </p>
              </div>
            </motion.div>

            {/* Fast Development */}
            <motion.div
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B] to-pink-400 rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-xl border border-red-100 group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#FF6B6B] rounded-full blur opacity-20"></div>
                    <div className="relative p-3 bg-red-100 rounded-full">
                      <Target className="w-8 h-8 text-[#FF6B6B]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-extrabold text-gray-800">Rapid Development</h3>
                </div>
                <p className="text-lg text-gray-700 font-light leading-relaxed">
                  Faster development cycles (weeks, not months).
                </p>
              </div>
            </motion.div>

            {/* Patentable Solutions */}
            <motion.div
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B] to-pink-400 rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-xl border border-red-100 group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#FF6B6B] rounded-full blur opacity-20"></div>
                    <div className="relative p-3 bg-red-100 rounded-full">
                      <Building2 className="w-8 h-8 text-[#FF6B6B]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-extrabold text-gray-800">IP Protection</h3>
                </div>
                <p className="text-lg text-gray-700 font-light leading-relaxed">
                  Patentable formulations via regulatory pathways.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Comparison Section */}
      <section className="relative py-24 px-4 sm:px-8 md:px-16 bg-gradient-to-b from-white to-gray-50">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="bg-white rounded-3xl p-10 shadow-2xl border border-red-100"
              style={{
                boxShadow: '0 0 40px rgba(255, 107, 107, 0.15), 0 20px 50px rgba(0, 0, 0, 0.1)'
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Conventional Methods */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-extrabold text-gray-800 text-center pb-4 border-b-2 border-gray-200">Conventional Methods</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 bg-gray-100 rounded-xl">
                      <div className="w-2 h-2 bg-gray-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">Solvent-heavy, high waste</span>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-gray-100 rounded-xl">
                      <div className="w-2 h-2 bg-gray-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">Batch-based, months-long cycles</span>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-gray-100 rounded-xl">
                      <div className="w-2 h-2 bg-gray-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">Limited to soluble precursors</span>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-gray-100 rounded-xl">
                      <div className="w-2 h-2 bg-gray-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">Energy-intensive purification</span>
                    </div>
                  </div>
                </div>

                {/* Kayco's Mechanochemistry */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-extrabold text-gray-800 text-center pb-4 border-b-2 border-[#FF6B6B]">Kayco&apos;s Mechanochemistry</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl border border-red-200">
                      <div className="w-2 h-2 bg-[#FF6B6B] rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">Solvent-free / solvent-minimal</span>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl border border-red-200">
                      <div className="w-2 h-2 bg-[#FF6B6B] rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">Continuous, weeks, not months</span>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl border border-red-200">
                      <div className="w-2 h-2 bg-[#FF6B6B] rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">Access to insoluble or unstable molecules</span>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl border border-red-200">
                      <div className="w-2 h-2 bg-[#FF6B6B] rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">Minimal or no purification required</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-24 px-4 sm:px-8 md:px-16 bg-gradient-to-b from-gray-50 to-white">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cost Savings */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-2xl border border-red-100"
              style={{
                boxShadow: '0 0 40px rgba(255, 107, 107, 0.15), 0 20px 50px rgba(0, 0, 0, 0.1)'
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-red-100 rounded-full">
                  <DollarSign className="w-8 h-8 text-[#FF6B6B]" />
                </div>
                <h3 className="text-2xl font-extrabold text-gray-800">Cost Savings</h3>
              </div>
              
              <div className="space-y-6">
                <div className="text-center py-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl border border-red-200">
                  <p className="text-4xl font-bold text-[#FF6B6B] mb-2">90%</p>
                  <p className="text-lg text-gray-700">Reduction in production costs</p>
                </div>
                
                <p className="text-lg text-gray-700 font-light">
                  We can reduce pharmaceutical production costs by up to 90% — meaning for the cost of making <span className="font-bold text-black">one</span> drug the traditional way, you could make{" "}
                  <span className="font-bold text-black">eight or nine</span> drugs using our process.
                </p>
                
                <div className="space-y-3">
                  <p className="font-medium text-gray-800 mb-3">How?</p>
                  <p className="text-gray-700 mb-3">By eliminating or reducing harmful chemicals and lowering energy inputs using mechanical energy, leading to:</p>
                  <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 border border-red-200">
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-[#FF6B6B] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Lower costs on raw materials</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-[#FF6B6B] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Less energy usage</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-[#FF6B6B] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Reduced waste and disposal needs</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Efficiency */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-2xl border border-red-100"
              style={{
                boxShadow: '0 0 40px rgba(255, 107, 107, 0.15), 0 20px 50px rgba(0, 0, 0, 0.1)'
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-red-100 rounded-full">
                  <Clock className="w-8 h-8 text-[#FF6B6B]" />
                </div>
                <h3 className="text-2xl font-extrabold text-gray-800">Efficiency</h3>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 font-light">
                  Mechanochemical technologies such as <span className="text-black font-bold">twin-screw extrusion</span> and{" "}
                  <span className="font-bold text-black">ball milling</span> enable continuous, scalable production under controlled and reproducible conditions.
                </p>
                
                <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 border border-red-200">
                  <p className="font-medium text-gray-800 mb-4">This results in:</p>
                  <div className="grid gap-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#FF6B6B] rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">Shorter processing times</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#FF6B6B] rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">Higher yields</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#FF6B6B] rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">Minimal or no purification steps</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg font-medium text-gray-700">The result? Faster production — and a quicker path to patients.</p>
              </div>
            </motion.div>

            {/* Accessibility */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-2xl border border-red-100"
              style={{
                boxShadow: '0 0 40px rgba(255, 107, 107, 0.15), 0 20px 50px rgba(0, 0, 0, 0.1)'
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-red-100 rounded-full">
                  <svg className="w-8 h-8 text-[#FF6B6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold text-gray-800">Accessibility</h3>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 font-light">
                  Many promising drugs never reach patients due to solubility issues, toxic solvents, or manufacturing barriers.
                </p>
                
                <p className="text-lg text-gray-700 font-light">
                  Our solvent-free or solvent-limited approach, and scalable methods, unlock access to new molecules and new drug forms.
                </p>
                
                <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 border border-red-200">
                  <p className="font-medium text-gray-800 mb-4">That means:</p>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#FF6B6B] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Finding new and improved forms of already existing drugs — to improve drug performance in the body to ultimately enhance patients&rsquo; lives</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#FF6B6B] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Discovering brand new drugs — ones that were previously inaccessible through conventional methods</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#FF6B6B] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Accelerating the path to treatment — for diseases with limited or no effective treatment options</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Pipeline Section */}
      <section className="relative py-24 px-4 sm:px-8 md:px-16 bg-gradient-to-b from-white to-gray-50">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
                <span className="text-[#FF6B6B]">Pipeline</span>
              </h2>

              <div className="w-24 h-1 bg-[#FF6B6B] mx-auto rounded-full"></div>
            </motion.div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Lead Program */}
              <motion.div
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B] to-pink-400 rounded-3xl blur-lg opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-12 border border-red-200 backdrop-blur-sm">
                  <div className="flex items-center space-x-6 mb-10">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#FF6B6B] rounded-full blur opacity-20"></div>
                      <div className="relative p-3 bg-red-100 rounded-full">
                        <Microscope className="w-8 h-8 text-[#FF6B6B]" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-extrabold text-gray-800">Lead Program</h3>
                  </div>
                  
                  <p className="text-lg text-gray-700 font-light leading-relaxed mb-8">
                    Reformulating poorly soluble essential medicines and molecules across:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-6 bg-white rounded-xl border border-red-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="w-2 h-2 bg-[#FF6B6B] rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">Infectious diseases</span>
                    </div>
                    <div className="flex items-center space-x-4 p-6 bg-white rounded-xl border border-red-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="w-2 h-2 bg-[#FF6B6B] rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">Central Nervous System (CNS)</span>
                    </div>
                    <div className="flex items-center space-x-4 p-6 bg-white rounded-xl border border-red-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="w-2 h-2 bg-[#FF6B6B] rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">Oncology</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Next Programs */}
              <motion.div
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B] to-pink-400 rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative bg-white rounded-3xl p-12 shadow-xl border border-red-100 backdrop-blur-sm">
                  <div className="flex items-center space-x-6 mb-10">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#FF6B6B] rounded-full blur opacity-20"></div>
                      <div className="relative p-3 bg-red-100 rounded-full">
                        <Heart className="w-8 h-8 text-[#FF6B6B]" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-extrabold text-gray-800">Next Programs</h3>
                  </div>
                  
                  <p className="text-lg text-gray-700 font-light leading-relaxed mb-8">
                    Expanding into:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl border border-red-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="w-2 h-2 bg-[#FF6B6B] rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">Women&apos;s health</span>
                    </div>
                    <div className="flex items-center space-x-4 p-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl border border-red-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="w-2 h-2 bg-[#FF6B6B] rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">Rare diseases</span>
                    </div>
                    <div className="flex items-center space-x-4 p-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl border border-red-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="w-2 h-2 bg-[#FF6B6B] rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">Discovery of new drugs</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Partnering Section */}
      <section className="relative py-28 px-4 sm:px-8 md:px-16 bg-gradient-to-b from-gray-50 to-gray-100">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
                <span className="text-[#FF6B6B]">Partnering</span>
              </h2>
              <div className="w-24 h-1 bg-[#FF6B6B] mx-auto rounded-full"></div>
            </motion.div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B] to-pink-400 rounded-3xl blur-lg opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-3xl p-12 shadow-xl border border-red-100 backdrop-blur-sm">
                <div className="flex items-center space-x-6 mb-10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#FF6B6B] rounded-full blur opacity-20"></div>
                    <div className="relative p-3 bg-red-100 rounded-full">
                      <Handshake className="w-8 h-8 text-[#FF6B6B]" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-800">Collaborative Innovation</h3>
                </div>
                
                <div className="space-y-10">
                  <p className="text-lg text-gray-700 font-light leading-relaxed">
                    We work with start-ups, pharma, biotech, and global health organizations to:
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="group/card relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B] to-pink-400 rounded-2xl blur opacity-0 group-hover/card:opacity-10 transition-opacity duration-300"></div>
                      <div className="relative bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 border border-red-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="relative">
                            <div className="absolute inset-0 bg-[#FF6B6B] rounded-full blur opacity-20"></div>
                            <div className="relative p-2 bg-red-100 rounded-full">
                              <Globe className="w-6 h-6 text-[#FF6B6B]" />
                            </div>
                          </div>
                          <h4 className="font-bold text-gray-800">License</h4>
                        </div>
                        <p className="text-gray-700 font-light">
                          Reformulate essential medicines.
                        </p>
                      </div>
                    </div>
                    
                    <div className="group/card relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B] to-pink-400 rounded-2xl blur opacity-0 group-hover/card:opacity-10 transition-opacity duration-300"></div>
                      <div className="relative bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 border border-red-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="relative">
                            <div className="absolute inset-0 bg-[#FF6B6B] rounded-full blur opacity-20"></div>
                            <div className="relative p-2 bg-red-100 rounded-full">
                              <Users className="w-6 h-6 text-[#FF6B6B]" />
                            </div>
                          </div>
                          <h4 className="font-bold text-gray-800">Co-develop</h4>
                        </div>
                        <p className="text-gray-700 font-light">
                          New formulations.
                        </p>
                      </div>
                    </div>
                    
                    <div className="group/card relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B] to-pink-400 rounded-2xl blur opacity-0 group-hover/card:opacity-10 transition-opacity duration-300"></div>
                      <div className="relative bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 border border-red-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="relative">
                            <div className="absolute inset-0 bg-[#FF6B6B] rounded-full blur opacity-20"></div>
                            <div className="relative p-2 bg-red-100 rounded-full">
                              <FlaskConical className="w-6 h-6 text-[#FF6B6B]" />
                            </div>
                          </div>
                          <h4 className="font-bold text-gray-800">Provide</h4>
                        </div>
                        <p className="text-gray-700 font-light">
                          Solubility-focused development services.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
