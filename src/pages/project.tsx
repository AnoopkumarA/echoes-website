import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Project = () => {
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
    <div className="flex flex-col lg:flex-row items-start justify-center gap-8 md:gap-36 p-4 md:p-10 font-['Montaga'] ">
      {/* Left: Project Title & Image */}
      <div className="flex flex-col items-start mt-23 md:mt-18 relative mx-auto md:ml-54">
        <h1 className="text-[2.5rem] md:text-[4rem] font-medium">PROJECT</h1>
        <div className="shadow-lg mt-4 md:mt-6 cursor-pointer">
          <Link to="/project-details">
            <img
              src="/9.png"
              alt="Project"
              className="w-[250px] md:w-[300px] h-auto object-cover border border-none cursor-pointer"
            />
          </Link>
          <div className="flex justify-between text-sm p-2 border-t">
            <span>Pala</span>
            <span className="text-gray-500">Residential</span>
          </div>
        </div>
      </div>

      {/* Right: Client Review */}
      <div className="flex flex-col mt-8 md:mt-28 w-full md:w-auto relative md:-left-[12rem]">
        <h2 className="text-[1.8rem] md:text-[2.5rem] mb-3 md:mb-4">Client review</h2>
        <div className="border border-neutral-100 rounded-lg shadow-md p-3 md:p-4 w-full md:w-[500px]">
          <p className="text-gray-700 font-sans text-sm md:text-base font-normal">
            ECHOES transformed our space with stunning design and seamless
            functionality, creating an environment that feels both personal and
            timeless! ECHOES transformed our space with stunning design and...
          </p>
          <div className="flex justify-between mt-2 md:mt-3 text-xs md:text-sm font-bold font-sans">
            <span>Name</span>
            <a href="#" className="text-blue-600">Read more</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
