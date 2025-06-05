"use client";

import ProductCard from "@/app/shared/ProductCard";
import SwiperSlider from "@/app/shared/SwiperSlider";
import { productsData } from "@/data/products";

const BestSellings = () => {
  return (
    <div className="space-y-4">
      <SwiperSlider
        titleWeight="bold"
        data={productsData}
        title="Best Sellings"
        renderCard={(product) => (
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

export default BestSellings;
