"use client";

import ProductCard from "@/app/shared/ProductCard";
import SwiperSlider from "@/app/shared/SwiperSlider";
import {
  ProductImageType,
  ProductWithPrimaryVariant,
} from "@/app/types/product";

interface VipListingProps {
  products: ProductWithPrimaryVariant[];
}

const VIPListing = ({ products }: VipListingProps) => {
  return (
    <div className="space-y-3">
      <SwiperSlider
        titleWeight="bold"
        data={products}
        title="VIP Listing"
        renderCard={(product: ProductWithPrimaryVariant) => (
          <ProductCard
            id={product.id}
            images={product.primaryVariant.images as ProductImageType[]}
            price={product.primaryVariant.variant_price}
            title={product.primaryVariant.variant_name}
          />
        )}
      />
    </div>
  );
};

export default VIPListing;
