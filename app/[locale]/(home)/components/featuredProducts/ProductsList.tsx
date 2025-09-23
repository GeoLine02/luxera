"use client";

import "swiper/css";
import "swiper/css/navigation";
import FeaturedProductCard from "@/app/shared/FeaturedProductCard";
import SwiperSlider from "@/app/shared/SwiperSlider";

export type FeaturedItem = {
  id: number;
  image?: string;
  price: number | string;
  href?: string;
  title?: string;
};

const ProductsList = ({
  products,
  title = "Featured products",
}: {
  products: FeaturedItem[];
  title?: string;
}) => {
  return (
    <div>
      <SwiperSlider
        titleWeight="bold"
        title={title}
        titleFont="FRL"
        data={products}
        renderCard={(product: FeaturedItem) => (
          <FeaturedProductCard
            id={product.id}
            image={product.image}
            price={product.price}
            href={product.href}
            title={product.title}
          />
        )}
      />
    </div>
  );
};

export default ProductsList;
