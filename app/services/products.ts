import { resolveBaseUrl } from "@/app/services/homepage";

export type BackendProduct = {
  id: number | string;
  price: number | string;
  title?: string;
  slug?: string;
  images?: { image_name?: string }[];
  translations?: { locale: string; title?: string; slug?: string }[];
};

export type UiProduct = {
  id: number;
  image: string;
  price: number | string;
  title: string;
};

export async function getAllProducts(locale: string) {
  const base = resolveBaseUrl();
  const url = `${base}/${locale}/products`;
  const res = await fetch(url, {
    next: { revalidate: 60 },
    headers: {
      Accept: "application/json",
      "Accept-Language": locale,
    },
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Failed to fetch products (${res.status}): ${text}`);
  }
  const json = await res.json();
  return json;
}

export async function getProductBySlug(locale: string, slug: string) {
  const base = resolveBaseUrl();
  const safeSlug = encodeURIComponent(slug);
  const url = `${base}/${locale}/products/${safeSlug}`;
  const res = await fetch(url, {
    next: { revalidate: 60 },
    headers: {
      Accept: "application/json",
      "Accept-Language": locale,
    },
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Failed to fetch product ${slug} (${res.status}): ${text}`);
  }
  const json = await res.json();
  return json;
}
