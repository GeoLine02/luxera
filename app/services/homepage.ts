import { HomepageData } from "@/app/types/homepage";

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
