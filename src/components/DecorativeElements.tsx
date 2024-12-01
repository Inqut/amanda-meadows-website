import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import cowgirlSvg from '../assets/images/svg/cowgirl.svg';
import cowgirlHatSvg from '../assets/images/svg/cowgirlhat.svg';
import cigSvg from '../assets/images/svg/cig.svg';
import scooterSvg from '../assets/images/svg/scooter.svg';
import daisySvg from '../assets/images/svg/daisy.svg';
import logoColoredSvg from '../assets/images/svg/AMlogoP.svg';
import logoWhiteSvg from '../assets/images/svg/AMlogoW.svg';

interface DecorativeElementProps {
  className?: string;
}

const generateRandomPosition = () => ({
  left: `${Math.random() * 80 + 10}%`,
  top: `${Math.random() * 80 + 10}%`,
});

const generateRandomDelay = () => Math.random() * 5;

const generateRandomSize = (min: number, max: number) => 
  Math.random() * (max - min) + min;

export const DecorativeElements: React.FC<DecorativeElementProps> = ({ className = '' }) => {
  const [elementsRef] = useInView({ threshold: 0.1, triggerOnce: false });

  const floatAnimation = (delay: number) => ({
    y: [0, -20, 0],
    scale: [1, 1.1, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }
  });

  const spinAnimation = (delay: number) => ({
    rotate: [0, 360],
    scale: [1, 1.15, 1],
    transition: {
      duration: 15,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }
  });

  const bounceAnimation = (delay: number) => ({
    scale: [1, 1.2, 1],
    rotate: [-5, 5, -5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }
  });

  const slideAnimation = (startPosition: number, delay: number, duration: number) => ({
    x: [startPosition, window.innerWidth + 100],
    y: [0, -10, 0],
    transition: {
      duration,
      repeat: Infinity,
      ease: "linear",
      delay,
    }
  });

  const daisyAnimation = (delay: number) => ({
    rotate: [-10, 10, -10],
    y: [0, -10, 0],
    scale: [1, 1.1, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }
  });

  const floatingLogoAnimation = (delay: number) => ({
    y: [0, window.innerHeight + 100],
    rotate: [-10, 10],
    scale: [0.8, 1.2],
    opacity: [0.3, 0],
    transition: {
      duration: 15,
      repeat: Infinity,
      ease: "linear",
      delay,
    }
  });

  // Generate multiple instances of each element
  const generateElements = (count: number, Component: any, animation: any, className: string, sizeRange: [number, number]) => {
    return Array.from({ length: count }, (_, i) => {
      const position = generateRandomPosition();
      const delay = generateRandomDelay();
      const size = generateRandomSize(sizeRange[0], sizeRange[1]);
      
      return (
        <motion.img
          key={`${Component}-${i}`}
          ref={elementsRef}
          src={Component}
          alt={`Decorative element ${i}`}
          animate={animation(delay)}
          className={`absolute ${className}`}
          style={{
            ...position,
            width: size,
            height: 'auto',
            opacity: 0.5,
          }}
        />
      );
    });
  };

  // Generate sliding elements (scooters)
  const generateSlidingElements = (count: number) => {
    // Create evenly spaced lanes for scooters
    const lanes = Array.from({ length: count }, (_, i) => (i * (70 / count)) + 15); // 15% to 85% of screen height
    
    return lanes.map((yPosition, i) => {
      // Calculate timing to prevent overlap
      const duration = 12; // Base duration for crossing screen
      const spacing = duration / count; // Time gap between scooters
      const delay = i * spacing; // Stagger the start times
      const startPosition = -200;
      
      return (
        <motion.img
          key={`scooter-${i}`}
          ref={elementsRef}
          src={scooterSvg}
          alt={`Sliding scooter ${i}`}
          animate={slideAnimation(startPosition, delay, duration)}
          className="absolute"
          style={{
            top: `${yPosition}%`,
            width: 50, // Fixed size for consistent spacing
            height: 'auto',
            opacity: 0.5,
          }}
        />
      );
    });
  };

  // Generate floating logos
  const generateFloatingLogos = (count: number) => {
    return Array.from({ length: count }, (_, i) => {
      const startDelay = Math.random() * 10;
      const xPosition = Math.random() * 80 + 10;
      
      return (
        <motion.img
          key={`floating-logo-${i}`}
          ref={elementsRef}
          src={i % 2 === 0 ? logoColoredSvg : logoWhiteSvg}
          alt={`Floating logo ${i}`}
          animate={floatingLogoAnimation(startDelay)}
          className="absolute"
          style={{
            left: `${xPosition}%`,
            top: -100, // Start above screen
            width: generateRandomSize(20, 30),
            height: 'auto',
            opacity: 0.2,
          }}
        />
      );
    });
  };

  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Background logo */}
      <div className="absolute inset-0 opacity-5 flex items-center justify-center">
        <img
          src={logoWhiteSvg}
          alt="Background logo"
          className="w-1/2 max-w-xl"
        />
      </div>

      {/* Multiple instances of each element */}
      {generateElements(8, cowgirlSvg, floatAnimation, 'z-10', [32, 48])}
      {generateElements(8, cowgirlHatSvg, spinAnimation, 'z-20', [32, 48])}
      {generateElements(8, cigSvg, bounceAnimation, 'z-30', [24, 36])}
      {generateSlidingElements(5)}
      {generateElements(12, daisySvg, daisyAnimation, 'z-0', [25, 40])}
      {generateFloatingLogos(6)}
    </div>
  );
};
