import React from 'react';
import { Instagram, Youtube, Mail, Facebook } from 'lucide-react';
import { TikTokIcon } from './icons/TikTokIcon';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-[#F0FFF0] to-[#E6FFE6] text-[#2C3E50] py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#2C3E50]">Contact</h3>
            <div className="flex items-center gap-2 mb-2">
              <Mail className="w-5 h-5" />
              <a href="mailto:pr@theamandameadows.com" className="hover:text-[#1ABC9C] transition-colors">
                pr@theamandameadows.com
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#2C3E50]">Follow</h3>
            <div className="flex gap-4">
              <a href="https://instagram.com/mandameadowss" target="_blank" rel="noopener noreferrer" 
                 className="hover:text-[#1ABC9C] transition-colors" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100069612219748" target="_blank" rel="noopener noreferrer"
                 className="hover:text-[#1ABC9C] transition-colors" aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://youtube.com/@Amanda_Meadows" target="_blank" rel="noopener noreferrer"
                 className="hover:text-[#1ABC9C] transition-colors" aria-label="YouTube">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="https://tiktok.com/@mandameadows" target="_blank" rel="noopener noreferrer"
                 className="hover:text-[#1ABC9C] transition-colors" aria-label="TikTok">
                <TikTokIcon className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#2C3E50]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#creator" className="hover:text-[#1ABC9C] transition-colors">About</a>
              </li>
              <li>
                <a href="#events" className="hover:text-[#1ABC9C] transition-colors">Events</a>
              </li>
              <li>
                <a href="/business" className="hover:text-[#1ABC9C] transition-colors">Bookings</a>
              </li>
              <li>
                <a href="#characters" className="hover:text-[#1ABC9C] transition-colors">Characters</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2C3E50]/10 mt-8 pt-8 text-center">
          <p className="text-[#2C3E50]">{currentYear} Amanda Meadows. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
