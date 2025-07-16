import Person from "@/components/Person";

const AnisoaraNicol = () => {
  const keywords = [
    "Partnerships & Innovation",
    "Business Development",
    "Strategic Growth",
    "Clinical Trial Management",
    "University of Auckland",
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
      
    </>
  );


  return (
    <Person
      name="Dr. Anisoara Nicol, PhD"
      image="/people/Anisoara.png"
      role="Business Development Advisor"
      text={bio}
    />
  );
};

export default AnisoaraNicol;
