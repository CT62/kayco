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
              className="border border-red-500 text-black px-4 py-2 rounded-full text-sm shadow hover:scale-105 transition-transform duration-200"
            >
              {word}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mt-6 space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Dr. Lena Kadri is the founder of Kayco, a pharmaceutical start-up dedicated to transforming the way poorly soluble medicines are developed and delivered. She is proudly Irish and a passionate advocate for women and girls in STEM.
        </p>
        
        <p className="text-gray-700 leading-relaxed">
          Motivated by a deep sense of urgency and responsibility, Dr. Kadri lives by the principle: <strong className="text-black">&ldquo;If not now, then when?&rdquo;</strong> This perspective continually leads her to ask: What am I here to do? What mark do I want to leave on the world? These are not simply words, but guiding principles that shape both her work and her life&apos;s mission.
        </p>
        
        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-500">
          <p className="text-gray-700 leading-relaxed italic mb-2">
            &ldquo;Your feet will take you where your heart is&rdquo;
          </p>
          <p className="text-gray-600 text-sm">
            <em>an áit a bhfuil do chroí, is ann a thabharfas do chosa thú.</em>
          </p>
        </div>
        
        <p className="text-gray-700 leading-relaxed">
          An Irish proverb she often reflects on captures the answer: For Dr. Kadri, that path has always led to patients — especially those who need better medicines and greater access to them. They are at the heart of Kayco&apos;s purpose and the reason she pursues her work with such determination.
        </p>
        
        <p className="text-gray-700 leading-relaxed">
          This vision brought her to Aotearoa New Zealand: a country with a thriving start-up culture, a spirit of innovation, and people whose warmth made it the natural home for Kayco&apos;s beginnings.
        </p>
        
        <div className="mt-8">
          <p className="text-gray-600 italic text-lg">
            Mauri ora | Be well,
          </p>
          <p className="text-gray-800 font-medium text-xl mt-2">
            Lena
          </p>
        </div>
      </div>
    </>
  );
  
  return (
    <Person
      name="Dr. Lena Kadri, PhD"
      image="/people/Lena.jpg"
      role="Founder | Kaiwhakarewa"
      text={bio}
    />
  );
};

export default LenaKadri;
