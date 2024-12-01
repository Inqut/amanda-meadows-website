import React from 'react';
import { motion } from 'framer-motion';

interface Brand {
  name: string;
  logo: string;
  url: string;
}

interface BrandSliderProps {
  brands: Brand[];
}

export const BrandSlider: React.FC<BrandSliderProps> = ({ brands }) => {
  // Duplicate brands array to create infinite loop effect
  const duplicatedBrands = [...brands, ...brands];

  return (
    <div className="w-full overflow-hidden bg-[#FDFBF7] py-12">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl font-bold text-center text-[#8B7355]">
          Featured Collaborations
        </h2>
      </div>
      
      <div className="relative">
        {/* First row - sliding left */}
        <div className="flex items-center">
          <motion.div
            className="flex gap-12 items-center px-6"
            animate={{
              x: [0, -100 * brands.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 w-64 h-40 bg-white rounded-lg shadow-md p-6 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:bg-[#FFF8E7] group border border-[#D4B886]/20"
              >
                <a
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full flex items-center justify-center"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain opacity-90 group-hover:opacity-100 transition-all duration-300"
                  />
                </a>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second row - sliding right */}
        <div className="flex items-center mt-8">
          <motion.div
            className="flex gap-12 items-center px-6"
            animate={{
              x: [-100 * brands.length, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}-reverse`}
                className="flex-shrink-0 w-64 h-40 bg-white rounded-lg shadow-md p-6 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:bg-[#FFF8E7] group border border-[#D4B886]/20"
              >
                <a
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full flex items-center justify-center"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain opacity-90 group-hover:opacity-100 transition-all duration-300"
                  />
                </a>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FDFBF7] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FDFBF7] to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

import azureBeauty from '../assets/images/brands/azure-beauty.png';
import dustyDiamond from '../assets/images/brands/dusty-diamond-boutique.avif';
import guinthers from '../assets/images/brands/guinthers.avif';
import kvalley from '../assets/images/brands/kvalleypng.png';
import squattyPotty from '../assets/images/brands/squatty-potty.jpeg';
import tts from '../assets/images/brands/ttspng.png';
import ncCustomModulars from '../assets/images/brands/NCCustomModulars.jpeg';

const brands: Brand[] = [
  {
    name: 'Azure Beauty',
    logo: azureBeauty,
    url: 'https://azurebeautyus.com/'
  },
  {
    name: 'Dusty Diamond Boutique',
    logo: dustyDiamond,
    url: 'https://dustydiamondsboutique.com/?srsltid=AfmBOopBUtLcblHc1IqGFgh5dTvtYIziw8zenNyGDLEXjxdUL1q6fs_p'
  },
  {
    name: 'Guinthers',
    logo: guinthers,
    url: 'https://guinthers.com/'
  },
  {
    name: 'K Valley',
    logo: kvalley,
    url: 'https://kvalley.com'
  },
  {
    name: 'Squatty Potty',
    logo: squattyPotty,
    url: 'https://www.squattypotty.com/collections/stools?utm_source=google&utm_medium=cpc&utm_campaign=21131326958&utm_content=162710012320&utm_term=squatty%20potty&gad_source=1'
  },
  {
    name: 'TTS',
    logo: tts,
    url: 'https://tts.com'
  },
  {
    name: 'North Carolina Custom Modulars',
    logo: ncCustomModulars,
    url: 'https://www.mydreammodular.com/'
  }
];

export default BrandSlider;
