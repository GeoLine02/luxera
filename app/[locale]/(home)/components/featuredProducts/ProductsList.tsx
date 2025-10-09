"use client";

import "swiper/css";
import "swiper/css/navigation";
import FeaturedProductCard from "@/app/[locale]/(home)/components/featuredProducts/FeaturedProductCard";
import SwiperSlider from "@/app/shared/SwiperSlider";
import { ProductType } from "@/app/types/product";

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
          <FeaturedProductCard
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

export default ProductsList;
