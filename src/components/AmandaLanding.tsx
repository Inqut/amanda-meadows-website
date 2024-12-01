import React, { useState } from 'react';
import { Mail, Mic, Handshake, Award, ShoppingBag, Calendar, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { ContactForm } from './ContactForm';
import { NewsletterSignup } from './NewsletterSignup';
import { BrandSlider } from './BrandSlider';

// Import images
import kvallyLogo from '../assets/images/brands/kvalleypng.png';
import trainStationLogo from '../assets/images/brands/ttspng.png';
import amandaImage from '/src/assets/images/amanda/Am1.jpeg';

// Sample brand data - replace with actual brand logos and links
const brands = [
  {
    name: "Kersey Valley",
    logo: kvallyLogo,
    link: "https://kerseyvalley.com"
  },
  {
    name: "Train Station",
    logo: trainStationLogo,
    link: "https://www.thetrainstationcorbin.com"
  },
  // Duplicate brands to create a fuller slider effect
  {
    name: "Kersey Valley",
    logo: kvallyLogo,
    link: "https://kerseyvalley.com"
  },
  {
    name: "Train Station",
    logo: trainStationLogo,
    link: "https://www.thetrainstationcorbin.com"
  }
];

export const AmandaLanding: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const [contactType, setContactType] = useState<'podcast' | 'brand' | 'event' | 'general'>('general');

  const openContactForm = (type: 'podcast' | 'brand' | 'event' | 'general') => {
    setContactType(type);
    setIsContactOpen(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#FDFBF7]"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-[#8B7355] mb-4">
            Amanda Meadows Productions
          </h1>
          <p className="text-2xl text-[#A69064]">Creating Comedy That Connects</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#FDFBF7] rounded-2xl p-8 shadow-xl border border-[#D4B886]/20">
            <img
              src={amandaImage}
              alt="Amanda Meadows"
              className="w-full h-auto object-contain rounded-xl mb-6"
            />
            <h2 className="text-3xl font-bold text-[#8B7355] mb-4">About Amanda</h2>
            <p className="text-lg text-[#A69064]">
              Award-winning comedian and content creator specializing in character-driven comedy
              and social media entertainment.
            </p>
          </div>

          <div className="bg-[#FDFBF7] rounded-2xl p-8 shadow-xl border border-[#D4B886]/20">
            <h2 className="text-3xl font-bold text-[#8B7355] mb-6">Work With Us</h2>
            <div className="space-y-6">
              <BusinessService
                icon={<Mic className="w-8 h-8 text-[#D4AF37]" />}
                title="Podcast Appearances"
                description="Bring authentic humor and engaging stories to your podcast"
              />
              <BusinessService
                icon={<Handshake className="w-8 h-8 text-[#D4AF37]" />}
                title="Brand Partnerships"
                description="Create memorable content that resonates with your audience"
              />
              <BusinessService
                icon={<Award className="w-8 h-8 text-[#D4AF37]" />}
                title="Speaking Engagements"
                description="Energize your events with comedy and insights"
              />
            </div>
          </div>
        </div>

        <section className="py-12 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#8B7355] mb-8">
              Work With Amanda
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {/* Podcast Appearances */}
              <button
                onClick={() => openContactForm('podcast')}
                className="group relative bg-[#FDFBF7] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#D4B886]/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] via-[#B8860B] to-[#D4AF37] rounded-xl transition-opacity group-hover:opacity-100 opacity-0" />
                <Mic className="w-8 h-8 text-[#D4AF37] mb-4" />
                <h3 className="text-xl font-semibold text-[#8B7355] mb-2">Podcast Appearances</h3>
                <p className="text-[#A69064] text-sm">
                  Interested in having Amanda on your podcast? Let's talk!
                </p>
              </button>

              {/* Brand Collaborations */}
              <button
                onClick={() => openContactForm('brand')}
                className="group relative bg-[#FDFBF7] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#D4B886]/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] via-[#B8860B] to-[#D4AF37] rounded-xl transition-opacity group-hover:opacity-100 opacity-0" />
                <ShoppingBag className="w-8 h-8 text-[#D4AF37] mb-4" />
                <h3 className="text-xl font-semibold text-[#8B7355] mb-2">Brand Collaborations</h3>
                <p className="text-[#A69064] text-sm">
                  Partner with Amanda for brand deals and sponsorships.
                </p>
              </button>

              {/* Event Bookings */}
              <button
                onClick={() => openContactForm('event')}
                className="group relative bg-[#FDFBF7] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#D4B886]/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] via-[#B8860B] to-[#D4AF37] rounded-xl transition-opacity group-hover:opacity-100 opacity-0" />
                <Calendar className="w-8 h-8 text-[#D4AF37] mb-4" />
                <h3 className="text-xl font-semibold text-[#8B7355] mb-2">Event Bookings</h3>
                <p className="text-[#A69064] text-sm">
                  Book Amanda for your next event or show.
                </p>
              </button>

              {/* Other Inquiries */}
              <button
                onClick={() => openContactForm('general')}
                className="group relative bg-[#FDFBF7] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#D4B886]/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] via-[#B8860B] to-[#D4AF37] rounded-xl transition-opacity group-hover:opacity-100 opacity-0" />
                <Users className="w-8 h-8 text-[#D4AF37] mb-4" />
                <h3 className="text-xl font-semibold text-[#8B7355] mb-2">Other Inquiries</h3>
                <p className="text-[#A69064] text-sm">
                  Have something else in mind? Let's discuss!
                </p>
              </button>
            </div>
          </div>
        </section>

        {/* Brand Slider Section */}
        <div className="bg-[#FDFBF7] rounded-2xl shadow-xl border border-[#D4B886]/20 overflow-hidden">
          <BrandSlider brands={brands} />
        </div>

        {/* Newsletter Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-[#8B7355] mb-4">
                Stay Updated
              </h2>
              <p className="text-[#A69064] mb-8">
                Subscribe to Amanda's newsletter for exclusive updates, behind-the-scenes content, and special announcements.
              </p>
              <button
                onClick={() => setIsNewsletterOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#D4AF37] via-[#B8860B] to-[#D4AF37] text-[#FDFBF7] font-bold rounded-lg hover:from-[#B8860B] hover:to-[#DAA520] transition-all duration-300 shadow-lg hover:shadow-[#D4AF37]/25 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </section>

        <div className="bg-[#D4AF37] text-[#FDFBF7] rounded-2xl p-8 shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-2">Let's Collaborate</h2>
              <p className="text-[#A69064]">
                Ready to create something amazing? Get in touch with our team.
              </p>
            </div>
            <Mail className="w-12 h-12" />
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        type={contactType}
      />

      {/* Newsletter Signup Modal */}
      <NewsletterSignup
        isOpen={isNewsletterOpen}
        onClose={() => setIsNewsletterOpen(false)}
      />
    </motion.div>
  );
};

const BusinessService: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4 p-4 rounded-xl bg-[#FDFBF7] border border-[#D4B886]/20">
    <div className="text-[#D4AF37]">{icon}</div>
    <div>
      <h3 className="font-semibold text-xl text-[#8B7355]">{title}</h3>
      <p className="text-[#A69064]">{description}</p>
    </div>
  </div>
);