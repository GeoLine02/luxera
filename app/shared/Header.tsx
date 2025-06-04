"use client";

import LuxeraLogo from "@/public/LuxeraLogo.svg";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import { FiShoppingCart } from "react-icons/fi";

import Button from "../ui/Button";
import SearchContainer from "./search/SearchContainer";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const handleOpenSearch = () => {
    setIsSearchOpen(true);
  };

  const pathName = usePathname();

  const router = useRouter();

  if (pathName === "/signup" || pathName === "/signin") return null;

  return (
    <header className="flex items-center justify-between px-11 py-5">
      <div className="lg:hidden cursor-pointer">
        <FaBars size={25} />
      </div>
      <Image
        className="hidden lg:block"
        onClick={() => router.push("/")}
        src={LuxeraLogo}
        alt="Luxera logo"
      />

      <SearchContainer
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
      />

      <div className="flex items-center gap-7 ">
        <div onClick={handleOpenSearch} className="cursor-pointer">
          <IoIosSearch size={30} />
        </div>

        <div className="hidden lg:block cursor-pointer">
          <FaRegHeart size={25} />
        </div>
        <div className="hidden lg:block cursor-pointer">
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
