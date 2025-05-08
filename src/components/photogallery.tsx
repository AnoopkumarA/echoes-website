import { useState, useEffect } from "react";
import GridGallery from "./GridGallery";

const images = [
  "/4.png",
  "/5.png",
  "/6.png",
  "/4.png",
  "/5.png",
  "/6.png"
];

const PhotoGallery = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <>
      <div className={`relative max-w-[75rem] overflow-visible p-3 md:p-5 mx-auto ${isMobile ? 'left-0' : 'left-28'} mt-16 md:mt-28`}>
        {/* Vertical Text - Hidden on mobile */}
        {!isMobile && (
          <div className="absolute -left-28 top-1/2 -translate-y-1/2 transform -rotate-90 whitespace-nowrap">
            <span className="font-montaga text-[5.7rem] -top-40 left-7 font-semibold tracking-[0.16em] text-black relative before:content-[''] before:absolute before:-left-4 before:top-18 before:h-[0.3rem] before:w-[30rem] before:bg-black pt-2">
              PROJECT
            </span>
          </div>
        )}

        {/* Mobile Title - Shown only on mobile */}
        {isMobile && (
          <div className="mb-6">
            <h2 className="font-montaga text-[2.4rem] font-semibold tracking-wide text-black text-center">
              PROJECT
            </h2>
            <div className="h-[0.28rem] w-47 relative -top-8.5 bg-black mx-auto mt-2"></div>
          </div>
        )}

        {/* Horizontal Scroll Container */}
        <div 
          className="flex space-x-4 md:space-x-6 space-y-6 md:space-y-9 overflow-y-hidden overflow-x-auto snap-x snap-mandatory mb-4
          [&::-webkit-scrollbar]:h-1
          [&::-webkit-scrollbar]:w-0
          [&::-webkit-scrollbar-track]:bg-gray-100
          [&::-webkit-scrollbar-thumb]:bg-[#7A2C0A]
          [&::-webkit-scrollbar-thumb]:rounded-full
          hover:[&::-webkit-scrollbar-thumb]:bg-[#DF835B]"
        >
          {images.map((src, index) => (
            <div key={index} className={`snap-start shrink-0 w-[250px] md:w-[400px] ${!isMobile && index === 0 ? 'first:ml-24' : ''}`}>
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-[300px] md:h-[500px] object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>
      </div>
      <GridGallery />
    </>
  );
};

export default PhotoGallery;
