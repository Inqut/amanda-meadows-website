<<<<<<< HEAD
import React, { useEffect } from 'react';
=======
import React from 'react';
>>>>>>> ac75debc1f3dc14500cb37b3147fe356e9670226
import { motion } from 'framer-motion';
import amandaHeadshot from '../assets/images/amanda/amanda1.png';
import charleneImage from '../assets/images/charlene/Charabout.png';
import henryImage from '../assets/images/henry/henery1.png';
import cameoImage from '../assets/images/special/Cameo.png';
import merch1Image from '../assets/images/special/Merch1.1Charlene.jpg';
import merch2Image from '../assets/images/special/Merch2Charlene.jpg';
import SocialSlider from './SocialSlider';
<<<<<<< HEAD
import ImageGallery from './ImageGallery';
=======
>>>>>>> ac75debc1f3dc14500cb37b3147fe356e9670226

export const aboutContent = {
  about: {
    title: "About Amanda",
    intro: "Prepare to be entertained by the shenanigans of a Southern comedian entertainer! Dive into a world of laughter, wit, and charm. Brace yourself for content that will have you chuckling until your sides ache. Entertainment like no other awaits!",
    background: "Born to working-class parents and raised in a large family in Suggs Trailer Park, in North Carolina, Amanda's journey through poverty has shaped her into a smart and influential figure. Her struggles have forged her sharp sense of humor and unique perspective, which she brings to life through her characters and content.",
    work: "Amanda writes, films, edits, and creates all of her own material, delivering an authentic and relatable voice from an often overlooked demographic. Brands that work with Amanda benefit from her genuine connection with her audience and her ability to craft engaging and impactful content.",
    cameo: "Want a personalized video message from Amanda?",
    tagline: "Listen. Zat lewk gewd? Right?",
    beaconsUrl: "https://beacons.ai/mandameadows",
    cameoUrl: "https://v.cameo.com/e/8E7z32hxYOb",
    socialLinks: [
      { name: "Beacons", url: "https://beacons.ai/mandameadows", icon: "" },
      { name: "Cameo", url: "https://v.cameo.com/e/8E7z32hxYOb", icon: "" },
      { name: "TikTok", url: "https://www.tiktok.com/@mandameadows", icon: "" },
      { name: "Instagram", url: "https://www.instagram.com/mandameadows/", icon: "" },
      { name: "YouTube", url: "https://www.youtube.com/@MandaMeadows", icon: "" },
      { name: "Facebook", url: "https://www.facebook.com/mandameadowscomedy", icon: "" }
    ]
  },
  characters: {
    charlene: {
      title: "Meet Charlene",
      description: "Charlene, the Trailer Park Queen, brings sass and class to every situation. With her unique perspective and quick wit, she's become a beloved character who tells it like it is.",
      imageUrl: "/images/charlene.jpg",
      beaconsUrl: "https://beacons.ai/charlene",
    },
    henry: {
      title: "Meet Henry",
      description: "Henry is a character who embodies the spirit of a trailer park dad. With his unique perspective and down-to-earth wisdom, he brings humor to everyday situations.",
      imageUrl: "/images/henry.jpg"
    }
  },
  merch: {
    title: "Official Merch",
    subtitle: "Available at Dusty Diamond Boutique",
    description: "Show your love for Charlene and the gang with official merchandise! Get your hands on exclusive apparel and accessories.",
    shopUrl: "https://dustydiamondboutique.com/collections/merch?utm_content=ios&utm_medium=product-links&utm_source=copyToPasteboard"
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

export const AboutContent: React.FC = () => {
  const socialLinks = [
    { name: "TikTok", url: "https://www.tiktok.com/@mandameadows", icon: "📱" },
    { name: "Instagram", url: "https://www.instagram.com/mandameadowss/", icon: "📸" },
    { name: "YouTube", url: "https://www.youtube.com/@Amanda_Meadows", icon: "▶️" },
    { name: "Facebook", url: "https://www.facebook.com/profile.php?id=100069612219748&mibextid=ZbWKwL", icon: "👥" }
  ];

<<<<<<< HEAD
  useEffect(() => {
    // Load Cameo widget script
    const script = document.createElement('script');
    script.src = 'https://cdn.cameo.com/iframe/cameo-iframe.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

=======
>>>>>>> ac75debc1f3dc14500cb37b3147fe356e9670226
  return (
    <div className="relative">
      <SocialSlider />
      {/* Main Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
        className="min-h-screen bg-gradient-to-br from-teal-50 to-neutral-50"
      >
        {/* About Section */}
        <motion.section 
<<<<<<< HEAD
          id="about"
          className="py-8 sm:py-16 px-4"
          variants={fadeInUp}
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center space-y-8">
              {/* Image */}
              <div className="w-full max-w-lg mx-auto">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={amandaHeadshot}
                    alt="Amanda Meadows"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full max-w-2xl mx-auto text-center space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-800 font-['Playfair_Display']">
                  {aboutContent.about.title}
                </h2>
                <div className="space-y-4 text-lg sm:text-xl text-neutral-700">
                  <p>
                    {aboutContent.about.intro}
                  </p>
                  <p>
                    {aboutContent.about.background}
                  </p>
                  <p>
                    {aboutContent.about.work}
                  </p>
                </div>
                <div className="pt-4">
                  <a
                    href={aboutContent.about.beaconsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl text-lg sm:text-xl font-['Montserrat']"
                  >
                    <span className="font-medium">Connect with Amanda</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </a>
                </div>
=======
          className="py-16 px-4"
          variants={fadeInUp}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-teal-800 font-['Playfair_Display'] mb-6">
                  {aboutContent.about.title}
                </h2>
                <div className="space-y-6">
                  <p className="text-xl sm:text-2xl text-neutral-700 font-['Montserrat'] leading-relaxed">
                    {aboutContent.about.intro}
                  </p>
                  <p className="text-xl sm:text-2xl text-neutral-700 font-['Montserrat'] leading-relaxed">
                    {aboutContent.about.background}
                  </p>
                  <p className="text-xl sm:text-2xl text-neutral-700 font-['Montserrat'] leading-relaxed">
                    {aboutContent.about.work}
                  </p>
                  <div className="pt-4">
                    <a
                      href={aboutContent.about.beaconsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl text-lg sm:text-xl font-['Montserrat']"
                    >
                      <span className="font-medium">Connect with Amanda</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <img
                  src={amandaHeadshot}
                  alt="Amanda Meadows"
                  className="rounded-2xl shadow-xl max-w-[400px] w-full hover:shadow-2xl transition-shadow duration-300"
                />
>>>>>>> ac75debc1f3dc14500cb37b3147fe356e9670226
              </div>
            </div>
          </div>
        </motion.section>

        {/* Characters Section */}
        <motion.section 
          className="py-16 px-4 bg-gradient-to-br from-teal-50 to-neutral-50"
          variants={fadeInUp}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-teal-800 font-['Playfair_Display'] text-center mb-12">
              Meet the Characters
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Charlene */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl ring-1 ring-teal-200">
                <div className="space-y-6">
                  <img
                    src={charleneImage}
                    alt="Charlene Character"
                    className="rounded-xl shadow-lg w-full hover:shadow-xl transition-shadow duration-300"
                  />
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-teal-800 font-['Playfair_Display'] mb-4">
                      {aboutContent.characters.charlene.title}
                    </h3>
                    <p className="text-xl sm:text-2xl text-neutral-700 font-['Montserrat'] leading-relaxed mb-6">
                      {aboutContent.characters.charlene.description}
                    </p>
                    <a
                      href={aboutContent.characters.charlene.beaconsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl text-base sm:text-lg font-['Montserrat']"
                    >
                      <span className="font-medium">Follow Charlene</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Henry */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl ring-1 ring-teal-200">
                <div className="space-y-6">
                  <img
                    src={henryImage}
                    alt="Henry Character"
                    className="rounded-xl shadow-lg w-full hover:shadow-xl transition-shadow duration-300"
                  />
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-teal-800 font-['Playfair_Display'] mb-4">
                      {aboutContent.characters.henry.title}
                    </h3>
                    <p className="text-xl sm:text-2xl text-neutral-700 font-['Montserrat'] leading-relaxed">
                      {aboutContent.characters.henry.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Cameo Section */}
<<<<<<< HEAD
        <motion.section 
          className="py-8 sm:py-16 px-4"
          variants={fadeInUp}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-800 font-['Playfair_Display']">
                  Book a Personal Video
                </h2>
                <p className="text-lg sm:text-xl text-neutral-700 font-['Montserrat']">
                  Want a personalized video message from Charlene? Book now on Cameo!
                </p>
                <a 
                  href="https://v.cameo.com/e/8E7z32hxYOb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                >
                  Book on Cameo →
                </a>
              </div>
              <div className="relative aspect-video sm:aspect-[4/3] w-full rounded-xl overflow-hidden shadow-lg mt-4 md:mt-0">
                <iframe
                  src="https://v.cameo.com/e/8E7z32hxYOb"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                  title="Amanda Meadows' Cameo Profile"
                ></iframe>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Gallery Section */}
=======
>>>>>>> ac75debc1f3dc14500cb37b3147fe356e9670226
        <motion.section
          className="py-16 px-4"
          variants={fadeInUp}
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl ring-1 ring-teal-200 max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="text-center">
<<<<<<< HEAD
                <h2 className="text-4xl font-bold text-teal-800 mb-4 font-['Playfair_Display']">
                  Charlene's Best Moments
                </h2>
                <p className="text-xl text-teal-600 mb-8">
                  Swipe through to relive some of Charlene's most iconic transformations and adventures
                </p>
              </div>
              <ImageGallery />
=======
                <img 
                  src={cameoImage} 
                  alt="Amanda Meadows on Cameo" 
                  className="mx-auto mb-8 rounded-lg shadow-lg max-w-[350px] w-full hover:shadow-xl transition-shadow duration-300"
                />
                <h3 className="text-2xl sm:text-3xl font-bold text-teal-800 font-['Playfair_Display'] mb-4">
                  {aboutContent.about.cameo}
                </h3>
                <p className="text-xl sm:text-2xl font-['Playfair_Display'] text-teal-700 mb-6">
                  Book her on Cameo!
                </p>
                <a 
                  href={aboutContent.about.cameoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl text-lg sm:text-xl font-['Montserrat']"
                >
                  <span className="font-medium">Book on Cameo</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
              <p className="text-2xl sm:text-3xl italic text-teal-700 font-['Playfair_Display'] text-center">
                {aboutContent.about.tagline}
              </p>
>>>>>>> ac75debc1f3dc14500cb37b3147fe356e9670226
            </div>
          </div>
        </motion.section>

        {/* Merch Section */}
        <motion.section
          className="py-16 px-4 bg-gradient-to-br from-teal-50 to-neutral-50"
          variants={fadeInUp}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-teal-800 font-['Playfair_Display'] mb-4">
                {aboutContent.merch.title}
              </h2>
              <p className="text-2xl sm:text-3xl text-teal-700 font-['Playfair_Display']">
                {aboutContent.merch.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div
                variants={fadeInUp}
                className="relative group overflow-hidden rounded-2xl shadow-xl bg-white"
              >
                <img
                  src={merch1Image}
                  alt="Charlene Merchandise"
                  className="w-full h-auto max-h-[600px] object-contain transform group-hover:scale-105 transition-transform duration-500 p-4"
                />
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="relative group overflow-hidden rounded-2xl shadow-xl bg-white"
              >
                <img
                  src={merch2Image}
                  alt="Charlene Merchandise"
                  className="w-full h-auto max-h-[600px] object-contain transform group-hover:scale-105 transition-transform duration-500 p-4"
                />
              </motion.div>
            </div>

            <div className="text-center">
              <p className="text-xl sm:text-2xl text-neutral-700 font-['Montserrat'] leading-relaxed mb-8">
                {aboutContent.merch.description}
              </p>
              <a
                href={aboutContent.merch.shopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl text-lg sm:text-xl font-['Montserrat']"
              >
                <span className="font-medium">Shop Now</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </a>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default AboutContent;
