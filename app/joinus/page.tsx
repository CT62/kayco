'use client'
import { motion } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  { 
    title: 'Where We Come From', 
    description: 'Built from science and engineered for impact with proven expertise and industry-leading advisors',
    details: ['Mechano-chemistry expertise', 'Proven R&D track record', 'Global biopharma advisors']
  },
  { 
    title: "What's Broken", 
    description: 'Addressing critical gaps in modern medicine from poor absorption to antimicrobial resistance',
    details: ['Poor drug absorption', 'Antimicrobial resistance', 'Vulnerable patient needs']
  },
  { 
    title: "What We're Building", 
    description: 'A sustainable revolution in medicine - better absorption, fewer side effects, and global accessibility',
    details: ['Better drug absorption', 'Fighting resistance', 'Sustainable manufacturing']
  },
  { 
    title: "Why Now; What's Next", 
    description: 'The science is ready, the need is urgent. Join us in shaping the future of medicine',
    details: ['Pipeline ready', 'VC round open', 'Global partnerships']
  },
];

export default function Roadmap() {
  const containerRef = useRef(null)

  return (
    <div ref={containerRef}>
      <div className="max-w-5xl mx-auto relative mb-12 px-4 md:px-0">
        {/* Compact Header */}
        <div className="text-center">
          <div className="absolute right-0 w-96 h-96 bg-[#FF6B6B] opacity-10 rounded-full blur-3xl pointer-events-none z-0" />
          <motion.h2
            className="text-3xl md:text-3xl font-black bg-gray-800 bg-clip-text text-transparent py-2 pt-24"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Kayco Roadmap
          </motion.h2>
          
          <motion.p
            className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed pb-6 px-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We are not waiting for the future of medicine. <br/>
            We are building it.
          </motion.p>
        </div>
        
        <div className="relative">
          {/* Desktop timeline - centered */}
          <motion.div 
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 w-1 bg-gradient-to-b from-red-400 via-red-500 to-red-500 rounded-full shadow-lg"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          {/* Mobile timeline - left aligned */}
          <motion.div 
            className="md:hidden absolute left-8 top-0 w-1 bg-gradient-to-b from-red-400 via-red-500 to-red-500 rounded-full shadow-lg"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          {/* Glowing line effect - Desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-3 bg-gradient-to-b from-red-400/30 via-red-500/30 to-red-500/30 rounded-full blur-sm" />
          
          {/* Glowing line effect - Mobile */}
          <div className="md:hidden absolute left-7 top-0 h-full w-3 bg-gradient-to-b from-red-400/30 via-red-500/30 to-red-500/30 rounded-full blur-sm" />
          
          <div className="flex flex-col gap-6 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 80
                }}
              >
                {/* Desktop bullet point - centered */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-20 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-red-500 shadow-xl border-4 border-white relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-red-400"
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-red-500"
                      animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    />
                    <div className="absolute inset-2 rounded-full bg-white" />
                  </div>
                </div>

                {/* Mobile bullet point - left aligned */}
                <div className="md:hidden absolute left-8 transform -translate-x-1/2 z-20 flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-red-500 shadow-lg border-3 border-white relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-red-400"
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-red-500"
                      animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    />
                    <div className="absolute inset-1 rounded-full bg-white" />
                  </div>
                </div>

                {/* Desktop card - alternating layout */}
                <motion.div
                  className={`hidden md:block bg-white/90 backdrop-blur-xl border border-red-200 rounded-3xl p-6 max-w-md relative overflow-hidden shadow-xl ${
                    index % 2 === 0 
                      ? 'mr-auto pr-8' 
                      : 'ml-auto pl-8'
                  }`}
                  style={{
                    marginLeft: index % 2 === 0 ? '0' : 'calc(50% + 40px)',
                    marginRight: index % 2 === 0 ? 'calc(50% + 40px)' : '0'
                  }}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-red-500/40 to-transparent rounded-bl-full" />
                  
                  <div className="relative z-10">
                    <motion.h3 
                      className="text-xl font-bold bg-gradient-to-r from-gray-800 to-red-600 bg-clip-text text-transparent mb-3"
                      layoutId={`title-${index}`}
                    >
                      {step.title}
                    </motion.h3>
                    
                    <p className="text-base leading-relaxed mb-4">
                      {step.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {step.details.map((detail, detailIndex) => (
                        <motion.span
                          key={detailIndex}
                          className="px-4 py-2 border border-red-500 rounded-full text-sm font-medium"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.2 + detailIndex * 0.1 }}
                        >
                          {detail}
                        </motion.span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="h-3 bg-red-100 rounded-full flex-1 overflow-hidden backdrop-blur-sm border border-red-200">
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Mobile card - single column layout */}
                <motion.div
                  className="md:hidden bg-white/95 backdrop-blur-xl border border-red-200 rounded-2xl p-4 relative overflow-hidden shadow-lg"
                  style={{ marginLeft: '3rem' }}
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-red-500/30 to-transparent rounded-bl-full" />
                  
                  <div className="relative z-10">
                    <motion.h3 
                      className="text-lg font-bold bg-gradient-to-r from-gray-800 to-red-600 bg-clip-text text-transparent mb-2"
                      layoutId={`mobile-title-${index}`}
                    >
                      {step.title}
                    </motion.h3>
                    
                    <p className="text-sm leading-relaxed mb-3 text-gray-700">
                      {step.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {step.details.map((detail, detailIndex) => (
                        <motion.span
                          key={detailIndex}
                          className="px-3 py-1.5 border border-red-400 rounded-full text-xs font-medium text-gray-700 bg-red-50/50"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.15 + detailIndex * 0.05 }}
                        >
                          {detail}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Call to Action Section */}
        <motion.div
          className="mt-12 md:mt-16 relative mx-4 md:mx-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-red-400/5 to-red-500/10 rounded-2xl md:rounded-3xl blur-3xl" />
          
          <div className="relative bg-white/95 backdrop-blur-xl border border-red-200 rounded-2xl md:rounded-3xl p-4 md:p-6 text-center overflow-hidden shadow-xl">
            <div className="absolute inset-0 opacity-20">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 md:w-2 md:h-2 bg-red-400 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2 + Math.random(),
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
            
            <div className="absolute top-0 left-0 w-20 h-20 md:w-32 md:h-32 bg-gradient-to-br from-red-500/30 to-transparent rounded-br-full" />
            <div className="absolute bottom-0 right-0 w-20 h-20 md:w-32 md:h-32 bg-gradient-to-tl from-red-500/30 to-transparent rounded-tl-full" />
            
            <div className="relative z-10">
              <motion.div
                className="mb-4 md:mb-6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 bg-gradient-to-r from-red-400 to-red-600 rounded-full flex items-center justify-center shadow-xl">
                  <motion.div
                    className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-r from-red-400 to-red-600 rounded-full" />
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.h3
                className="text-xl md:text-2xl font-black bg-gray-800 bg-clip-text text-transparent mb-4 md:mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Ready to Transform Medicine?
              </motion.h3>
              
              <motion.p
                className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed mb-6 px-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Join Kayco&rsquo;s revolutionary approach to sustainable medicine. Whether you&rsquo;re an investor, partner, or innovator, let&rsquo;s build the future of healthcare together.
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.button
                  className="group relative px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-full shadow-xl overflow-hidden w-full sm:w-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 text-sm md:text-base">Join Our VC Round</span>
                  <motion.div
                    className="absolute inset-0 bg-white/20 rounded-full"
                    initial={{ scale: 0, x: "-100%" }}
                    whileHover={{ scale: 2, x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
