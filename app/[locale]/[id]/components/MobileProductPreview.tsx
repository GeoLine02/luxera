"use client";

import { ProductImageType } from "@/app/types/product";
// import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface MobileProductPreviewProps {
  productImages: ProductImageType[];
}

const MobileProductPreview = ({ productImages }: MobileProductPreviewProps) => {
  return (
    <div className="mb-4 md:hidden">
      <Swiper pagination={true}>
        {productImages.map((image) => (
          <SwiperSlide key={image.id}>
            <div className="bg-light-pink w-full  flex items-center h-[250px] justify-center text-7xl">
              {image.id}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MobileProductPreview;
