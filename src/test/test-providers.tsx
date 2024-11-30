import { ReactNode } from 'react';
import { AccessibilityProvider } from '../context/AccessibilityContext';
import { ThemeProvider } from '../components/ThemeProvider';

interface TestProvidersProps {
  children: ReactNode;
}

export const TestProviders = ({ children }: TestProvidersProps) => {
  return (
    <ThemeProvider>
      <AccessibilityProvider>
        {children}
      </AccessibilityProvider>
    </ThemeProvider>
  );
};
