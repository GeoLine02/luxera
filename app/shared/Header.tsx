"use client";

import LuxeraLogo from "@/public/LuxeraLogo.svg";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";

import Button from "../ui/Button";
import { FaBars } from "react-icons/fa6";

const Header = () => {
  const pathName = usePathname();

  const router = useRouter();

  if (
    pathName.includes("/signup") ||
    pathName.includes("/signin") ||
    pathName.includes("/luxera-ai")
  )
    return null;

  return (
    <header className="flex items-center justify-between px-6 lg:px-11  py-4 lg:py-5">
      <Image
        width={200}
        onClick={() => router.push("/")}
        src={LuxeraLogo}
        alt="Luxera logo"
      />

      <div className="flex items-center gap-7 ">
        <div className="hidden lg:block cursor-pointer">
          <FaRegHeart size={25} />
        </div>
        <div className="hidden lg:block cursor-pointer">
          <FaRegEnvelope size={25} />
        </div>
        <div className="md:hidden">
          <FaBars size={25} />
        </div>
        <Button
          bgColor="lightPink"
          rounded="lg"
          title="Sign in"
          type="button"
          className="hidden md:block !w-fit whitespace-nowrap py-2 px-6 font-medium transition-all duration-200 hover:bg-dark-pink"
          titleColor="black"
        />
      </div>
    </header>
  );
};

export default Header;
