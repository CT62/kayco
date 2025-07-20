import Image from "next/image";
import LenaKadri from "@/components/people/lenaKadri";
import { CharlotteOwens } from "@/components/people/charlotteOwens";
import Unknown from "@/components/people/unknown";
import AnisoaraNicol from "@/components/people/anisoaraNicol";

const OurPeople = () => {
  const affiliations = [
       {
      image: "/affilliations/theUniversityOfAuckland.jpg",
      alt: "The University of Auckland logo"
    },
    {
      image: "/affilliations/womenInHealthTech.png",
      alt: "Women in Health Tech logo"
    },
    {
      image: "/affilliations/monashUniversity.webp",
      alt: "Monash University logo"
    },

        {
      image: "/affilliations/trinityCollegeDublin.jpg",
      alt: "Trinity College Dublin logo"
    },
   
    {
      image: "/affilliations/universityOfLimerick.png",
      alt: "University of Limerick logo"
    },
    {
      image: "/affilliations/sspc.jpg",
      alt: "SSPC logo"
    },
    {
      image: "/affilliations/morehouseSchoolofMedicine.jpg",
      alt: "Morehouse School of Medicine logo"
    },

  ];

  return (
    <div className="min-h-screen bg-white py-8 pt-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Our People</h1>
          <p className="text-xl text-gray-600">
            We&apos;ve walked the walk. Now we&apos;re ready to build the future
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-extrabold text-center text-red-400 mb-8">Founder</h2>
          <LenaKadri />
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-extrabold text-center text-red-400 mb-8">Advisor</h2>
          <div className="space-y-12">
            <CharlotteOwens />
          </div>
        </div>

        <div className="mb-16">
          <AnisoaraNicol />
        </div>

        <div className="mb-16">
          <Unknown />
        </div>

        <div className="mb-16">
          <Unknown />
        </div>

        <h2 className="text-3xl font-extrabold text-center text-red-400 mb-8">Associates</h2>

        <div className="mb-16">
          <Unknown />
        </div>

        <div className="mb-16">
          <Unknown />
        </div>

        <div className="mb-16">
          <Unknown />
        </div>

        <h2 className="text-3xl font-extrabold text-center text-red-400 mb-8">Affiliations</h2>

        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {affiliations.map((affiliation, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex items-center justify-center relative group"
              >
                <div className="relative w-full h-32 flex items-center justify-center z-10">
                  <Image
                    src={affiliation.image}
                    alt={affiliation.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPeople;

