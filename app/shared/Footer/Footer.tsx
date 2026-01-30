"use client";

import { useRouter, usePathname } from "next/navigation";
import {
  CiDeliveryTruck,
  CiClock1,
  CiGift,
  CiDiscount1,
  CiGlobe,
  CiFacebook,
  CiInstagram,
} from "react-icons/ci";
import { PiHandHeartLight } from "react-icons/pi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Footer = () => {
  const router = useRouter();
  const pathName = usePathname();
  const t = useTranslations("Footer");

  // Hide footer on certain routes
  if (
    pathName.includes("/signin") ||
    pathName.includes("/signup") ||
    pathName.includes("/luxera-ai") ||
    pathName.includes("/cart") ||
    pathName.includes("/shop") ||
    pathName.includes("/editor/card")
  ) {
    return null;
  }

  return (
    <footer className="mt-11 mb-[80px] xs:mb-0">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-12 px-11 pt-[52px] pb-[33px] bg-light-pink mt-4">
        {/* Earn */}
        <div className="space-y-4">
          <h1 className="text-lg font-medium">{t("earn.title")}</h1>
          <ul className="space-y-2 font-normal">
            <li className="cursor-pointer">{t("earn.becomeAffiliate")}</li>
            <li className="cursor-pointer">{t("earn.openShop")}</li>
          </ul>
        </div>

        {/* Company */}
        <div className="space-y-4">
          <h1 className="text-lg font-medium">{t("company.title")}</h1>
          <ul className="space-y-2 font-normal">
            <li className="cursor-pointer">{t("company.aboutUs")}</li>
            <li className="cursor-pointer">{t("company.promotions")}</li>
            <li className="cursor-pointer">{t("company.contact")}</li>
          </ul>
        </div>

        {/* Important Links */}
        <div className="space-y-4">
          <h1 className="text-lg font-medium">{t("importantLinks.title")}</h1>
          <ul className="font-normal flex flex-col gap-2">
            <Link href="/terms-and-conditions">
              {t("importantLinks.termsAndConditions")}
            </Link>
            <Link href="/return-and-cancellation-policy">
              {t("importantLinks.returnAndCancellationPolicy")}
            </Link>
            <Link href="/privacy-and-policy">
              {t("importantLinks.privacyAndPolicy")}
            </Link>
          </ul>
        </div>

        {/* Why Luxera */}
        <div className="space-y-4 max-w-sm">
          <h1 className="text-lg font-semibold">{t("whyLuxera.title")}</h1>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2 items-start">
              <CiDeliveryTruck size={25} />
              {t("whyLuxera.freeDelivery")}
            </li>
            <li className="flex gap-2 items-start">
              <CiClock1 size={25} />
              {t("whyLuxera.chooseTime")}
            </li>
            <li className="flex gap-2 items-start">
              <CiGift size={25} />
              {t("whyLuxera.freeWrapping")}
            </li>
            <li className="flex gap-2 items-start">
              <CiDiscount1 size={25} />
              {t("whyLuxera.discounts")}
            </li>
            <li className="flex gap-2 items-start">
              <PiHandHeartLight size={25} />
              {t("whyLuxera.support")}
            </li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-3">
            <div className="bg-white w-9 aspect-square rounded-md flex items-center justify-center">
              <FiPhone size={20} />
            </div>
            <div className="bg-white w-9 rounded-md flex items-center justify-center">
              <CiFacebook size={20} />
            </div>
            <div className="bg-white w-9 rounded-md flex items-center justify-center">
              <CiInstagram size={20} />
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white rounded-md pr-3">
            <input
              type="email"
              placeholder={t("newsletter.placeholder")}
              className="rounded-full px-4 py-2 border border-gray-300 outline-none"
            />
            <div className="border border-black rounded-full">
              <IoIosArrowRoundForward size={20} />
            </div>
          </div>

          <p className="text-sm font-medium">{t("newsletter.cta")}</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-black text-white py-4 flex flex-col lg:flex-row gap-6 items-center justify-center px-11 text-sm">
        <div className="text-center">{t("bottom.copyright")}</div>
      </div>
    </footer>
  );
};

export default Footer;
