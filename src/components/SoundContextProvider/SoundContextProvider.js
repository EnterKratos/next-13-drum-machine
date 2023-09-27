'use client';
import React from 'react';

const DEFAULT_STATE = true;

const SoundContext = React.createContext(DEFAULT_STATE);

function SoundContextProvider({ children }) {
  const [soundEnabled, setSoundEnabled] = React.useState(DEFAULT_STATE);

  return (
    <SoundContext.Provider value={{ soundEnabled, setSoundEnabled }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSoundEnabled() {
  const data = React.useContext(SoundContext);

  if (!data) {
    throw new Error("Cannot consume SoundContext without a SoundContextProvider");
  }

  return data;
}

export default SoundContextProvider;