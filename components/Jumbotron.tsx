"use client";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

const KaycoHomepage = () => {
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

  const backgroundLogos = Array.from({ length: 10 }).map((_, i) => {
    const size = Math.random() * 40 + 20;
    const xStart = Math.random() * 100;
    const yStart = Math.random() * 100;
    const xMove = (Math.random() - 0.5) * 200;
    const yMove = (Math.random() - 0.5) * 200;
    const rotateStart = Math.random() * 360;
    const duration = 10 + Math.random() * 10;
    return {
      id: i,
      size,
      xStart,
      yStart,
      xMove,
      yMove,
      rotateStart,
      duration,
      gray: i % 2 === 0,
    };
  });

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Soft background blur circle */}
        <div className="absolute -bottom-20 -right-32 w-96 h-96 bg-[#FF6B6B] opacity-10 rounded-full blur-3xl pointer-events-none z-0" />
        <motion.div
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex justify-center items-center mb-6 sm:mb-8"
            variants={itemVariants}
          >
            <div className="relative w-52 h-52 sm:w-80 sm:h-80 md:w-80 md:h-80">
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
          </motion.div>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 font-light leading-relaxed max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Shaping the future of medicine
            <br/>
            Where people come first
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
            variants={itemVariants}
          >
            <motion.button
              className="text-white px-10 py-3 sm:px-12 sm:py-4 rounded-full font-light text-base sm:text-lg tracking-wide transition-all duration-300 shadow-lg"
              style={{ backgroundColor: "#FF6B6B" }}
              whileHover={{
                y: -3,
                boxShadow: "0 15px 35px rgba(255,107,107,0.3)",
                backgroundColor: "#FF5252",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push("/ourpurpose")}
            >
              OUR PURPOSE
            </motion.button>
            <motion.button
              className="text-gray-700 px-10 py-3 sm:px-12 sm:py-4 border-2 rounded-full font-light text-base sm:text-lg tracking-wide transition-all duration-300"
              style={{ borderColor: "#FF6B6B" }}
              whileHover={{
                y: -3,
                color: "#FF6B6B",
                boxShadow: "0 10px 25px rgba(255,107,107,0.2)",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push("/joinus")}
            >
              JOIN US
            </motion.button>
          </motion.div>
        </motion.div>
      </section>



      {/* Vision Section with Floating Logos */}
      <section className="relative z-10 bg-white pb-10 pt-20 px-4 sm:px-8 md:px-16 overflow-hidden">
        {/* Floating Background Logos */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {backgroundLogos.map(
            ({
              id,
              size,
              xStart,
              yStart,
              xMove,
              yMove,
              rotateStart,
              duration,
              gray,
            }) => (
              <motion.div
                key={id}
                className="absolute opacity-20"
                style={{
                  top: `${yStart}%`,
                  left: `${xStart}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  filter: gray ? "grayscale(100%)" : "none",
                }}
                animate={{
                  x: [`0%`, `${xMove}%`],
                  y: [`0%`, `${yMove}%`],
                  rotate: [rotateStart, rotateStart + 360],
                }}
                transition={{
                  duration,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/mobilelogo.png"
                  alt="Background Logo"
                  fill
                  className="object-contain"
                />
              </motion.div>
            )
          )}
        </div>
        <motion.div
          className="relative max-w-5xl mx-auto text-center z-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <section className="relative text-center px-4 sm:px-8 lg:px-12 py-24">
            <div className="max-w-7xl mx-auto space-y-20 z-10 relative">
              {/* Our Vision Section */}
              <div className="relative">
                {/* Baby and elderly hands image - positioned on the left with modern styling */}
                <motion.div 
                  className="absolute -left-16 top-1/2 -translate-y-1/2 -translate-x-12 hidden xl:block z-0"
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="relative group">
                    {/* Backdrop blur effect */}
                    <div className="absolute -inset-6 bg-gradient-to-r from-red-100/20 to-pink-100/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                    
                    {/* Main image container - clean and simple */}
                    <div className="relative w-72 h-48 rounded-2xl overflow-hidden shadow-xl group-hover:scale-105 transition-all duration-500">
                      <Image
                        src="/baby_finger.jpg"
                        alt="Baby hand holding elderly hand"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
                <div className="space-y-6 relative z-10">
                  <div className="inline-block">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-red-400 tracking-tight">
                      Our Vision
                    </h2>
                  </div>
                  <p className="text-gray-700 text-lg sm:text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
                    At <span className="text-[#FF6B6B] font-medium">Kayco</span>, we are reshaping the future of medicine by creating life-changing
                    solutions that prioritize people. We aim to make healthcare smarter, simpler, and more human.
                  </p>
                </div>
              </div>
              
              {/* Our Mission Section */}
              <div className="relative">
                {/* Old couple image - positioned on the right with modern styling */}
                <motion.div 
                  className="absolute -right-16 top-1/2 -translate-y-1/2 translate-x-12 hidden xl:block z-0"
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="relative group">
                    {/* Backdrop blur effect */}
                    <div className="absolute -inset-6 bg-gradient-to-l from-red-100/20 to-orange-100/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                    
                    {/* Main image container - clean and simple */}
                    <div className="relative w-72 h-48 rounded-2xl overflow-hidden shadow-xl group-hover:scale-105 transition-all duration-500">
                      <Image
                        src="/elderly_hands.jpg"
                        alt="Happy elderly couple"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
                <div className="space-y-6 relative z-10">
                  <div className="inline-block">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-red-400 tracking-tight">
                      Our Mission
                    </h2>
                  </div>
                  <p className="text-gray-700 text-lg sm:text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
                    To create medicine, <br/>
                    That combine deep scientific innovation,  <br/>
                    With compassion, integrity, and purpose,  <br/>
                    To push the boundaries of drug development.  <br/>
                  </p>
                </div>
              </div>
              
              <div className="xl:hidden space-y-10 mt-10">
                {/* Mobile Mission Image */}
              </div>
            </div>
          </section>
        </motion.div>
      </section>

      {/* Cultural Acknowledgment Section */}
      <section className="relative py-20 px-4 sm:px-8 md:px-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gray-100" />
          </div>
        </div>

        <motion.div
          className="relative z-10 max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white backdrop-blur-lg rounded-3xl p-8 sm:p-16">
            <div className="space-y-8 text-black leading-relaxed">
              <div className="space-y-4">
                <p className="text-2xl sm:text-3xl">
                  <span className="font-medium italic text-red-400">Nau mai haere mai</span>
                </p>
                <p className="text-lg sm:text-xl font-light">
                  We honour the <span className="italic font-medium text-black">mana whenua</span> of <span className="italic font-medium text-black">Aotearoa</span> New Zealand and the <span className="italic font-medium text-black">mātauranga Māori</span>.
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-2xl sm:text-3xl">
                  <span className="font-medium text-red-400 italic">Céad míle fáilte</span>
                </p>
                <p className="text-lg sm:text-xl font-medium">
                  We acknowledge our roots in Ireland and the legacy of Irish resilience, helping to bring Kayco to life.
                </p>
              </div>
              
              <div className="pt-6 border-t border-white/30 space-y-3 text-sm text-black">
                <p><span className="italic">Nau mai, haere mai</span> = Māori welcome</p>
                <p><span className="italic">Mana whenua</span> = The Indigenous custodians of the land</p>
                <p><span className="italic">Mātauranga Māori</span> = Māori knowledge — traditional, cultural, and spiritual systems of understanding the world</p>
                <p><span className="italic">Céad míle fáilte</span> = Irish welcome</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default KaycoHomepage;
