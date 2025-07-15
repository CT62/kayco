"use client"
import Image from "next/image";
import { useState } from "react";

type PersonProps = {
  name: string;
  role: string;
  image: string;
  text: React.ReactNode;
};

const Person = ({ name, role, image, text }: PersonProps) => {
  const [showFull, setShowFull] = useState(false);

  // Helper to render truncated text
  // We'll truncate visually by limiting container height and hiding overflow
  // Then show a "Show more" button if not expanded

  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-8 bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-10 max-w-5xl mx-auto">
        {/* Image & Info */}
        <div className="flex flex-col items-center text-center md:text-left md:items-start w-72">
          <Image
            src={image}
            alt={name}
            width={128}
            height={128}
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">{role}</p>
        </div>

        {/* Text */}
        <div className="relative text-gray-700 text-sm leading-relaxed md:text-base md:leading-loose max-w-[600px]">
          <div
            className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
              showFull ? "max-h-[1000px]" : "max-h-[7.5rem]" /* approx 5 lines */
            }`}
          >
            {text}
          </div>

          {!showFull && (
            <button
              onClick={() => setShowFull(true)}
              className="mt-2 text-red-500 font-semibold hover:underline"
            >
              Show more
            </button>
          )}
        </div>
      </div>

      {/* Modal Popup */}
      {showFull && (
        <div
          className="fixed inset-0 bg-white bg-opacity-60 flex justify-center items-center z-50"
          onClick={() => setShowFull(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-xl max-w-3xl p-8 mx-4 md:mx-0 overflow-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
          >
<button
              onClick={() => setShowFull(false)}
              className="mt-8 block ml-auto px-6 py-2 text-gray-600 rounded-lg font-semibold transition"
            >
	    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
</svg>

            </button>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <Image
                src={image}
                alt={name}
                width={160}
                height={160}
                className="rounded-full object-cover"
              />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">{name}</h2>
                <p className="text-red-500 font-semibold mb-4">{role}</p>
                <div className="text-gray-700 text-base leading-relaxed">
                  {text}
                </div>
              </div>
            </div>
                      </div>
        </div>
      )}
    </>
  );
};

export default Person;

