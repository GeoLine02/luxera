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

// Helper to create a proxy URL for development
function getProxiedUrl(url: string): string {
  // In development, use the proxy
  if (process.env.NODE_ENV === "development") {
    // On the client side, use the relative path
    if (typeof window !== "undefined") {
      return `/api/proxy?url=${encodeURIComponent(url)}`;
    }
    // On the server side in development, we need to use the full URL
    // because the API route won't be available in server components
    return url;
  }
  // In production, always use the direct URL
  return url;
}

export async function fetchCategoriesData(
  locale: string
): Promise<ApiCategory[]> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!baseUrl) {
    console.error("NEXT_PUBLIC_API_URL is not defined");
    return [];
  }

  try {
    // Construct the target URL
    const targetUrl = new URL(`/${locale}/categories`, baseUrl).toString();
    const url = getProxiedUrl(targetUrl);

    // In development, when on the server side, we need to use the direct URL
    // because the API route won't be available in server components
    const fetchUrl =
      typeof window === "undefined" && process.env.NODE_ENV === "development"
        ? targetUrl // Use direct URL on server in development
        : url; // Use proxy URL on client or in production

    const res = await fetch(fetchUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Accept-Language": locale,
      },
      credentials: "include",
      cache: "no-store",
      mode: "cors",
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("Categories fetch failed:", {
        status: res.status,
        statusText: res.statusText,
        url: fetchUrl,
        errorText: text,
      });
      return [];
    }

    const json = await res.json();

    // Support both direct array and wrapped { data: [...] }
    const items = Array.isArray(json)
      ? json
      : Array.isArray(json?.data)
      ? json.data
      : [];
    if (!Array.isArray(items)) {
      console.error("Invalid categories data format received:", json);
      return [];
    }

    const categories: ApiCategory[] = items
      .filter((item: any) => item) // Filter out null/undefined
      .map((item: any) => {
        const translated = Array.isArray(item?.translations)
          ? item.translations.find((t: any) => t?.locale === locale) || null
          : null;

        const label: string = (translated?.title || item?.title || "")
          .toString()
          .trim();

        // Handle image URL
        let image = "";
        if (item?.icon) {
          // If it's already a full URL, use it as is
          if (item.icon.startsWith("http")) {
            image = item.icon;
          }
          // If it starts with /storage, ensure proper URL construction
          else if (item.icon.startsWith("/storage/")) {
            const base = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
            image = `${base}${item.icon}`;
          }
          // Handle other absolute paths
          else if (item.icon.startsWith("/")) {
            const base = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
            // Try with /storage prefix first, then without
            const possiblePaths = [
              `${base}/storage${item.icon}`,
              `${base}${item.icon}`,
            ];
            image = possiblePaths[0];
          }
          // Handle relative paths
          else {
            const base = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
            // Try with /storage prefix first, then without
            const possiblePaths = [
              `${base}/storage/${item.icon}`,
              `${base}/public/${item.icon}`,
              `${base}/uploads/${item.icon}`,
              `${base}/${item.icon}`,
            ];
            image = possiblePaths[0];
          }
        }

        return {
          label,
          image,
          subCategories: Array.isArray(item.subCategories)
            ? item.subCategories.map((sub: any) => ({
                label: (sub.title || "").toString().trim(),
                image: sub.image || "",
              }))
            : [],
        };
      })
      .filter((item: ApiCategory) => item.label); // Filter out items without a label

    return categories;
  } catch (error) {
    console.error("Error in fetchCategoriesData:", error);
    return [];
  }
}
