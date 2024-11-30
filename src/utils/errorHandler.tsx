import React from 'react';

interface ErrorWithMessage {
  message: string;
}

function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  );
}

function toErrorWithMessage(maybeError: unknown): ErrorWithMessage {
  if (isErrorWithMessage(maybeError)) return maybeError;
 
  try {
    return new Error(JSON.stringify(maybeError));
  } catch {
    // fallback in case there's an error stringifying the maybeError
    // like with circular references for example.
    return new Error(String(maybeError));
  }
}

export function getErrorMessage(error: unknown) {
  return toErrorWithMessage(error).message;
}

export function logError(error: unknown) {
  // In development, log to console
  if (process.env.NODE_ENV === 'development') {
    console.error('An error occurred:', error);
  }

  // In production, you might want to send to an error tracking service
  if (process.env.NODE_ENV === 'production') {
    // Example: Send to your error tracking service
    // Sentry.captureException(error);
    
    // Or implement your own error logging
    const errorMessage = getErrorMessage(error);
    const errorLog = {
      message: errorMessage,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
    };
    
    // You could send this to your backend or logging service
    console.error('Error Log:', errorLog);
  }
}

// Custom error types
export class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NetworkError';
  }
}

export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

// Error boundary fallback props type
export interface FallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

// Default fallback component for error boundaries
export function DefaultErrorFallback({ error, resetErrorBoundary }: FallbackProps): React.ReactElement {
  return (
    <div role="alert" className="p-4 bg-red-50 border-l-4 border-red-500">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg
            className="h-5 w-5 text-red-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">Error</h3>
          <div className="mt-2 text-sm text-red-700">
            <p>{error.message}</p>
          </div>
          <div className="mt-4">
            <button
              type="button"
              onClick={resetErrorBoundary}
              className="inline-flex items-center px-2 py-1 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Try again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
