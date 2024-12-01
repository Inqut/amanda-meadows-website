export interface ContactSubmission {
  id?: number
  created_at?: string
  name: string
  email: string
  message: string
  subject?: string
  status?: 'pending' | 'processed' | 'failed'
}

export interface NewsletterSubscription {
  id?: number
  created_at?: string
  email: string
  status?: 'subscribed' | 'unsubscribed'
  confirmed_at?: string
}
