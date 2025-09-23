"use client";

import { useEffect, useState } from "react";
import { fetchNavigationData, type NavItem } from "@/data/navigation";

export function useNavigation(locale: string) {
  const [items, setItems] = useState<NavItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!locale) return;
    let mounted = true;
    setLoading(true);
    setError(null);

    fetchNavigationData(locale)
      .then((data) => {
        if (!mounted) return;
        setItems(data);
      })
      .catch((e: unknown) => {
        if (!mounted) return;
        setError((e as { message?: string })?.message || "Failed to fetch navigation");
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [locale]);

  return { items, loading, error };
}
