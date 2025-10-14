"use client";

import Toggle from "@/app/ui/Toggle";
import { useLocale } from "next-intl";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store/store";
import { openCategoiresModal } from "@/app/store/features/categoriesSlice";
import { Link, usePathname } from "@/i18n/navigation";
import Button from "@/app/ui/Button";
import { useCategories } from "@/app/hooks/useCategories";
import { useNavigation } from "@/app/hooks/useNavigation";

const Navigation = () => {
  const locale = useLocale();
  const [currentLang, setCurrentLang] = useState(locale);
  const pathName = usePathname();
  const dispatch = useDispatch<AppDispatch>();

  // Fetch categories for header display
  const { categories } = useCategories(currentLang);
  // Fetch navigation pages from backend
  const { items: navItems } = useNavigation(currentLang);

  const handleToggleCategories = () => {
    dispatch(openCategoiresModal());
  };

  const onToggleLang = () => {
    setCurrentLang(`${currentLang === "ka" ? "en" : "ka"}`);
  };
  return (
    <nav className="w-full items-center justify-between px-12 py-3 border-b border-gray-200 hidden md:flex">
      <div className="flex items-center gap-6 min-w-0">
        <>
          <button
            onClick={handleToggleCategories}
            className="whitespace-nowrap px-4 py-2 bg-light-pink text-black font-medium rounded flex items-center gap-2 cursor-pointer"
          >
            <span>☰</span> All Categories
          </button>
        </>
        {categories && categories.length > 0 && (
          <ul className="flex items-center gap-4 overflow-x-auto no-scrollbar text-sm text-gray-700">
            {categories.map((c) => (
              <li key={c.label} className="whitespace-nowrap hover:text-black">
                {c.label}
              </li>
            ))}
          </ul>
        )}
      </div>

      <ul className="flex items-center gap-10 text-lg font-medium">
        {navItems && navItems.length > 0 && (
          navItems.map((n) => (
            <Link key={n.slug} href={`/${n.slug}`}>
              {n.title}
            </Link>
          ))
        )}
      </ul>

      <div className="flex items-center gap-6">
        <Link href={"/shop/register"}>
          <Button
            rounded="lg"
            title="Open Shop"
            type="button"
            bgColor="lightPink"
            className="py-2 px-4 font-medium"
            titleColor="black"
          />
        </Link>
        <Link
          href={pathName}
          locale={`${currentLang === "en" ? "ka" : "en"}`}
          className="flex items-center gap-2"
        >
          <span className="font-medium">
            {currentLang === "en" ? "GEO" : "ENG"}
          </span>
          <Toggle onClick={onToggleLang} />
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
