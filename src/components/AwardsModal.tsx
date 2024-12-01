import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Share2, Twitter, Facebook, Link as LinkIcon } from 'lucide-react';
import awardsImage from '../assets/images/special/awardsnominee.jpg';

interface AwardsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AwardsModal: React.FC<AwardsModalProps> = ({ isOpen, onClose }) => {
  const shareUrl = 'https://amandameadows.com/awards'; // Update with actual URL
  const shareText = 'Check out Amanda Meadows\' comedy award nominations! 🏆';

  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank');
  };

  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank');
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed inset-0 flex items-center justify-center p-4 z-50"
          >
            <div className="bg-gradient-to-br from-pink-100 to-purple-200 rounded-2xl shadow-2xl overflow-hidden w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              {/* Close button */}
              <button
                onClick={onClose}
                className="fixed top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <X className="w-6 h-6 text-gray-800" />
              </button>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  {/* Image */}
                  <div className="w-full md:w-1/2 flex-shrink-0">
                    <div className="relative pt-[75%]"> {/* 4:3 aspect ratio */}
                      <img
                        src={awardsImage}
                        alt="Amanda Meadows Award Nomination"
                        className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="w-full md:w-1/2 flex flex-col">
                    <h2 className="text-2xl md:text-3xl font-bold text-pink-800 mb-4">
                      Award Nominations
                    </h2>
                    <div className="prose prose-pink">
                      <p className="text-gray-700 mb-4">
                        Amanda Meadows has been nominated for several prestigious comedy awards,
                        including:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                        <li>Best Comedy Special 2024</li>
                        <li>Rising Star in Comedy</li>
                        <li>Outstanding Character Performance</li>
                        <li>Innovative Comedy Award</li>
                      </ul>
                    </div>

                    {/* Share buttons */}
                    <div className="flex flex-wrap gap-3 mt-auto pt-4">
                      <button
                        onClick={shareOnTwitter}
                        className="flex items-center gap-2 px-4 py-2 bg-[#1DA1F2] text-white rounded-full hover:bg-[#1a8cd8] transition-colors"
                      >
                        <Twitter className="w-5 h-5" />
                        <span className="hidden sm:inline">Share</span>
                      </button>
                      <button
                        onClick={shareOnFacebook}
                        className="flex items-center gap-2 px-4 py-2 bg-[#4267B2] text-white rounded-full hover:bg-[#365899] transition-colors"
                      >
                        <Facebook className="w-5 h-5" />
                        <span className="hidden sm:inline">Share</span>
                      </button>
                      <button
                        onClick={copyLink}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors ml-auto"
                      >
                        <LinkIcon className="w-5 h-5" />
                        <span className="hidden sm:inline">Copy Link</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
