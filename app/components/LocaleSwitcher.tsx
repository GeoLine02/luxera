"use client";

import { useRouter, usePathname } from "next/navigation";
import { useTransition } from "react";

interface LocaleSwitcherProps {
  currentLocale: string;
  locales: { [key: string]: string };
  className?: string;
}

export default function LocaleSwitcher({
  currentLocale,
  locales,
  className = ""
}: LocaleSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: string) => {
    if (newLocale === currentLocale) return;

    startTransition(() => {
      // For now, we'll handle client-side locale switching
      // You can integrate with your backend route later
      const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
      router.push(newPath);
    });
  };

  return (
    <div className={`flex gap-2 ${className}`}>
      {Object.entries(locales).map(([locale, label]) => (
        <button
          key={locale}
          onClick={() => switchLocale(locale)}
          disabled={isPending || locale === currentLocale}
          className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
            locale === currentLocale
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          } ${isPending ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
