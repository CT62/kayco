"use client";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import AutoScrollGallery from '@/components/AutoScrollGallery';
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
              onClick={() => router.push("/ourpurpose")}
            >
              OUR PURPOSE
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
      
      <section className="relative z-10 bg-white pb-10 pt-20 px-4 sm:px-8 overflow-hidden">
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
              
              <div className="relative">
                <motion.div 
                  className="absolute -left-16 top-1/2 -translate-y-1/2 -translate-x-12 hidden xl:block z-0"
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="relative group">
                    <div className="absolute -inset-6 bg-gradient-to-r from-red-100/20 to-pink-100/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  </div>
                </motion.div>
                <div className="space-y-6 relative z-10">
                  <div className="inline-block">
                    <h2 className="text-3xl font-bold text-red-400 tracking-tight">
                      Our Vision
                    </h2>
                  </div>
                  <p className="text-gray-700 text-lg font-light leading-relaxed max-w-3xl mx-auto">
		  To transform lives through science rooted in empathy, <br/>
one molecule at a time.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <motion.div 
                  className="absolute -right-16 top-1/2 -translate-y-1/2 translate-x-12 hidden xl:block z-0"
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="relative group">
                    <div className="absolute -inset-6 bg-gradient-to-l from-red-100/20 to-orange-100/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  </div>
                </motion.div>
                <div className="space-y-6 relative z-10">
                  <div className="inline-block">
                    <h2 className="text-3xl font-bold text-red-400 tracking-tight">
                      Our Mission
                    </h2>
                  </div>
                  <p className="text-gray-700 text-lg font-light leading-relaxed max-w-3xl mx-auto">
                    To create medicine, <br/>
                    That combines deep scientific innovation,  <br/>
                    With compassion, integrity, and purpose,  <br/>
                    To push the boundaries of drug development.  <br/>
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="space-y-12 relative z-10">
                  <div className="inline-block">
                    <h2 className="text-3xl font-bold text-red-400 tracking-tight">
                      Our Story
                    </h2>
                  </div>
                  
                  <div className="max-w-4xl mx-auto space-y-8">
                    
                    <motion.div 
                      className="relative"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-gray-700 text-lg font-light leading-relaxed text-left space-y-6">
                        <p>
                          Kayco exists to serve patients who need and deserve better. To improve medicines that simply miss the mark.
                        </p>
                        
                        <p>
                          Treatments that offer little or <span className="font-bold text-black">no relief</span>. Side effects that can <span className="font-bold text-black">outweigh the benefits</span>. Resistance that quietly grows in the background, <span className="font-bold text-black">narrowing future options</span>. Formulations that make patients gag or <span className="font-bold text-black">vomit</span>. Entire groups of people who were <span className="font-bold text-black">never even part of the conversation</span>. And illnesses and diseases with limited or <span className="font-bold text-black">no treatment options at all</span>.
                        </p>
                        
                        <div className="text-center py-4">
                          <p className="text-gray-700 text-lg font-light leading-relaxed">
                            The science is there. But why isn&apos;t it reaching everyone? And why isn&apos;t it reaching everyone, as effectively as possible?
                          </p>
                        </div>
                        <div className="flex items-center justify-center py-8">
                          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-red-300 to-transparent"></div>
                          <div className="px-4">
                            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          </div>
                          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-red-300 to-transparent"></div>
                        </div>
                        

                        <p>
                          At Kayco, we&apos;re not here to talk about the problems. We&apos;re here to transform them.
                        </p>
                        
                        <p>
                          We live by the question: <span className="font-bold text-black">If we can do better, why haven&apos;t we?</span> Because for many people around the world, their needs are still left unmet.
                        </p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="relative"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-gray-700 text-lg font-light leading-relaxed text-left space-y-6">
                        <p>
                          At Kayco, we are on a mission to push the boundaries of what drug development can be — and who it can serve.
                        </p>
                        
                        <p>
                          We are starting by improving the <span className="font-bold text-black">effectiveness</span> of overlooked medicines, <span className="font-bold text-black">reformulating</span> treatments for those who need them the most, and opening <span className="font-bold text-black">new</span>, <span className="font-bold text-black">sustainable</span> pathways to <span className="font-bold text-black">drug discovery</span>.
                        </p>
                        
                        <p>
                          Rooted in Ireland and growing in Aotearoa, I am proud to announce the pre-launch of Kayco — a start-up dedicated to transforming lives through science rooted in empathy, one molecule at a time.
                        </p>
                        
                                                <p className="text-gray-700 text-lg font-light leading-relaxed">
                          Because at Kayco, we believe medicine should work for <span className="italic font-medium">everyone. Not just the majority.</span>
                        </p>
                      </div>
                    </motion.div>

                  </div>
                </div>
              </div>
              
              <div className="xl:hidden space-y-10 mt-10">
              </div>
            </div>
          </section>
        </motion.div>
	<AutoScrollGallery/>
      </section>
      
      <section className="relative py-20 px-4 sm:px-8 overflow-hidden">
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
            <div className="space-y-8 text-gray-800 leading-relaxed">
              <div className="space-y-4">
                <p className="text-lg">
                  <span className="font-medium text-red-400">Nau mai haere mai</span>
                </p>
                <p className="text-lg font-light text-left">
                  We honour the <span className="italic font-medium text-gray-800">mana whenua</span> of <span className="italic font-medium text-gray-800">Aotearoa</span> New Zealand and the <span className="italic font-medium text-gray-800">mātauranga Māori</span>.
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg">
                  <span className="font-medium text-red-400">Céad míle fáilte</span>
                </p>
                <p className="text-lg font-medium text-left text-gray-800">
                  We acknowledge our roots in Ireland and the legacy of Irish resilience, helping to bring Kayco to life.
                </p>
              </div>
              
              <div className="pt-6 border-t border-white/30 space-y-3 text-sm text-gray-800 text-left">
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
