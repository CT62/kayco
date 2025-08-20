"use client"
import Jumbotron from "@/components/Jumbotron.tsx"
import { motion } from "framer-motion";
import { FlaskConical, Zap, Users, Target, Heart, Globe, Microscope, Building2, Handshake } from "lucide-react";

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
                <p className="text-lg sm:text-xl text-gray-700 font-bold leading-relaxed">
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
                <div className="flex items-center space-x-6 mb-10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#FF6B6B] rounded-full blur opacity-20"></div>
                    <div className="relative p-4 bg-red-100 rounded-full">
                      <FlaskConical className="w-8 h-8 text-[#FF6B6B]" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-800">Pioneering Pharmaceutical Innovation</h3>
                </div>
                
                <div className="space-y-8">
                  <p className="text-lg text-gray-700 font-light leading-relaxed">
                    Kayco is a pharmaceutical company pioneering <span className="font-bold text-black">sustainable, solvent-free mechanochemistry</span> to reformulate essential medicines.
                  </p>
                  
                  <p className="text-lg text-gray-700 font-light leading-relaxed">
                    Our platform enhances solubility and bioavailability, accelerating development and expanding treatment options for patients worldwide.
                  </p>
                  
                  <p className="text-lg text-gray-700 font-light leading-relaxed">
                    Our formulations are developed by Kayco's team of scientists, clinicians, and strategists with deep expertise in solubility science, formulation, and commercialization.
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
            {/* Green Technology */}
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
                  Green, sustainable, scalable mechanochemical technology
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
                  Faster development cycles (weeks, not months)
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
                  Patentable formulations via regulatory pathways
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

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
                      <div className="w-3 h-3 bg-gradient-to-r from-[#FF6B6B] to-pink-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">Infectious diseases</span>
                    </div>
                    <div className="flex items-center space-x-4 p-6 bg-white rounded-xl border border-red-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="w-3 h-3 bg-gradient-to-r from-[#FF6B6B] to-pink-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">Central Nervous System (CNS)</span>
                    </div>
                    <div className="flex items-center space-x-4 p-6 bg-white rounded-xl border border-red-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="w-3 h-3 bg-gradient-to-r from-[#FF6B6B] to-pink-400 rounded-full flex-shrink-0"></div>
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
                      <div className="w-3 h-3 bg-gradient-to-r from-[#FF6B6B] to-pink-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">Women's health</span>
                    </div>
                    <div className="flex items-center space-x-4 p-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl border border-red-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="w-3 h-3 bg-gradient-to-r from-[#FF6B6B] to-pink-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">Rare diseases</span>
                    </div>
                    <div className="flex items-center space-x-4 p-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl border border-red-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="w-3 h-3 bg-gradient-to-r from-[#FF6B6B] to-pink-400 rounded-full flex-shrink-0"></div>
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
                          Reformulated essential medicines
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
                          New formulations
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
                          Solubility-focused development services
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
