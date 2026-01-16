"use client";

import { ProductImageType, ProductVariantType } from "@/app/types/product";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

interface MobileProductPreviewProps {
  productVariants: ProductVariantType[];
}

const MobileProductPreview = ({
  productVariants,
}: MobileProductPreviewProps) => {
  const { selectedVaraintId } = useSelector(
    (state: RootState) => state.productDetailsReducer
  );

  const selectedVariant = productVariants.find(
    (variant) => variant.id === selectedVaraintId
  );

  const selectedVariantImages = selectedVariant?.images as ProductImageType[];

  return (
    <div className="mb-4 md:hidden">
      <Swiper modules={[Navigation]} slidesPerView={1} draggable={true}>
        {selectedVariantImages?.map((image) => (
          <SwiperSlide className="w-full" key={image.id}>
            <Image
              className="max-w-full max-h-[550px]"
              width={700}
              height={700}
              src={image.imageUrl}
              alt={`product-${image.id}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MobileProductPreview;
