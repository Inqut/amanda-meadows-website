import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { DecorativeElements } from './DecorativeElements';
import { AboutContent } from './AboutContent';
import { AwardsModal } from './AwardsModal';
import { Footer } from './Footer';
import { UpcomingEvents } from './UpcomingEvents';
import { SocialLinks } from './SocialLinks';
import { Navigation } from './Navigation';

// Import media using relative path
import heroVideo from '../assets/videos/hero/heromp.mp4';

export const CharleneLanding: React.FC = () => {
  const [isAwardsOpen, setIsAwardsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      ref={scrollRef}
      className="min-h-screen bg-gradient-to-br from-teal-100 via-teal-50/90 to-emerald-100 text-neutral-800 flex flex-col font-['Montserrat']"
    >
      {/* Decorative Elements */}
      <DecorativeElements />

      {/* Navigation */}
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="relative bg-gradient-to-b from-teal-200/30 to-transparent pb-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-4xl mx-auto text-center"
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
          </div>
        </section>

        {/* Content Sections */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-16 py-12"
          >
            {/* About Content */}
            <div id="about">
              <AboutContent />
            </div>

            {/* Upcoming Events Section */}
            <div id="events" className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-xl ring-1 ring-teal-200">
              <UpcomingEvents />
            </div>

            {/* Social Links */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-xl ring-1 ring-teal-200">
              <SocialLinks />
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <Footer className="bg-white/90 backdrop-blur-sm border-t border-teal-200 shadow-inner mt-16" />

      {/* Awards Modal */}
      <AwardsModal 
        isOpen={isAwardsOpen} 
        onClose={() => setIsAwardsOpen(false)} 
      />
    </div>
  );
};