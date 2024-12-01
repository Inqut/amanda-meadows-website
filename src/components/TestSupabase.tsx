import React, { useState, useEffect } from 'react';
import { databaseService } from '../services/databaseService';

export const TestSupabase: React.FC = () => {
  const [testStatus, setTestStatus] = useState<string>('');

  const testConnection = async () => {
    try {
      // Test contact submission
      const contactResult = await databaseService.storeContactSubmission({
        name: 'Test User',
        email: 'test@example.com',
        subject: 'Test Subject',
        message: 'Test Message'
      });

      // Test newsletter subscription
      const newsletterResult = await databaseService.storeNewsletterSubscription({
        email: 'test@example.com',
        status: 'subscribed'
      });

      if (contactResult && newsletterResult) {
        setTestStatus('✅ Successfully connected to Supabase and stored test data');
      } else {
        setTestStatus('❌ Error storing test data');
      }
    } catch (error) {
      setTestStatus(`❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-white rounded-lg shadow-lg">
      <button
        onClick={testConnection}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Test Supabase Connection
      </button>
      {testStatus && (
        <p className="mt-2 text-sm">
          {testStatus}
        </p>
      )}
    </div>
  );
};
