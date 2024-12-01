import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

interface SocialLink {
  platform: string;
  icon: React.ReactNode;
  handle: string;
  url: string;
}

const socialLinks: SocialLink[] = [
  {
    platform: 'Facebook',
    icon: <Facebook className="w-5 h-5" />,
    handle: '@amandameadows',
    url: 'https://www.facebook.com/profile.php?id=100069612219748'
  },
  {
    platform: 'TikTok',
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
    handle: '@mandameadows',
    url: 'https://tiktok.com/@mandameadows'
  },
  {
    platform: 'Instagram',
    icon: <Instagram className="w-5 h-5" />,
    handle: '@mandameadowss',
    url: 'https://instagram.com/mandameadowss'
  },
  {
    platform: 'YouTube',
    icon: <Youtube className="w-5 h-5" />,
    handle: '@Amanda_Meadows',
    url: 'https://youtube.com/@Amanda_Meadows'
  },
  {
    platform: 'X',
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    handle: 'Coming Soon',
    url: '#'
  }
];

export const SocialLinks: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className="p-2">
      <h3 className="text-xl font-bold text-pink-800 mb-4">Connect with Amanda</h3>
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 ${className}`}>
        {socialLinks.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-pink-100 to-purple-100 
                     hover:from-pink-200 hover:to-purple-200 transition-all duration-300 group"
          >
            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full 
                           bg-gradient-to-r from-pink-500 to-purple-500 text-white 
                           group-hover:from-pink-600 group-hover:to-purple-600">
              {link.icon}
            </span>
            <div className="min-w-0">
              <p className="font-semibold text-gray-800 text-sm whitespace-nowrap">{link.platform}</p>
              <p className="text-gray-600 text-xs truncate">{link.handle}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};