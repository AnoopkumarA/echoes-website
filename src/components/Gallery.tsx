import { useState, useEffect } from "react";

const Gallery = () => {
  const [, setIsMobile] = useState(false);

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
    <div className="max-w-[69rem] h-auto md:h-[52rem] mx-auto p-3 md:p-6">
      <div className="grid grid-cols-2 gap-[0.04rem] md:gap-[0.04rem] h-full">
        {/* Left Image - Large */}
        <div className="col-span-1 h-[20rem] md:h-[38rem]">
          <img
            src="/1.png"
            alt="Modern Balcony"
            className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-95 transition-transform"
          />
        </div>

        {/* Right Column - Two Smaller Images */}
        <div className="col-span-1 grid grid-rows-2 gap-[0.1rem] md:gap-[0.15rem] h-[20rem] md:h-[38rem]">
          <img
            src="/2.png"
            alt="Cozy Balcony Setup"
            className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-95 transition-transform"
          />
          <img
            src="/3.png"
            alt="Greenery Balcony"
            className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-95 transition-transform"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
