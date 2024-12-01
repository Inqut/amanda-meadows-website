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

interface EmailResponse {
  success: boolean;
  error?: string;
}

class EmailError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'EmailError';
  }
}

export const emailService = {
  // Send contact form
  sendContactForm: async (data: ContactFormData): Promise<boolean> => {
    try {
      if (!emailConfig.contactEndpoint) {
        throw new EmailError('Contact form endpoint not configured');
      }

      const response = await fetch(emailConfig.contactEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject || 'New Contact Form Submission',
          message: data.message,
          _replyto: data.email
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new EmailError(`Failed to send contact form: ${errorText}`);
      }

      return true;
    } catch (error) {
      console.error('Error sending contact form:', error instanceof Error ? error.message : 'Unknown error');
      return false;
    }
  },

  // Send newsletter subscription
  sendNewsletterSubscription: async (data: NewsletterData): Promise<boolean> => {
    try {
      if (!emailConfig.newsletterEndpoint) {
        throw new EmailError('Newsletter endpoint not configured');
      }

      const response = await fetch(emailConfig.newsletterEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          _replyto: data.email
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new EmailError(`Failed to send newsletter subscription: ${errorText}`);
      }

      return true;
    } catch (error) {
      console.error('Error sending newsletter subscription:', error instanceof Error ? error.message : 'Unknown error');
      return false;
    }
  }
};
