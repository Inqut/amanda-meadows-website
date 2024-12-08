import React from 'react';
import { Calendar, MapPin, Ticket, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';
import inPersonEventImage from '@public/images/events/2.png';
import onlineEventImage from '@public/images/events/3.png';

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  time: string;
  image: string;
  isOnline?: boolean;
  isSoldOut?: boolean;
}

const upcomingEvents: Event[] = [
  {
    id: '1',
    title: 'Holly, Jolly, and Broke: A Trailer Park Christmas Party',
    date: 'December 2024',
    location: 'The Train Station Corbin',
    time: '',
    image: inPersonEventImage,
    isSoldOut: true
  },
  {
    id: '2',
    title: 'Holly, Jolly, and Broke: A Trailer Park Christmas Party - Online Special',
    date: 'Saturday, December 28th',
    location: 'Your Living Room',
    time: '',
    image: onlineEventImage,
    isOnline: true
  }
];

export const UpcomingEvents: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto mb-8 sm:mb-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-teal-800 mb-6 sm:mb-8 text-center">Upcoming Events</h2>
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl space-y-6 sm:space-y-8">
        {upcomingEvents.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start"
          >
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-teal-700 mb-3">{event.title}</h3>
              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">{event.date}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                {event.isOnline ? (
                  <Monitor className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
                <span className="text-sm sm:text-base">{event.location}</span>
              </div>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                {event.isOnline ? (
                  "Can't make it in person? No problem! Join us from the comfort of your own home for this special online stream. Experience all the trailer park holiday fun and laughter with Charlene coming right to your living room!"
                ) : (
                  "Join Amanda Meadows, Britany Smith, and Justin Stagner for a night of festive fun and trailer park shenanigans! This ain't your average Christmas party—it's gonna be a night full of laughter, holiday cheer, and a little bit of trailer park magic."
                )}
              </p>
              <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 mb-4 space-y-1">
                <li>Live Entertainment</li>
                <li>{event.isOnline ? 'Stream from Anywhere' : 'Drinks & Good Times'}</li>
                <li>Holiday Shenanigans</li>
              </ul>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                {event.isSoldOut ? (
                  <button
                    disabled
                    className="inline-flex items-center justify-center gap-2 bg-gray-400 text-white 
                             px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold shadow-lg cursor-not-allowed
                             w-full sm:w-auto"
                  >
                    <Ticket className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">Sold Out</span>
                  </button>
                ) : (
                  <a
                    href="https://buytickets.at/amandameadowsproductions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block hover:opacity-90 transition-opacity"
                  >
                    <img 
                      src="https://app.tickettailor.com/images/btns/bt_wh.gif" 
                      alt="Buy tickets for Amanda Meadows Productions"
                      className="h-12"
                    />
                  </a>
                )}
              </div>
              <p className="text-xs sm:text-sm text-gray-500 mt-4">
                {event.isSoldOut ? (
                  "This event is sold out, but don't worry! Check out our online stream option!"
                ) : (
                  "Secure your virtual seat today for this unique online experience!"
                )}
              </p>
            </div>
            <div className="w-full sm:w-48 flex-shrink-0 order-first md:order-last">
              <img
                src={event.image}
                alt={event.title}
                className="w-full sm:w-48 h-auto object-contain rounded-xl shadow-lg hover:scale-105 transition-transform"
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
  );
};