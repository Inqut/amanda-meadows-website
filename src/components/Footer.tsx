import React from 'react';
import { Instagram, Youtube, Facebook, Mail } from 'lucide-react';
import { TikTokIcon } from './icons/TikTokIcon';

interface FooterProps {
  className?: string;
  onContactClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ className = '', onContactClick }) => {
  const currentYear = new Date().getFullYear();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onContactClick();
  };

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={`bg-gradient-to-b from-teal-800 to-teal-900 text-white py-12 shadow-lg border-t border-teal-700 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-teal-100 mb-4">Contact</h3>
            <div className="space-y-3">
              <a href="mailto:pr@theamandameadows.com" className="flex items-center space-x-2 text-teal-100 hover:text-teal-300 transition-colors">
                <Mail className="h-5 w-5" />
                <span>pr@theamandameadows.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-teal-100 mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/" className="block text-teal-100 hover:text-teal-300 transition-colors">Home</a>
              <button 
                onClick={(e) => scrollToSection(e, 'about')} 
                className="block text-teal-100 hover:text-teal-300 transition-colors text-left w-full"
              >
                About
              </button>
              <button 
                onClick={(e) => scrollToSection(e, 'gallery')} 
                className="block text-teal-100 hover:text-teal-300 transition-colors text-left w-full"
              >
                Gallery
              </button>
              <button 
                onClick={handleContactClick}
                className="block text-teal-100 hover:text-teal-300 transition-colors text-left w-full"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-teal-100 mb-4">Follow Me</h3>
            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/mandameadowss"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-100 hover:text-teal-300 transition-colors transform hover:scale-110"
              >
                <Instagram className="h-7 w-7" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100069612219748"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-100 hover:text-teal-300 transition-colors transform hover:scale-110"
              >
                <Facebook className="h-7 w-7" />
              </a>
              <a
                href="https://www.youtube.com/@Amanda_Meadows"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-100 hover:text-teal-300 transition-colors transform hover:scale-110"
              >
                <Youtube className="h-7 w-7" />
              </a>
              <a
                href="https://www.tiktok.com/@mandameadows"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-100 hover:text-teal-300 transition-colors transform hover:scale-110"
              >
                <TikTokIcon className="h-7 w-7" />
              </a>
            </div>
            <p className="text-sm text-teal-100/80 mt-4">
              Stay connected for updates and announcements!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-teal-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-teal-100/80">
              &copy; {currentYear} Amanda Meadows. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-teal-100/80">
              <a href="/privacy" className="hover:text-teal-300 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-teal-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
