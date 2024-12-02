import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useSpring, useTransform } from 'framer-motion';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  end, 
  suffix = '', 
  duration = 2,
  className = ''
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const count = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: duration * 1000,
  });

  useEffect(() => {
    if (inView) {
      count.set(end);
    }
  }, [inView, count, end]);

  const rounded = useTransform(count, (latest) => Math.round(latest));

  return (
    <motion.div ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.div>
  );
};
