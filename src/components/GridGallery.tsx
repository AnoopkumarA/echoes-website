import { useState, useEffect } from "react";

const GridGallery = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeImage, setActiveImage] = useState<number | null>(null);

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

  const handleImageTouch = (index: number) => {
    if (activeImage === index) {
      setActiveImage(null);
    } else {
      setActiveImage(index);
    }
  };

  return (
    <div className="grid grid-cols-2 w-full max-w-[64rem] mx-auto mt-12 md:mt-28 mb-10 md:mb-16 px-3 md:px-0">
      {/* First Text Section */}
      <div className="bg-gray-300 p-4 md:p-8 h-auto flex flex-col justify-center min-h-[200px] md:min-h-[300px]">
        <h2 className="font-montaga text-xl md:text-3xl mb-2 md:mb-3 leading-tight">
          Transforming Spaces,
          <br />
          Defining
          <br />
          Experiences
        </h2>
        <a
          href="#"
          className="text-black hover:text-gray-700 transition-colors mt-1 md:mt-2 text-sm md:text-base"
        >
          View Project
        </a>
      </div>

      {/* First Image */}
      <div 
        className="relative min-h-[200px] md:min-h-[300px] overflow-hidden"
        onTouchStart={() => handleImageTouch(0)}
      >
        <img
          src="/7.png"
          alt="Interior Design"
          className={`w-full h-full object-cover transition-transform duration-500 ${
            activeImage === 0 || (!isMobile && "hover:scale-110")
          } ${activeImage === 0 ? "scale-110" : ""}`}
        />
      </div>

      {/* Second Image */}
      <div 
        className="relative min-h-[200px] md:min-h-[300px] overflow-hidden"
        onTouchStart={() => handleImageTouch(1)}
      >
        <img
          src="/8.png"
          alt="Interior Design"
          className={`w-full h-full object-cover transition-transform duration-500 ${
            activeImage === 1 || (!isMobile && "hover:scale-110")
          } ${activeImage === 1 ? "scale-110" : ""}`}
        />
      </div>

      {/* Second Text Section */}
      <div className="bg-[#FF9F7D] p-4 md:p-8 flex flex-col justify-center min-h-[200px] md:min-h-[300px]">
        <h2 className="font-montaga text-xl md:text-3xl mb-2 md:mb-3 leading-tight">
          Innovation in
          <br />
          Design,
          <br />
          Timeless in
          <br />
          Appeal
        </h2>
        <a
          href="#"
          className="text-black hover:text-gray-700 transition-colors mt-1 md:mt-2 text-sm md:text-base"
        >
          Keep in Touch
        </a>
      </div>
    </div>
  );
};

export default GridGallery;