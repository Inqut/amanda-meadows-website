import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { DecorativeElements } from './DecorativeElements';
import { AboutContent } from './AboutContent';
import { AwardsModal } from './AwardsModal';
import { Footer } from './Footer';
import { UpcomingEvents } from './UpcomingEvents';
import { SocialLinks } from './SocialLinks';

// Import media using relative path
import heroVideo from '../assets/videos/hero/heromp.mp4';

export const CharleneLanding: React.FC = () => {
  const [isAwardsOpen, setIsAwardsOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={scrollRef}
      className="min-h-screen bg-neutral-100 text-neutral-800 flex flex-col font-['Montserrat']"
    >
      {/* Decorative Elements */}
      <DecorativeElements />

      {/* Persona Switcher Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="fixed top-4 right-20 z-50"
      >
        <a
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 
                  bg-gradient-to-r from-amber-400/10 to-amber-500/10 
                  hover:from-amber-400/20 hover:to-amber-500/20
                  border border-amber-400/30 hover:border-amber-400/50
                  rounded-full text-amber-700 text-sm
                  transition-all duration-300 group"
        >
          <span className="font-medium">Business Inquiries?</span>
          <span className="text-amber-500 group-hover:translate-x-1 transition-transform duration-300">
            Switch →
          </span>
        </a>
      </motion.div>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="relative inline-block">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 font-['Playfair_Display'] 
                         bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-400 
                         bg-clip-text text-transparent 
                         drop-shadow-sm">
                Home of Charlene
              </h1>
              <div className="absolute -inset-x-6 -inset-y-4 bg-gradient-to-r from-teal-100 via-emerald-50 to-teal-100 
                          opacity-50 blur-2xl -z-10 rounded-full"></div>
            </div>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => setIsAwardsOpen(true)}
              className="group relative mx-auto flex items-center justify-center gap-3 px-8 py-4 
                       bg-gradient-to-br from-teal-400 to-emerald-400 
                       hover:from-teal-500 hover:to-emerald-500
                       text-white rounded-xl font-bold shadow-lg hover:shadow-xl 
                       transition-all duration-300 overflow-hidden"
            >
              <Trophy className="w-6 h-6" />
              <span className="relative z-10">Vote for Charlene! 🏆</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 
                           translate-x-[-100%] group-hover:translate-x-[100%] 
                           transition-transform duration-700" />
            </motion.button>
          </motion.div>

          {/* Hero Video Section */}
          <div className="relative -mx-4 mb-8 sm:mb-16">
            <div className="container mx-auto px-4">
              <div className="aspect-video w-full max-w-[1400px] mx-auto rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl ring-1 ring-teal-200">
                <video
                  src={heroVideo}
                  className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 to-transparent pointer-events-none rounded-xl sm:rounded-2xl" />
              </div>
            </div>
          </div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <AboutContent />

            {/* Upcoming Events Section */}
            <div id="events" className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-xl ring-1 ring-teal-200 mb-12">
              <UpcomingEvents />
            </div>

            {/* Social Links */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-xl ring-1 ring-teal-200">
              <SocialLinks />
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Awards Modal */}
      <AwardsModal 
        isOpen={isAwardsOpen} 
        onClose={() => setIsAwardsOpen(false)} 
      />
    </div>
  );
};