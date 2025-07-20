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
    title: 'What\'s Broken', 
    description: 'Addressing critical gaps in modern medicine from poor absorption to antimicrobial resistance',
    details: ['Poor drug absorption', 'Antimicrobial resistance', 'Vulnerable patient needs']
  },
  { 
    title: 'What We\'re Building', 
    description: 'A sustainable revolution in medicine - better absorption, fewer side effects, and global accessibility',
    details: ['Better drug absorption', 'Fighting resistance', 'Sustainable manufacturing']
  },
  { 
    title: 'Why Now & What\'s Next', 
    description: 'The science is ready, the need is urgent. Join us in shaping the future of medicine',
    details: ['Pipeline ready', 'Angel round open', 'Global partnerships']
  },
]

export default function Roadmap() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-gray-50 via-red-50 to-white px-4 overflow-hidden relative">
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
          className="absolute w-1 h-1 bg-red-500 rounded-full"
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
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-400 to-red-500 shadow-2xl border-4 border-white relative overflow-hidden">
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
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400/5 to-red-500/5" />
                  
                  {/* Corner decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-400/20 to-transparent rounded-bl-full" />
                  
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
                          className="px-4 py-2 bg-red-400/20 border border-red-400/40 rounded-full text-red-700 text-sm font-medium"
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
      </motion.div>
    </div>
  )
}
