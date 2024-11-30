import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { AccessibilityMenu } from './AccessibilityMenu';
import { AccessibilityProvider } from '../../context/AccessibilityContext';
import { ThemeProvider } from '../../context/ThemeContext';

describe('AccessibilityMenu', () => {
  const renderAccessibilityMenu = () => {
    return render(
      <ThemeProvider>
        <AccessibilityProvider>
          <AccessibilityMenu />
        </AccessibilityProvider>
      </ThemeProvider>
    );
  };

  it('renders accessibility menu button', () => {
    renderAccessibilityMenu();
    expect(screen.getByLabelText('Open accessibility menu')).toBeInTheDocument();
  });

  it('toggles color blindness mode', () => {
    renderAccessibilityMenu();
    fireEvent.change(screen.getByLabelText('Color Blindness Mode'), { target: { value: 'protanopia' } });
    expect(screen.getByLabelText('Color Blindness Mode')).toHaveValue('protanopia');
  });

  it('toggles high contrast mode', () => {
    renderAccessibilityMenu();
    fireEvent.click(screen.getByLabelText('High Contrast Mode'));
    expect(screen.getByLabelText('High Contrast Mode')).toBeChecked();
  });

  it('changes font size', () => {
    renderAccessibilityMenu();
    fireEvent.change(screen.getByLabelText('Font Size'), { target: { value: 'large' } });
    expect(screen.getByLabelText('Font Size')).toHaveValue('large');
  });

  it('toggles screen reader mode', () => {
    renderAccessibilityMenu();
    fireEvent.click(screen.getByLabelText('Screen Reader Mode'));
    expect(screen.getByLabelText('Screen Reader Mode')).toBeChecked();
  });

  it('toggles keyboard navigation mode', () => {
    renderAccessibilityMenu();
    fireEvent.click(screen.getByLabelText('Keyboard Navigation Mode'));
    expect(screen.getByLabelText('Keyboard Navigation Mode')).toBeChecked();
  });
});
