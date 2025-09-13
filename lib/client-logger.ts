'use client';

// Client-side logger that only logs in development
export const clientLogger = {
  log: (...args: unknown[]): void => {
    if (process.env.NODE_ENV === 'development') {
      console.log('[Client]', ...args);
    }
  },
  error: (...args: unknown[]): void => {
    console.error('[Client Error]', ...args);
  }
};
