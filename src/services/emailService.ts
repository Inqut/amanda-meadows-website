import { emailConfig } from '../config/email.config';
import { supabase } from '../lib/supabase';
import type { ContactSubmission, NewsletterSubscription } from '../types/supabase';

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

      // Store in Supabase
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert({
          name: data.name,
          email: data.email,
          subject: data.subject || 'New Contact Form Submission',
          message: data.message,
          status: 'pending'
        } as ContactSubmission);

      if (dbError) {
        console.error('Error storing contact submission:', dbError);
        // Continue with form submission even if DB storage fails
      }

      // Send via Formspree
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

      // Update status in Supabase if email was sent successfully
      if (!dbError) {
        await supabase
          .from('contact_submissions')
          .update({ status: 'processed' })
          .eq('email', data.email)
          .eq('status', 'pending');
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

      // Check if already subscribed
      const { data: existing } = await supabase
        .from('newsletter_subscriptions')
        .select()
        .eq('email', data.email)
        .eq('status', 'subscribed')
        .single();

      if (existing) {
        return true; // Already subscribed
      }

      // Store in Supabase
      const { error: dbError } = await supabase
        .from('newsletter_subscriptions')
        .insert({
          email: data.email,
          status: 'subscribed',
          confirmed_at: new Date().toISOString()
        } as NewsletterSubscription);

      if (dbError) {
        console.error('Error storing newsletter subscription:', dbError);
        // Continue with form submission even if DB storage fails
      }

      // Send via Formspree
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
