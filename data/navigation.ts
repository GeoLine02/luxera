// Data-access helper to fetch navigation items from backend

export interface NavItem {
  title: string;
  slug: string;
}

interface NavigationResponse {
  data?: NavItem[];
  success?: boolean;
  message?: string;
}

// Helper to create a proxy URL for development
function getProxiedUrl(url: string): string {
  if (process.env.NODE_ENV === 'development') {
    // Use Next.js API route as a proxy in development
    return `/api/proxy?url=${encodeURIComponent(url)}`;
  }
  return url;
}

export async function fetchNavigationData(locale: string): Promise<NavItem[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!baseUrl) {
      console.error('NEXT_PUBLIC_API_URL is not defined');
      return [];
    }

    // Construct the target URL
    const targetUrl = new URL(`/${locale}/navigation`, baseUrl).toString();
    const url = getProxiedUrl(targetUrl);
    
    console.log('Fetching navigation from:', url);

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Accept-Language': locale,
      },
      credentials: 'include',
      cache: 'no-store',
      mode: 'cors',
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => 'No error details');
      console.error('Navigation fetch failed:', {
        status: response.status,
        statusText: response.statusText,
        url,
        errorText,
      });
      return [];
    }

    const data = await response.json();
    const items = Array.isArray(data) ? data : Array.isArray(data?.data) ? data.data : [];
    
    if (!Array.isArray(items)) {
      console.error('Invalid navigation data format received:', data);
      return [];
    }

    // Normalize to NavItem[] and filter invalid entries
    return items
      .filter((item: any) => item?.title && item?.slug)
      .map((item: any) => ({
        title: String(item.title).trim(),
        slug: String(item.slug).trim(),
      }));
      
  } catch (error) {
    console.error('Error in fetchNavigationData:', error);
    return [];
  }
}
