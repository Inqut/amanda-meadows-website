import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { usePersonaStore } from './store/personaStore';
import { PersonaSwitcher } from './components/PersonaSwitcher';
import { CharleneLanding } from './components/CharleneLanding';
import { AmandaLanding } from './components/AmandaLanding';

function App() {
  const { currentPersona } = usePersonaStore();

  return (
    <div className="relative">
      <PersonaSwitcher />
      <AnimatePresence mode="wait">
        {currentPersona === 'charlene' ? <CharleneLanding /> : <AmandaLanding />}
      </AnimatePresence>
    </div>
  );
}

export default App;