"use client";

import { useEffect, useState } from "react";
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

  const [selectedImage, setSelectedImage] = useState<ProductImageType | null>(
    selectedVariantImages[0] || null
  );

  // Update selected image when variant changes
  useEffect(() => {
    if (selectedVariantImages.length > 0) {
      setSelectedImage(selectedVariantImages[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedVaraintId]);

  const handleSelectImage = (image: ProductImageType) => {
    setSelectedImage(image);
  };

  // Handle case when no images available
  if (!selectedVariantImages.length) {
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
        images={selectedVariantImages}
        handleSelectImage={handleSelectImage}
        selectedImage={selectedImage}
      />
      <div className="flex">
        {selectedImage?.image && (
          <div className="relative w-[421px] h-[500px]">
            <Image
              className="object-contain rounded-lg"
              fill
              sizes="(max-width: 768px) 100vw, 421px"
              src={selectedImage.image}
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
