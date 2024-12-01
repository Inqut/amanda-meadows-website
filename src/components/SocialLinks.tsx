import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { TikTokIcon } from './icons/TikTokIcon';
import { motion } from 'framer-motion';

interface SocialLink {
  name: string;
  url: string;
  icon: JSX.Element;
  color: string;
}

const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    icon: <Instagram className="w-6 h-6" />,
    url: 'https://www.instagram.com/mandameadowss/',
    color: 'hover:text-pink-500'
  },
  {
    name: 'Facebook',
    icon: <Facebook className="w-6 h-6" />,
    url: 'https://www.facebook.com/profile.php?id=100069612219748&mibextid=ZbWKwL',
    color: 'hover:text-blue-600'
  },
  {
    name: 'YouTube',
    icon: <Youtube className="w-6 h-6" />,
    url: 'https://www.youtube.com/@Amanda_Meadows',
    color: 'hover:text-red-600'
  },
  {
    name: 'TikTok',
    icon: <TikTokIcon className="w-6 h-6" />,
    url: 'https://www.tiktok.com/@mandameadows',
    color: 'hover:text-black'
  }
];

export const SocialLinks: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className="space-y-12">
      <h2 className="text-3xl font-bold text-teal-800 font-['Playfair_Display'] text-center">Let's Connect</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative overflow-hidden rounded-2xl p-4 
                      bg-gradient-to-br from-teal-400 to-emerald-400
                      ring-2 ring-white/20 backdrop-blur-sm
                      hover:ring-white/40 transition-all duration-300 ${link.color}`}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="relative z-10 flex flex-col items-center text-white p-4">
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                className="mb-3"
              >
                {link.icon}
              </motion.div>
              <span className="font-semibold text-lg mb-1">{link.name}</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute -inset-x-full bottom-0 h-px bg-gradient-to-r from-transparent via-white to-transparent group-hover:animate-shine" />
          </motion.a>
        ))}
      </div>
    </div>
  );
};