"use client";

import ProductCard from "@/app/shared/ProductCard";
import SwiperSlider from "@/app/shared/SwiperSlider";
import { ProductType } from "@/app/types/product";
import { productsData } from "@/data/products";
const RecommendedProducts = () => {
  return (
    <div>
      <SwiperSlider<ProductType>
        data={productsData}
        renderCard={(product: ProductType) => (
          <ProductCard
            id={product.id}
            image={product.image}
            price={product.price}
            title={product.title}
          />
        )}
        titleFont="default"
        titleWeight="bold"
        title="Recommended"
      />
    </div>
  );
};

export default RecommendedProducts;
