"use client";

import ProductCard from "@/app/shared/ProductCard";
import SwiperSlider from "@/app/shared/SwiperSlider";
import { ProductWithPrimaryVariant } from "@/app/types/product";

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
            priamryImage={product.primaryVariant.image}
            price={product.product_price}
            title={product.primaryVariant.variant_name}
          />
        )}
      />
    </div>
  );
};

export default SuggestedProducts;
