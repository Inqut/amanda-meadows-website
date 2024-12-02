import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection, onNavigate }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const showPosition = windowHeight / 2;

      setIsSticky(scrollPosition > showPosition);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Charlene' },
    { id: 'merch', label: 'Shop Merch', externalUrl: 'https://dustydiamondboutique.com/collections/merch?utm_content=ios&utm_medium=product-links&utm_source=copyToPasteboard' },
    { id: 'events', label: 'Events' }
  ];

  const handleClick = (item: typeof navItems[0]) => {
    if (item.externalUrl) {
      window.open(item.externalUrl, '_blank', 'noopener,noreferrer');
    } else {
      onNavigate(item.id);
    }
  };

  return (
    <motion.div 
      className={`transition-all duration-300 ${
        isSticky 
          ? 'fixed top-14 left-0 right-0 z-40 bg-gradient-to-b from-teal-100/90 to-teal-100/80 backdrop-blur-md shadow-lg' 
          : 'relative bg-transparent'
      }`}
      initial={false}
      animate={{
        y: isSticky ? 0 : 0,
        opacity: 1
      }}
    >
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-center">
          <div className="flex flex-wrap justify-center gap-2 py-2 w-full overflow-x-auto no-scrollbar">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleClick(item)}
                className={`px-3 sm:px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300
                  ${activeSection === item.id 
                    ? 'bg-teal-500 text-white shadow-lg scale-105' 
                    : 'text-teal-800 hover:bg-teal-100/50 hover:text-teal-600'
                  } ${item.externalUrl ? 'hover:bg-amber-100/50 hover:text-amber-700' : ''}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
