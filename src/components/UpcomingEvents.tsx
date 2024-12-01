import React from 'react';
import { Calendar, MapPin, Ticket } from 'lucide-react';
import { motion } from 'framer-motion';

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  time: string;
  image: string;
}

const upcomingEvents: Event[] = [
  {
    id: '1',
    title: 'Holly, Jolly, and Broke: A Trailer Park Christmas Party',
    date: 'December 2023',
    location: 'The Train Station Corbin',
    time: '',
    image: '/images/events/2.png'
  }
];

export const UpcomingEvents: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 mb-16">
      <h2 className="text-3xl font-bold text-[#D4AF37] mb-8 text-center">Upcoming Events</h2>
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
        <div className="space-y-8">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#D4AF37] mb-3">{event.title}</h3>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <Calendar className="w-5 h-5" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <MapPin className="w-5 h-5" />
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Join Amanda Meadows, Britany Smith, and Justin Stagner for a night of festive fun and trailer park shenanigans! 
                  This ain't your average Christmas party—it's gonna be a night full of laughter, holiday cheer, and a little bit 
                  of trailer park magic.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  <li>Live Entertainment</li>
                  <li>Drinks & Good Times</li>
                  <li>Holiday Shenanigans</li>
                </ul>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.facebook.com/share/19gLpRmbnS/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white 
                             px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all
                             relative overflow-hidden group"
                  >
                    <Ticket className="w-5 h-5" />
                    <span>View Event (Sold Out)</span>
                    <div className="absolute inset-0 bg-red-500/20 transform translate-y-full group-hover:translate-y-0 transition-transform"></div>
                  </a>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Keep an eye out for future events—you won't want to miss the next one!
                </p>
              </div>
              <div className="w-full md:w-48 flex-shrink-0">
                <img
                  src="../../public/images/events/2.png"
                  alt={event.title}
                  className="w-48 h-48 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};