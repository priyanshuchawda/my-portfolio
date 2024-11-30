import { ReactElement } from 'react';
import { render as rtlRender, RenderOptions, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ThemeProvider from '../components/ThemeProvider';
import { AccessibilityProvider } from '../context/AccessibilityContext';
import { HelmetProvider } from 'react-helmet-async';

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  route?: string;
  helmetContext?: object;
}

function render(
  ui: ReactElement,
  { route = '/', helmetContext = {}, ...options }: CustomRenderOptions = {}
) {
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
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

  return {
    ...rtlRender(ui, { wrapper: Wrapper, ...options }),
  };
}

// Export testing utilities
export { render, screen, fireEvent, waitFor };
