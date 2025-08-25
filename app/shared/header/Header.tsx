"use client";

import LuxeraLogo from "@/public/LuxeraLogo.svg";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { IoCartOutline } from "react-icons/io5";

import Button from "../../ui/Button";
import { FaBars } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { openMenu } from "../../store/features/sideMenuSlice";
import SearchContainer from "../search/SearchContainer";
import Navigation from "./Navigation";
import Link from "next/link";
import DesktopCategoriesModal from "@/app/[locale]/(home)/components/categories/DesktopCategoriesModal";
import {
  chooseSelectedCategory,
  chooseSelectedSubCategory,
  closeCategoriesModal,
} from "@/app/store/features/categoriesSlice";
import { allCategoriesData } from "@/data/categories";
import { CategoryType, SubCategoryType } from "@/app/types/categories";
import { useState } from "react";

const Header = () => {
  const pathName = usePathname();

  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const handleOpenMenu = () => {
    dispatch(openMenu());
  };

  const handleCloseModal = () => {
    dispatch(closeCategoriesModal());
  };

  const [categories] = useState(allCategoriesData);

  const handleChooseCatogery = (category: CategoryType) => {
    dispatch(chooseSelectedCategory(category));
  };

  const handleChooseSubCategory = (subCategory: SubCategoryType) => {
    dispatch(chooseSelectedSubCategory(subCategory.label));
  };

  const { selectedCategory, selectedSubCategory, isCategoriesModalOpen } =
    useSelector((state: RootState) => state.categoriesReducer);

  if (
    pathName.includes("/signup") ||
    pathName.includes("/signin") ||
    pathName.includes("/luxera-ai") ||
    pathName.includes("/shop")
  )
    return null;

  return (
    <>
      <header className="flex items-center justify-between px-6 lg:px-11 py-4 lg:py-5">
        <Image
          width={200}
          onClick={() => router.push("/")}
          src={LuxeraLogo}
          alt="Luxera logo"
        />
        <div className="w-full hidden md:flex">
          <SearchContainer />
        </div>

        <div className="flex items-center gap-6">
          <Button
            rounded="full"
            title="Luxera AI"
            type="button"
            bgColor="black"
            className="py-2 px-4 font-medium min-w-[120px] w-full hidden md:block"
            titleColor="white"
            onClick={() => router.push("/luxera-ai")}
          />
          <div className="hidden lg:block cursor-pointer">
            <IoCartOutline onClick={() => router.push("/cart")} size={30} />
          </div>

          <div className="md:hidden cursor-pointer">
            <FaBars onClick={handleOpenMenu} size={25} />
          </div>
          <Link href={"/signin"}>
            <Button
              bgColor="lightPink"
              rounded="lg"
              title="Sign in"
              type="button"
              className="hidden md:block !w-fit whitespace-nowrap py-2 px-6 font-medium transition-all duration-200 hover:bg-dark-pink"
              titleColor="black"
            />
          </Link>
        </div>
      </header>

      <Navigation />
      {isCategoriesModalOpen && (
        <DesktopCategoriesModal
          handleChooseCatogery={handleChooseCatogery}
          categories={categories}
          handleChooseSubCategory={handleChooseSubCategory}
          selectedSubCategory={selectedSubCategory}
          handleCloseModal={handleCloseModal}
          selectedCategory={selectedCategory}
        />
      )}
    </>
  );
};

export default Header;
