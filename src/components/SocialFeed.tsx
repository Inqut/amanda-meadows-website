import React, { useEffect } from 'react';

interface Post {
  id: string;
  platform: 'instagram' | 'tiktok' | 'youtube';
  content: string;
  likes: number;
  thumbnail: string;
}

const samplePosts: Post[] = [
  {
    id: '1',
    platform: 'tiktok',
    content: 'When Henry tries to fix the AC again... 😂',
    likes: 15000,
    thumbnail: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3'
  },
  {
    id: '2',
    platform: 'instagram',
    content: 'Queen Charlene\'s Daily Words of Wisdom 👑',
    likes: 8500,
    thumbnail: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3'
  },
  {
    id: '3',
    platform: 'youtube',
    content: 'Trailer Park Cooking Show - Episode 5',
    likes: 25000,
    thumbnail: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-4.0.3'
  }
];

export const SocialFeed: React.FC = () => {
  useEffect(() => {
    // Load Juicer script
    const script = document.createElement('script');
    script.src = 'https://assets.juicer.io/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 mb-16">
      <h2 className="text-3xl font-bold text-[#D4AF37] mb-8 text-center">Latest Updates</h2>
      <div 
        className="juicer-feed rounded-xl overflow-hidden shadow-xl"
        data-feed-id="YOUR-FEED-NAME" // Replace with your Juicer feed name
        data-style="slider"
        data-interval="5000"
        data-overlay="false"
      ></div>
    </div>
  );
};