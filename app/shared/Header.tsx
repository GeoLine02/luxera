"use client";

import LuxeraLogo from "@/public/LuxeraLogo.svg";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import { FiShoppingCart } from "react-icons/fi";

import Button from "../ui/Button";
import SearchContainer from "./search/SearchContainer";

const Header = () => {
  const pathName = usePathname();

  const router = useRouter();

  if (pathName === "/signup" || pathName === "/signin") return null;

  return (
    <header className="flex items-center justify-between px-11 py-5">
      <Image
        onClick={() => router.push("/")}
        src={LuxeraLogo}
        alt="Luxera logo"
      />

      <SearchContainer />

      <div className="flex items-center gap-7 ">
        <div className="cursor-pointer">
          <FaRegHeart size={25} />
        </div>
        <div className="cursor-pointer">
          <FaRegEnvelope size={25} />
        </div>
        <div className="cursor-pointer">
          <FiShoppingCart size={25} />
        </div>
        <Button
          bgColor="lightPink"
          rounded="lg"
          title="Sign in"
          type="button"
          className="!w-fit whitespace-nowrap py-2 px-6 font-medium transition-all duration-200 hover:bg-dark-pink"
          titleColor="black"
        />
      </div>
    </header>
  );
};

export default Header;
