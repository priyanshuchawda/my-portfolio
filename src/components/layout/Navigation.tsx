import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeToggle } from './DarkModeToggle';
import { AccessibilityMenu } from './AccessibilityMenu';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link
              to="/"
              className="flex items-center px-2 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
            >
              Portfolio
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {['About', 'Projects', 'Contact'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
              >
                {item}
              </Link>
            ))}

            <DarkModeToggle />
            <AccessibilityMenu />
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['About', 'Projects', 'Contact'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="px-3 py-2">
              <DarkModeToggle />
            </div>
            <div className="px-3 py-2">
              <AccessibilityMenu />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
