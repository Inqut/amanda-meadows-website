import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import awardsImage from '../assets/images/special/awardsnominee.jpg';

interface VotingCategory {
  title: string;
  description: string;
  link: string;
}

const votingCategories: VotingCategory[] = [
  {
    title: "Comedy Professional Award",
    description: "Vote for Amanda's Trailer Park comedy content!",
    link: "https://cheerchoiceawards.us.launchpad6.com/2025/entry/5361"
  },
  {
    title: "Vlog/Blog Award",
    description: "Support The Trailer Park content series!",
    link: "https://cheerchoiceawards.us.launchpad6.com/2025/entry/5756"
  }
];

interface AwardsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AwardsModal: React.FC<AwardsModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={onClose}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-[95%] max-w-4xl z-[51]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-1 rounded-2xl bg-gradient-to-br from-teal-400 to-emerald-400">
                <div className="relative bg-white/95 backdrop-blur-sm rounded-xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
                  <button
                    onClick={onClose}
                    className="absolute right-4 top-4 p-2 rounded-full 
                             bg-gradient-to-br from-teal-500 to-emerald-500 text-white
                             hover:from-teal-600 hover:to-emerald-600 
                             transition-all duration-300"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Award Image */}
                    <div className="w-full md:w-1/2">
                      <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-teal-50 to-emerald-50 p-1">
                        <img
                          src={awardsImage}
                          alt="Vote for Amanda in Cheers Choice Awards"
                          className="w-full h-auto rounded-lg"
                        />
                        <div className="absolute inset-0 ring-1 ring-teal-500/20 rounded-xl" />
                      </div>
                    </div>

                    {/* Voting Content */}
                    <div className="w-full md:w-1/2 flex flex-col">
                      <h2 className="text-3xl font-bold text-teal-800 mb-4 font-['Playfair_Display']">
                        Vote in the Cheer Choice Awards! 🏆
                      </h2>
                      <p className="text-neutral-600 mb-6 font-['Montserrat']">
                        Amanda was nominated in two categories! You can vote every day to show your support.
                      </p>

                      <div className="space-y-4">
                        {votingCategories.map((category, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-xl"
                          >
                            <a
                              href={category.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block p-6 bg-gradient-to-br from-teal-50 to-emerald-50
                                       hover:from-teal-100 hover:to-emerald-100
                                       transition-all duration-300"
                            >
                              <div className="flex items-start justify-between gap-4">
                                <div>
                                  <h3 className="text-xl font-bold text-teal-800 mb-2 font-['Playfair_Display']">
                                    {category.title}
                                  </h3>
                                  <p className="text-neutral-600 font-['Montserrat']">
                                    {category.description}
                                  </p>
                                </div>
                                <ExternalLink className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 
                                           translate-x-[-100%] group-hover:translate-x-[100%] 
                                           transition-transform duration-700" />
                            </a>
                          </motion.div>
                        ))}
                      </div>

                      <p className="mt-6 text-sm text-neutral-500 font-['Montserrat']">
                        Thank y'all for voting for The Trailer Park! ❤️ Remember, you can vote every day!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
