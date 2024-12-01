import { create } from 'zustand';
import { PersonaState, PersonaType } from '../types/theme';

export const usePersonaStore = create<PersonaState>((set) => ({
  currentPersona: 'charlene',
  togglePersona: () =>
    set((state) => ({
      currentPersona: state.currentPersona === 'charlene' ? 'amanda' : 'charlene',
    })),
}));