import React, { useState, useEffect, useRef } from 'react';
import { Trophy } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { UpcomingEvents } from './UpcomingEvents';
import { ExclusiveContent } from './ExclusiveContent';
import { SocialLinks } from './SocialLinks';
import { AwardsModal } from './AwardsModal';
import { DecorativeElements } from './DecorativeElements';
import { Footer } from './Footer';

// Import media using @assets alias
import welcomeVideo from '@assets/videos/hero/Welcome to the Trailer Park.mp4';
import amandaImage from '@assets/images/amanda/amanda1.png';
import henryImage from '@assets/images/henry/henery2.png';

export const CharleneLanding: React.FC = () => {
  const [isAwardsOpen, setIsAwardsOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Infinite scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const element = scrollRef.current;
      if (!element) return;

      const { scrollTop, scrollHeight, clientHeight } = element;
      if (scrollTop + clientHeight >= scrollHeight - 100) {
        // When near bottom, scroll back to a point near the top
        element.scrollTop = 100;
      } else if (scrollTop <= 0) {
        // When at top, scroll to a point near the bottom
        element.scrollTop = scrollHeight - clientHeight - 100;
      }
    };

    const element = scrollRef.current;
    if (element) {
      element.addEventListener('scroll', handleScroll);
      return () => element.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div 
      ref={scrollRef}
      className="min-h-screen bg-gradient-to-b from-[#FFF0F5] to-[#FFE4E1] overflow-auto relative flex flex-col"
    >
      {/* Decorative Elements */}
      <DecorativeElements />

      <div className="container mx-auto px-4 py-8 sm:py-12 flex-grow">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#D4AF37] mb-2 sm:mb-4">
            Welcome to The Trailer Park
          </h1>
          <p className="text-xl sm:text-2xl text-[#B8860B]">
            Home of Queen Charlene
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          onClick={() => setIsAwardsOpen(true)}
          className="mx-auto mb-8 sm:mb-12 flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#B8860B]
                   text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto"
        >
          <Trophy className="w-4 h-4 sm:w-5 sm:h-5" />
          View Award Nominations
        </motion.button>

        {/* Full-width video container */}
        <div className="relative -mx-4 mb-8 sm:mb-16">
          <div className="container mx-auto px-4">
            <div className="aspect-video w-full max-w-[1400px] mx-auto rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
              <video
                src={welcomeVideo}
                className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                autoPlay
                loop
                muted
                playsInline
              >
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {/* Meet Amanda Section */}
          <div id="creator" className="mb-6 sm:mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-lg sm:shadow-xl">
              <div className="grid md:grid-cols-2 gap-4 sm:gap-8 items-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#D4AF37] mb-3 sm:mb-4">Meet The Creator</h2>
                  <p className="text-base sm:text-lg text-gray-700 mb-3 sm:mb-4">
                    Behind Queen Charlene and the whole trailer park crew is Amanda Meadows, 
                    a talented comedian and content creator from North Carolina. Amanda brings these 
                    characters to life with her unique blend of humor and heart.
                  </p>
                  <p className="text-base sm:text-lg text-gray-700">
                    Want to see more of Amanda's work? Check out her professional page for 
                    bookings, collaborations, and more!
                  </p>
                </div>
                <div>
                  <img
                    src={amandaImage}
                    alt="Amanda Meadows"
                    className="w-full h-auto object-contain rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Additional Henry Content */}
          <div id="characters" className="mb-6 sm:mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-lg sm:shadow-xl">
              <div className="grid md:grid-cols-2 gap-4 sm:gap-8 items-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#D4AF37] mb-3 sm:mb-4">Henry's Corner</h2>
                  <p className="text-base sm:text-lg text-gray-700 mb-3 sm:mb-4">
                    Join Henry for his unique take on life, love, and trailer park living. 
                    From BBQ tips to dad jokes, Henry's got something for everyone!
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Henry's BBQ Masterclass</li>
                    <li>Front Porch Philosophy</li>
                    <li>Dad's Life Lessons</li>
                  </ul>
                </div>
                <div>
                  <img
                    src={henryImage}
                    alt="Henry's Wisdom"
                    className="w-full h-auto object-contain rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Events Section */}
          <div id="events" className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-lg sm:shadow-xl mb-6 sm:mb-12">
            <UpcomingEvents />
          </div>

          {/* Social Links */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-lg sm:shadow-xl">
            <SocialLinks />
          </div>
        </motion.div>
      </div>

      <AwardsModal isOpen={isAwardsOpen} onClose={() => setIsAwardsOpen(false)} />
      <Footer />
    </div>
  );
};