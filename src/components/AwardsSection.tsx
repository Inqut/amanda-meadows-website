import React from 'react';
import { Trophy, Vote } from 'lucide-react';
import { motion } from 'framer-motion';

interface Award {
  id: string;
  category: string;
  url: string;
  description: string;
}

const awards: Award[] = [
  {
    id: '1',
    category: 'Comedy Professional Award',
    url: 'https://cheerchoiceawards.us.launchpad6.com/2025/entry/5361',
    description: 'Queen Charlene is nominated for her outstanding comedy content and character performance!'
  },
  {
    id: '2',
    category: 'Vlog/Blog Award',
    url: 'https://cheerchoiceawards.us.launchpad6.com/2025/entry/5756',
    description: 'Nominated for bringing trailer park life to social media with humor and heart!'
  }
];

export const AwardsSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-2xl p-8 text-white">
      <div className="text-center mb-8">
        <Trophy className="w-12 h-12 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-2">✨ Cheer Choice Awards Nominee ✨</h2>
        <p className="text-lg opacity-90 mb-6">
          Queen Charlene needs your support! Vote daily to help bring the crown home to the trailer park!
        </p>
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src="/src/assets/images/special/awardsnominee.jpg"
          alt="Cheer Choice Awards Nominee"
          className="w-32 mx-auto rounded-xl shadow-lg mb-8"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {awards.map((award) => (
          <motion.div
            key={award.id}
            whileHover={{ scale: 1.02 }}
            className="bg-white/20 backdrop-blur-sm rounded-xl p-6"
          >
            <h3 className="text-xl font-bold mb-2">{award.category}</h3>
            <p className="text-sm mb-4 opacity-90">{award.description}</p>
            <motion.a
              href={award.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, backgroundColor: "rgb(255, 255, 255)" }}
              className="inline-flex items-center bg-white/90 text-purple-700 px-6 py-3 rounded-lg font-bold shadow-md hover:shadow-lg transition-all"
            >
              <Vote className="w-5 h-5 mr-2" />
              Vote Now
            </motion.a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};