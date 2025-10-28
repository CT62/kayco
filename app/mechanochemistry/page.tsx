"use client";
import { motion } from "framer-motion";
import { DollarSign, Clock, Zap, Layers, FlaskConical, Target, TrendingUp } from "lucide-react";

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
                Mechanochemistry uses <strong>mechanical energy</strong> instead of harmful solvents to drive chemical reactions.
              </p>
              <div className="space-y-4 text-lg sm:text-xl text-gray-700 font-light leading-relaxed text-left">
                <p>What if we could make medicine that&rsquo;s better for people and the planet?</p>
                <p>What if we could lower costs, cut emissions, and access new treatments — all at once?</p>
                <p className="font-bold text-black">That&rsquo;s what mechanochemistry makes possible.</p>
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

      {/* How Mechanochemistry Works Section */}
      <section className="relative py-20 px-4 sm:px-8 md:px-16 bg-white">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
              <span className="text-[#FF6B6B]">How Mechanochemistry Works</span>
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <motion.div
              className="bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-10 border border-red-200"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-red-100 rounded-full">
                  <Zap className="w-8 h-8 text-[#FF6B6B]" />
                </div>
                <h3 className="text-2xl font-extrabold text-gray-800">Mechanical Forces in Action</h3>
              </div>
              
              <p className="text-lg text-gray-700 font-light leading-relaxed mb-6">
                Mechanochemistry harnesses <span className="font-bold text-black">mechanical forces</span> such as <span className="font-bold text-black">impact, friction, stress, strain,</span> and <span className="font-bold text-black">shear</span> to initiate and control chemical transformations in the solid-state.
              </p>
              
              <p className="text-lg text-gray-700 font-light leading-relaxed">
                Unlike traditional methods that require large volumes of toxic solvents, mechanochemistry enables direct interaction between molecules under energy input, producing new drug forms.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Why It's the Future Section */}
            {/* Scientific Applications Section */}
      <section className="relative py-20 px-4 sm:px-8 md:px-16 bg-white">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
              <span className="text-[#FF6B6B]">Scientific Applications</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Solubility Enhancement */}
            <motion.div
              className="bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-8 border border-red-200"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-red-100 rounded-full">
                  <Layers className="w-8 h-8 text-[#FF6B6B]" />
                </div>
                <h3 className="text-xl font-extrabold text-gray-800">Solubility Enhancement</h3>
              </div>
              <p className="text-lg text-gray-700 font-light leading-relaxed">
                Converting poorly soluble or insoluble APIs into new and improved drug forms.
              </p>
            </motion.div>

            {/* New Delivery Routes */}
            <motion.div
              className="bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-8 border border-red-200"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-red-100 rounded-full">
                  <Target className="w-8 h-8 text-[#FF6B6B]" />
                </div>
                <h3 className="text-xl font-extrabold text-gray-800">New Delivery Routes</h3>
              </div>
              <p className="text-lg text-gray-700 font-light leading-relaxed">
                Enabling oral liquids, dispersibles, and other patient-friendly formats.
              </p>
            </motion.div>

            {/* Sustainability & Scale-Up */}
            <motion.div
              className="bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-8 border border-red-200"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-red-100 rounded-full">
                  <TrendingUp className="w-8 h-8 text-[#FF6B6B]" />
                </div>
                <h3 className="text-xl font-extrabold text-gray-800">Sustainability & Scale-Up</h3>
              </div>
              <p className="text-lg text-gray-700 font-light leading-relaxed">
                Adopting <span className="font-bold text-black">twin-screw extrusion</span> and <span className="font-bold text-black">ball milling</span> for GMP-ready continuous production.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Evidence & IP Potential Section */}
      <section className="relative py-20 px-4 sm:px-8 md:px-16 bg-white">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
              <span className="text-[#FF6B6B]">Evidence & IP Potential</span>
            </h2>
          </div>

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
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-red-100 rounded-full">
                  <FlaskConical className="w-8 h-8 text-[#FF6B6B]" />
                </div>
                <h3 className="text-2xl font-extrabold text-gray-800">Proven Science, Commercial Potential</h3>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 font-light leading-relaxed">
                  Mechanochemistry is a proven approach in pharmaceutical science, with extensive research showing its ability to improve solubility, stability, and performance of medicines.
                </p>
                
                <p className="text-lg text-gray-700 font-light leading-relaxed">
                  At Kayco, we&rsquo;re building on this foundation to create <span className="font-bold text-black">novel, patentable drug forms</span> — opening new therapeutic and commercial opportunities for off-patent and previously inaccessible molecules.
                </p>
                
                <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 border border-red-200">
                  <p className="text-lg text-gray-700 font-light leading-relaxed">
                    Our platform combines <span className="font-bold text-black">scientific validation with scalability</span>, ensuring results are not just theoretical, but translatable into <span className="font-bold text-black">patient-ready solutions</span>.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Forward-Looking Research Section */}
      <section className="relative py-20 px-4 sm:px-8 md:px-16 bg-gray-50">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
              <span className="text-[#FF6B6B]">Forward-Looking Research</span>
            </h2>
          </div>

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
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-red-100 rounded-full">
                  <TrendingUp className="w-8 h-8 text-[#FF6B6B]" />
                </div>
                <h3 className="text-2xl font-extrabold text-gray-800">Advancing the Boundaries</h3>
              </div>
              
              <p className="text-lg text-gray-700 font-light leading-relaxed">
                Kayco&rsquo;s R&D is advancing the boundaries of mechanochemistry — from improving known active pharmaceutical ingredients to exploring new molecular entities that cannot be accessed through conventional chemistry.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default MechanochemistryPage;
