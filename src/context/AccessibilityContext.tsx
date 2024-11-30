import React, { createContext, useContext, useState, useCallback } from 'react';

export interface AccessibilityContextType {
  colorBlindnessMode: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  setColorBlindnessMode: (mode: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia') => void;
  highContrastMode: boolean;
  setHighContrastMode: (enabled: boolean) => void;
  fontSize: string;
  setFontSize: (size: string) => void;
  screenReaderMode: boolean;
  setScreenReaderMode: (enabled: boolean) => void;
  keyboardNavigationMode: boolean;
  setKeyboardNavigationMode: (enabled: boolean) => void;
}

export const AccessibilityContext = createContext<AccessibilityContextType | null>(null);

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};

interface AccessibilityProviderProps {
  children: React.ReactNode;
}

export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children }) => {
  const [colorBlindnessMode, setColorBlindnessMode] = useState<'none' | 'protanopia' | 'deuteranopia' | 'tritanopia'>('none');
  const [highContrastMode, setHighContrastMode] = useState(false);
  const [fontSize, setFontSize] = useState<string>('medium');
  const [screenReaderMode, setScreenReaderMode] = useState(false);
  const [keyboardNavigationMode, setKeyboardNavigationMode] = useState(false);

  const value = {
    colorBlindnessMode,
    setColorBlindnessMode,
    highContrastMode,
    setHighContrastMode,
    fontSize,
    setFontSize,
    screenReaderMode,
    setScreenReaderMode,
    keyboardNavigationMode,
    setKeyboardNavigationMode,
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
};
