import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { AnimatePresence } from 'framer-motion';
import { usePersonaStore } from './store/personaStore';
import { PersonaSwitcher } from './components/PersonaSwitcher';
import { CharleneLanding } from './components/CharleneLanding';
import { AmandaLanding } from './components/AmandaLanding';

function App() {
  const { currentPersona } = usePersonaStore();

  return (
    <div className="min-h-screen bg-white font-['Montserrat'] overflow-x-hidden">
      <PersonaSwitcher />
      <AnimatePresence mode="wait">
        {currentPersona === 'charlene' ? <CharleneLanding /> : <AmandaLanding />}
      </AnimatePresence>
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;