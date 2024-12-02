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
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState<{ [key: string]: boolean }>({});
  const [containerHeight, setContainerHeight] = useState<number>(0);

  const filteredImages = images.filter(
    img => filter === 'all' || img.category === filter
  );

  // Preload images
  useEffect(() => {
    filteredImages.forEach((image) => {
      const img = new Image();
      img.src = image.src;
      img.onload = () => {
        setImagesLoaded(prev => ({
          ...prev,
          [image.src]: true
        }));
        // Update container height based on first loaded image
        if (Object.keys(imagesLoaded).length === 0) {
          setContainerHeight(img.height * (window.innerWidth / img.width));
        }
      };
    });
  }, [filteredImages]);

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

  // Calculate aspect ratio based on viewport
  const aspectRatio = {
    width: '100%',
    height: containerHeight ? `${containerHeight}px` : '600px',
    maxHeight: '80vh'
  };

  return (
    <div className="py-12 px-4 bg-neutral-900 relative">
      <div className="max-w-7xl mx-auto">
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
        <div 
          className="relative overflow-hidden rounded-xl"
          style={aspectRatio}
        >
          <AnimatePresence initial={false} custom={direction}>
            {filteredImages.map((image, index) => (
              index === currentIndex && (
                <motion.div
                  key={image.src}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="absolute inset-0 w-full h-full"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <div className="relative w-full h-full">
                    <img
                      src={image.src}
                      alt=""
                      className="w-full h-full object-contain"
                      style={{
                        opacity: imagesLoaded[image.src] ? 1 : 0,
                        transition: 'opacity 0.3s ease-in-out'
                      }}
                    />
                    {!imagesLoaded[image.src] && (
                      <div className="absolute inset-0 flex items-center justify-center bg-neutral-800">
                        <div className="w-12 h-12 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )
            ))}
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
              <div className="relative w-full h-full">
                <img
                  src={image.src}
                  alt=""
                  className="w-full h-full object-cover"
                  style={{
                    opacity: imagesLoaded[image.src] ? 1 : 0,
                    transition: 'opacity 0.3s ease-in-out'
                  }}
                />
                {!imagesLoaded[image.src] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-neutral-800">
                    <div className="w-4 h-4 border-2 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </div>
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
              <div className="relative max-w-[90vw] max-h-[90vh]">
                <img
                  src={selectedImage}
                  alt=""
                  className="w-full h-full object-contain"
                  style={{
                    opacity: imagesLoaded[selectedImage] ? 1 : 0,
                    transition: 'opacity 0.3s ease-in-out'
                  }}
                />
                {!imagesLoaded[selectedImage] && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </div>
              <button
                className="absolute top-4 right-4 text-white text-xl p-2 hover:bg-white/10 rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
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
