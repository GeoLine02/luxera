"use client";

import "swiper/css";
import "swiper/css/navigation";
import SwiperSlider from "@/app/shared/SwiperSlider";
import { ProductType, ProductWithPrimaryVariant } from "@/app/types/product";
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
          <ProductCard
            id={product.id}
            priamryImage={product.primaryVariant.image}
            price={product.primaryVariant.variant_price}
            title={product.primaryVariant.variant_name}
          />
        )}
      />
    </div>
  );
};

export default ProductsList;
