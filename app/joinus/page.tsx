'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  { 
    title: 'Where We Come From', 
    description: 'Built from science and engineered for impact with proven expertise and industry-leading advisors',
    details: ['Mechano-chemistry expertise', 'Proven R&D track record', 'Global biopharma advisors']
  },
  { 
    title: 'What&#39;s Broken', 
    description: 'Addressing critical gaps in modern medicine from poor absorption to antimicrobial resistance',
    details: ['Poor drug absorption', 'Antimicrobial resistance', 'Vulnerable patient needs']
  },
  { 
    title: 'What We&#39;re Building', 
    description: 'A sustainable revolution in medicine - better absorption, fewer side effects, and global accessibility',
    details: ['Better drug absorption', 'Fighting resistance', 'Sustainable manufacturing']
  },
  { 
    title: 'Why Now &amp; What&#39;s Next', 
    description: 'The science is ready, the need is urgent. Join us in shaping the future of medicine',
    details: ['Pipeline ready', 'Angel round open', 'Global partnerships']
  },
];


export default function Roadmap() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])

  return (
    <div ref={containerRef} className="min-h-screen to-white px-4 overflow-hidden relative">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-400/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-red-400/25 rounded-full blur-3xl animate-pulse delay-1000" />
      </motion.div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <motion.div 
        className="max-w-5xl mx-auto relative z-10"
        style={{ scale: scaleProgress }}
      >
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
          </motion.div>
          <motion.h2
            className="text-6xl font-black bg-gray-800 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Kayco Roadmap
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Revolutionizing medicine through sustainable science - from mechano-chemistry innovation to global impact
          </motion.p>
        </div>

        <div className="relative">
          {/* Dynamic vertical line */}
          <motion.div 
            className="absolute left-12 top-0 w-1 bg-gradient-to-b from-red-400 via-red-500 to-red-500 rounded-full shadow-lg"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          {/* Glowing line effect */}
          <div className="absolute left-11 top-0 h-full w-3 bg-gradient-to-b from-red-400/30 via-red-500/30 to-red-500/30 rounded-full blur-sm" />
          
          <div className="flex flex-col space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative flex items-start gap-12"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
              >
                {/* Simplified bullet point */}
                <div className="relative z-20 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-red-500 shadow-2xl border-4 border-white relative overflow-hidden">
                    {/* Animated rings */}
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
                    
                    {/* Inner circle */}
                    <div className="absolute inset-2 rounded-full bg-white" />
                  </div>
                </div>

                {/* Consistent card design */}
                <motion.div
                  className="bg-white/80 backdrop-blur-xl border border-red-200 rounded-3xl p-8 flex-1 max-w-3xl relative overflow-hidden shadow-2xl"
                >
                  
                  {/* Corner decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-500/40 to-transparent rounded-bl-full" />
                  
                  <div className="relative z-10">
                    <motion.h3 
                      className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-red-600 bg-clip-text text-transparent mb-4"
                      layoutId={`title-${index}`}
                    >
                      {step.title}
                    </motion.h3>
                    
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Feature tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
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
                    
                    {/* Enhanced progress bar */}
                    <div className="flex items-center gap-4">
                      <div className="h-3 bg-red-100 rounded-full flex-1 overflow-hidden backdrop-blur-sm border border-red-200">
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <motion.div
          className="mt-32 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
        >
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-red-400/5 to-red-500/10 rounded-3xl blur-3xl" />
          
          <div className="relative bg-white/90 backdrop-blur-xl border border-red-200 rounded-3xl p-12 text-center overflow-hidden shadow-2xl">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-red-400 rounded-full"
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

            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-red-500/30 to-transparent rounded-br-full" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-red-500/30 to-transparent rounded-tl-full" />

            <div className="relative z-10">
              <motion.div
                className="mb-8"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-red-400 to-red-600 rounded-full flex items-center justify-center shadow-2xl">
                  <motion.div
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-red-400 to-red-600 rounded-full" />
                  </motion.div>
                </div>
              </motion.div>

              <motion.h3
                className="text-5xl font-black bg-gray-800 bg-clip-text text-transparent mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Ready to Transform Medicine?
              </motion.h3>

              <motion.p
                className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
Join Kayco&#39;s revolutionary approach to sustainable medicine. Whether you&#39;re an investor, partner, or innovator, let&#39;s build the future of healthcare together.

              </motion.p>

              {/* Action buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.button
                  className="group relative px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-full shadow-2xl overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">Join Our Angel Round</span>
                  <motion.div
                    className="absolute inset-0 bg-white/20 rounded-full"
                    initial={{ scale: 0, x: "-100%" }}
                    whileHover={{ scale: 2, x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
              </motion.div>

              {/* Contact info */}
              <motion.div
                className="mt-8 flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse" />
                  <span className="font-medium">Pipeline Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse delay-300" />
                  <span className="font-medium">Global Partnerships</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse delay-700" />
                  <span className="font-medium">Open for Investment</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
