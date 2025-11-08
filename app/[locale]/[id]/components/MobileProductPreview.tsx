"use client";

import { ProductImageType } from "@/app/types/product";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface MobileProductPreviewProps {
  productImages: ProductImageType[];
}

const MobileProductPreview = ({ productImages }: MobileProductPreviewProps) => {
  return (
    <div className="mb-4 md:hidden">
      <Swiper modules={[Navigation]} slidesPerView={1} draggable={true}>
        {productImages.map((image) => (
          <SwiperSlide className="w-full" key={image.id}>
            <Image
              className="max-w-full max-h-[550px]"
              width={700}
              height={700}
              src={image.image}
              alt={`product-${image.id}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MobileProductPreview;
