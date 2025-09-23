"use client";

import ProductCard from "@/app/shared/ProductCard";
import SwiperSlider from "@/app/shared/SwiperSlider";
export type VipItem = {
  id: number;
  image?: string;
  price: number | string;
  title: string;
};

const VIPListing = ({ products }: { products: VipItem[] }) => {
  return (
    <div className="space-y-3">
      <SwiperSlider
        titleWeight="bold"
        data={products}
        title="VIP Listing"
        renderCard={(product: VipItem) => (
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
