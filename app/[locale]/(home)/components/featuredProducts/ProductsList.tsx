"use client";

import "swiper/css";
import "swiper/css/navigation";
import FeaturedProductCard from "@/app/shared/FeaturedProductCard";
import SwiperSlider from "@/app/shared/SwiperSlider";
import { featuredProductsData } from "@/data/products";
import { FeatureProductType } from "@/app/types/product";

const ProductsList = () => {
  return (
    <div className="px-11">
      <SwiperSlider
        title="Featured products"
        titleFont="FRL"
        data={featuredProductsData}
        renderCard={(product: FeatureProductType) => (
          <FeaturedProductCard
            id={product.id}
            image={product.image}
            price={product.price}
          />
        )}
      />
    </div>
  );
};

export default ProductsList;
