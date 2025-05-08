import { useState, useEffect } from 'react';

const ProjectSection = () => {
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
    <div className="pt-12 md:pt-20">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 px-4 md:px-20 p-3 md:p-6 top-16 relative bg-white">
        {/* Left Image */}
        <div className="w-full mx-auto md:max-w-[48rem] h-[18rem] md:h-[29rem] md:w-1/2 overflow-hidden">
          <img
            src="/10.png"
            alt="Swing Area"
            className="w-full h-full object-cover border border-white shadow-lg transition-transform duration-500 hover:scale-110"
          />
        </div>

        {/* Right Image */}
        <div className="w-full mx-auto max-w-[48rem] h-[18rem] md:h-[28.9rem] md:w-1/2 overflow-hidden">
          <img
            src="/11.png"
            alt="Ceiling View"
            className="w-full h-full object-cover border border-white shadow-lg transition-transform duration-500 hover:scale-110"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row px-4 md:px-18 mt-16 md:mt-32 p-3 md:p-6 bg-white">
        {/* Left Image */}
        <div className="w-full mx-auto max-w-[24rem] h-[18rem] md:h-auto md:w-1/2 overflow-hidden mb-4 md:mb-0">
          <img
            src="/12.png"
            alt="Swing Area"
            className="w-full h-full object-cover border border-white shadow-lg transition-transform duration-500 hover:scale-110"
          />
        </div>

        {/* Right Image */}
        <div className="w-full mx-auto max-w-[29rem] h-[18rem] md:h-auto md:w-1/2 overflow-hidden mb-4 md:mb-0">
          <img
            src="/13.png"
            alt="Ceiling View"
            className="w-full h-full object-cover border border-white shadow-lg transition-transform duration-500 hover:scale-110"
          />
        </div>

        <div className="w-full mx-auto max-w-[29rem] h-[18rem] md:h-auto md:w-1/2 overflow-hidden">
          <img
            src="/14.png"
            alt="Ceiling View"
            className="w-full h-full object-cover border border-white shadow-lg transition-transform duration-500 hover:scale-110"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-6 px-4 md:px-20 p-3 md:p-6 relative bg-white">
        {/* Left Image */}
        <div className="w-full mx-auto max-w-[48rem] h-[18rem] md:h-[29rem] md:w-1/2 overflow-hidden">
          <img
            src="/16.png"
            alt="Swing Area"
            className="w-full h-full object-cover border border-white shadow-lg transition-transform duration-500 hover:scale-110"
          />
        </div>

        {/* Right Image */}
        <div className="w-full mx-auto max-w-[48rem] h-[18rem] md:h-[29rem] md:w-1/2 overflow-hidden">
          <img
            src="/15.png"
            alt="Ceiling View"
            className="w-full h-full object-cover border border-white shadow-lg transition-transform duration-500 hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
