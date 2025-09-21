 // Data-access helper to fetch categories from backend

interface ApiSubCategory {
  label: string;
  image: string;
}

export interface ApiCategory {
  label: string;
  image: string;
  subCategories?: ApiSubCategory[];
}

interface CategoriesResponse {
  data: ApiCategory[];
  success: boolean;
  message?: string;
}

export async function fetchCategoriesData(locale: string): Promise<ApiCategory[]> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_API_URL is not defined");
  }

  const res = await fetch(`${baseUrl}/${locale}/categories`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Accept-Language': locale,
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Failed to fetch categories: ${res.status} ${res.statusText} ${text}`);
  }

  const json: any = await res.json();

  // Support both direct array and wrapped { data: [...] }
  const items: any[] = Array.isArray(json) ? json : Array.isArray(json?.data) ? json.data : [];
  if (!Array.isArray(items)) {
    throw new Error(json?.message || 'Failed to fetch categories');
  }

  const categories: ApiCategory[] = items.map((item: any) => {
    const translated = Array.isArray(item?.translations)
      ? item.translations.find((t: any) => t?.locale === locale) || null
      : null;
    const label: string = (translated?.title as string) || (item?.title as string) || '';

    // Compose full image URL if backend returns relative path
    let image = '';
    if (typeof item?.icon === 'string' && item.icon.length > 0) {
      console.log('Processing image:', item.icon, 'Base URL:', baseUrl, 'Full URL:', `${baseUrl}/${locale}/categories`);

      // Handle different path structures
      if (item.icon.startsWith('http')) {
        image = item.icon;
      } else if (item.icon.startsWith('/')) {
        // If it starts with /, use baseUrl without adding another /
        image = `${baseUrl}${item.icon}`;
      } else {
        // If it's a relative path like 'categories/filename.png'
        // Try different common storage paths
        const possiblePaths = [
          `${baseUrl}/${item.icon}`,           // Direct path
          `${baseUrl}/storage/${item.icon}`,   // Laravel storage
          `${baseUrl}/public/${item.icon}`,    // Public folder
          `${baseUrl}/uploads/${item.icon}`,   // Uploads folder
        ];

        // For debugging - you can check which path works
        image = possiblePaths[1]; // Try storage path first
      }
    }

    return { label, image } as ApiCategory;
  });

  return categories;
}
