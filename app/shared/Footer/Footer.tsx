"use client";

import SiteRoutes from "./SiteRoutes";
import ContactUs from "./ContactUs";
import FooterEnd from "./FooterEnd";
import GetInTouch from "@/app/[locale]/(home)/components/GetInTouch/GetInTouch";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathName = usePathname();

  if (
    pathName.includes("/signin") ||
    pathName.includes("/signup") ||
    pathName.includes("/luxera-ai") ||
    pathName.includes("/cart")
  )
    return null;

  return (
    <footer className="mt-11 mb-[80px] xs:mb-0">
      <div className="flex flex-col gap-10 lg:flex-row justify-between items-center px-11 pt-[52px] pb-[33px] bg-[#EFDDD6] mt-4">
        <SiteRoutes />
        <GetInTouch />
        <ContactUs />
      </div>
      <FooterEnd />
    </footer>
  );
};

export default Footer;
