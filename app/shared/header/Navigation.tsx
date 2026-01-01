"use client";

import Toggle from "@/app/ui/Toggle";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store/store";
import { openCategoiresModal } from "@/app/store/features/categoriesSlice";
import { Link, usePathname } from "@/i18n/navigation";
import Button from "@/app/ui/Button";
import { useUser } from "@/app/providers/UserProvider";

const Navigation = () => {
  const locale = useLocale();
  const [currentLang, setCurrentLang] = useState(locale);
  const pathName = usePathname();
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useUser();
  const t = useTranslations("Header");
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
            <span>☰</span> {t("allCategoriesButtonLabel")}
          </button>
        </>
      </div>

      <section className="flex items-center gap-6 font-medium">
        <Link href={"/"}>{t("routes.home")}</Link>
        <Link href={"/about"}>{t("routes.aboutUs")}</Link>
        <Link href={"/contact"}>{t("routes.contacts")}</Link>
      </section>

      <div className="flex items-center gap-6">
        {user?.role !== "seller" && (
          <Link href={"/shop/register"}>
            <Button
              rounded="lg"
              title={t("openShopButtonLabel")}
              type="button"
              bgcolor="lightPink"
              className="py-2 px-4 font-medium"
              titleColor="black"
            />
          </Link>
        )}
        <Link
          href={pathName}
          locale={`${currentLang === "en" ? "ka" : "en"}`}
          className="flex items-center gap-2"
        >
          <span className="font-medium">
            {currentLang === "en" ? "ENG" : "GEO"}
          </span>
          <Toggle onClick={onToggleLang} />
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
