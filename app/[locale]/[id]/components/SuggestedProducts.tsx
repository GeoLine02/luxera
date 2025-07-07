"use client";

import ProductCard from "@/app/shared/ProductCard";
import SwiperSlider from "@/app/shared/SwiperSlider";
import { ProductType } from "@/app/types/product";

interface SuggestedProductsProps {
  suggestedProducts: ProductType[];
}

const SuggestedProducts = ({ suggestedProducts }: SuggestedProductsProps) => {
  return (
    <div className="mt-16 container">
      <SwiperSlider
        titleWeight="medium"
        title="You may also like"
        data={suggestedProducts}
        renderCard={(product: ProductType) => (
          <ProductCard
            id={product.id}
            image={product.image}
            price={product.price}
            title={product.title}
          />
        )}
      />
    </div>
  );
};

export default SuggestedProducts;
