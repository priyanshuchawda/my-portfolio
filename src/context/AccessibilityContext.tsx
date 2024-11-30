import { createContext, useContext, useState, ReactNode } from 'react';

type ColorBlindnessMode = 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
type FontSize = 'small' | 'medium' | 'large';

interface AccessibilityContextType {
  colorBlindnessMode: ColorBlindnessMode;
  setColorBlindnessMode: (mode: ColorBlindnessMode) => void;
  highContrast: boolean;
  setHighContrast: (enabled: boolean) => void;
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  screenReaderMode: boolean;
  setScreenReaderMode: (enabled: boolean) => void;
  keyboardMode: boolean;
  setKeyboardMode: (enabled: boolean) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

interface AccessibilityProviderProps {
  children: ReactNode;
}

export const AccessibilityProvider = ({ children }: AccessibilityProviderProps) => {
  const [colorBlindnessMode, setColorBlindnessMode] = useState<ColorBlindnessMode>('none');
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState<FontSize>('medium');
  const [screenReaderMode, setScreenReaderMode] = useState(false);
  const [keyboardMode, setKeyboardMode] = useState(false);

  const value: AccessibilityContextType = {
    colorBlindnessMode,
    setColorBlindnessMode,
    highContrast,
    setHighContrast,
    fontSize,
    setFontSize,
    screenReaderMode,
    setScreenReaderMode,
    keyboardMode,
    setKeyboardMode,
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = (): AccessibilityContextType => {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};
