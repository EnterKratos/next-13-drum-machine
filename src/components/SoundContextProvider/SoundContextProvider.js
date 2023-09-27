'use client';
import React from 'react';

const DEFAULT_STATE = true;

export const SoundContext = React.createContext(DEFAULT_STATE);

function SoundContextProvider({ children }) {
  const [soundEnabled, setSoundEnabled] = React.useState(DEFAULT_STATE);

  return (
    <SoundContext.Provider value={{ soundEnabled, setSoundEnabled }}>
      {children}
    </SoundContext.Provider>
  );
}

export default SoundContextProvider;