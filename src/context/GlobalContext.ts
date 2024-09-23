import { createContext } from 'react';

interface MyContextType {
  showBackToTop: boolean;
  setShowBackToTop: (value: boolean) => void;  // Pass boolean to set the value
  search: boolean;
  setSearch: (value: boolean) => void;         // Pass boolean to set the value
  open: boolean;
  setOpen: (value: boolean) => void;           // Pass boolean to set the value
}

// Provide initial default values for the context
export const GlobalContext = createContext<MyContextType>({
  showBackToTop: false,
  setShowBackToTop: () => {},   // Default function placeholder
  search: false,
  setSearch: () => {},          // Default function placeholder
  open: false,
  setOpen: () => {}             // Default function placeholder
});
