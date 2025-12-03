"use client";

import "swiper/css";
import "swiper/css/navigation";
import SwiperSlider from "@/app/shared/SwiperSlider";
import { ProductType } from "@/app/types/product";
import ProductCard from "@/app/shared/ProductCard";

interface ProcutsListProps {
  products: ProductType[];
  title: "Featured products";
}

const ProductsList = ({
  products,
  title = "Featured products",
}: ProcutsListProps) => {
  return (
    <div>
      <SwiperSlider
        titleWeight="bold"
        title={title}
        titleFont="FRL"
        data={products}
        renderCard={(product: ProductType) => (
          <ProductCard
            id={product.id}
            images={
              product.variants[0].images as { id: number; image: string }[]
            }
            price={product.variants[0].variant_price}
            title={product.variants[0].variant_name}
          />
        )}
      />
    </div>
  );
};

export default ProductsList;
