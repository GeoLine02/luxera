"use client";

import ProductCard from "@/app/shared/ProductCard";
import SwiperSlider from "@/app/shared/SwiperSlider";
export type BestSellingItem = {
  id: number;
  image?: string;
  price: number | string;
  title: string;
  href?: string;
};

const BestSellings = ({ products }: { products: BestSellingItem[] }) => {
  return (
    <div className="space-y-4">
      <SwiperSlider
        titleWeight="bold"
        data={products}
        title="Best Sellings"
        renderCard={(product: BestSellingItem) => (
          <ProductCard
            id={product.id}
            image={product.image}
            price={product.price}
            title={product.title}
            href={product.href}
          />
        )}
      />
    </div>
  );
};

export default BestSellings;
