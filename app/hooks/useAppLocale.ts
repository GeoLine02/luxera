"use client";

import { useParams } from 'next/navigation';

// For client components
export const useAppLocale = () => {
  const params = useParams();
  return (params?.locale as string) || 'en';
};

// For server components - this would need to be called within a server component
// or you can use next-intl's getLocale() directly
export const getServerLocale = async () => {
  // Import next-intl server-side
  const { getLocale } = await import('next-intl/server');
  return getLocale();
};
