import React from 'react';
import { Crown, Briefcase } from 'lucide-react';
import { usePersonaStore } from '../store/personaStore';
import { motion } from 'framer-motion';

export const PersonaSwitcher: React.FC = () => {
  const { currentPersona, togglePersona } = usePersonaStore();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={togglePersona}
      className={`fixed top-4 right-4 p-3 rounded-full shadow-lg z-50 transition-colors ${
        currentPersona === 'charlene'
          ? 'bg-pink-500 hover:bg-pink-600'
          : 'bg-blue-600 hover:bg-blue-700'
      }`}
    >
      {currentPersona === 'charlene' ? (
        <Briefcase className="w-6 h-6 text-white" />
      ) : (
        <Crown className="w-6 h-6 text-white" />
      )}
    </motion.button>
  );
};