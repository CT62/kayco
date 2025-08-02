'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import LenaKadri from '@/components/people/lenaKadri'
import { CharlotteOwens } from '@/components/people/charlotteOwens'
import AnisoaraNicol from '@/components/people/anisoaraNicol'
import Unknown from '@/components/people/unknown'

const OurPeople = () => {
  const affiliations = [
    { image: '/affilliations/theUniversityOfAuckland.jpg', alt: 'The University of Auckland logo' },
    { image: '/affilliations/womenInHealthTech.png', alt: 'Women in Health Tech logo' },
    { image: '/affilliations/monashUniversity.webp', alt: 'Monash University logo' },
    { image: '/affilliations/trinityCollegeDublin.jpg', alt: 'Trinity College Dublin logo' },
    { image: '/affilliations/universityOfLimerick.png', alt: 'University of Limerick logo' },
    { image: '/affilliations/sspc.jpg', alt: 'SSPC logo' },
    { image: '/affilliations/morehouseSchoolofMedicine.jpg', alt: 'Morehouse School of Medicine logo' },
  ]

  return (
    <motion.div
      className="min-h-screen bg-white pt-24"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="absolute right-0 w-48 h-48 md:w-96 md:h-96 bg-[#FF6B6B] opacity-10 rounded-full blur-3xl pointer-events-none z-0" />
        
        <motion.div
          className="text-center mb-8 md:mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Our People</h1>
          <p className="text-lg md:text-xl text-gray-600">
            We have the expertise. <br/> Now we are ready to build the future.
          </p>
        </motion.div>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-center text-red-400 mb-6">Founder</h2>
          <LenaKadri />
        </motion.div>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-3xl font-bold text-center text-red-400 mb-6">Advisor</h2>
          <div className="space-y-10">
            <CharlotteOwens />
            <Unknown />
            <Unknown />
            <Unknown />
          </div>
        </motion.div>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-center text-red-400 mb-6">Mentor</h2>
        </motion.div>

        {[AnisoaraNicol, Unknown].map((Component, index) => (
          <motion.div
            key={`mentor-${index}`}
            className="mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
          >
            <Component />
          </motion.div>
        ))}
        
        {/* Associates */}
        <motion.h2
          className="text-3xl font-bold text-center text-red-400 py-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Associates
        </motion.h2>

        {[Unknown, Unknown, Unknown].map((Component, index) => (
          <motion.div
            key={`associate-${index}`}
            className="mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
          >
            <Component />
          </motion.div>
        ))}

        {/* Affiliations */}
        <motion.div
          className="relative z-10 py-12 px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center bg-red-400 bg-clip-text text-transparent mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Affiliations
          </motion.h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {affiliations.map((affiliation, index) => (
                <motion.div
                  key={index}
                  className="relative bg-white/80 backdrop-blur-xl border border-red-200 rounded-2xl md:rounded-3xl p-4 shadow-xl hover:shadow-red-200 transition-shadow duration-300 flex items-center justify-center overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-bl from-red-400/30 to-transparent rounded-bl-full pointer-events-none" />
                  <div className="relative w-full h-28 flex items-center justify-center z-10">
                    {affiliation.image !== "/affilliations/morehouseSchoolofMedicine.jpg" ? (
                      <Image
                        src={affiliation.image}
                        alt={affiliation.alt}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : (
                      <Image
                        src={affiliation.image}
                        alt={affiliation.alt}
                        className="object-contain max-w-full max-h-full"
			width={190}
			height={115}
                      />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default OurPeople
