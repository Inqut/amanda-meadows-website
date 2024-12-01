export type PersonaType = 'charlene' | 'amanda';

export interface PersonaState {
  currentPersona: PersonaType;
  togglePersona: () => void;
}