import { useState } from 'react';
import { useAccessibility } from '../../context/AccessibilityContext';

type ColorBlindnessMode = 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
type FontSize = 'small' | 'medium' | 'large';

export const AccessibilityMenu = () => {
  const {
    colorBlindnessMode,
    setColorBlindnessMode,
    highContrast,
    setHighContrast,
    fontSize,
    setFontSize,
    screenReaderMode,
    setScreenReaderMode,
    keyboardMode,
    setKeyboardMode
  } = useAccessibility();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
        aria-label="Open accessibility menu"
      >
        <svg
          className="w-6 h-6 text-gray-700 dark:text-gray-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Color Blindness Mode
                <select
                  value={colorBlindnessMode}
                  onChange={(e) => setColorBlindnessMode(e.target.value as ColorBlindnessMode)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  aria-label="Color Blindness Mode"
                >
                  <option value="none">None</option>
                  <option value="protanopia">Protanopia</option>
                  <option value="deuteranopia">Deuteranopia</option>
                  <option value="tritanopia">Tritanopia</option>
                </select>
              </label>
            </div>

            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={highContrast}
                  onChange={(e) => setHighContrast(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  aria-label="High Contrast Mode"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">High Contrast</span>
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Font Size
                <select
                  value={fontSize}
                  onChange={(e) => setFontSize(e.target.value as FontSize)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  aria-label="Font Size"
                >
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </label>
            </div>

            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={screenReaderMode}
                  onChange={(e) => setScreenReaderMode(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  aria-label="Screen Reader Mode"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Screen Reader</span>
              </label>
            </div>

            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={keyboardMode}
                  onChange={(e) => setKeyboardMode(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  aria-label="Keyboard Navigation Mode"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Keyboard Navigation</span>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
