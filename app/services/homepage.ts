export interface HomepageData {
  // Define a minimal shape if known, or keep as any while integrating components later
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  // Some backends wrap data, others return raw arrays; adjust as needed
}

export function resolveBaseUrl(): string {
  const rawBaseUrl =
    process.env.NEXT_PUBLIC_API_URL ||
    process.env.API_LOCAL_URL ||
    process.env.API_BASE_URL;

  if (!rawBaseUrl) {
    throw new Error(
      "API base URL env var is not defined (set NEXT_PUBLIC_API_URL or API_LOCAL_URL or API_BASE_URL)"
    );
  }

  // Trim trailing slashes
  let baseUrl = rawBaseUrl.replace(/\/+$/, "");
  // Remove a trailing '/en' or '/ka' locale segment if present
  baseUrl = baseUrl.replace(/\/(en|ka)$/i, "");

  return baseUrl;
}

export async function getHomepageData(locale: string) {
  const baseUrl = resolveBaseUrl();
  const url = `${baseUrl}/${locale}/homepageData`;

  const res = await fetch(url, {
    // Adjust cache as appropriate for your data freshness
    // You can also use: cache: 'no-store'
    next: { revalidate: 60 },
    headers: {
      "Accept": "application/json",
      "Accept-Language": locale,
    },
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Failed to fetch homepage data (${res.status}): ${text}`);
  }
  
  // Some APIs return { data, success } while others return raw arrays/objects.
  // Return the parsed JSON directly; consuming components can adapt as needed.
  const json = await res.json();
  console.log('homepageData json', json)
  return json;
}

// Helper to construct a full image URL from banner images that provide a relative storage path
export function imageUrlFromBanner(imageName?: string | null): string | undefined {
  if (!imageName) return undefined;
  const base = resolveBaseUrl();
  // Common Laravel pattern: files accessible under /storage/<path>
  const normalized = String(imageName).replace(/^\/+/, "");
  return `${base}/storage/${normalized}`;
}

// Generic helper for any storage-backed image path (e.g., product images)
export function imageUrlFromStorage(imageName?: string | null): string | undefined {
  if (!imageName) return undefined;
  const base = resolveBaseUrl();
  const normalized = String(imageName).replace(/^\/+/, "");
  return `${base}/storage/${normalized}`;
}
