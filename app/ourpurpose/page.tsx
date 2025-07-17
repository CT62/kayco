"use client";

import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  {
    title: "Enhancing Drug Efficacy",
    image: "asian_woman.jpg",
    patient: "Priya, 52 — A mother who did everything right, but still got worse.",
    problem:
      "Priya took the prescribed antibiotics and followed every instruction for her UTI — but she didn’t get better. Her fever spiked, pain increased, and a second visit confirmed the infection hadn’t cleared. It wasn’t her fault — the medication simply didn’t absorb into her bloodstream properly.",
    solution:
      "We improve essential antibiotics so they’re absorbed better, faster, and with fewer side effects. Delivered via oral tablets, gentle skin patches, or inhalable forms — so treatment works right, the first time.",
  },
  {
    title: "Mia’s Story – Children & Disabilities",
    image: "mia.jpg",
    patient: "Mia, 6 — Living with Down syndrome in a one-size-fits-all system.",
    problem:
      "Mia needs antibiotics frequently, but the pills are hard to swallow and taste unbearable. Her Down syndrome causes oral motor challenges and sensory sensitivities, making medication traumatic for both her and her parents. They often resort to suppositories, which she screams and cries through.",
    solution:
      "We redesign medications into formats that are child- and disability-friendly: medicated lollipops, chewable gummies, oral strips, sprinkle powders, and skin patches — making treatment safe, effective, and trauma-free.",
  },
  {
    title: "Wayne’s Story – Elderly Patients",
    image: "wayne.jpg",
    patient: "Wayne, 86 — Battling Parkinson’s while battling his pills.",
    problem:
      "Parkinson’s makes swallowing difficult for Wayne. Pills make him choke, some can’t be crushed, and liquids can go down the wrong way. His daughter does her best, but the daily struggle is real. Medication shouldn’t be dangerous.",
    solution:
      "We reformulate medicines into safer formats: melt-on-the-tongue oral strips and gentle skin patches — giving Wayne peace of mind and dignity in care.",
  },
  {
    title: "Leo’s Story – Children & Cancer",
    image: "leo.jpg",
    patient: "Leo, 2 — Fighting leukemia, and fighting his medicine.",
    problem:
      "Leo’s chemotherapy drug comes as bitter granules dissolved in water. He gags, spits it out, or vomits. But the dose is critical — there’s no room for error. His parents must force each dose, turning treatment into trauma.",
    solution:
      "We re-engineer cancer meds into formats children can tolerate: medicated lollipops, gummies, oral strips, sprinkle powders, and gentle patches — making vital treatment easier to take.",
  },
  {
    title: "Anika’s Story – Women’s Health",
    image: "anika.jpg",
    patient: "Anika, 31 — Living with endometriosis and waiting for answers.",
    problem:
      "After years of pain and dismissal, Anika was finally diagnosed with endometriosis. Hormonal drugs caused fogginess and emotional disruption. Surgery was temporary. Nothing fit her life — and nothing was designed for her.",
    solution:
      "We develop hormone-sparing therapies and formats that support real-life routines. Because women like Anika deserve more than a shrug and side effects — they deserve solutions made for them.",
  },
  {
    title: "Aroha’s Story – PCOS",
    image: "aroha.webp",
    patient: "Aroha, 27 — Living with PCOS: Misdiagnosed and overlooked.",
    problem:
      "Aroha experienced irregular cycles, skin issues, and stubborn weight gain. For years, she was dismissed or told to manage stress. Finally diagnosed with PCOS, she was offered only repurposed drugs that didn’t help. Nothing was designed for her.",
    solution:
      "We’re advancing real treatments for women with PCOS: therapies that target the root cause, not borrowed meds. Because women deserve innovation — not leftovers.",
  },
  {
    title: "Hassan’s Story – Difficult-to-Treat Cancer",
    image: "hassan.jpg",
    patient: "Hassan, 58 — Diagnosed with cancer and running out of options.",
    problem:
      "Hassan’s treatments caused relentless side effects — nausea, skin reactions, weakness. Newer drugs were out of reach. While hope remained, time slipped away. Outdated options were all he had.",
    solution:
      "We discover new medicines and improve old ones with delivery science — to reduce side effects, increase access, and restore quality of life. Because no one should run out of options.",
  },
  {
    title: "Richard’s Story – Rare Disease",
    image: "richard.jpg",
    patient: "Richard, 74 — Fighting an illness with no cure.",
    problem:
      "Richard was diagnosed with a rare neuromuscular disease. The only meds available were borrowed from other conditions and didn’t help. 95% of rare diseases have no approved treatments — and patients like Richard are forgotten.",
    solution:
      "We’re developing new medicines for those with no options, and reengineering existing drugs to treat what was once untreatable. Because Richard deserves more than a diagnosis — he deserves hope.",
  },
];

const SectionCard = ({
  title,
  image,
  patient,
  problem,
  solution,
}: {
  title: string;
  image: string;
  patient: string;
  problem: string;
  solution: string;
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-74 object-cover"
        />
      )}
      <div className="p-6 flex flex-col grow">
        <h2 className="text-xl font-bold text-red-400 mb-1">{title}</h2>
        <p className="text-sm text-gray-600 italic mb-4">{patient}</p>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="space-y-2 border-t pt-4 text-gray-700">
                <p>
                  <strong className="text-gray-900">The Problem:</strong> {problem}
                </p>
                <p>
                  <strong className="text-gray-900">Our Solution:</strong> {solution}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          className="mt-4 flex items-center text-red-600 font-medium hover:underline"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "See Less" : "See More"}
          {expanded ? (
            <ChevronUpIcon className="w-4 h-4 ml-1" />
          ) : (
            <ChevronDownIcon className="w-4 h-4 ml-1" />
          )}
        </button>
      </div>
    </div>
  );
};

const OurPurposePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto space-y-16 pt-8">
        <header className="text-center space-y-3">
          <h1 className="text-4xl font-extrabold text-gray-800">Our Purpose</h1>
          <p className="text-md text-gray-500">Tō mātou kaupapa</p>
        </header>

        <main className="grid gap-10 grid-cols-1 sm:grid-cols-2">
          {data.map((section, idx) => (
            <SectionCard key={idx} {...section} />
          ))}
        </main>
      </div>
    </div>
  );
};

export default OurPurposePage;

