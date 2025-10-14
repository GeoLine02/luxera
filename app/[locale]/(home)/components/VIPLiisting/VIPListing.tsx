"use client";

import ProductCard from "@/app/shared/ProductCard";
import SwiperSlider from "@/app/shared/SwiperSlider";
import { ProductType } from "@/app/types/product";

interface VipListingProps {
  products: ProductType[];
}

const VIPListing = ({ products }: VipListingProps) => {
  return (
    <div className="space-y-3">
      <SwiperSlider
        titleWeight="bold"
        data={products}
        title="VIP Listing"
        renderCard={(product: ProductType) => (
          <ProductCard
            id={product.id}
            image={product.product_image}
            price={product.product_price}
            title={product.product_name}
          />
        )}
      />
    </div>
  );
};

export default VIPListing;
