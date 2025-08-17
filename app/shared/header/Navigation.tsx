"use client";

import Toggle from "@/app/ui/Toggle";
import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AllCategoriesModal from "./AllCategoiresModal";
import { useState } from "react";
import classNames from "classnames";

const Navigation = () => {
  const pathName = usePathname();
  const locale = useLocale();
  const [isCategoriesOpened, setIsCategoriesOpened] = useState(false);

  const isHome = pathName === `/${locale}`;
  const isProducts = pathName.startsWith(`/${locale}/products`);

  const handleToggleCategories = () => {
    setIsCategoriesOpened(!isCategoriesOpened);
  };

  const categoiresToggleStyles = classNames("transition-all duration-200", {
    "scale-100": isCategoriesOpened,
    "scale-0": !isCategoriesOpened,
  });

  return (
    <nav className="w-full items-center justify-between px-8 py-3 border-b border-gray-200 hidden md:flex">
      {/* LEFT SECTION */}
      <div>
        {!isHome && !isProducts && (
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
              <AllCategoriesModal />
            </div>
          </>
        )}
      </div>

      {/* CENTER SECTION */}
      <ul className="flex items-center gap-10 text-lg font-medium">
        <Link href={`/${locale}`}>Home</Link>
        <Link href={`/${locale}/about`}>About</Link>
        <Link href={`/${locale}/shop`}>Shop</Link>
        <Link href={`/${locale}/contact`}>Contact</Link>
      </ul>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-2">
        <span>ENG</span>
        <Toggle />
        <span>GE</span>
      </div>
    </nav>
  );
};

export default Navigation;
