"use client";

import { useUser } from "@/app/providers/UserProvider";
import { Dropdown } from "@/app/ui/DropDown";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

const UserPreview = () => {
  const { user } = useUser();
  const locale = useLocale();
  const t = useTranslations("Header");

  return (
    <div className="hidden md:block">
      <Dropdown>
        <Dropdown.Trigger>
          <div className="flex items-center gap-2">
            <div className="rounded-full p-2 bg-medium-gray cursor-pointer">
              <FaUser size={20} color="white" />
            </div>
            <span className="text-lg font-medium">{user?.full_name}</span>
          </div>
        </Dropdown.Trigger>
        <Dropdown.Menu expandMode="absolute" className="!top-11">
          {user?.role === "seller" && (
            <Dropdown.Item>
              <Link href={`/${locale}/shop`}>{t("userPreview.myShop")}</Link>
            </Dropdown.Item>
          )}
          <Dropdown.Item>
            <Link href={"/settings"}>{t("userPreview.settings")}</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link href={"/login"}>{t("userPreview.logOut")}</Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default UserPreview;
