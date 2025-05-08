

const ProjectSection = () => {
  return (
    <div className="pt-20">
      <div className="flex flex-col md:flex-row gap-6 px-20 p-6 top-16 relative bg-white">
        {/* Left Image */}
        <div className="w-full mx-auto max-w-[48rem] h-[29rem] md:w-1/2 overflow-hidden">
          <img
            src="/10.png"
            alt="Swing Area"
            className="w-full h-full object-cover border border-white shadow-lg transition-transform duration-500 hover:scale-110"
          />
        </div>

        {/* Right Image */}
        <div className="w-full mx-auto max-w-[48rem] h-[28.9rem] md:w-1/2 overflow-hidden">
          <img
            src="/11.png"
            alt="Ceiling View"
            className="w-full h-full object-cover border border-white shadow-lg transition-transform duration-500 hover:scale-110"
          />
        </div>
      </div>


      <div className="flex flex-col md:flex-row px-18 mt-32 p-6 bg-white">
        {/* Left Image */}
        <div className="w-full mx-auto max-w-[24rem] h-auto md:w-1/2 overflow-hidden">
          <img
            src="/12.png"
            alt="Swing Area"
            className="w-full h-full object-cover border border-white shadow-lg transition-transform duration-500 hover:scale-110"
          />
        </div>

        {/* Right Image */}
        <div className="w-full mx-auto max-w-[29rem] h-auto md:w-1/2 overflow-hidden">
          <img
            src="/13.png"
            alt="Ceiling View"
            className="w-full h-full object-cover border border-white shadow-lg transition-transform duration-500 hover:scale-110"
          />
        </div>

        <div className="w-full mx-auto max-w-[29rem] h-auto md:w-1/2 overflow-hidden">
          <img
            src="/14.png"
            alt="Ceiling View"
            className="w-full h-full object-cover border border-white shadow-lg transition-transform duration-500 hover:scale-110"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 px-20 p-6  relative bg-white">
        {/* Left Image */}
        <div className="w-full mx-auto max-w-[48rem] h-[29rem] md:w-1/2 overflow-hidden">
          <img
            src="/16.png"
            alt="Swing Area"
            className="w-full h-full object-cover border border-white shadow-lg transition-transform duration-500 hover:scale-110"
          />
        </div>

        {/* Right Image */}
        <div className="w-full mx-auto max-w-[48rem] h-[29rem] md:w-1/2 overflow-hidden">
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
