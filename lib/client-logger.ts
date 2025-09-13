'use client';

// Client-side logger that only logs in development
export const clientLogger = {
  log: (...args: any[]) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('[Client]', ...args);
    }
  },
  error: (...args: any[]) => {
    console.error('[Client Error]', ...args);
  }
};
