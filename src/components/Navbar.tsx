import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={`flex justify-between items-center px-6 py-4 fixed w-full z-[100] transition-colors duration-300 ${
        isMenuOpen ? 'bg-[#DF835B]' : 'bg-white'
      }`}>
        {isMobile ? (
          // Mobile layout - Logo left, menu right
          <>
            {/* Logo on the left */}
            <h1 className={`text-[1.5rem] md:text-[2.3rem] font-semibold tracking-wide ${
              isMenuOpen ? 'text-white' : 'text-black'
            }`}>ECHOES</h1>
            
            {/* Menu Button on the right */}
            <button onClick={toggleMenu} className="relative w-7 h-5 md:w-8 md:h-6 flex flex-col justify-between z-50 cursor-pointer">
              <span className={`block h-0.5 md:h-1 transition-all duration-300 ${
                isMenuOpen ? 'w-6 rotate-45 translate-y-2.5 translate-x-0.5 bg-white' : 'w-5 bg-black'
              }`}></span>
              <span className={`block h-0.5 md:h-1 transition-all duration-300 ${
                isMenuOpen ? 'w-6 -rotate-45 -translate-y-0.5 translate-x-0.5 bg-white' : 'w-7 bg-black'
              }`}></span>
              <span className={`block h-0.5 md:h-1 transition-all duration-300 ${
                isMenuOpen ? 'w-6 rotate-45 -translate-y-2.5 translate-x-0.5 bg-white' : 'w-9 bg-black'
              }`}></span>
            </button>
          </>
        ) : (
          // Desktop layout - Center logo
          <>
            {/* Empty div for spacing */}
            <div className="w-8"></div>
            
            {/* Centered Logo */}
            <h1 className={`text-[2.3rem] font-semibold tracking-wide absolute left-1/2 transform -translate-x-1/2 ${
              isMenuOpen ? 'text-white' : 'text-black'
            }`}>ECHOES</h1>
            
            {/* Menu Button - keep it on the right */}
            <button onClick={toggleMenu} className="relative w-8 h-6 flex flex-col justify-between z-50 cursor-pointer">
              <span className={`block h-1 transition-all duration-300 ${
                isMenuOpen ? 'w-10 rotate-45 translate-y-2.5 bg-white' : 'w-6 bg-black'
              }`}></span>
              <span className={`block h-1 transition-all duration-300 ${
                isMenuOpen ? 'w-10 -rotate-45 -translate-y-1 bg-white' : 'w-8 relative -left-[0.43rem] bg-black'
              }`}></span>
              <span className={`block h-1 transition-all duration-300 ${
                isMenuOpen ? 'w-10 rotate-45 -translate-y-2.5 bg-white' : 'w-11.5 relative -left-[1.3rem] bg-black'
              }`}></span>
            </button>
          </>
        )}
      </nav>

      {/* Full-screen Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#DF835B] transition-all duration-300 ease-in-out z-[90] ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex items-center justify-center h-screen">
          <ul className="text-center space-y-8 text-black font-semibold">
            <li>
              <Link
                to="/"
                className="text-[2rem] md:text-[2.6rem] hover:italic hover:font-light transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/process"
                className="text-[2rem] md:text-[2.6rem] hover:italic hover:font-light transition-colors"
                onClick={toggleMenu}
              >
                Process
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                className="text-[2rem] md:text-[2.6rem] hover:italic hover:font-light transition-colors"
                onClick={toggleMenu}
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-[2rem] md:text-[2.6rem] hover:italic hover:font-light transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
