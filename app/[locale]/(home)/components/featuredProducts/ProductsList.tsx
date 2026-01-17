"use client";

import "swiper/css";
import "swiper/css/navigation";
import SwiperSlider from "@/app/shared/SwiperSlider";
import { ProductWithPrimaryVariant } from "@/app/types/product";
import ProductCard from "@/app/shared/ProductCard";

interface ProcutsListProps {
  products: ProductWithPrimaryVariant[];
  title: "Featured products";
}

const ProductsList = ({
  products,
  title = "Featured products",
}: ProcutsListProps) => {
  return (
    <div>
      <SwiperSlider
        titleWeight="medium"
        title={title}
        data={products}
        renderCard={(product: ProductWithPrimaryVariant) => (
          console.log(product),
          (
            <ProductCard
              id={product.id}
              price={product.primaryVariant.variant_price}
              title={product.primaryVariant.variant_name}
              imageUrl={product.primaryVariant.images[0].imageUrl}
            />
          )
        )}
      />
    </div>
  );
};

export default ProductsList;
