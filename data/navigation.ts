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

export async function fetchNavigationData(locale: string): Promise<NavItem[]> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_API_URL is not defined");
  }

  const res = await fetch(`${baseUrl}/${locale}/navigation`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Accept-Language': locale,
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Failed to fetch navigation: ${res.status} ${res.statusText} ${text}`);
  }

  const json: any = await res.json();
  const items: any[] = Array.isArray(json) ? json : Array.isArray(json?.data) ? json.data : [];
  if (!Array.isArray(items)) {
    throw new Error(json?.message || 'Failed to fetch navigation');
  }

  // Normalize to NavItem[] and filter invalid entries
  return items
    .map((item: any) => ({
      title: String(item?.title ?? ''),
      slug: String(item?.slug ?? ''),
    }))
    .filter((i: NavItem) => i.title.length > 0 && i.slug.length > 0);
}
