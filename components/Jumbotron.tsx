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
      {/* Hero Section */}
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
            Shaping the future of medicine,
	    <br/>
            Where people come first.
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
              onClick={() => router.push("/about")}
            >
              OUR RESEARCH
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
            >
              CONTACT US
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Vision Section with Floating Logos */}
      <section className="relative z-10 bg-white py-20 px-4 sm:px-8 md:px-16 overflow-hidden">
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
  <div className="max-w-5xl mx-auto space-y-20 z-10 relative">
    {/* Vision */}
    <div className="space-y-6">
      <div className="inline-block">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-red-500 tracking-tight">
          Our Vision
        </h2>
        <div className="h-1 bg-red-300 mt-3 rounded-full w-20 mx-auto transition-all duration-500" />
      </div>
      <p className="text-gray-700 text-lg sm:text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
        At <span className="text-[#FF6B6B] font-medium">Kayco</span>, we are reshaping the future of medicine by creating life-changing
        solutions that prioritize people. We aim to make healthcare smarter, simpler, and more human.
      </p>
    </div>

    {/* Mission */}
    <div className="space-y-6">
      <div className="inline-block">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-red-500 tracking-tight">
          Our Mission
        </h2>
        <div className="h-1 bg-red-300 mt-3 rounded-full w-24 mx-auto transition-all duration-500" />
      </div>
      <p className="text-gray-700 text-lg sm:text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
        To transform lives through science rooted in empathy, one molecule at a time.
      </p>
    </div>
  </div>
</section>

        </motion.div>
      </section>
    </div>
  );
};

export default KaycoHomepage;
