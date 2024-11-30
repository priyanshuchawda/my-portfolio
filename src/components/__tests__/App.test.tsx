import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../../App';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

describe('App Component', () => {
  it('renders hero section with name', () => {
    render(
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider> 
    );
    
    expect(screen.getByText('Priyanshu Chawda')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    );
    
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
});
