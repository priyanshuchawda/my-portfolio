import React, { createContext, useContext, useState, useEffect } from 'react';

interface AccessibilityContextType {
  colorBlindMode: 'normal' | 'deuteranopia' | 'protanopia' | 'tritanopia';
  screenReaderMode: boolean;
  keyboardNavigation: boolean;
  reduceMotion: boolean;
  setColorBlindMode: (mode: 'normal' | 'deuteranopia' | 'protanopia' | 'tritanopia') => void;
  toggleScreenReaderMode: () => void;
  toggleKeyboardNavigation: () => void;
  toggleReduceMotion: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  // Initialize states from localStorage or defaults
  const [colorBlindMode, setColorBlindModeState] = useState<AccessibilityContextType['colorBlindMode']>(() => {
    const saved = localStorage.getItem('colorBlindMode');
    return (saved as AccessibilityContextType['colorBlindMode']) || 'normal';
  });

  const [screenReaderMode, setScreenReaderMode] = useState(() => {
    return localStorage.getItem('screenReaderMode') === 'true';
  });

  const [keyboardNavigation, setKeyboardNavigation] = useState(() => {
    return localStorage.getItem('keyboardNavigation') === 'true';
  });

  const [reduceMotion, setReduceMotion] = useState(() => {
    return localStorage.getItem('reduceMotion') === 'true';
  });

  // Apply color blind mode
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('deuteranopia', 'protanopia', 'tritanopia');
    if (colorBlindMode !== 'normal') {
      root.classList.add(colorBlindMode);
    }
    localStorage.setItem('colorBlindMode', colorBlindMode);
  }, [colorBlindMode]);

  // Apply screen reader mode
  useEffect(() => {
    const root = document.documentElement;
    if (screenReaderMode) {
      root.setAttribute('role', 'application');
      root.setAttribute('aria-label', 'Portfolio Website');
    } else {
      root.removeAttribute('role');
      root.removeAttribute('aria-label');
    }
    localStorage.setItem('screenReaderMode', String(screenReaderMode));
  }, [screenReaderMode]);

  // Apply keyboard navigation
  useEffect(() => {
    const root = document.documentElement;
    if (keyboardNavigation) {
      root.classList.add('keyboard-nav');
    } else {
      root.classList.remove('keyboard-nav');
    }
    localStorage.setItem('keyboardNavigation', String(keyboardNavigation));
  }, [keyboardNavigation]);

  // Apply reduce motion
  useEffect(() => {
    const root = document.documentElement;
    if (reduceMotion) {
      root.classList.add('reduce-motion');
    } else {
      root.classList.remove('reduce-motion');
    }
    localStorage.setItem('reduceMotion', String(reduceMotion));
  }, [reduceMotion]);

  const setColorBlindMode = (mode: AccessibilityContextType['colorBlindMode']) => {
    setColorBlindModeState(mode);
  };

  const toggleScreenReaderMode = () => {
    setScreenReaderMode(prev => !prev);
  };

  const toggleKeyboardNavigation = () => {
    setKeyboardNavigation(prev => !prev);
  };

  const toggleReduceMotion = () => {
    setReduceMotion(prev => !prev);
  };

  return (
    <AccessibilityContext.Provider
      value={{
        colorBlindMode,
        screenReaderMode,
        keyboardNavigation,
        reduceMotion,
        setColorBlindMode,
        toggleScreenReaderMode,
        toggleKeyboardNavigation,
        toggleReduceMotion,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}
