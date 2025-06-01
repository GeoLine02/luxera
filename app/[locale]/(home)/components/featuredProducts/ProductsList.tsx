"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useRef } from "react";
import ProductImage from "@/public/ProductImage2.png";
import FeaturedProductCard from "@/app/shared/FeaturedProductCard";

const ProductsList = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div>
      <div className="flex justify-between items-center w-full">
        <h1 className="text-[64px] font-FRL">Featured products</h1>
        <div className="flex gap-4 items-center">
          <div
            ref={prevRef}
            className="cursor-pointer border-2 border-ice-blue rounded-full p-3"
          >
            <FaArrowLeftLong size={25} />
          </div>
          <div
            ref={nextRef}
            className=" cursor-pointer border-2 border-ice-blue rounded-full p-3"
          >
            <FaArrowRightLong size={25} />
          </div>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={"auto"}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (
            swiper.params.navigation &&
            typeof swiper.params.navigation !== "boolean"
          ) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        onSwiper={(swiper) => {
          console.log(swiper);
        }}
      >
        <SwiperSlide className="!w-[300px]">
          <FeaturedProductCard image={ProductImage} id={1} price={120} />
        </SwiperSlide>
        <SwiperSlide className="!w-[300px]">
          <FeaturedProductCard image={ProductImage} id={1} price={120} />
        </SwiperSlide>
        <SwiperSlide className="!w-[300px]">
          <FeaturedProductCard image={ProductImage} id={1} price={120} />
        </SwiperSlide>
        <SwiperSlide className="!w-[300px]">
          <FeaturedProductCard image={ProductImage} id={1} price={120} />
        </SwiperSlide>
        <SwiperSlide className="!w-[300px]">
          <FeaturedProductCard image={ProductImage} id={1} price={120} />
        </SwiperSlide>
        <SwiperSlide className="!w-[300px]">
          <FeaturedProductCard image={ProductImage} id={1} price={120} />
        </SwiperSlide>
        <SwiperSlide className="!w-[300px]">
          <FeaturedProductCard image={ProductImage} id={1} price={120} />
        </SwiperSlide>
        <SwiperSlide className="!w-[300px]">
          <FeaturedProductCard image={ProductImage} id={1} price={120} />
        </SwiperSlide>
        <SwiperSlide className="!w-[300px]">
          <FeaturedProductCard image={ProductImage} id={1} price={120} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductsList;
