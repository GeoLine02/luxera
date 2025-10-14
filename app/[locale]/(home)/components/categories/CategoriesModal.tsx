"use client";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store/store";
import {
  chooseSelectedCategory,
  chooseSelectedSubCategory,
  closeCategoriesModal,
} from "@/app/store/features/categoriesSlice";
import { CategoryType, SubCategoryType } from "@/app/types/categories";
import { useCategories } from "@/app/hooks/useCategories";
import MobileCategoriesModal from "./MobileCategoriesModal";
import classNames from "classnames";
import DesktopCategoriesModal from "./DesktopCategoriesModal";
import { useAppLocale } from "@/app/hooks/useAppLocale";

const CategoriesModal = () => {
  const dispatch = useDispatch<AppDispatch>();
  const locale = useAppLocale();

  const handleCloseModal = () => {
    dispatch(closeCategoriesModal());
  };

  const { categories, loading, error } = useCategories(locale);

  const handleChooseCatogery = (category: CategoryType) => {
    dispatch(chooseSelectedCategory(category));
  };

  const handleChooseSubCategory = (subCategory: SubCategoryType) => {
    dispatch(chooseSelectedSubCategory(subCategory.label));
  };

  const { selectedCategory, selectedSubCategory, isCategoriesModalOpen } =
    useSelector((state: RootState) => state.categoriesReducer);

  const mobileCategoriesStyles = classNames(
    "fixed left-0 w-full z-[999990] transition-all duration-300 ease-in-out",
    {
      "top-full opacity-0 pointer-events-none": !isCategoriesModalOpen,
      "top-0 opacity-100 pointer-events-auto": isCategoriesModalOpen,
    }
  );

  // Only render when modal is open
  if (!isCategoriesModalOpen) {
    return null;
  }

  return (
    <>
      {/* Loading or empty state */}
      {error ? (
        <div className={`${mobileCategoriesStyles}`}>
          <div className="fixed inset-0 z-[999998] bg-black/70" onClick={handleCloseModal} />
          <div className="fixed inset-0 z-[999999] flex items-center justify-center">
            <div className="bg-white rounded-xl p-6 shadow-xl min-w-[280px] space-y-3">
              <p className="text-base text-red-600">Failed to load categories</p>
              <p className="text-sm text-gray-600">{error}</p>
            </div>
          </div>
        </div>
      ) : loading || !categories || categories.length === 0 ? (
        <div className={`${mobileCategoriesStyles}`}>
          <div className="fixed inset-0 z-[999998] bg-black/70" onClick={handleCloseModal} />
          <div className="fixed inset-0 z-[999999] flex items-center justify-center">
            <div className="bg-white rounded-xl p-6 shadow-xl min-w-[280px]">
              <p className="text-base">Loading categories...</p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className={`md:hidden ${mobileCategoriesStyles}`}>
            <MobileCategoriesModal
              categories={categories}
              handleChooseCatogery={handleChooseCatogery}
              handleChooseSubCategory={handleChooseSubCategory}
              handleCloseModal={handleCloseModal}
              selectedCategory={selectedCategory}
              selectedSubCategory={selectedSubCategory}
            />
          </div>
          <div className={`hidden md:block ${mobileCategoriesStyles}`}>
            <DesktopCategoriesModal
              handleChooseCatogery={handleChooseCatogery}
              categories={categories}
              handleChooseSubCategory={handleChooseSubCategory}
              selectedSubCategory={selectedSubCategory}
              handleCloseModal={handleCloseModal}
              selectedCategory={selectedCategory}
            />
          </div>
        </>
      )}
    </>
  );
};

export default CategoriesModal;
