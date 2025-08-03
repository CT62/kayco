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
          I&apos;m Dr. Lena Kadri, the founder of Kayco. I&apos;m proudly Irish and a big advocate for women and girls in science. I lead my life with purpose and meaning, living by the motto <strong className="text-black">&ldquo;if not now, then when?&rdquo;</strong> And, as dark as it may seem, <strong className="text-black">&ldquo;the only thing certain in life, is that we&apos;re all going to die&rdquo;</strong>. 
        </p>
        
        <p className="text-gray-700 leading-relaxed">
          When you live by these principles, you really ask yourself: what am I here to do? What mark do I want to leave on the world?
        </p>
        
        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-500">
          <p className="text-gray-700 leading-relaxed italic mb-2">
            &ldquo;Your feet will take you where your heart is&rdquo;
          </p>
          <p className="text-gray-600 text-sm">
            <em>an áit a bhfuil do chroí, is ann a thabharfas do chosa thú</em>
          </p>
        </div>
        
        <p className="text-gray-700 leading-relaxed">
          There&apos;s an Irish proverb that really resonates with me. And for me, my heart is, and always will be with the patients who need me the most. The ones who need better. These are patients around the world who Kayco can serve.
        </p>
        
        <p className="text-gray-700 leading-relaxed">
          That&apos;s why I moved to Aotearoa. To pursue my life&apos;s mission of founding Kayco. Why NZ you may ask? Well, haven&apos;t you seen the start-up culture? Plus, the country and people are just the best!
        </p>
        
        <p className="text-gray-700 leading-relaxed">
          Well, that&apos;s all from me!
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
