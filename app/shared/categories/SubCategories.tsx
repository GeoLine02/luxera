"use client";

import { useSelector } from "react-redux";
import SubCategoryCard from "./SubCategoryCard";
import { RootState } from "@/app/store/store";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function SubCategories() {
  const { subCategories } = useSelector(
    (state: RootState) => state.categoriesReducer
  );

  return (
    <div className="px-4 lg:px-11 mt-4 overflow-x-hidden">
      <Swiper slidesPerView="auto" spaceBetween={16}>
        {subCategories.map((subcategory) => (
          <SwiperSlide key={subcategory.id} className="!w-auto">
            <SubCategoryCard
              id={subcategory.id}
              category_id={subcategory.category_id}
              sub_category_image={subcategory.sub_category_image}
              sub_category_name={subcategory.sub_category_name}
              sub_category_name_ka={subcategory.sub_category_name_ka}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
