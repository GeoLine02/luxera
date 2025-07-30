"use client";

import { allCategoriesData } from "@/data/categories";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store/store";
import {
  chooseSelectedCategory,
  chooseSelectedSubCategory,
  closeCategoriesModal,
} from "@/app/store/features/categoriesSlice";
import { useState } from "react";
import { CategoryType, SubCategoryType } from "@/app/types/categories";
import DesktopCategoriesModal from "./DesktopCategoriesModal";
import MobileCategoriesModal from "./MobileCategoriesModal";
import classNames from "classnames";

const CategoriesModal = () => {
  const dispatch = useDispatch<AppDispatch>();

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

  const mobileCategoriesStyles = classNames(
    "fixed left-0 w-full z-50 transition-all duration-300 ease-in-out", // fixed positioning
    {
      "top-full opacity-0 pointer-events-none": !isCategoriesModalOpen, // off-screen (hidden)
      "top-0 opacity-100 pointer-events-auto": isCategoriesModalOpen, // visible
    }
  );

  return (
    <>
      {isCategoriesModalOpen ? (
        <>
          <div className="hidden xs:block">
            <DesktopCategoriesModal
              categories={categories}
              handleChooseCatogery={handleChooseCatogery}
              handleChooseSubCategory={handleChooseSubCategory}
              handleCloseModal={handleCloseModal}
              selectedCategory={selectedCategory}
              selectedSubCategory={selectedSubCategory}
            />
          </div>
        </>
      ) : null}

      <div className={`xs:hidden ${mobileCategoriesStyles}`}>
        <MobileCategoriesModal
          categories={categories}
          handleChooseCatogery={handleChooseCatogery}
          handleChooseSubCategory={handleChooseSubCategory}
          handleCloseModal={handleCloseModal}
          selectedCategory={selectedCategory}
          selectedSubCategory={selectedSubCategory}
        />
      </div>
    </>
  );
};

export default CategoriesModal;
