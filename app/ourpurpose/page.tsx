"use client";

import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  {
    title: "Enhancing Drug Efficacy",
    image: "/images/priya.jpg",
    patient: "Priya, 52 — A mother who did everything right, but still got worse.",
    problem:
      "Some medicines don’t absorb well in the body, meaning that even when taken correctly, they don’t reach the infection in high enough quantities to work. This can lead to resistant bacteria, prolonged illness, and more side effects.",
    solution:
      "We improve essential antibiotics to increase absorption, reduce side effects, and work the first time. Delivered through oral tablets, skin patches, or inhalable formulations.",
  },
  {
    title: "Children, Disabilities & Elderly",
    image: "/images/mia.jpg",
    patient: "Mia (6), Wayne (86), and Leo (2) — Struggling with how medicine is delivered.",
    problem:
      "Many people experience difficulties swallowing pills or coping with harsh formats. This leads to trauma, poor adherence, and compromised care.",
    solution:
      "We redesign medicines into chewable gummies, oral strips, sprinkle powders, and gentle skin patches — formats that are safer, friendlier, and trauma-free.",
  },
  {
    title: "Women’s Health",
    image: "/images/anika.jpg",
    patient: "Anika with endometriosis. Aroha with PCOS. Underserved and unheard.",
    problem:
      "Conditions like endometriosis and PCOS are often treated with hormone-suppressing drugs or repurposed meds, leading to side effects and poor results.",
    solution:
      "We’re advancing women’s health with hormone-sparing therapies, modern delivery formats, and treatments designed to fit real lives — not borrowed ones.",
  },
  {
    title: "Difficult-to-Treat Diseases",
    image: "/images/hassan.jpg",
    patient: "Hassan with cancer. Richard with a rare neuromuscular disorder.",
    problem:
      "Outdated treatments or no treatments at all. Rare and difficult diseases are neglected, leaving patients without options or hope.",
    solution:
      "We develop new drugs, enhance old ones, and focus innovation where others won’t. With urgency, empathy, and science.",
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
          className="w-full h-48 object-cover"
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

        <footer className="text-center pt-12 space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Our Start</h3>
            <p className="text-sm text-gray-500">Tō Mātou Tīmatanga</p>
            <p className="text-gray-700 mt-2 max-w-xl mx-auto">
              We begin where today’s treatments fall short. This is our starting point—not our endpoint.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Our Future</h3>
            <p className="text-sm text-gray-500">Tō Tātou Anamata</p>
            <p className="text-gray-700 mt-2 max-w-xl mx-auto">
              We are building a future where no one is left behind. Because every need deserves a solution.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default OurPurposePage;
