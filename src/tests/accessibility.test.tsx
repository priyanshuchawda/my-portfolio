import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { AccessibilityProvider, useAccessibility } from '../context/AccessibilityContext';
import React from 'react';

const TestComponent = () => {
  const {
    reduceMotion,
    highContrast,
    fontSize,
    colorBlindMode,
    screenReaderMode,
    keyboardNavigation,
    toggleReduceMotion,
    toggleHighContrast,
    increaseFontSize,
    decreaseFontSize,
    setColorBlindMode,
    toggleScreenReaderMode,
    toggleKeyboardNavigation,
  } = useAccessibility();

  return (
    <div>
      <button onClick={toggleReduceMotion} data-testid="toggle-motion">
        {reduceMotion ? 'Motion Reduced' : 'Motion Enabled'}
      </button>
      <button onClick={toggleHighContrast} data-testid="toggle-contrast">
        {highContrast ? 'High Contrast' : 'Normal Contrast'}
      </button>
      <button onClick={increaseFontSize} data-testid="increase-font">
        Increase ({fontSize}px)
      </button>
      <button onClick={decreaseFontSize} data-testid="decrease-font">
        Decrease ({fontSize}px)
      </button>
      <select
        value={colorBlindMode}
        onChange={(e) => setColorBlindMode(e.target.value as any)}
        data-testid="color-blind-mode"
      >
        <option value="normal">Normal</option>
        <option value="deuteranopia">Deuteranopia</option>
        <option value="protanopia">Protanopia</option>
        <option value="tritanopia">Tritanopia</option>
      </select>
      <button onClick={toggleScreenReaderMode} data-testid="toggle-screen-reader">
        {screenReaderMode ? 'Screen Reader On' : 'Screen Reader Off'}
      </button>
      <button onClick={toggleKeyboardNavigation} data-testid="toggle-keyboard">
        {keyboardNavigation ? 'Keyboard Nav On' : 'Keyboard Nav Off'}
      </button>
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

  it('provides default accessibility settings', () => {
    render(
      <AccessibilityProvider>
        <TestComponent />
      </AccessibilityProvider>
    );

    expect(screen.getByTestId('toggle-motion')).toHaveTextContent('Motion Enabled');
    expect(screen.getByTestId('toggle-contrast')).toHaveTextContent('Normal Contrast');
    expect(screen.getByTestId('color-blind-mode')).toHaveValue('normal');
    expect(screen.getByTestId('toggle-screen-reader')).toHaveTextContent('Screen Reader Off');
    expect(screen.getByTestId('toggle-keyboard')).toHaveTextContent('Keyboard Nav Off');
  });

  it('toggles reduce motion', () => {
    render(
      <AccessibilityProvider>
        <TestComponent />
      </AccessibilityProvider>
    );

    const button = screen.getByTestId('toggle-motion');
    fireEvent.click(button);
    expect(button).toHaveTextContent('Motion Reduced');
  });

  it('toggles high contrast', () => {
    render(
      <AccessibilityProvider>
        <TestComponent />
      </AccessibilityProvider>
    );

    const button = screen.getByTestId('toggle-contrast');
    fireEvent.click(button);
    expect(button).toHaveTextContent('High Contrast');
  });

  it('changes font size within bounds', () => {
    render(
      <AccessibilityProvider>
        <TestComponent />
      </AccessibilityProvider>
    );

    const increaseButton = screen.getByTestId('increase-font');
    const decreaseButton = screen.getByTestId('decrease-font');

    // Test increase
    fireEvent.click(increaseButton);
    expect(increaseButton).toHaveTextContent('Increase (18px)');

    // Test decrease
    fireEvent.click(decreaseButton);
    expect(decreaseButton).toHaveTextContent('Decrease (16px)');

    // Test upper bound
    for (let i = 0; i < 10; i++) {
      fireEvent.click(increaseButton);
    }
    expect(increaseButton).toHaveTextContent('Increase (24px)');

    // Test lower bound
    for (let i = 0; i < 10; i++) {
      fireEvent.click(decreaseButton);
    }
    expect(decreaseButton).toHaveTextContent('Decrease (12px)');
  });

  it('changes color blind mode', () => {
    render(
      <AccessibilityProvider>
        <TestComponent />
      </AccessibilityProvider>
    );

    const select = screen.getByTestId('color-blind-mode');
    fireEvent.change(select, { target: { value: 'deuteranopia' } });
    expect(select).toHaveValue('deuteranopia');
  });

  it('toggles screen reader mode', () => {
    render(
      <AccessibilityProvider>
        <TestComponent />
      </AccessibilityProvider>
    );

    const button = screen.getByTestId('toggle-screen-reader');
    fireEvent.click(button);
    expect(button).toHaveTextContent('Screen Reader On');
  });

  it('toggles keyboard navigation', () => {
    render(
      <AccessibilityProvider>
        <TestComponent />
      </AccessibilityProvider>
    );

    const button = screen.getByTestId('toggle-keyboard');
    fireEvent.click(button);
    expect(button).toHaveTextContent('Keyboard Nav On');
  });
});
