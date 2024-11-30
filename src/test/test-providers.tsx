import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ThemeProvider from '../components/ThemeProvider';
import { AccessibilityProvider } from '../context/AccessibilityContext';
import { HelmetProvider } from 'react-helmet-async';

interface AllTheProvidersProps {
  children: React.ReactNode;
  route?: string;
  helmetContext?: object;
}

export const AllTheProviders = ({ 
  children, 
  route = '/', 
  helmetContext = {}
}: AllTheProvidersProps) => {
  return (
    <HelmetProvider context={helmetContext}>
      <MemoryRouter initialEntries={[route]}>
        <ThemeProvider>
          <AccessibilityProvider>
            {children}
          </AccessibilityProvider>
        </ThemeProvider>
      </MemoryRouter>
    </HelmetProvider>
  );
};