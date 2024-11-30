import { describe, it, expect } from 'vitest';
import { render, waitFor } from '../../test/test-utils';
import SEO from './SEO';

describe('SEO Component', () => {
  it('renders with default props', async () => {
    render(<SEO />);
    
    await waitFor(() => {
      // Get meta tags
      const title = document.title;
      const description = document.querySelector('meta[name="description"]')?.getAttribute('content');
      const ogTitle = document.querySelector('meta[property="og:title"]')?.getAttribute('content');
      const ogDescription = document.querySelector('meta[property="og:description"]')?.getAttribute('content');
      
      // Assert default values
      expect(title).toBe('Priyanshu Chawda - Full Stack Developer');
      expect(description).toBe('Portfolio of Priyanshu Chawda, a Full Stack Developer specializing in React, TypeScript, and Node.js');
      expect(ogTitle).toBe('Priyanshu Chawda - Full Stack Developer');
      expect(ogDescription).toBe('Portfolio of Priyanshu Chawda, a Full Stack Developer specializing in React, TypeScript, and Node.js');
    });
  });

  it('renders with custom props', async () => {
    const customTitle = 'Custom Title';
    const customDescription = 'Custom Description';
    
    render(
      <SEO 
        title={customTitle}
        description={customDescription}
      />
    );

    await waitFor(() => {
      // Get meta tags
      const title = document.title;
      const description = document.querySelector('meta[name="description"]')?.getAttribute('content');
      const ogTitle = document.querySelector('meta[property="og:title"]')?.getAttribute('content');
      const ogDescription = document.querySelector('meta[property="og:description"]')?.getAttribute('content');
      
      // Assert custom values
      expect(title).toBe(customTitle);
      expect(description).toBe(customDescription);
      expect(ogTitle).toBe(customTitle);
      expect(ogDescription).toBe(customDescription);
    });
  });
});
