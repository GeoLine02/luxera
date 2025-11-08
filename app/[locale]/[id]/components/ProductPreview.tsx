"use client";

import { useState } from "react";
import ProductImages from "./ProductImages";
import Image from "next/image";
import { ProductImageType } from "@/app/types/product";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

interface ProductPreviewProps {
  productImages: ProductImageType[];
}

const ProductPreview = ({ productImages }: ProductPreviewProps) => {
  const { selectedVaraintId } = useSelector(
    (state: RootState) => state.productDetailsReducer
  );

  const selectedVariantImages = productImages.filter(
    (image) => image.variant_id === selectedVaraintId
  );

  const [selectedImage, setSelectedImage] = useState<ProductImageType>(
    selectedVariantImages[0]
  );

  const handleSelectImage = (image: ProductImageType) => {
    setSelectedImage(image);
  };

  return (
    <div className="gap-4 hidden md:flex">
      <ProductImages
        images={selectedVariantImages}
        handleSelectImage={handleSelectImage}
      />
      <div className="flex text-7xl">
        <Image
          className="max-w-[421px] w-full max-h-[500px] h-full"
          width={500}
          height={600}
          src={selectedImage.image}
          alt=""
        />
      </div>
    </div>
  );
};

export default ProductPreview;
