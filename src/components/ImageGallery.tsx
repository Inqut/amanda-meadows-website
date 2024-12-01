import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import all gallery images
import AmandaMeadows from '../assets/images/gallery/AmandaMeadows.jpg';
import AmandaMeadowsKV from '../assets/images/gallery/AmandaMeadowsKV.jpg';
import BeachCharlene from '../assets/images/gallery/BeachCharlene.jpg';
import CharleneHalloween from '../assets/images/gallery/CharleneHalloween.jpg';
import CharleneShow from '../assets/images/gallery/CharleneShow.jpg';
import CharleneSmoke from '../assets/images/gallery/CharleneSmoke.jpg';
import CheetahCharlene from '../assets/images/gallery/CheetahCharlene.jpg';
import KneelTrainTracksCharlene from '../assets/images/gallery/KneelTrainTracksCharlene.jpg';
import PJCharlene from '../assets/images/gallery/PJCharlene.jpg';
import PissedBeachCharlene from '../assets/images/gallery/PissedBeachCharlene.jpg';
import PodcastGuest from '../assets/images/gallery/PodcastGuest.jpg';
import ShitboxCharlene from '../assets/images/gallery/ShitboxCharlene.jpg';
import TattooCharlene from '../assets/images/gallery/TattooCharlene.jpg';
import TrainTracksCharlene from '../assets/images/gallery/TrainTracksCharlene.jpg';

const images = [
  { src: AmandaMeadows, alt: 'Amanda Meadows', category: 'amanda' },
  { src: AmandaMeadowsKV, alt: 'Amanda Meadows at Kersey Valley', category: 'amanda' },
  { src: BeachCharlene, alt: 'Charlene at the Beach', category: 'charlene' },
  { src: CharleneHalloween, alt: 'Charlene Halloween Special', category: 'charlene' },
  { src: CharleneShow, alt: 'Charlene Live Show', category: 'charlene' },
  { src: CharleneSmoke, alt: 'Charlene Smoking', category: 'charlene' },
  { src: CheetahCharlene, alt: 'Charlene in Cheetah Print', category: 'charlene' },
  { src: KneelTrainTracksCharlene, alt: 'Charlene at Train Tracks', category: 'charlene' },
  { src: PJCharlene, alt: 'Charlene in PJs', category: 'charlene' },
  { src: PissedBeachCharlene, alt: 'Angry Charlene at Beach', category: 'charlene' },
  { src: PodcastGuest, alt: 'Podcast Guest Appearance', category: 'amanda' },
  { src: ShitboxCharlene, alt: 'Charlene with Car', category: 'charlene' },
  { src: TattooCharlene, alt: 'Charlene Getting Tattoo', category: 'charlene' },
  { src: TrainTracksCharlene, alt: 'Charlene on Train Tracks', category: 'charlene' },
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'amanda' | 'charlene'>('all');

  const filteredImages = images.filter(
    img => filter === 'all' || img.category === filter
  );

  return (
    <div className="py-12 px-4 bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-amber-400">
          Photo Gallery
        </h2>
        
        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full transition-colors ${
              filter === 'all'
                ? 'bg-amber-400 text-black'
                : 'bg-neutral-800 text-amber-400 hover:bg-neutral-700'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('amanda')}
            className={`px-6 py-2 rounded-full transition-colors ${
              filter === 'amanda'
                ? 'bg-amber-400 text-black'
                : 'bg-neutral-800 text-amber-400 hover:bg-neutral-700'
            }`}
          >
            Amanda
          </button>
          <button
            onClick={() => setFilter('charlene')}
            className={`px-6 py-2 rounded-full transition-colors ${
              filter === 'charlene'
                ? 'bg-amber-400 text-black'
                : 'bg-neutral-800 text-amber-400 hover:bg-neutral-700'
            }`}
          >
            Charlene
          </button>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          layout
        >
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="aspect-square relative overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setSelectedImage(image.src)}
              >
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  layoutId={`image-${image.src}`}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.img
                src={selectedImage}
                alt="Selected image"
                className="max-h-[90vh] max-w-[90vw] object-contain"
                layoutId={`image-${selectedImage}`}
              />
              <button
                className="absolute top-4 right-4 text-white text-xl p-2 hover:bg-white/10 rounded-full"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ImageGallery;
