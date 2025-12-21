"use client";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store/store";
import {
  chooseSelectedCategory,
  closeCategoriesModal,
} from "@/app/store/features/categoriesSlice";
import { CategoryType, SubCategoryType } from "@/app/types/categories";
import MobileCategoriesModal from "./MobileCategoriesModal";
import classNames from "classnames";
import DesktopCategoriesModal from "./DesktopCategoriesModal";
import { useRouter } from "next/navigation";

const CategoriesModal = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const handleCloseModal = () => {
    dispatch(closeCategoriesModal());
  };

  const handleChooseCatogery = (category: CategoryType) => {
    dispatch(chooseSelectedCategory(category));
  };

  const handleChooseSubCategory = (subcategory: SubCategoryType) => {
    router.push(
      `/products?subcategory=${subcategory.sub_category_name}-${subcategory.id}`
    );
    dispatch(closeCategoriesModal());
  };

  const {
    categories,
    selectedCategory,
    selectedSubCategory,
    isCategoriesModalOpen,
  } = useSelector((state: RootState) => state.categoriesReducer);

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
  );
};

export default CategoriesModal;
