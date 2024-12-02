import { useState, useRef, useEffect } from 'react';
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState<'all' | 'amanda' | 'charlene'>('all');
  const [direction, setDirection] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const filteredImages = images.filter(
    img => filter === 'all' || img.category === filter
  );

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredImages.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, filteredImages.length]);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex < 0) newIndex = filteredImages.length - 1;
      if (newIndex >= filteredImages.length) newIndex = 0;
      return newIndex;
    });
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="py-12 px-4 bg-neutral-900 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-amber-400">
          Photo Gallery
        </h2>
        
        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => {
              setFilter('all');
              setCurrentIndex(0);
            }}
            className={`px-6 py-2 rounded-full transition-colors ${
              filter === 'all'
                ? 'bg-amber-400 text-black'
                : 'bg-neutral-800 text-amber-400 hover:bg-neutral-700'
            }`}
          >
            All
          </button>
          <button
            onClick={() => {
              setFilter('amanda');
              setCurrentIndex(0);
            }}
            className={`px-6 py-2 rounded-full transition-colors ${
              filter === 'amanda'
                ? 'bg-amber-400 text-black'
                : 'bg-neutral-800 text-amber-400 hover:bg-neutral-700'
            }`}
          >
            Amanda
          </button>
          <button
            onClick={() => {
              setFilter('charlene');
              setCurrentIndex(0);
            }}
            className={`px-6 py-2 rounded-full transition-colors ${
              filter === 'charlene'
                ? 'bg-amber-400 text-black'
                : 'bg-neutral-800 text-amber-400 hover:bg-neutral-700'
            }`}
          >
            Charlene
          </button>
        </div>

        {/* Main Slider */}
        <div className="relative h-[600px] overflow-hidden rounded-xl">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full h-full"
              onClick={() => setSelectedImage(filteredImages[currentIndex].src)}
            >
              <img
                src={filteredImages[currentIndex].src}
                alt={filteredImages[currentIndex].alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-xl font-medium">
                  {filteredImages[currentIndex].alt}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-amber-400 p-3 rounded-full shadow-lg transition-all duration-300 backdrop-blur-sm"
            onClick={() => paginate(-1)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-amber-400 p-3 rounded-full shadow-lg transition-all duration-300 backdrop-blur-sm"
            onClick={() => paginate(1)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="absolute bottom-4 right-4 z-10 bg-white/80 hover:bg-white text-amber-400 p-2 rounded-full shadow-lg transition-all duration-300 backdrop-blur-sm"
          >
            {isAutoPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
          </button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="mt-4 flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
          {filteredImages.map((image, index) => (
            <button
              key={image.src}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`flex-none w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentIndex ? 'ring-2 ring-amber-400' : 'opacity-50 hover:opacity-100'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

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
                className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
                layoutId={`image-${selectedImage}`}
              />
              <button
                className="absolute top-4 right-4 text-white text-xl p-2 hover:bg-white/10 rounded-full"
                onClick={() => setSelectedImage(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ImageGallery;
