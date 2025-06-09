"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import ProductImages from "./ProductImages";

interface ProductPreviewWrapperProps {
  productImages: StaticImageData[];
}

const ProductPreviewWrapper = ({
  productImages,
}: ProductPreviewWrapperProps) => {
  const [currentImage, setCurrentImage] = useState<StaticImageData>(
    productImages[0]
  );
  return (
    <div>
      <div className="flex  items-center gap-11">
        <ProductImages
          setCurrentImage={setCurrentImage}
          images={productImages}
        />
        <Image src={currentImage} alt={`photo of ${currentImage}`} />
      </div>
    </div>
  );
};

export default ProductPreviewWrapper;
