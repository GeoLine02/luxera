"use client";

import { useEffect, useState } from "react";
import ProductImages from "./ProductImages";
import Image from "next/image";
import { ProductImageType, ProductVariantType } from "@/app/types/product";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

interface ProductPreviewProps {
  productVariants: ProductVariantType[];
  // productImages: ProductImageType[];
}

const ProductPreview = ({ productVariants }: ProductPreviewProps) => {
  const { selectedVaraintId } = useSelector(
    (state: RootState) => state.productDetailsReducer
  );

  const selectedVariant = productVariants.find(
    (variant) => variant.id === selectedVaraintId
  );

  const [selectedImage, setSelectedImage] = useState<ProductImageType | null>(
    null
  );

  // Update selected image when variant changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedImage(selectedVariant?.images[0] as ProductImageType);
  }, [selectedVaraintId, selectedVariant?.images]);

  const handleSelectImage = (image: ProductImageType) => {
    setSelectedImage(image);
  };

  // Handle case when no images available
  if (!selectedVariant?.images.length) {
    return (
      <div className="gap-4 hidden md:flex">
        <div className="flex items-center justify-center w-[421px] h-[500px] bg-gray-100 rounded-lg">
          <p className="text-gray-400">No images available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="gap-4 hidden md:flex">
      <ProductImages
        images={selectedVariant?.images as ProductImageType[]}
        handleSelectImage={handleSelectImage}
        selectedImage={selectedImage}
      />
      <div className="flex">
        {selectedImage?.imageUrl && (
          <div className="relative w-[421px] h-[500px]">
            <Image
              className="object-contain rounded-lg"
              fill
              sizes="(max-width: 768px) 100vw, 421px"
              src={selectedImage.imageUrl}
              alt={`Product image ${selectedImage.id || ""}`}
              priority
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPreview;
