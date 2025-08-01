"use client";
import { motion } from "framer-motion";
import { DollarSign, Clock } from "lucide-react";

const MechanochemistryPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="absolute right-0 w-96 h-96 bg-[#FF6B6B] opacity-10 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Header */}
      <div className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-4xl font-bold text-gray-800 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Mechano-Chemistry
          </motion.h1>
          <motion.h2
            className="text-xl font-light text-gray-600 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Built for the future of medicine.
          </motion.h2>
        </div>
      </div>

      {/* Innovation Section */}
      <div className="py-2 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-red-400 pb-4">Innovation</h2>
          </div>
          
          <div className="space-y-8 max-w-6xl mx-auto">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg sm:text-xl text-gray-700 font-light leading-relaxed text-left">
                Mechano-chemistry uses <strong>mechanical energy</strong> instead of harmful solvents to drive chemical reactions.
              </p>
              <div className="space-y-4 text-lg sm:text-xl text-gray-700 font-light leading-relaxed text-left">
                <p>What if we could make medicine that&rsquo;s better for people and the planet?</p>
                <p>What if we could lower costs, cut emissions, and access new treatments — all at once?</p>
                <p className="font-bold">That&rsquo;s what mechano-chemistry makes possible.</p>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 border-l-4 border-[#FF6B6B]">
                <p className="text-lg text-gray-700 font-light leading-relaxed">
                  Mechanochemistry uses <span className="text-black font-bold">mechanical energy</span> instead of harmful solvents to drive chemical reactions.
                </p>
              </div>

              <p className="text-lg text-gray-700 font-light leading-relaxed text-left">
                This means fewer toxic chemicals, less waste, lower energy use — and new ways to develop medicines that may otherwise be impossible to access.
              </p>

              <p className="text-lg text-gray-700 font-light leading-relaxed text-left pb-4">
                At Kayco, we&rsquo;re turning the research into reality. Mechanochemistry is the foundation of how we make better medicine — for patients, for the planet, and for the future.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="relative py-24 px-4 sm:px-8 md:px-16 bg-gray-100">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
              <span className="text-[#FF6B6B]">Real Impact</span>
            </h2>
          </div>

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
                  We can reduce pharmaceutical production costs by up to 90% — meaning for the cost of making <span className="font-bold">one</span> drug the traditional way, you could make{" "}
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
                  Mechanochemical technologies such as <span className="font-medium text-black">twin-screw extrusion</span> and{" "}
                  <span className="font-medium text-black">ball milling</span> enable continuous, scalable production under controlled and reproducible conditions.
                </p>
                
                <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 border border-red-200">
                  <p className="font-medium text-gray-800 mb-4">This results in:</p>
                  <div className="grid gap-4">
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
                
                <p className="text-lg font-medium text-black">The result? Faster production — and a quicker path to patients.</p>
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
    </div>
  );
};

export default MechanochemistryPage;
