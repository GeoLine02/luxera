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
          <div className="xs:hidden">
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
      ) : null}
    </>
  );
};

export default CategoriesModal;
