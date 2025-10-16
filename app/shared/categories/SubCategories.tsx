"use client";

import { useSelector } from "react-redux";
import SubCategoryCard from "./SubCategoryCard";

import { RootState } from "@/app/store/store";

export default function SubCategories() {
  const { subCategories } = useSelector(
    (state: RootState) => state.categoriesReducer
  );

  return (
    <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 px-4 card-container ">
      {subCategories?.map((subcategory) => (
        <SubCategoryCard
          key={subcategory.id}
          id={subcategory.id}
          categoryId={subcategory.categoryId}
          subCategoryImage={subcategory.subCategoryImage}
          subCategoryName={subcategory.subCategoryName}
        />
      ))}
    </div>
  );
}
