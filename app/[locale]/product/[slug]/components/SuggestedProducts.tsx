"use client";

import ProductCard from "@/app/shared/ProductCard";
import SwiperSlider from "@/app/shared/SwiperSlider";
import {
  ProductImageType,
  ProductWithPrimaryVariant,
} from "@/app/types/product";

interface SuggestedProductsProps {
  suggestedProducts: ProductWithPrimaryVariant[];
}

const SuggestedProducts = ({ suggestedProducts }: SuggestedProductsProps) => {
  return (
    <div className="mt-16 p-4 container">
      <SwiperSlider
        titleWeight="medium"
        title="You may also like"
        data={suggestedProducts}
        renderCard={(product: ProductWithPrimaryVariant) => (
          <ProductCard
            id={product.id}
            price={product.product_price}
            title={product.primaryVariant.variant_name}
            imageUrl={
              (product.primaryVariant.images as ProductImageType[])[0].imageUrl
            }
          />
        )}
      />
    </div>
  );
};

export default SuggestedProducts;
