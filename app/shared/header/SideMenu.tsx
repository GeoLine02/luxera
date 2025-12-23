"use client";

import { closeMenu } from "@/app/store/features/sideMenuSlice";
import { AppDispatch, RootState } from "@/app/store/store";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { IoIosCloseCircle } from "react-icons/io";
import Button from "@/app/ui/Button";
import { useLocale } from "next-intl";
import Link from "next/link";
import { Link as LangLink, usePathname } from "@/i18n/navigation";

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
    { label: "გახსენი მაღაზია", path: `/${locale}/shop/register` },
  ];

  return (
    <div
      className={`${menuTransitionStyles} w-full h-screen fixed z-50 bg-white space-y-4 px-4 md:hidden`}
    >
      <div className="flex justify-end mt-4">
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

      <div className="flex items-center justify-evenly gap-4 mt-14">
        <LangLink href={pathName} locale="ka">
          <Button
            rounded="full"
            title="ქართული"
            type="button"
            bgcolor="lightPink"
            className="py-2 px-4 w-fit"
            titleColor="black"
          />
        </LangLink>
        <LangLink className="w-full max-w-[130px]" href={pathName} locale="en">
          <Button
            rounded="full"
            title="English"
            type="button"
            bgcolor="lightPink"
            className="py-2 px-4"
            titleColor="black"
          />
        </LangLink>
      </div>
    </div>
  );
};

export default SideMenu;
