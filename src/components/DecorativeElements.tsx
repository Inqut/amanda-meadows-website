import React from 'react';
import { motion } from 'framer-motion';
import cigSvg from '../assets/images/svg/cig.svg';
import scooterSvg from '../assets/images/svg/scooter.svg';

const DecorativeElement: React.FC<{
  src: string;
  position: { top: string; left: string };
  size: number;
  delay?: number;
  duration?: number;
  path?: 'circular' | 'horizontal';
}> = ({ src, position, size, delay = 0, duration = 20, path = 'circular' }) => {
  const pathAnimation = path === 'circular' ? {
    rotate: [0, 360],
    x: [0, 100, 0, -100, 0],
    y: [0, -100, 0, 100, 0],
  } : {
    x: ['-100vw', '100vw'],
  };

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        ...position,
        width: size,
        height: size,
      }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0.6, 0.8, 0.6],
        ...pathAnimation,
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
        delay,
      }}
    >
      <div className="w-full h-full rounded-full overflow-hidden
                    bg-gradient-to-br from-teal-400/60 to-emerald-400/60 
                    backdrop-blur-sm shadow-lg p-3">
        <img
          src={src}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
    </motion.div>
  );
};

export const DecorativeElements: React.FC = () => {
  const elements = [
    // Larger moped making a slow circular path in top right
    {
      src: scooterSvg,
      position: { top: '15%', left: '70%' },
      size: 120,
      duration: 30,
      path: 'circular' as const,
    },
    // Medium cigarette floating in middle left
    {
      src: cigSvg,
      position: { top: '40%', left: '10%' },
      size: 80,
      duration: 25,
      path: 'circular' as const,
    },
    // Slow moving moped across bottom
    {
      src: scooterSvg,
      position: { top: '75%', left: '0%' },
      size: 100,
      duration: 40,
      path: 'horizontal' as const,
    },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => (
        <DecorativeElement
          key={index}
          {...element}
          delay={index * 5}
        />
      ))}
    </div>
  );
};
