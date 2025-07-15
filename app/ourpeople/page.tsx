import Person from "@/components/Person";

const OurPeople = () => {
  return (
    <>
      <div className="flex justify-center text-5xl font-extrabold py-12 text-gradient">
        Our People
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12 transition-transform hover:scale-[1.02] hover:shadow-2xl duration-300">
        <Person
          name="Dr. Lena Kadri"
          image="/people/Lena.jpg"
          role="Founder | Kaiwhakarewa"
          text={
            <>
              <p className="mb-4 text-gray-700 leading-relaxed">
                I am Dr. Lena Kadri, the founder of Kayco. Throughout my career
                in academia and global pharma, I kept seeing the same challenges
                again and again.
              </p>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Patients&rsquo; needs left unmet, groups of people forgotten,
                unbearable side effects, and medications that offered little to no
                relief. In some cases, there were no treatment options at all.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The science was there. But access to meaningful medicine still
                wasn&rsquo;t reaching everyone — women, children, people with
                disabilities, the elderly, and those living with rare conditions.
              </p>
            </>
          }
        />
      </div>
    </>
  );
};

export default OurPeople;
