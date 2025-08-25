"use client";

import Toggle from "@/app/ui/Toggle";
import { useLocale } from "next-intl";
import { useState } from "react";
import classNames from "classnames";
import CategoriesModal from "@/app/[locale]/(home)/components/categories/CategoriesModal";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store/store";
import { openCategoiresModal } from "@/app/store/features/categoriesSlice";
import { Link, usePathname } from "@/i18n/navigation";

const Navigation = () => {
  const locale = useLocale();
  const [currentLang, setCurrentLang] = useState(locale);
  const pathName = usePathname();
  const dispatch = useDispatch<AppDispatch>();
  const { isCategoriesModalOpen } = useSelector(
    (state: RootState) => state.categoriesReducer
  );

  const handleToggleCategories = () => {
    dispatch(openCategoiresModal());
  };

  const categoiresToggleStyles = classNames("transition-all duration-200", {
    "scale-100": isCategoriesModalOpen,
    "scale-0": !isCategoriesModalOpen,
  });

  const onToggleLang = () => {
    setCurrentLang(`${currentLang === "ka" ? "en" : "ka"}`);
  };
  return (
    <nav className="w-full items-center justify-between px-4 py-3 border-b border-gray-200 hidden md:flex">
      {/* LEFT SECTION */}
      <div>
        <>
          <button
            onClick={handleToggleCategories}
            className="whitespace-nowrap px-4 py-2 bg-light-pink text-black font-medium rounded flex items-center gap-2 cursor-pointer"
          >
            <span>☰</span> All Categories
          </button>

          <div
            className={`${categoiresToggleStyles} absolute z-50 top-full left-0 w-[900px]`}
          >
            <CategoriesModal />
          </div>
        </>
      </div>

      {/* CENTER SECTION */}
      <ul className="flex items-center gap-10 text-lg font-medium">
        <Link href={`/`}>Home</Link>
        <Link href={`/about`}>About</Link>
        <Link href={`/shop`}>Shop</Link>
        <Link href={`/contact`}>Contact</Link>
      </ul>

      {/* RIGHT SECTION */}

      <Link
        href={pathName}
        locale={`${currentLang === "en" ? "ka" : "en"}`}
        className="flex items-center gap-2"
      >
        <Toggle onClick={onToggleLang} />
        <span>{currentLang === "en" ? "GEO" : "ENG"}</span>
      </Link>
    </nav>
  );
};

export default Navigation;
