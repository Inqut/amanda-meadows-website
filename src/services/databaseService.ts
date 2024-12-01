import { supabase } from '../lib/supabase';

interface ContactSubmission {
  name: string;
  email: string;
  message: string;
  subject?: string;
  status?: 'pending' | 'processed' | 'failed';
}

interface NewsletterSubscription {
  email: string;
  status?: 'subscribed' | 'unsubscribed';
}

export const databaseService = {
  // Store contact form submission
  storeContactSubmission: async (data: ContactSubmission) => {
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          name: data.name,
          email: data.email,
          subject: data.subject || 'New Contact Form Submission',
          message: data.message,
          status: data.status || 'pending'
        });

      if (error) throw error;
      return true;
    } catch (error) {
      console.error('Error storing contact submission:', error);
      return false;
    }
  },

  // Store newsletter subscription
  storeNewsletterSubscription: async (data: NewsletterSubscription) => {
    try {
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

      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert({
          email: data.email,
          status: data.status || 'subscribed',
          confirmed_at: new Date().toISOString()
        });

      if (error) throw error;
      return true;
    } catch (error) {
      console.error('Error storing newsletter subscription:', error);
      return false;
    }
  },

  // Get all contact submissions
  getContactSubmissions: async () => {
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching contact submissions:', error);
      return [];
    }
  },

  // Get all newsletter subscriptions
  getNewsletterSubscriptions: async () => {
    try {
      const { data, error } = await supabase
        .from('newsletter_subscriptions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching newsletter subscriptions:', error);
      return [];
    }
  }
};
