"use client";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Jumbotron = () => {
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

  return (
    <div className="bg-white">
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
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
            <div className="relative w-52 h-52 sm:w-80 sm:h-80">
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
            className="text-xl text-gray-600 mb-8 sm:mb-12 font-light leading-relaxed max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Shaping the future of medicine.
            <br/>
            Where people come first.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
            variants={itemVariants}
          >
            <motion.button
              className="text-white px-10 py-3 sm:px-12 sm:py-4 rounded-full font-light text-lg tracking-wide transition-all duration-300 shadow-lg"
              style={{ backgroundColor: "#FF6B6B" }}
              whileHover={{
                y: -3,
                boxShadow: "0 15px 35px rgba(255,107,107,0.3)",
                backgroundColor: "#FF5252",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push("/ourheart")}
            >
              OUR HEART
            </motion.button>
            <motion.button
              className="text-gray-700 px-10 py-3 sm:px-12 sm:py-4 border-2 rounded-full font-light text-lg tracking-wide transition-all duration-300"
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
    </div>
  );
};

export default Jumbotron;
