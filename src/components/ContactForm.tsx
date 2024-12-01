import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Mic, ShoppingBag, Calendar, Users } from 'lucide-react';
import { emailService } from '../services/emailService';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'podcast' | 'brand' | 'event' | 'general';
}

interface FormData {
  name: string;
  email: string;
  company: string;
  inquiryType: 'podcast' | 'brand' | 'event' | 'general';
  platformDetails: string;
  audienceSize: string;
  proposedDate: string;
  budget: string;
  message: string;
  subject: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose, type }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    inquiryType: type,
    platformDetails: '',
    audienceSize: '',
    proposedDate: '',
    budget: '',
    message: '',
    subject: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name');
      return false;
    }
    if (!formData.email.trim()) {
      setErrorMessage('Please enter your email address');
      return false;
    }
    if (!validateEmail(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Please enter your message');
      return false;
    }
    return true;
  };

  const getFormTitle = () => {
    switch (formData.inquiryType) {
      case 'podcast':
        return 'Podcast Appearance Request';
      case 'brand':
        return 'Brand Collaboration Inquiry';
      case 'event':
        return 'Event Booking Request';
      default:
        return 'Business Inquiry';
    }
  };

  const getFormIcon = () => {
    switch (formData.inquiryType) {
      case 'podcast':
        return <Mic className="w-6 h-6 text-[#8B7355]" />;
      case 'brand':
        return <ShoppingBag className="w-6 h-6 text-[#8B7355]" />;
      case 'event':
        return <Calendar className="w-6 h-6 text-[#8B7355]" />;
      default:
        return <Users className="w-6 h-6 text-[#8B7355]" />;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!validateForm()) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('sending');

    const success = await emailService.sendContactForm({
      name: formData.name,
      email: formData.email,
      message: `
Subject: ${getFormTitle()}
Company: ${formData.company}
Type: ${formData.inquiryType}
Platform Details: ${formData.platformDetails}
Audience Size: ${formData.audienceSize}
Proposed Date: ${formData.proposedDate}
Budget: ${formData.budget}

Message:
${formData.message}
      `.trim()
    });

    setStatus(success ? 'success' : 'error');
    
    if (success) {
      setTimeout(() => {
        onClose();
        setStatus('idle');
        setFormData({
          name: '',
          email: '',
          company: '',
          inquiryType: type,
          platformDetails: '',
          audienceSize: '',
          proposedDate: '',
          budget: '',
          message: '',
          subject: '',
        });
      }, 2000);
    } else {
      setErrorMessage('Failed to send message. Please try again later.');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#FDFBF7] backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed inset-0 flex items-center justify-center p-4 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#FDFBF7] rounded-2xl shadow-2xl overflow-hidden w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="p-6 md:p-8">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full bg-[#D4AF37]/20 hover:bg-[#D4AF37]/30 transition-colors"
                >
                  <X className="w-6 h-6 text-[#8B7355]" />
                </button>

                <div className="flex items-center gap-3 mb-6">
                  {getFormIcon()}
                  <h2 className="text-2xl md:text-3xl font-bold text-[#8B7355]">
                    {getFormTitle()}
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#8B7355] mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-[#D4B886] focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#8B7355] mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-[#D4B886] focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-[#8B7355] mb-1">
                      Company/Organization/Show Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-[#D4B886] focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="platformDetails" className="block text-sm font-medium text-[#8B7355] mb-1">
                      {formData.inquiryType === 'podcast' ? 'Podcast/Show Details' :
                       formData.inquiryType === 'brand' ? 'Brand/Product Details' :
                       formData.inquiryType === 'event' ? 'Event Details' : 'Platform/Project Details'}
                    </label>
                    <input
                      type="text"
                      id="platformDetails"
                      name="platformDetails"
                      required
                      value={formData.platformDetails}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-[#D4B886] focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="audienceSize" className="block text-sm font-medium text-[#8B7355] mb-1">
                        Audience/Reach Size
                      </label>
                      <select
                        id="audienceSize"
                        name="audienceSize"
                        required
                        value={formData.audienceSize}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-[#D4B886] focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:border-transparent"
                      >
                        <option value="">Select size</option>
                        <option value="0-5k">0-5k</option>
                        <option value="5k-20k">5k-20k</option>
                        <option value="20k-50k">20k-50k</option>
                        <option value="50k-100k">50k-100k</option>
                        <option value="100k+">100k+</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-[#8B7355] mb-1">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        required
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-[#D4B886] focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:border-transparent"
                      >
                        <option value="">Select budget</option>
                        <option value="0-1k">$0-1k</option>
                        <option value="1k-5k">$1k-5k</option>
                        <option value="5k-10k">$5k-10k</option>
                        <option value="10k+">$10k+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="proposedDate" className="block text-sm font-medium text-[#8B7355] mb-1">
                      Proposed Date/Timeline
                    </label>
                    <input
                      type="text"
                      id="proposedDate"
                      name="proposedDate"
                      required
                      value={formData.proposedDate}
                      onChange={handleChange}
                      placeholder="e.g., Q1 2024, March 15th, or Flexible"
                      className="w-full px-4 py-2 rounded-lg border border-[#D4B886] focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-[#8B7355] mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-[#D4B886] focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#8B7355] mb-1">
                      Additional Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Please include any additional information about your proposal..."
                      className="w-full px-4 py-2 rounded-lg border border-[#D4B886] focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:border-transparent resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-end gap-4 pt-4">
                    {status === 'error' && (
                      <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
                    )}
                    {status === 'success' && (
                      <p className="text-[#8B7355] text-sm">
                        Message sent successfully!
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className={`flex items-center gap-2 px-6 py-2 rounded-full font-medium text-[#FDFBF7]
                        ${status === 'sending' 
                          ? 'bg-[#D4AF37]/50 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-[#D4AF37] via-[#B8860B] to-[#D4AF37] hover:from-[#B8860B] hover:to-[#DAA520]'
                        } transition-colors`}
                    >
                      {status === 'sending' ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending...</span>
                        </div>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
