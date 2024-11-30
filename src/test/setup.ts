import '@testing-library/jest-dom';
import { vi, beforeAll, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// Mock React.useRef
const useRefMock = vi.fn((initialValue) => ({
  current: initialValue,
}));

vi.mock('react', async () => {
  const actual = await vi.importActual<typeof import('react')>('react');
  return {
    ...actual,
    useRef: useRefMock,
  }; 
});

// Mock React Router hooks
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  return {
    ...actual,
    useNavigate: () => vi.fn(),
    useLocation: () => ({
      pathname: '/',
      search: '',
      hash: '',
      state: null,
    }),
  };
});

// Setup test environment
beforeAll(() => {
  // Create root div for React
  const root = document.createElement('div');
  root.id = 'root';
  document.body.appendChild(root);

  // Mock window.matchMedia
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });

  // Mock window.scrollTo
  window.scrollTo = vi.fn() as unknown as typeof window.scrollTo;

  // Mock ResizeObserver
  window.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }));

  // Mock IntersectionObserver
  window.IntersectionObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }));

  // Mock localStorage
  const localStorageMock = {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
  };
  Object.defineProperty(window, 'localStorage', { value: localStorageMock });

  // Mock document methods
  document.documentElement.requestFullscreen = vi.fn();
  document.exitFullscreen = vi.fn();
});

// Clean up after each test
afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});
