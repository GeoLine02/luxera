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
  console.log("subs", subCategories);
  return (
    <div className="px-4 lg:px-11 mt-4">
      <Swiper
        slidesPerView={"auto"}
        pagination={{
          clickable: true,
        }}
        spaceBetween={30}
      >
        {subCategories.map((subcategory) => (
          <SwiperSlide className="!max-w-fit" key={subcategory.id}>
            <SubCategoryCard
              id={subcategory.id}
              category_id={subcategory.category_id}
              sub_category_image={subcategory.sub_category_image}
              sub_category_name={subcategory.sub_category_name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    // <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 px-4 card-container ">
    //   {subCategories?.map((subcategory) => (
    //     <SubCategoryCard
    //       key={subcategory.id}
    //       id={subcategory.id}
    //       category_id={subcategory.category_id}
    //       sub_category_image={subcategory.sub_category_image}
    //       sub_category_name={subcategory.sub_category_name}
    //     />
    //   ))}
    // </div>
  );
}
