import React from 'react';
import { Instagram, Youtube, Facebook } from 'lucide-react';
import { TikTokIcon } from './icons/TikTokIcon';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-teal-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            <a
              href="https://instagram.com/mandameadowss"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-teal-300 transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100069612219748&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-teal-300 transition-colors"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="https://youtube.com/@Amanda_Meadows"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-teal-300 transition-colors"
            >
              <Youtube className="h-6 w-6" />
            </a>
            <a
              href="https://tiktok.com/@mandameadows"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-teal-300 transition-colors"
            >
              <TikTokIcon className="h-6 w-6" />
            </a>
          </div>
          <p className="text-sm text-white/80">
            &copy; {currentYear} Amanda Meadows. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
