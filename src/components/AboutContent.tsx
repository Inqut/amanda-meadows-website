import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import amandaHeadshot from '../assets/images/amanda/amanda1.png';
import charleneImage from '../assets/images/charlene/Charabout.png';
import henryImage from '../assets/images/henry/henery1.png';
import cameoImage from '../assets/images/special/Cameo.png';
import merch1Image from '../assets/images/special/Merch1.1Charlene.jpg';
import merch2Image from '../assets/images/special/Merch2Charlene.jpg';
import SocialSlider from './SocialSlider';
import ImageGallery from './ImageGallery'; // Changed to default import

export const aboutContent = {
  about: {
    title: "About Amanda",
    intro: "Step into the vibrant world of Southern comedy with Amanda Meadows, where authentic storytelling meets laugh-out-loud entertainment. Through her unique characters and witty observations, Amanda brings a fresh perspective to comedy that resonates with audiences everywhere. Get ready for content that's as genuine as it is hilarious!",
    background: "Hailing from North Carolina's Suggs Trailer Park, Amanda Meadows brings an authentic voice to comedy that's both relatable and refreshing. Her upbringing in a close-knit working-class family has gifted her with a unique perspective and sharp wit that resonates with audiences across all walks of life. This genuine connection with her roots has become the cornerstone of her success in digital entertainment.",
    work: "As a multi-talented creator, Amanda independently produces all her content - from writing and filming to editing - ensuring an authentic voice that speaks directly to her audience. Her genuine approach and character-driven storytelling have made her a sought-after partner for brands looking to connect with audiences through authentic, relatable content. With millions of views across platforms, Amanda's work continues to prove that genuine storytelling resonates with viewers worldwide.",
    cameo: "Want a personalized message that'll make your day? Get a custom video from Amanda!",
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
      description: "Meet Charlene, the undisputed Queen of the Trailer Park, whose blend of Southern sass and street-smart wisdom has captured hearts nationwide. With her signature catchphrases and no-nonsense attitude, she's become a social media sensation who proves that authentic personality always shines through. From her viral 'That Look Good?' series to her heartwarming community interactions, Charlene brings joy to millions of viewers daily.",
      imageUrl: "/images/charlene.jpg",
      beaconsUrl: "https://beacons.ai/charlene",
    },
    henry: {
      title: "Meet Henry",
      description: "Henry is the quintessential trailer park philosopher, serving up life lessons with a side of laughter. From his famous 'dad talks' to his unique take on everyday situations, he's the voice of down-to-earth wisdom that reminds us all of home. His practical advice and humorous observations have earned him a dedicated following who tune in for both entertainment and unexpected insights.",
      imageUrl: "/images/henry.jpg"
    }
  },
  merch: {
    title: "Official Merch",
    subtitle: "Available at Dusty Diamond Boutique",
    description: "Join the Trailer Park family with our exclusive collection! From Charlene's iconic catchphrases to fan-favorite designs, our official merchandise lets you take a piece of the humor home. Each item is carefully crafted to bring that special trailer park charm to your everyday life. Whether you're looking for comfortable apparel or unique accessories, our collection has something for every fan.",
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
        <motion.section
          className="py-16 px-4"
          variants={fadeInUp}
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl ring-1 ring-teal-200 max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-teal-800 mb-4 font-['Playfair_Display']">
                  Charlene's Best Moments
                </h2>
                <p className="text-xl text-teal-600 mb-8">
                  Swipe through to relive some of Charlene's most iconic transformations and adventures
                </p>
              </div>
              <ImageGallery />
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
