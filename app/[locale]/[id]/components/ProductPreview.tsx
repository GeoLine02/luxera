"use client";

import { useState } from "react";
import ProductImages from "./ProductImages";
import { ProductImageType } from "@/app/types/product";

interface ProductPreviewProps {
  productImages: ProductImageType[];
}

const ProductPreview = ({ productImages }: ProductPreviewProps) => {
  const [selectedImage, setSelectedImage] = useState<{
    source: string;
    id: number;
  }>(productImages[0]);

  const handleSelectImage = (image: ProductImageType) => {
    setSelectedImage(image);
  };

  return (
    <div className="gap-4 hidden md:flex">
      <ProductImages
        images={productImages}
        handleSelectImage={handleSelectImage}
      />
      <div className="bg-light-pink w-[400px] h-full flex items-center justify-center text-7xl">
        {selectedImage.id}
      </div>
    </div>
  );
};

export default ProductPreview;
