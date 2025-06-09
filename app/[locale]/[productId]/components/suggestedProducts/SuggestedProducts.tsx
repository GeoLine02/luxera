"use client";

import ProductCard from "@/app/shared/ProductCard";
import SwiperSlider from "@/app/shared/SwiperSlider";
import { productsData } from "@/data/products";

const SuggestedProducts = () => {
  return (
    <div>
      <SwiperSlider
        data={productsData}
        renderCard={(product) => (
          <ProductCard
            id={product.id}
            image={product.image}
            price={product.price}
            title={product.title}
          />
        )}
        title="You may also like"
        titleWeight="bold"
      />
    </div>
  );
};

export default SuggestedProducts;
