'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

type ImageProps = {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

const Image = ({ src, alt, width, height, className }: ImageProps) => (
  <img src={src} alt={alt} width={width} height={height} className={className} />
)

type PersonProps = {
  name: string
  role?: string
  image: string
  text?: React.ReactNode
}

const Person = ({ name, role, image, text }: PersonProps) => {
  const [showFull, setShowFull] = useState(false)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex flex-col md:flex-row items-center gap-8 bg-white/80 backdrop-blur-xl border border-red-200 rounded-3xl p-8 shadow-2xl max-w-5xl mx-auto relative overflow-hidden"
      >
        {/* Decorative glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-500/40 to-transparent rounded-bl-full" />

        {/* Image + Name/Role */}
        <div className="flex flex-col items-center text-center md:text-left md:items-start w-72 z-10">
          <Image
            src={image}
            alt={name}
            width={128}
            height={128}
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
          <h3 className="text-2xl font-bold bg-gray-800 bg-clip-text text-transparent mb-1">
            {name}
          </h3>
          <p className="text-sm text-red-500 font-medium">{role}</p>
        </div>

        {/* Text */}
        <div className="relative text-gray-700 text-sm leading-relaxed md:text-base md:leading-loose max-w-[600px] z-10">
          <div
            className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
              showFull ? 'max-h-[1000px]' : 'max-h-[9rem]'
            }`}
          >
            {text}
          </div>
          {!showFull && text && (
            <button
              onClick={() => setShowFull(true)}
              className="mt-3 text-red-500 font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded"
            >
              Show more
            </button>
          )}
        </div>
      </motion.div>

      {/* Modal */}
      {showFull && (
        <motion.div
          className="fixed inset-0 bg-white/60 backdrop-blur-md flex justify-center items-center z-[60] p-4"
          onClick={() => setShowFull(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-8">
              <button
                onClick={() => setShowFull(false)}
                className="p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-lg transition-colors mb-4"
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  />
                </svg>
              </button>

              {/* Modal Content */}
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="flex-shrink-0">
                  <Image
                    src={image}
                    alt={name}
                    width={160}
                    height={160}
                    className="w-40 h-40 rounded-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">{name}</h2>
                  <p className="text-red-500 font-semibold mb-4">{role}</p>
                  <div className="text-gray-700 text-base leading-relaxed">{text}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}

export default Person
