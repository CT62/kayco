import Person from "@/components/Person";

const LenaKadri = () => {
  const keywords = [
    "ASDs/APSs",
    "API Solubility",
    "Oral Medication",
    "Pre-Formulation",
    "Green Chemistry",
    "API Enhancement",
    "Commercialisation",
    "Mechano-Chemistry",
  ];

  const bio = (
    <>
      <div className="mb-6">
        <div className="flex flex-wrap gap-3 justify-center">
          {keywords.map((word, index) => (
            <span
              key={`keyword-${index}`}
              className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow hover:scale-105 transition-transform duration-200"
            >
              {word}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mt-6 space-y-4">
        <p className="text-gray-700 leading-relaxed">
          I am Dr. Lena Kadri, the founder of Kayco. Throughout my career
          in academia and global pharma, I kept seeing the same challenges
          again and again.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Patients&apos; needs left unmet, groups of people forgotten,
          unbearable side effects, and medications that offered little to no
          relief. In some cases, there were no treatment options at all.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The science was there. But access to meaningful medicine still
          wasn&apos;t reaching everyone — women, children, people with
          disabilities, the elderly, and those living with rare conditions.
        </p>
        <p className="text-gray-700 leading-relaxed">
          That <strong>stayed with me</strong>.
          And it left me with a question that I couldn&apos;t ignore:
        </p>
        <p className="text-gray-700 leading-relaxed">
          <strong>If we can do better, why haven&apos;t we?</strong>
        </p>
        <p className="text-gray-700 leading-relaxed">
          I started Kayco to help change that.
        </p>
        <p className="text-gray-700 leading-relaxed">
          We are on a mission to <strong>push the boundaries of what drug development can be</strong>.
        </p>
        <p className="text-gray-700 leading-relaxed">
          We are starting by <strong>improving the efficacy of overlooked drugs</strong>, reformulating treatments for those who need them the most, and <strong>opening new, sustainable pathways to drug discovery</strong>.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Because <strong>medicine should work for everyone, and be accessible to everyone</strong>.
          Not just the majority.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Rooted in Ireland and growing in Aotearoa New Zealand, I am proud to announce the pre-launch of Kayco —
          a start-up dedicated to transforming lives through <strong>science rooted in empathy, one molecule at a time</strong>.
        </p>
      </div>
    </>
  );

  return (
    <Person
      name="Dr. Lena Kadri"
      image="/people/Lena.jpg"
      role="Founder | Kaiwhakarewa"
      text={bio}
    />
  );
};

export default LenaKadri;
