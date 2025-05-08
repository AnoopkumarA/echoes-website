const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4 md:px-10">
      <div className="flex flex-col space-y-6 lg:flex-row lg:space-y-0 lg:justify-between lg:items-center">
        {/* Logo - Top on mobile, centered on desktop */}
        <div className="flex justify-center order-first  lg:order-2 lg:mx-4">
          <img 
            src="/Echoes Logo.png"
            alt="Echoes Logo"
            className="w-18 h-auto lg:w-32"
          />
        </div>
        
        {/* Navigation - Horizontal on all devices */}
        <div className="order-2 lg:order-1">
          <ul className="flex flex-wrap justify-center gap-4 md:gap-6 text-gray-300 text-sm md:text-base lg:text-lg">
            <li className="hover:text-orange-400 cursor-pointer">Home</li>
            <li className="hover:text-orange-400 cursor-pointer">Process</li>
            <li className="hover:text-orange-400 cursor-pointer">Project</li>
            <li className="hover:text-orange-400 cursor-pointer">Contact</li>
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
