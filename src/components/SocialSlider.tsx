import React, { useState, useEffect } from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import { TikTokIcon } from './icons/TikTokIcon';

interface SocialLink {
  name: string;
  url: string;
  icon: JSX.Element;
}

const socialLinks: SocialLink[] = [
  { name: "Beacons", url: "https://beacons.ai/mandameadows", icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 12h3v9h16v-9h3L12 2zm0 2.828l7.586 7.586H16v7H8v-7H4.414L12 4.828z"/></svg> },
  { name: "Cameo", url: "https://v.cameo.com/e/8E7z32hxYOb", icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg> },
  { name: "TikTok", url: "https://www.tiktok.com/@mandameadows", icon: <TikTokIcon className="w-6 h-6" /> },
  { name: "Instagram", url: "https://www.instagram.com/mandameadowss/", icon: <Instagram className="w-6 h-6" /> },
  { name: "YouTube", url: "https://www.youtube.com/@Amanda_Meadows", icon: <Youtube className="w-6 h-6" /> },
  { name: "Facebook", url: "https://www.facebook.com/profile.php?id=100069612219748&mibextid=ZbWKwL", icon: <Facebook className="w-6 h-6" /> }
];

const SocialSlider: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const showPosition = windowHeight / 2;

      setIsVisible(scrollPosition > showPosition);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
      <div className="h-14 bg-gradient-to-r from-teal-600/95 via-teal-700/95 to-teal-600/95 backdrop-blur-md shadow-lg">
        <div className="relative h-full overflow-hidden">
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-teal-600/95 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-teal-600/95 to-transparent z-10" />
          
          {/* Scrolling content */}
          <div className="infinite-scroll-container h-full flex items-center">
            <div className="scroll-content flex items-center gap-4 animate-scroll">
              {[...Array(3)].flatMap((_, i) => 
                socialLinks.map((link, index) => (
                  <a
                    key={`${link.name}-${i}-${index}`}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full hover:bg-white/20 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    {link.icon}
                    <span className="text-sm font-['Montserrat'] font-medium whitespace-nowrap">{link.name}</span>
                  </a>
                ))
              )}
            </div>
            <div className="scroll-content flex items-center gap-4 animate-scroll" aria-hidden="true">
              {[...Array(3)].flatMap((_, i) => 
                socialLinks.map((link, index) => (
                  <a
                    key={`${link.name}-${i}-${index}-clone`}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full hover:bg-white/20 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    {link.icon}
                    <span className="text-sm font-['Montserrat'] font-medium whitespace-nowrap">{link.name}</span>
                  </a>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .infinite-scroll-container {
          display: flex;
          width: 100%;
          overflow: hidden;
        }

        .scroll-content {
          flex-shrink: 0;
          min-width: 100%;
          animation: scroll 40s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }

        .infinite-scroll-container:hover .scroll-content {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .scroll-content {
            animation-duration: 80s;
          }
        }
      `}</style>
    </div>
  );
};

export default SocialSlider;
