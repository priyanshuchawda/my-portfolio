import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { AccessibilityProvider, useAccessibility } from '../context/AccessibilityContext';

const TestComponent = () => {
  const {
    colorBlindnessMode,
    setColorBlindnessMode,
    highContrast,
    setHighContrast,
    fontSize,
    setFontSize,
  } = useAccessibility();

  return (
    <div>
      <div data-testid="color-mode">{colorBlindnessMode}</div>
      <div data-testid="contrast">{highContrast.toString()}</div>
      <div data-testid="font-size">{fontSize}</div>
      <button onClick={() => setColorBlindnessMode('protanopia')}>Set Protanopia</button>
      <button onClick={() => setHighContrast(true)}>Enable High Contrast</button>
      <button onClick={() => setFontSize('large')}>Set Large Font</button>
    </div>
  );
};

describe('AccessibilityContext', () => {
  beforeEach(() => {
    // Mock localStorage
    const localStorageMock = {
      getItem: vi.fn(),
      setItem: vi.fn(),
      clear: vi.fn(),
    };
    global.localStorage = localStorageMock as any;

    // Mock matchMedia
    global.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
  });

  it('provides default values', () => {
    render(
      <AccessibilityProvider>
        <TestComponent />
      </AccessibilityProvider>
    );

    expect(screen.getByTestId('color-mode')).toHaveTextContent('none');
    expect(screen.getByTestId('contrast')).toHaveTextContent('false');
    expect(screen.getByTestId('font-size')).toHaveTextContent('medium');
  });

  it('updates values correctly', () => {
    render(
      <AccessibilityProvider>
        <TestComponent />
      </AccessibilityProvider>
    );

    fireEvent.click(screen.getByText('Set Protanopia'));
    expect(screen.getByTestId('color-mode')).toHaveTextContent('protanopia');

    fireEvent.click(screen.getByText('Enable High Contrast'));
    expect(screen.getByTestId('contrast')).toHaveTextContent('true');

    fireEvent.click(screen.getByText('Set Large Font'));
    expect(screen.getByTestId('font-size')).toHaveTextContent('large');
  });
});
