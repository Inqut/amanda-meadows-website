import React, { useState } from 'react';
import { Mail, Mic, Handshake, Award, ShoppingBag, Calendar, Users, MessageSquare, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { ContactForm } from './ContactForm';
import { NewsletterSignup } from './NewsletterSignup';
import { BrandSlider } from './BrandSlider';
import { AwardsModal } from './AwardsModal';
import ImageGallery from './ImageGallery';
import Footer from './Footer';

// Import images
import kvallyLogo from '../assets/images/brands/kvalleypng.png';
import trainStationLogo from '../assets/images/brands/ttspng.png';
import amandaImage from '/src/assets/images/amanda/Am1.jpeg';
import azureBeauty from '../assets/images/brands/azure-beauty.png';
import dustyDiamond from '../assets/images/brands/dusty-diamond-boutique.avif';
import guinthers from '../assets/images/brands/guinthers.avif';
import squattyPotty from '../assets/images/brands/squatty-potty.jpeg';
import ncCustomModulars from '../assets/images/brands/NCCustomModulars.jpeg';

// Brand data with correct logos and links
const brands = [
  {
    name: "Kersey Valley",
    logo: kvallyLogo,
    url: "https://kerseyvalley.com"
  },
  {
    name: "Train Station",
    logo: trainStationLogo,
    url: "https://www.thetrainstationcorbin.com"
  },
  {
    name: 'Azure Beauty',
    logo: azureBeauty,
    url: 'https://azurebeautyus.com/'
  },
  {
    name: 'Dusty Diamond Boutique',
    logo: dustyDiamond,
    url: 'https://dustydiamondsboutique.com/?srsltid=AfmBOopBUtLcblHc1IqGFgh5dTvtYIziw8zenNyGDLEXjxdUL1q6fs_p'
  },
  {
    name: 'Guinthers',
    logo: guinthers,
    url: 'https://guinthers.com/'
  },
  {
    name: 'Squatty Potty',
    logo: squattyPotty,
    url: 'https://www.squattypotty.com/collections/stools?utm_source=google&utm_medium=cpc&utm_campaign=21131326958&utm_content=162710012320&utm_term=squatty%20potty&gad_source=1'
  },
  {
    name: 'North Carolina Custom Modulars',
    logo: ncCustomModulars,
    url: 'https://www.mydreammodular.com/'
  }
];

export const AmandaLanding: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const [isAwardsOpen, setIsAwardsOpen] = useState(false);
  const [contactType, setContactType] = useState<'podcast' | 'brand' | 'event' | 'general' | 'collaboration'>('general');

  const openContactForm = (type: 'podcast' | 'brand' | 'event' | 'general' | 'collaboration') => {
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 font-['Playfair_Display']">
              Amanda Meadows
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-8">
              Award-Winning Comedian • Character Artist • Digital Storyteller
            </p>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => setIsAwardsOpen(true)}
              className="group relative mx-auto mb-12 flex items-center justify-center gap-3 px-8 py-4 
                       bg-gradient-to-br from-amber-400 to-amber-500 
                       hover:from-amber-500 hover:to-amber-600
                       text-white rounded-xl font-bold shadow-lg hover:shadow-xl 
                       transition-all duration-300 overflow-hidden"
            >
              <Trophy className="w-6 h-6" />
              <span className="relative z-10">Vote in the Awards</span>
            </motion.button>
          </motion.div>
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
              Pioneering character-driven comedy through authentic storytelling and digital innovation. With millions of views and a growing community of devoted fans, Amanda brings Southern charm and wit to life through unforgettable characters that resonate across platforms.
            </p>
          </div>

          <div className="bg-[#FDFBF7] rounded-2xl p-8 shadow-xl border border-[#D4B886]/20">
            <h2 className="text-3xl font-bold text-[#8B7355] mb-6">Services & Offerings</h2>
            <div className="space-y-6">
              <BusinessService
                icon={<Mic className="w-8 h-8 text-[#D4AF37]" />}
                title="Podcast Appearances"
                description="Elevate your podcast with character-driven storytelling and authentic Southern humor that keeps audiences coming back for more"
              />
              <BusinessService
                icon={<Handshake className="w-8 h-8 text-[#D4AF37]" />}
                title="Brand Partnerships"
                description="Transform your brand message through engaging character-driven content that authentically connects with audiences and drives real engagement"
              />
              <BusinessService
                icon={<Award className="w-8 h-8 text-[#D4AF37]" />}
                title="Speaking Engagements"
                description="Bring your event to life with dynamic performances and authentic storytelling that combines entertainment with genuine Southern charm"
              />
            </div>
          </div>
        </div>

        <section className="py-12 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#8B7355] mb-8">
              Work With Amanda
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {/* Podcast Appearances */}
              <button
                onClick={() => openContactForm('podcast')}
                className="group relative bg-[#FDFBF7] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#D4B886]/20 h-[220px] flex flex-col items-center justify-center text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] via-[#B8860B] to-[#D4AF37] rounded-xl transition-opacity group-hover:opacity-100 opacity-0" />
                <div className="relative z-10 flex flex-col items-center">
                  <Mic className="w-8 h-8 text-[#D4AF37] mb-4" />
                  <h3 className="text-xl font-semibold text-[#8B7355] mb-2">Podcast Appearances</h3>
                  <p className="text-[#A69064] text-sm">
                    Add authentic Southern charm and character-driven storytelling to your podcast
                  </p>
                </div>
              </button>

              {/* Brand Collaborations */}
              <button
                onClick={() => openContactForm('brand')}
                className="group relative bg-[#FDFBF7] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#D4B886]/20 h-[220px] flex flex-col items-center justify-center text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] via-[#B8860B] to-[#D4AF37] rounded-xl transition-opacity group-hover:opacity-100 opacity-0" />
                <div className="relative z-10 flex flex-col items-center">
                  <ShoppingBag className="w-8 h-8 text-[#D4AF37] mb-4" />
                  <h3 className="text-xl font-semibold text-[#8B7355] mb-2">Brand Collaborations</h3>
                  <p className="text-[#A69064] text-sm">
                    Create authentic, engaging content that resonates with your target audience
                  </p>
                </div>
              </button>

              {/* Event Bookings */}
              <button
                onClick={() => openContactForm('event')}
                className="group relative bg-[#FDFBF7] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#D4B886]/20 h-[220px] flex flex-col items-center justify-center text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] via-[#B8860B] to-[#D4AF37] rounded-xl transition-opacity group-hover:opacity-100 opacity-0" />
                <div className="relative z-10 flex flex-col items-center">
                  <Calendar className="w-8 h-8 text-[#D4AF37] mb-4" />
                  <h3 className="text-xl font-semibold text-[#8B7355] mb-2">Event Bookings</h3>
                  <p className="text-[#A69064] text-sm">
                    Transform your event with live character performances and authentic entertainment
                  </p>
                </div>
              </button>

              {/* Other Inquiries */}
              <button
                onClick={() => openContactForm('general')}
                className="group relative bg-[#FDFBF7] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#D4B886]/20 h-[220px] flex flex-col items-center justify-center text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] via-[#B8860B] to-[#D4AF37] rounded-xl transition-opacity group-hover:opacity-100 opacity-0" />
                <div className="relative z-10 flex flex-col items-center">
                  <Users className="w-8 h-8 text-[#D4AF37] mb-4" />
                  <h3 className="text-xl font-semibold text-[#8B7355] mb-2">Other Inquiries</h3>
                  <p className="text-[#A69064] text-sm">
                    Have something else in mind? Let's discuss!
                  </p>
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* Featured In Section */}
        <section className="py-12 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#8B7355] mb-8">
              Featured In
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl font-bold text-[#D4AF37] mb-2">2M+</div>
                <div className="text-[#8B7355]">Monthly Views</div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl font-bold text-[#D4AF37] mb-2">500K+</div>
                <div className="text-[#8B7355]">Social Followers</div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl font-bold text-[#D4AF37] mb-2">50+</div>
                <div className="text-[#8B7355]">Brand Partnerships</div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl font-bold text-[#D4AF37] mb-2">100+</div>
                <div className="text-[#8B7355]">Live Performances</div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-center text-[#8B7355] mb-6">
                What Partners Say
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-[#D4B886]/20">
                  <p className="text-[#A69064] italic mb-4">
                    "Amanda's authentic approach to content creation and her ability to connect with audiences made our partnership incredibly successful. Her character-driven storytelling brought our brand message to life in a unique and engaging way."
                  </p>
                  <div className="text-[#8B7355] font-semibold">
                    - Marketing Director, Major Brand Partner
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-[#D4B886]/20">
                  <p className="text-[#A69064] italic mb-4">
                    "Working with Amanda was a game-changer for our event. Her characters and performances brought an energy and authenticity that our audience absolutely loved. She's a true professional who delivers beyond expectations."
                  </p>
                  <div className="text-[#8B7355] font-semibold">
                    - Event Coordinator, Regional Entertainment Venue
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creative Process Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#8B7355] mb-12">
              The Creative Process
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-[#FDFBF7] p-6 rounded-xl shadow-lg border border-[#D4B886]/20">
                <div className="text-[#D4AF37] text-2xl font-bold mb-4">01. Character Development</div>
                <p className="text-[#A69064]">
                  Each character is carefully crafted from real-life inspirations and experiences, bringing authentic Southern stories to life through unique personalities and perspectives.
                </p>
              </div>
              <div className="bg-[#FDFBF7] p-6 rounded-xl shadow-lg border border-[#D4B886]/20">
                <div className="text-[#D4AF37] text-2xl font-bold mb-4">02. Content Creation</div>
                <p className="text-[#A69064]">
                  From concept to final edit, every piece of content is meticulously produced to ensure quality, authenticity, and maximum engagement with our audience.
                </p>
              </div>
              <div className="bg-[#FDFBF7] p-6 rounded-xl shadow-lg border border-[#D4B886]/20">
                <div className="text-[#D4AF37] text-2xl font-bold mb-4">03. Community Engagement</div>
                <p className="text-[#A69064]">
                  Building genuine connections with our audience through interactive content, live events, and personal interactions that make everyone feel part of the family.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Collaboration Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white border-2 border-amber-400 rounded-2xl p-8 md:p-12 shadow-lg">
                <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center font-['Playfair_Display']">
                  Brand Collaborations
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    I have had the pleasure of working with several brands to create
                    engaging and funny skit advertisements that seamlessly incorporate
                    their needs and requests. Growing up in the trailer park culture has
                    given me a unique and relatable perspective that resonates deeply with
                    an often overlooked demographic.
                  </p>
                  <p>
                    This authenticity shines through in the characters and content I create, 
                    making them relatable to a broad audience—everyone knows someone who 
                    is just like one of my skit characters.
                  </p>
                  <p>
                    As a versatile content creator, comedian, entertainer,
                    singer, songwriter, and social media influencer, I bring a unique blend
                    of talents to the table. My large and impressive following, combined
                    with my high reach and engagement rates, ensures that your brand
                    will be seen and loved by a wide and diverse audience.
                  </p>
                  <p>
                    Whether it's a humorous skit, a catchy song, a live appearance, or a 
                    full-length show, I am dedicated to delivering high-quality, entertaining, 
                    and effective promotional material that resonates with viewers and drives 
                    results for your brand.
                  </p>
                </div>
                <div className="mt-8 text-center">
                  <button
                    onClick={() => openContactForm('collaboration')}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 
                             bg-white border-2 border-amber-400 text-amber-600 rounded-xl
                             font-semibold hover:bg-amber-50 transition-all duration-300"
                  >
                    <Handshake className="w-5 h-5" />
                    <span>Partner With Me</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Slider Section */}
        <div className="bg-[#FDFBF7] rounded-2xl shadow-xl border border-[#D4B886]/20 overflow-hidden mb-20">
          <BrandSlider brands={brands} />
        </div>

        {/* Image Gallery Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <ImageGallery />
        </motion.section>

        {/* Newsletter Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white border-2 border-amber-400 rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 font-['Playfair_Display']">
                  Stay Updated
                </h2>
                <p className="text-gray-600">
                  Sign up for my newsletter to get the latest updates on shows, characters, and more!
                </p>
              </div>
              <button
                onClick={() => setIsNewsletterOpen(true)}
                className="w-full sm:w-auto px-8 py-3 bg-white border-2 border-amber-400 text-amber-600 rounded-xl
                       font-semibold hover:bg-amber-50 transition-all duration-300
                       flex items-center justify-center gap-2 mx-auto"
              >
                <Mail className="w-5 h-5" />
                <span>Subscribe to Newsletter</span>
              </button>
            </div>
          </div>
        </section>

        {/* Connect With Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4 font-['Playfair_Display']">
                  Connect With Us
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Whether you're interested in booking me for your podcast, partnering with your brand, 
                  or scheduling an event, I'd love to hear from you!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white border-2 border-amber-400 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-50 text-amber-600">
                    <Mic className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Podcast Booking</h3>
                  <p className="text-gray-600 mb-4">Want me on your podcast? Let's make it happen!</p>
                  <button
                    onClick={() => openContactForm('podcast')}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2 
                           bg-white border-2 border-amber-400 text-amber-600 rounded-lg
                           hover:bg-amber-50 transition-all duration-300"
                  >
                    <Mic className="w-4 h-4" />
                    <span>Book Now</span>
                  </button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white border-2 border-amber-400 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-50 text-amber-600">
                    <Handshake className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Brand Partnerships</h3>
                  <p className="text-gray-600 mb-4">Interested in collaborating? Let's create together!</p>
                  <button
                    onClick={() => openContactForm('brand')}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2 
                           bg-white border-2 border-amber-400 text-amber-600 rounded-lg
                           hover:bg-amber-50 transition-all duration-300"
                  >
                    <Handshake className="w-4 h-4" />
                    <span>Partner Up</span>
                  </button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white border-2 border-amber-400 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300 md:col-span-2 lg:col-span-1"
                >
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-50 text-amber-600">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Event Booking</h3>
                  <p className="text-gray-600 mb-4">Looking to book me for your event? Let's talk!</p>
                  <button
                    onClick={() => openContactForm('event')}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2 
                           bg-white border-2 border-amber-400 text-amber-600 rounded-lg
                           hover:bg-amber-50 transition-all duration-300"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Schedule Now</span>
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Let's Collaborate Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white border-2 border-amber-400 rounded-2xl p-12 shadow-lg text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-6 font-['Playfair_Display']">
                Let's Collaborate
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Ready to bring your project to life? Whether it's a special event, content creation, or brand partnership,
                I'm excited to hear about your vision and create something amazing together.
              </p>
              <button
                onClick={() => openContactForm('collaboration')}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 
                       bg-white border-2 border-amber-400 text-amber-600 rounded-xl
                       font-semibold hover:bg-amber-50 transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Start a Conversation</span>
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer onContactClick={() => openContactForm('general')} />

        {/* Modals */}
        <ContactForm
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
          type={contactType}
        />
        <NewsletterSignup
          isOpen={isNewsletterOpen}
          onClose={() => setIsNewsletterOpen(false)}
        />
        <AwardsModal
          isOpen={isAwardsOpen}
          onClose={() => setIsAwardsOpen(false)}
        />
      </div>
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