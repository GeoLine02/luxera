"use client";

import ProductCard from "@/app/shared/ProductCard";
import SwiperSlider from "@/app/shared/SwiperSlider";
import { ProductType } from "@/app/types/product";

interface SuggestedProductsProps {
  suggestedProducts: ProductType[];
}

const SuggestedProducts = ({ suggestedProducts }: SuggestedProductsProps) => {
  return (
    <div className="mt-16 p-4 container">
      <SwiperSlider
        titleWeight="medium"
        title="You may also like"
        data={suggestedProducts}
        renderCard={(product: ProductType) => (
          <ProductCard
            id={product.id}
            images={product.variants[0].images}
            price={product.product_price}
            title={product.variants[0].variant_name}
          />
        )}
      />
    </div>
  );
};

export default SuggestedProducts;
