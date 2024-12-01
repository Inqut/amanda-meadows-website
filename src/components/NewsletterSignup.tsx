import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, X, CheckCircle } from 'lucide-react';
import { emailService } from '../services/emailService';
import { databaseService } from '../services/databaseService';

interface NewsletterSignupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setErrorMessage('Please enter your email address');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      // Store in database (don't wait for it)
      databaseService.storeNewsletterSubscription({
        email: email,
        status: 'subscribed'
      }).catch(error => {
        console.error('Database storage error:', error);
        // Continue with form submission even if database storage fails
      });

      // Send via Formspree
      const success = await emailService.sendNewsletterSubscription({ email });
      
      if (success) {
        setStatus('success');
        setEmail('');
        setTimeout(() => {
          onClose();
          setStatus('idle');
        }, 2000);
      } else {
        setStatus('error');
        setErrorMessage('Failed to subscribe. Please try again later.');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again.');
      setTimeout(() => setStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed inset-0 flex items-center justify-center p-2 sm:p-4 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative z-10 bg-[#FDFBF7] rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 w-[95%] sm:w-auto">
              <button
                onClick={onClose}
                className="absolute top-2 sm:top-4 right-2 sm:right-4 p-2 rounded-full hover:bg-[#D4AF37]/10 transition-colors text-[#8B7355]"
                aria-label="Close newsletter signup"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <div className="max-w-md mx-auto">
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#8B7355]">Stay Updated</h3>
                  <p className="mt-2 text-sm sm:text-base text-[#A69064]">
                    Subscribe to receive updates about shows, collaborations, and exclusive content.
                  </p>
                </div>

                <div className="mt-6 sm:mt-8">
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className={`flex-1 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border ${status === 'error' ? 'border-red-500' : 'border-[#D4B886]'} focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:border-transparent bg-white text-[#5C4033] placeholder-[#C4A484]`}
                    />
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="relative overflow-hidden px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-[#D4AF37] via-[#B8860B] to-[#D4AF37] bg-[length:200%_100%] text-[#FDFBF7] font-bold rounded-lg hover:bg-[center_right_1rem] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto sm:min-w-[160px] flex items-center justify-center shadow-lg hover:shadow-[#D4AF37]/25 group"
                    >
                      <div className="relative flex items-center gap-2">
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 sm:w-5 sm:h-5 border-3 border-[#FDFBF7]/30 border-t-[#FDFBF7] rounded-full animate-spin" />
                            <span className="font-medium text-sm sm:text-base">Sending...</span>
                          </>
                        ) : (
                          <>
                            <Mail className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                            <span className="font-medium text-sm sm:text-base">Subscribe</span>
                          </>
                        )}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#B8860B] to-[#DAA520] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  </div>

                  {status === 'error' && (
                    <p className="text-red-500 text-xs sm:text-sm mt-2">{errorMessage}</p>
                  )}
                  {status === 'success' && (
                    <div className="mt-4 flex items-center justify-center sm:justify-start gap-2 text-[#8B7355]">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                      <p className="text-xs sm:text-sm">Successfully subscribed!</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
