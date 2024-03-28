"use client";

import { createContext, useContext, useState } from "react";

export type FullscreenContextType = {
  isFullscreen: boolean;
  setIsFullscreen: (isFullscreen: boolean) => void;
};
const FullscreenContext = createContext<FullscreenContextType>(
  {} as FullscreenContextType
);

export const useFullscreenContext = () => {
  const context = useContext(FullscreenContext);
  if (!context) {
    throw new Error(
      "useFullscreenContext must be used within a FullscreenProvider"
    );
  }

  return context;
};

type FullscreenProviderProps = {
  children: React.ReactNode;
};
const FullscreenProvider = ({ children }: FullscreenProviderProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <FullscreenContext.Provider value={{ isFullscreen, setIsFullscreen }}>
      {children}
    </FullscreenContext.Provider>
  );
};

export default FullscreenProvider;
