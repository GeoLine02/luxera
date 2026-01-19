"use client";

import ProductCard from "@/app/shared/ProductCard";
import SwiperSlider from "@/app/shared/SwiperSlider";
import { ProductWithPrimaryVariant } from "@/app/types/product";

interface VipListingProps {
  products: ProductWithPrimaryVariant[];
}

const VIPListing = ({ products }: VipListingProps) => {
  return (
    <div className="space-y-3">
      <SwiperSlider
        titleWeight="medium"
        data={products}
        title="VIP Listing"
        renderCard={(product: ProductWithPrimaryVariant) => (
          <ProductCard
            id={product.id}
            price={product.primaryVariant.variant_price}
            title={product.primaryVariant.variant_name}
            imageUrl={product.primaryVariant.images[0].imageUrl}
          />
        )}
      />
    </div>
  );
};

export default VIPListing;
