import LenaKadri from "@/components/people/lenaKadri";
import { CharlotteOwens } from "@/components/people/charlotteOwens";
import Unknown from "@/components/people/unknown"
import AnisoaraNicol from "@/components/people/anisoaraNicol"

const OurPeople = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Our People</h1>
          <p className="text-xl text-gray-600">Meet the team driving innovation in pharmaceutical development</p>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-extrabold text-center text-red-500 mb-8">Founder</h2>
          <LenaKadri />
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-extrabold text-center text-red-500 mb-8">Advisor</h2>
          <div className="space-y-12">
            <CharlotteOwens />
          </div>
        </div>
        <div className="mb-16">
	    <AnisoaraNicol/>
	</div>
        <div className="mb-16">
	    <Unknown/>
	</div>
        <div className="mb-16">
	    <Unknown/>
	</div>
          <h2 className="text-4xl font-extrabold text-center text-red-500 mb-8">Affiliations</h2>
        <div className="mb-16">
	    <Unknown/>
	</div>

       <div className="mb-16">
	    <Unknown/>
	</div>
       <div className="mb-16">
	    <Unknown/>
	</div>
      </div>
    </div>
  );
};

export default OurPeople;
