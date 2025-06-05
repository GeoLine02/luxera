"use client";

import ProductCard from "@/app/shared/ProductCard";
import SwiperSlider from "@/app/shared/SwiperSlider";
import { productsData } from "@/data/products";
const VIPListing = () => {
  return (
    <div className="space-y-3">
      <SwiperSlider
        titleWeight="bold"
        data={productsData}
        title="VIP Listing"
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

export default VIPListing;
