import React from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
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
=======
import { useInView } from 'react-intersection-observer';
import cowgirlSvg from '../assets/images/svg/cowgirl.svg';
import cowgirlHatSvg from '../assets/images/svg/cowgirlhat.svg';
import cigSvg from '../assets/images/svg/cig.svg';
import scooterSvg from '../assets/images/svg/scooter.svg';
import logoColoredSvg from '../assets/images/svg/AMlogoP.svg';
import logoWhiteSvg from '../assets/images/svg/AMlogoW.svg';

interface DecorativeElementProps {
  className?: string;
  src: string;
  alt?: string;
  animation?: any;
  size?: [number, number];
  delay?: number;
  gradient?: string;
}

const DecorativeElement: React.FC<DecorativeElementProps> = ({
  className = '',
  src,
  alt = '',
  animation,
  size = [32, 48],
  delay = 0,
  gradient = 'from-teal-400/30 to-emerald-400/30'
}) => {
  const [minSize, maxSize] = size;
  const randomSize = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;

  return (
    <motion.div
      className={`absolute ${className} rounded-full overflow-hidden
                bg-gradient-to-br ${gradient} backdrop-blur-sm
                ring-1 ring-white/20 shadow-lg`}
      style={{ width: randomSize, height: randomSize }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={animation}
      transition={{
        duration: Math.random() * 2 + 2,
        repeat: Infinity,
        repeatType: 'reverse',
        delay: delay,
      }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain p-2 opacity-80"
      />
>>>>>>> ac75debc1f3dc14500cb37b3147fe356e9670226
    </motion.div>
  );
};

<<<<<<< HEAD
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
=======
const generateElements = (
  count: number,
  src: string,
  animation: any,
  zIndex: string,
  size: [number, number],
  gradient: string
) => {
  return Array.from({ length: count }).map((_, index) => {
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const delay = Math.random() * 2;

    return (
      <DecorativeElement
        key={`${src}-${index}`}
        src={src}
        className={`${zIndex} pointer-events-none`}
        animation={animation}
        size={size}
        delay={delay}
        gradient={gradient}
      />
    );
  });
};

const generateFloatingLogos = (count: number) => {
  return Array.from({ length: count }).map((_, index) => {
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const isColored = Math.random() > 0.5;
    const opacity = Math.random() * 0.3 + 0.1;
    const scale = Math.random() * 0.5 + 0.5;

    return (
      <motion.div
        key={`logo-${index}`}
        className="absolute pointer-events-none rounded-full overflow-hidden
                  bg-gradient-to-br from-teal-400/10 to-emerald-400/10 backdrop-blur-sm
                  ring-1 ring-white/10 shadow-lg"
        style={{
          top: `${top}%`,
          left: `${left}%`,
          opacity,
          width: 48 * scale,
          height: 48 * scale,
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity,
          scale: [scale, scale * 1.1, scale],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: 'reverse',
          delay: Math.random() * 2,
        }}
      >
        <img
          src={isColored ? logoColoredSvg : logoWhiteSvg}
          alt="Logo"
          className="w-full h-full object-contain p-2"
        />
      </motion.div>
    );
  });
};

const generateSlidingElements = (count: number) => {
  return Array.from({ length: count }).map((_, index) => {
    const isLeft = Math.random() > 0.5;
    const top = Math.random() * 100;
    const delay = Math.random() * 3;

    return (
      <motion.div
        key={`sliding-${index}`}
        className="absolute pointer-events-none rounded-full overflow-hidden
                  bg-gradient-to-br from-teal-400/20 to-emerald-400/20 backdrop-blur-sm
                  ring-1 ring-white/10 shadow-lg p-2"
        style={{
          top: `${top}%`,
          left: isLeft ? '-10%' : '110%',
          width: 32,
          height: 32,
          opacity: 0.6,
        }}
        initial={{ x: 0 }}
        animate={{
          x: isLeft ? '120vw' : '-120vw',
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          delay,
        }}
      >
        <img
          src={scooterSvg}
          alt=""
          className="w-full h-full object-contain"
        />
      </motion.div>
    );
  });
};

export const DecorativeElements: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const floatAnimation = {
    y: [0, -20, 0],
    rotate: [0, 5, -5, 0],
    scale: [1, 1.05, 1],
  };

  const spinAnimation = {
    rotate: [0, 360],
    scale: [1, 1.1, 1],
  };

  const bounceAnimation = {
    y: [0, -15, 0],
    scale: [1, 1.1, 1],
  };

  return (
    <div ref={ref} className="fixed inset-0 overflow-hidden pointer-events-none">
      {inView && (
        <>
          {/* Background logo */}
          <div className="absolute inset-0 opacity-5 flex items-center justify-center">
            <div className="w-1/2 max-w-xl p-8 rounded-full bg-gradient-to-br from-teal-400/10 to-emerald-400/10">
              <img
                src={logoWhiteSvg}
                alt="Background logo"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Decorative elements */}
          {generateElements(4, cowgirlSvg, floatAnimation, 'z-10', [32, 48], 'from-teal-400/30 to-emerald-400/30')}
          {generateElements(4, cowgirlHatSvg, spinAnimation, 'z-20', [24, 36], 'from-teal-500/30 to-cyan-500/30')}
          {generateElements(4, cigSvg, bounceAnimation, 'z-30', [24, 32], 'from-cyan-400/30 to-blue-400/30')}
          {generateSlidingElements(3)}
          {generateFloatingLogos(4)}
        </>
      )}
>>>>>>> ac75debc1f3dc14500cb37b3147fe356e9670226
    </div>
  );
};
