import { emailConfig } from '../config/email.config';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  subject?: string;
}

interface NewsletterData {
  email: string;
}

// Replace this with your Formspree form ID after signing up
const FORMSPREE_CONTACT_FORM = 'https://formspree.io/f/mvgovjkp';
const FORMSPREE_NEWSLETTER_FORM = 'https://formspree.io/f/mwpkwdlk';

const RECIPIENT_EMAIL = 'pr@theamandameadows.com';

export const emailService = {
  // Send contact form
  sendContactForm: async (data: ContactFormData) => {
    try {
      const response = await fetch(FORMSPREE_CONTACT_FORM, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject || 'New Contact Form Submission',
          message: data.message,
          _replyto: data.email
        })
      });
      
      if (response.ok) {
        console.log('Contact form sent successfully');
        return { success: true, response };
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending contact form:', error);
      return { success: false, error };
    }
  },

  // Send newsletter subscription
  sendNewsletterSubscription: async (data: NewsletterData) => {
    try {
      const response = await fetch(FORMSPREE_NEWSLETTER_FORM, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: data.email,
          _subject: 'New Newsletter Subscription',
          _replyto: data.email
        })
      });

      if (response.ok) {
        console.log('Newsletter subscription sent successfully');
        return { success: true, response };
      } else {
        throw new Error('Failed to subscribe');
      }
    } catch (error) {
      console.error('Error sending newsletter subscription:', error);
      return { success: false, error };
    }
  }
};
