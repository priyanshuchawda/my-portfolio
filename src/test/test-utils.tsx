import { ReactElement } from 'react';
import { render as rtlRender, RenderOptions, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../components/ThemeProvider';
import { AccessibilityProvider } from '../context/AccessibilityContext';
import { HelmetProvider } from 'react-helmet-async';

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  route?: string;
  helmetContext?: object;
}

const AllTheProviders = ({ children, route = '/' }: { children: React.ReactNode; route?: string }) => {
  return (
    <HelmetProvider>
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

function render(
  ui: ReactElement,
  { route = '/', helmetContext = {}, ...options }: CustomRenderOptions = {}
) { 
  return rtlRender(ui, {
    wrapper: (props) => <AllTheProviders {...props} route={route} />,
    ...options,
  });
}

// Export testing utilities
export { render, screen, fireEvent, waitFor };
