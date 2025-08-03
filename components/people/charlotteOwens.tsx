import Person from "@/components/Person";

export const CharlotteOwens = () => {
  const bio = (
    <>
      <div className="mb-6">
        <div className="flex flex-wrap gap-3 justify-center">
          {[
            "Pharmaceutical Industrial Advisor",
            "CMO",
            "Founder",
            "Board Member",
            "Medical Affairs",
            "Driving Innovation",
            "Global Portfolio Impact",
            "Scalable Health Solutions",
            "Clinical Development Leader",
            "Practicing Obstetrician Gynecologist",
          ].map((tag, index) => (
            <span
              key={index}
              className="border border-red-400 px-4 py-2 rounded-full text-sm shadow hover:scale-105 transition-transform duration-200 text-black"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6 space-y-4">
        <h3 className="text-xl font-bold text-gray-800">Professional Background</h3>
        <div className="text-gray-700 leading-relaxed">
          <p className="mb-2"><strong className="text-black">Present</strong></p>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>CMO (Consultant), DeepLook Medical</li>
            <li>Senior Executive Board Member, Prezent</li>
            <li>Adjunct Assist. Prof. of Clinical Obstetrics and Gynecology, Morehouse School of Medicine</li>
          </ul>
          <p className="mb-2"><strong className="text-black">Previous Experience</strong></p>
          <ul className="list-disc list-inside space-y-1">
            <li>SVP, Head of Global Medical Affairs & Outcomes Research, Organon</li>
            <li>VP, Head of Center for Health Equity & Patient Affairs, Takeda</li>
            <li>Therapeutic Area Lead, Sr. Medical Director, Women&apos;s Health, General Medicine & Virology, AbbVie</li>
            <li>CMO, Director Division of Industry Collaborative Research, Assist. Prof., Morehouse School of Medicine</li>
            <li>Strategic Management Lead Consultant, Booz Allen Hamilton</li>
            <li>Director Global Clinical Affairs, Kimberly-Clark Corporation</li>
            <li>Worldwide Medical Director, Ethicon, Inc. (J&amp;J)</li>
          </ul>
        </div>
        <h3 className="text-xl font-bold text-black pt-4">Career Summary</h3>
        <p className="text-gray-700 leading-relaxed">
          Dr. Charlotte Owens, M.D., is a physician-executive with over two decades of global leadership
          experience across clinical medicine, the biopharmaceutical and device industries, and strategic
          management consulting. Throughout her career, she has led clinical development and medical affairs
          functions at some of the world&apos;s most respected pharmaceutical and healthcare companies — driving
          strategy and execution across Fortune 100 and Fortune Global 500 organizations.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Dr. Owens has always been drawn to roles that make a global impact. Over the years, she has led
          global product launches, evidence generation, cross-functional portfolio strategy, and market access
          initiatives in over 100 countries.
        </p>
      </div>
    </>
  );

  return (
    <Person
      name="Dr. Charlotte Owens, M.D., FACOG"
      image="/people/Charlotte.jpg"
      role="Pharmaceutical Industrial Advisor | CMO | Board Member"
      text={bio}
    />
  );
};

