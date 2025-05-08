import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4 md:px-10">
      <div className="flex flex-col space-y-6 lg:flex-row lg:space-y-0 lg:justify-between lg:items-center">
        {/* Logo - Top on mobile, centered on desktop */}
        <div className="flex justify-center order-first  lg:order-2 lg:mx-4">
          <Link to="/">
            <img 
              src="/Echoes Logo.png"
              alt="Echoes Logo"
              className="w-18 h-auto lg:w-32"
            />
          </Link>
        </div>
        
        {/* Navigation - Horizontal on all devices */}
        <div className="order-2 lg:order-1">
          <ul className="flex flex-wrap justify-center gap-4 md:gap-6 text-gray-300 text-sm md:text-base lg:text-lg">
            <li>
              <Link to="/" className="hover:text-orange-400 cursor-pointer transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/process" className="hover:text-orange-400 cursor-pointer transition-colors duration-300">
                Process
              </Link>
            </li>
            <li>
              <Link to="/project" className="hover:text-orange-400 cursor-pointer transition-colors duration-300">
                Project
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-orange-400 cursor-pointer transition-colors duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        
        {/* Copyright - Bottom on all devices */}
        <p className="text-gray-400 text-xs md:text-sm text-center order-3 lg:order-3">
          Copyright 2025 · Echoes · All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

