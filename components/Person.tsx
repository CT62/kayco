"use client"
import { useState } from "react";

// Mock Image component for demonstration
type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

const Image = ({ src, alt, width, height, className }: ImageProps) => (
  <img src={src} alt={alt} width={width} height={height} className={className} />
);

type PersonProps = {
  name: string;
  role?: string;
  image: string;
  text?: React.ReactNode;
};

const Person = ({ name, role, image, text }: PersonProps) => {
  const [showFull, setShowFull] = useState(false);
  
  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-8 bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-10 max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center md:text-left md:items-start w-72">
          <Image
            src={image}
            alt={name}
            width={128}
            height={128}
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-semibbold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
        
        {/* Text */}
        <div className="relative text-gray-700 text-sm leading-relaxed md:text-base md:leading-loose max-w-[600px]">
          <div
            className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
              showFull ? "max-h-[1000px]" : "max-h-[9rem]"
            }`}
          >
            {text}
          </div>
          {!showFull && text && (
            <button
              onClick={() => setShowFull(true)}
              className="flex justify-center mt-2 text-red-500 font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded"
            >
              Show more
            </button>
          )}
        </div>
      </div>
      {showFull && (
        <div
          className="fixed inset-0 bg-white bg-opacity-25 flex justify-center items-center z-[60] p-4"
          onClick={() => setShowFull(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <button
                onClick={() => setShowFull(false)}
                className="p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-lg transition-colors"
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
              </button>
              {/* Modal content */}
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="flex-shrink-0">
                  <Image
                    src={image}
                    alt={name}
                    width={160}
                    height={160}
                    className="w-40 h-40 rounded-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">{name}</h2>
                  <p className="text-red-500 font-semibold mb-4">{role}</p>
                  <div className="text-gray-700 text-base leading-relaxed">
                    {text}
                  </div>
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
