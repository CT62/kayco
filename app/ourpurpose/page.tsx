"use client"
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon, UserIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";

// Type definitions
interface Patient {
  name: string;
  description: string;
  image: string;
  problem: string;
  solution: string;
}

interface SectionData {
  title: string;
  subtitle: string;
  patient?: Patient;
  patients?: Patient[];
}

interface PatientCardProps {
  patient: Patient;
}

interface SectionCardProps {
  title: string;
  subtitle: string;
  data: SectionData;
  isMultiplePatients?: boolean;
}

const ourStartData = {
  enhancingDrugEfficacy: {
    title: "Enhancing Drug Efficacy",
    subtitle: "For better absorption, fewer side effects, and faster relief.",
    patient: {
      name: "Priya, 52 years old",
      description: "A mother who did everything right, but still got worse",
      image: "/Priya.jpg",
      problem: `Priya's the type of mother who holds everything together. Full-time job, deadlines, school drop-offs, family dinners, putting the kids to bed, cleaning the house, looking after her aging parents. So when she got a urinary tract infection, she didn't stop. She took the prescribed antibiotics, followed every instruction, and waited to feel better. But she didn't.

Her fever spiked. The pain got worse. A second visit to urgent care confirmed what she suspected. The infection hadn't cleared. It wasn't because she skipped a dose. It wasn't the wrong medicine. It was because not enough of the treatment reached her bloodstream.

Some medicines, don't absorb well in the body. So even when taken correctly, not enough of the medicine reaches the infection to work as its needed. The bacteria survive, adapt, and become more resistant. Meaning future medication will be even less effective.

Priya missed more days at work. Her family routine was thrown off. And she was left wondering what more she could've done. Even though she had done everything right.`,
      solution: `We improve essential antibiotics so the body can absorb them better, faster, and with fewer side effects. This helps the medicine do what it's meant to do. Work effectively, the first time around. We deliver the essential medications in the form of:
• Improved oral tablets and capsules
• Gentle skin patches
• Inhalable formulations`
    }
  },
  reformulatingMedicine: {
    title: "Reformulating Medicine",
    subtitle: "Improving how medicine is delivered for vulnerable patients.",
    patients: [
      {
        name: "Mia, 6 years old",
        description: "Living with Down syndrome in a world where one-size-fits-all",
        image: "/Mia.jpg",
        problem: `Mia gets frequent infections and often needs to take antibiotics. However, the medication she receives is too hard for her to swallow, and it often tastes unbearable.

Research and real-life experiences show that individuals with Down syndrome have oral motor difficulties, like chewing and throat coordination, sensory sensitivities, and cognitive development, making swallowing tablets or capsules a living nightmare for someone like Mia, and her loved ones.

This often leaves her parents with only one option: suppositories. Something Mia resists fiercely. She screams and cries every time it comes to taking her medicine. Can you imagine living like this? But for Mia and her family, they don't have to imagine. This is their everyday reality.

Many children may be labelled "stubborn", but the truth is this isn't behavioural, it's physiological and emotional. For parents, doctors, and caregivers, it's a recurring struggle. Medications are essential, but the delivery is traumatic.

At Kayco, we say. No more tablets. No more suppositories. No more trauma. Just safe, effective treatment that feels less like a battle, and more like care.`,
        solution: `We redesign these medications into non-invasive, disability-, elderly-, and child-friendly forms, such as:
• Gentle skin patches
• Medicated lollipops / chewable gummies / desserts
• Melt‑on‑the‑tongue oral strips
• Smooth, neutral-tasting sprinkle-on powders`
      },
      {
        name: "Wayne, 86 years old",
        description: "Battling with Parkinson's, while waiting for better",
        image: "/Wayne.jpg",
        problem: `Wayne has always been a man who worked hard, supported his family, and looked after others. Now he's the one that needs looking after. Parkinson's disease means he takes several medications each day, but swallowing them has become harder with time.

Some pills are too big. Others make him cough or choke. His daughter does her best. Crushing what she can into food and thickening liquids. However, some medications can't be altered. Others taste terrible. And thin liquids? Too risky. They can go straight into his lungs.

Swallowing difficulties like Wayne's are common in Parkinson's. The disease affects the muscles that control chewing and throat coordination. Thin liquids can be dangerous, and thickened ones are unpleasant, so the very act of taking medicine becomes a daily source of concern and frustration.

At Kayco, we believe enough is enough. No more choking. No more fear. Just thoughtful care that looks after Wayne's needs, and brings peace of mind to the people who love him most.`,
        solution: `We redesign these medications into non-invasive, disability-, elderly-, and child-friendly forms, such as:
• Gentle skin patches
• Medicated lollipops / chewable gummies / desserts
• Melt‑on‑the‑tongue oral strips
• Smooth, neutral-tasting sprinkle-on powders`
      },
      {
        name: "Leo, 2 years old",
        description: "Fighting leukemia, and fighting his medicine",
        image: "/Leo.jpg",
        problem: `At just two years old, Leo was diagnosed with acute leukemia. His treatment plan includes a lifesaving medication that needs to be taken daily. The drug is provided as granules that dissolve in water, intended to make administration easier for children who can't swallow pills.

But for Leo and his family, it's a living nightmare. The medicine is lumpy, bitter, and has a chemical smell. Even when mixed into juice or food, he gags, cries, or spits it out. Sometimes he vomits. And because the dose is critical, there's no room for error.

Every dose becomes a battle. His parents know how important it is, but forcing it down Leo feels cruel. Leo's fear of his treatment grows, and with it, his resistance. Missed or incomplete doses risk his recovery. He's only two years old. He doesn't understand.`,
        solution: `We redesign these medications into non-invasive, disability-, elderly-, and child-friendly forms, such as:
• Gentle skin patches
• Medicated lollipops / chewable gummies / desserts
• Melt‑on‑the‑tongue oral strips
• Smooth, neutral-tasting sprinkle-on powders`
      }
    ]
  }
};

// Our Future - Future Focus
const ourFutureData = {
  prioritisingWomensHealth: {
    title: "Prioritising Women's Health",
    subtitle: "Bringing treatment options to those left behind.",
    patients: [
      {
        name: "Anika, 31 years old",
        description: "Living with endometriosis and waiting for answers",
        image: "/Anika.jpg",
        problem: `Anika is no stranger to pain. Throughout her twenties, Anika was told her pain was normal. That it was "just bad periods," or that maybe she was "too sensitive". But the pain was real. Sharp, constant, and often debilitating. It affected her work, her relationships, her sleep. Some days, she could barely stand upright.

After nearly a decade of dismissal, Anika was finally diagnosed with endometriosis. A chronic condition affecting 1 in 10 women.

Hormonal therapies caused side effects that disrupted her mood, memory, and daily functioning. Surgery offered temporary relief, but nothing long-term. Like many young teenagers and women, Anika was left cycling through medications that didn't work. And a system that didn't seem to care.

Many of the available medicines shut down hormones, bringing on menopausal symptoms in females as young as 13 years old. Anika tried them all: hormonal pills, injections, painkillers. But the side effects left her foggy, fatigued, and emotionally drained. She needed something better. Something designed for her, not recycled from treatments for someone else.`,
        solution: `We're bringing innovation to where it's long overdue.
Women's Health.
Because pain should never be normal, and women deserve more than waiting.
Kayco is advancing:
• Treatment options made for Her`
      },
      {
        name: "Aroha, 27 years old",
        description: "Living with PCOS: Dismissed, misdiagnosed, and overlooked",
        image: "/Aroha.webp",
        problem: `Aroha always felt like something was off. Her cycles were irregular, her skin flared constantly, and no matter what she did, the weight wouldn't shift. Every time she raised concerns, the answers were always the same. "It could be your diet", "you could be stressed", "it'll sort itself out".

After years of frustration and self-blame, Aroha was diagnosed with Polycystic Ovary Syndrome (PCOS). A common hormonal disorder affecting 1 in 10 women of reproductive age. It can impact fertility, metabolism, mental health, and increase the risk of diabetes and heart disease.

Despite its prevalence, there are no approved medications that directly treat PCOS. Most women are offered off-label birth control, insulin-sensitizing drugs developed for diabetes, or told to make lifestyle changes. This is not real support.

For Aroha, the treatment felt like guesswork. Nothing was designed for her. Nothing really worked. For Aroha, the hardest part wasn't the diagnosis, it was the silence that followed. A chronic condition with no options, and no urgency to find one.`,
        solution: `We're bringing innovation to where it's long overdue.
Women's Health.
Because pain should never be normal, and women deserve more than waiting.
Kayco is advancing:
• Treatment options made for Her`
      }
    ]
  },
  discoveringNewSolutions: {
    title: "Discovering New Solutions",
    subtitle: "Developing new medicines for illnesses with limited options.",
    patients: [
      {
        name: "Hassan, 58 years old",
        description: "Diagnosed with cancer and running out of options",
        image: "/Hassan.jpg",
        problem: `Hassan is the kind of person who never missed a birthday. Who made his wife laugh and smile everyday. Who always checked in on his daughters. Who played with his grandchildren. Who stayed late to help his colleagues, and got up early to walk the dog. He is a husband, a father, a grandfather, a neighbour, a mentor. A rock in so many peoples lives.

He stayed active, took care of himself, and never imagined anything was wrong. Until the pain started, and then a scan that changed everything. Hassan was diagnosed with cancer.

No warnings. No clear cause. No explanation.

He started treatment, but it came at a price. The side effects were relentless and took over his life. The treatments caused skin reactions, crippling nausea and weakness that kept him from playing with his grandchildren. The cancer was being treated, but there was always that risk of it coming back.

The treatments were outdated. The newer options were too expensive and out of reach. While hope remained, time was slipping away.`,
        solution: `At Kayco, we're working to change the story — with urgency, empathy, and innovation.
Because no one should have to say goodbye before their time.
• Discovering new medicines
• Developing better medicines`
      },
      {
        name: "Richard, 74 years old",
        description: "Fighting an illness with no cure",
        image: "/Richard.jpg",
        problem: `Richard was the kind of person who held things together. A former school principal who knew every child's name, a steady hand for his community, and the quiet strength behind his family. He was the kind of person who never asked for help. Until now. His muscles are wasting. His hands don't grip like they used to. Some days, even standing feels like a risk.

After years of referrals and inconclusive scans, Richard was diagnosed with a rare, slowly progressive neuromuscular disorder. An illness with no cure. The only option available was borrowed from other diseases, none of which make a real difference.

He was told: "We'll monitor it."
But the disease isn't waiting.

Richard is not alone. Thousands of people live with difficult-to-treat diseases that have no medication designed specifically for them, specifically for their needs. The unforgiving reality is, only 5% of rare diseases have an approved treatment. Many patients are forgotten. Their disease is too rare, too difficult to understand, too hard to solve.

When no one is developing or discovering new drugs, patients like Richard are left with medications that aren't designed for them. And in some cases, they're given nothing at all.`,
        solution: `At Kayco, we're working to change the story — with urgency, empathy, and innovation.
Because no one should have to say goodbye before their time.
• Discovering new medicines
• Developing better medicines`
      }
    ]
  }
};

const PatientCard = ({ patient }: PatientCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
      whileHover={{ y: -4 }}
    >
      {/* Image Section */}
      <div className="relative h-64 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
        {patient.image ? (
          <img 
            src={patient.image} 
            alt={patient.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg mb-4">
                <UserIcon className="w-10 h-10 text-slate-400" />
              </div>
              <p className="text-slate-500 text-sm font-medium">Patient Photo</p>
              <p className="text-slate-400 text-xs mt-1">Coming Soon</p>
            </div>
          </div>
        )}
        {/* Overlay with patient info */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6">
          <h4 className="text-xl font-bold text-white mb-1">
            {patient.name}
          </h4>
          <p className="text-gray-200 text-sm font-medium">
            {patient.description}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="space-y-6 border-t border-gray-100 pt-6">
                <div className="bg-red-50 rounded-xl p-5 border border-red-100">
                  <h5 className="font-bold text-red-900 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    The Problem
                  </h5>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line text-sm">
                    {patient.problem}
                  </p>
                </div>
                
                <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                  <h5 className="font-bold text-green-900 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Our Solution
                  </h5>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line text-sm">
                    {patient.solution}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          className="mt-4 w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          onClick={() => setExpanded(!expanded)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {expanded ? "Show Less" : "Read Their Story"}
          {expanded ? (
            <ChevronUpIcon className="w-5 h-5 ml-2" />
          ) : (
            <ChevronDownIcon className="w-5 h-5 ml-2" />
          )}
        </motion.button>
      </div>
    </motion.div>
  );
};

const SectionCard = ({ title, subtitle, data, isMultiplePatients = false }: SectionCardProps) => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl mb-4">
          <div className="w-8 h-8 bg-white rounded-lg"></div>
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 text-lg">{subtitle}</p>
      </div>
      
      {isMultiplePatients && data.patients ? (
        <div className="grid gap-8">
          {data.patients.map((patient, idx) => (
            <PatientCard 
              key={idx} 
              patient={patient}
            />
          ))}
        </div>
      ) : data.patient ? (
        <div className="max-w-2xl mx-auto">
          <PatientCard 
            patient={data.patient}
          />
        </div>
      ) : null}
    </div>
  );
};

const OurPurposePage = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen">
      {/* Header */}
      <div className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            className="text-4xl font-bold text-gray-800 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Purpose
          </motion.h1>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-2">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-2xl font-bold text-gray-800 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Who We&#39;re Here For
          </motion.h2>
          <div className="max-w-4xl mx-auto space-y-6 text-xl text-gray-700">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              At Kayco, we begin where today&#39;s treatment falls short.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              This is our starting point,<br />Not our endpoint.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Because everyone deserves better.
            </motion.p>
            <motion.p 
              className="text-2xl font-bold text-red-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Putting patients at the heart of every breakthrough.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Start</h2>
            <p className="text-2xl text-gray-600 mb-2">Tō Mātou Tīmatanga</p>
            <p className="text-lg text-gray-700 mt-6 max-w-3xl mx-auto">
	    At Kayco, we begin where today&apos;s treatment falls short. <br/>
	    This is our starting point,<br/>
	    Not our endpoint.<br/>
	    Because everyone deserves better.<br/>
            </p>
          </div>
          
          <div className="grid gap-16 xl:grid-cols-2">
            <SectionCard 
              title={ourStartData.enhancingDrugEfficacy.title}
              subtitle={ourStartData.enhancingDrugEfficacy.subtitle}
              data={ourStartData.enhancingDrugEfficacy}
              isMultiplePatients={false}
            />
            <SectionCard 
              title={ourStartData.reformulatingMedicine.title}
              subtitle={ourStartData.reformulatingMedicine.subtitle}
              data={ourStartData.reformulatingMedicine}
              isMultiplePatients={true}
            />
          </div>
        </div>
      </div>

      <div className="bg-white py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Future</h2>
            <p className="text-2xl text-gray-600 mb-2">Tō Tātou Anamata</p>
            <div className="text-lg text-gray-700 mt-6 max-w-3xl mx-auto">
              <p>This is our future,</p>
              <p>Where we are heading,</p>
              <p>The patients we will serve.</p>
              <p className="text-2xl font-bold text-red-600 mt-8">
                Answering the needs others overlook.
              </p>
            </div>
          </div>
          
          <div className="grid gap-16 xl:grid-cols-2">
            <SectionCard 
              title={ourFutureData.prioritisingWomensHealth.title}
              subtitle={ourFutureData.prioritisingWomensHealth.subtitle}
              data={ourFutureData.prioritisingWomensHealth}
              isMultiplePatients={true}
            />
            <SectionCard 
              title={ourFutureData.discoveringNewSolutions.title}
              subtitle={ourFutureData.discoveringNewSolutions.subtitle}
              data={ourFutureData.discoveringNewSolutions}
              isMultiplePatients={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPurposePage;
