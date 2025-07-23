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
     <div className="mt-6 space-y-4">
  <p className="text-gray-700 leading-relaxed">
    I’m Dr. Lena Kadri, the founder of Kayco.
    From the lab to the boardroom, I saw it time and time again — medicine that missed the mark.
  </p>
  <p className="text-gray-700 leading-relaxed">
    Treatments that offer little or <strong>no relief.</strong><br/>
    Side effects that <strong>outweigh the benefits.</strong><br/>
    Formulations that make patients gag or <strong>vomit</strong>.<br/>
    Resistance quietly growing in the background, <strong>narrowing future options.</strong><br/>
    Entire groups of people who were never <strong>even part of the conversation.</strong><br/>
    And illnesses and diseases with <strong>no treatment options at all.</strong><br/>

  </p>
  <p className="text-gray-700 leading-relaxed">
    The science is there. But why isn’t it reaching everyone?
    And why isn’t it reaching everyone, as effectively as possible?
  </p>
  <p className="text-gray-700 leading-relaxed">
    Women. Children. People with disabilities. The elderly.
    Those living with limited options and limited time.
  </p>
  <p className="text-gray-700 leading-relaxed">
    These problems stayed with me.
    And they left me with a question I couldn’t ignore:
  </p>
  <p className="text-gray-700 leading-relaxed">
    <strong>If we can do better, why haven’t we?</strong>
  </p>
  <p className="text-gray-700 leading-relaxed">
    At Kayco, we’re not here to talk about the problems.
    We’re here to <strong>transform them</strong>.
  </p>
  <p className="text-gray-700 leading-relaxed">
    Because for many people around the world, their needs are still left unmet.
  </p>
  <p className="text-gray-700 leading-relaxed">
    We are on a mission to push the boundaries of what drug development can be — and who it can serve.
  </p>
  <p className="text-gray-700 leading-relaxed">
    We are starting by improving the <strong>effectiveness</strong> of overlooked medicines,
    <strong>reformulating</strong> treatments for those who need them the most, and
    <strong>opening new, sustainable pathways to drug discovery</strong>.
  </p>
  <p className="text-gray-700 leading-relaxed">
    Rooted in Ireland and growing in Aotearoa, I am proud to announce the pre-launch of Kayco —
    a start-up dedicated to <strong>transforming lives through science rooted in empathy, one molecule at a time</strong>.
  </p>
  <p className="text-gray-700 leading-relaxed">
    Because at Kayco, we believe <strong>medicine should work for everyone</strong>. Not just the majority.
  </p>
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
