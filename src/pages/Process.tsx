import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const images = [
    "/processimg1.png",
    "/processimg2.png",
    "/processimg3.png",
    "/processimg1.png",
    "/processimg2.png",
    "/processimg3.png"
];

const ProcessSection: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
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
        <div className='w-full min-w-full'>
            <div className="bg-[#818181] lg:mx-20 mx-0 py-16 sm:py-24 px-4 sm:px-8">
                <div className="max-w-6xl mx-auto flex flex-col mt-13 md:flex-row items-center md:items-start justify-between">
                    <div className=" md:w-1/2 mb-8 md:mb-0">
                        {isMobile ? (
                            <h1 className="text-4xl text-center align-middle d:text-6xl lg:text-7xl font-extralight font-serif text-[#1E1D1D] leading-tight">
                                Transforming Spaces, Defining <span className="text-[#722402] font-serif font-extralight underline">Experiences.</span>
                            </h1>
                        ) : (
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight font-serif text-[#1E1D1D] leading-tight">
                                Transforming <br />
                                Spaces, <br />
                                Defining <br />
                                <span className="text-[#722402] font-serif font-extralight underline">Experiences.</span>
                            </h1>
                        )}
                    </div>
                    <div className="md:w-1/2 flex flex-col items-center lg:mt-18 md:justify-items-center">
                        <p className="text-white text-base font-serif font-extralight md:text-xl leading-relaxed">
                        We craft interiors that blend creativity with functionality, 
                            ensuring every space is both beautiful and purposeful. 
                            With a keen eye for detail and spatial harmony, we design 
                            environments that reflect your personality and enhance 
                            your lifestyle. Our process is a seamless collaboration, 
                            where your vision meets our expertise to create spaces 
                            that inspire. Every design tells a story, making your space 
                            feel effortless yet extraordinary.
                        </p>
                    </div>
                </div>
            </div>

            <div 
                ref={scrollRef}
                className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2 mt-2 w-full"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {images.map((src, index) => (
                    <div 
                        key={index} 
                        className="flex-shrink-0 w-auto snap-center"
                        style={{ flex: "0 0 auto" }}
                    >
                        <img 
                            src={src} 
                            alt={`Outdoor living space design ${index + 1}`}
                            className="h-64 sm:h-80 md:h-96 lg:h-[30rem] w-auto object-cover"
                        />
                    </div>
                ))}
            </div>

            <div className="w-full py-12 px-4 sm:px-8 bg-white">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2 space-y-8">
                        <p className="text-lg md:text-xl font-extralight font-serif">
                            We blend innovation with timeless elegance to create spaces that are both functional and inspiring.
                        </p>
                        <p className="text-lg md:text-xl font-extralight font-serif">
                            By merging contemporary ideas with classic elements, we craft interiors that feel modern yet enduring.
                        </p>
                        <p className="text-lg md:text-xl font-extralight font-serif">
                            With a commitment to quality and thoughtful design, we transform spaces into lasting experiences.
                        </p>
                    </div>
                    <div className="md:w-1/2 mt-6 md:mt-0">
                        <motion.img 
                            src="/processimg4.png" 
                            alt="Modern wooden kitchen with orange pendant lights" 
                            className="w-full h-auto rounded-md shadow-lg"
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProcessSection;
