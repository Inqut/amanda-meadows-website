-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
    id BIGSERIAL PRIMARY KEY,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'processed', 'failed')),
    metadata JSONB DEFAULT '{}'::jsonb
);

-- Create newsletter_subscriptions table
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
    id BIGSERIAL PRIMARY KEY,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    email TEXT NOT NULL UNIQUE,
    status TEXT DEFAULT 'subscribed' CHECK (status IN ('subscribed', 'unsubscribed')),
    confirmed_at TIMESTAMPTZ,
    metadata JSONB DEFAULT '{}'::jsonb
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_email ON newsletter_subscriptions(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_status ON newsletter_subscriptions(status);

-- Create RLS (Row Level Security) policies
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Allow insert for authenticated and anon users
CREATE POLICY "Allow inserts for all users" ON contact_submissions
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow inserts for all users" ON newsletter_subscriptions
    FOR INSERT WITH CHECK (true);

-- Only allow select for authenticated users
CREATE POLICY "Allow select for authenticated users only" ON contact_submissions
    FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Allow select for authenticated users only" ON newsletter_subscriptions
    FOR SELECT USING (auth.role() = 'authenticated');
