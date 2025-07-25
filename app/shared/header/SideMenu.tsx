"use client";

import { closeMenu } from "@/app/store/features/sideMenuSlice";
import { AppDispatch, RootState } from "@/app/store/store";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { IoIosCloseCircle } from "react-icons/io";
import Button from "@/app/ui/Button";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import Link from "next/link";

const SideMenu = () => {
  const dispatch = useDispatch<AppDispatch>();
  const pathName = usePathname();

  const handleCloseMenu = () => {
    dispatch(closeMenu());
  };

  const { isMenuOpen } = useSelector(
    (state: RootState) => state.sideMenuReducer
  );

  const menuTransitionStyles = classNames("transition-all duration-300 top-0", {
    "left-0": isMenuOpen,
    "left-[100%]": !isMenuOpen,
  });

  const locale = useLocale();
  const menuItems = [
    { label: "მთავარი", path: `/${locale}` },
    { label: "ჩვენ შესახებ", path: `/${locale}/about` },
    { label: "კონტაქტი", path: `/${locale}/contact` },
    { label: "გახსენი მაღაზია", path: `/${locale}/open-store` },
  ];

  return (
    <div
      className={`${menuTransitionStyles} w-full h-screen fixed z-50 bg-white space-y-4 px-4 md:hidden`}
    >
      <div className="flex justify-end mr-4 mt-4">
        <IoIosCloseCircle
          onClick={handleCloseMenu}
          className="cursor-pointer"
          size={40}
        />
      </div>

      <ul className="mt-2 *:w-full *:py-2 *:px-4 *:cursor-pointer flex flex-col">
        {menuItems.map(({ label, path }) => (
          <Link
            onClick={handleCloseMenu}
            key={label}
            href={path}
            className={classNames("rounded transition w-full", {
              "bg-light-pink font-semibold": pathName === path,
              "hover:bg-light-pink": pathName !== path,
            })}
          >
            {label}
          </Link>
        ))}
      </ul>

      <div className="flex items-center gap-4 mt-14">
        <Button
          rounded="full"
          title="ქართული"
          type="button"
          bgColor="lightPink"
          className="py-2 px-4 w-fit"
          titleColor="black"
          onClick={() => console.log("switched to GEO")}
        />
        <Button
          rounded="full"
          title="English"
          type="button"
          bgColor="lightPink"
          className="py-2 px-4 w-fit"
          titleColor="black"
          onClick={() => console.log("switched to ENG")}
        />
      </div>
    </div>
  );
};

export default SideMenu;
