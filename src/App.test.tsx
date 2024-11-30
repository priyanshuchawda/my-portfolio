import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from './test/test-utils';
import App from './App';

// Mock service worker registration
vi.mock('./serviceWorkerRegistration', () => ({
  register: vi.fn(),
}));

// Mock background component
vi.mock('./components/Background', () => ({
  default: () => <div data-testid="mock-background">Mock Background</div>,
}));

// Mock intersection observer
const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
window.IntersectionObserver = mockIntersectionObserver;

describe('App', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('renders without crashing', () => {
    render(<App />);
    expect(document.body).toBeInTheDocument();
  });

  it('renders all main sections', () => {
    render(<App />);
    expect(screen.getByRole('banner')).toBeInTheDocument(); // Header
    expect(screen.getByRole('main')).toBeInTheDocument(); // Main content
    expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // Footer
  });

  it('includes accessibility features', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: /accessibility/i })).toBeInTheDocument();
  });
});
