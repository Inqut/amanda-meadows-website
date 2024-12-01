import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Star, Video, Camera } from 'lucide-react';

export const ExclusiveContent: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
      <div className="text-center mb-8">
        <Lock className="w-12 h-12 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-2">Exclusive Behind-the-Scenes</h2>
        <p className="text-lg opacity-90">Join the VIP Trailer Park Family!</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Feature
          icon={<Video />}
          title="Unreleased Footage"
          description="Watch bloopers and deleted scenes"
        />
        <Feature
          icon={<Camera />}
          title="BTS Content"
          description="See how the magic happens"
        />
        <Feature
          icon={<Star />}
          title="Early Access"
          description="Watch new episodes before anyone else"
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full bg-white text-purple-600 py-3 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-colors"
        onClick={() => window.open('https://patreon.com', '_blank')}
      >
        Join Now on Patreon
      </motion.button>
    </div>
  );
};

const Feature: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="text-center">
    <div className="bg-white/20 rounded-full p-3 w-12 h-12 mx-auto mb-3">
      {icon}
    </div>
    <h3 className="font-semibold mb-1">{title}</h3>
    <p className="text-sm opacity-90">{description}</p>
  </div>
);