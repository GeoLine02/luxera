"use client";

import LuxeraLogo from "@/public/LuxeraLogo.svg";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import { IoCartOutline } from "react-icons/io5";

import Button from "../../ui/Button";
import { FaBars } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { openMenu } from "../../store/features/sideMenuSlice";

const Header = () => {
  const pathName = usePathname();

  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const handleOpenMenu = () => {
    dispatch(openMenu());
  };

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
          <IoCartOutline onClick={() => router.push("/cart")} size={30} />
        </div>
        <div className="hidden lg:block cursor-pointer">
          <FaRegHeart size={25} />
        </div>
        <div className="hidden lg:block cursor-pointer">
          <FaRegEnvelope size={25} />
        </div>
        <div className="md:hidden cursor-pointer">
          <FaBars onClick={handleOpenMenu} size={25} />
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
