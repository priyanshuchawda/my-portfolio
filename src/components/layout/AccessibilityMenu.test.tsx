import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '../../test/test-utils';
import AccessibilityMenu from './AccessibilityMenu';

describe('AccessibilityMenu', () => {
  it('renders accessibility toggle button', () => {
    render(<AccessibilityMenu />);
    const button = screen.getByLabelText('Toggle accessibility menu');
    expect(button).toBeInTheDocument();
  });

  it('shows menu when toggle button is clicked', () => {
    render(<AccessibilityMenu />);
    
    const toggleButton = screen.getByLabelText(/Toggle accessibility menu/i);
    expect(toggleButton).toBeInTheDocument();
    
    fireEvent.click(toggleButton);
    
    expect(screen.getByText(/Accessibility Options/i)).toBeInTheDocument();
    expect(screen.getByText(/High Contrast/i)).toBeInTheDocument();
    expect(screen.getByText(/Font Size/i)).toBeInTheDocument();
  });

  it('toggles high contrast mode', () => {
    render(<AccessibilityMenu />);
    
    const toggleButton = screen.getByLabelText(/Toggle accessibility menu/i);
    fireEvent.click(toggleButton);
    
    const highContrastToggle = screen.getByLabelText(/Toggle high contrast/i);
    fireEvent.click(highContrastToggle);
    
    expect(document.documentElement.classList.contains('high-contrast')).toBe(true);
    
    fireEvent.click(highContrastToggle);
    expect(document.documentElement.classList.contains('high-contrast')).toBe(false);
  });

  it('changes font size', () => {
    render(<AccessibilityMenu />);
    
    const toggleButton = screen.getByLabelText(/Toggle accessibility menu/i);
    fireEvent.click(toggleButton);
    
    const increaseFontButton = screen.getByLabelText(/Increase font size/i);
    const decreaseFontButton = screen.getByLabelText(/Decrease font size/i);
    
    const initialFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    
    fireEvent.click(increaseFontButton);
    expect(parseFloat(getComputedStyle(document.documentElement).fontSize)).toBeGreaterThan(initialFontSize);
    
    fireEvent.click(decreaseFontButton);
    expect(parseFloat(getComputedStyle(document.documentElement).fontSize)).toBe(initialFontSize);
  });
});
