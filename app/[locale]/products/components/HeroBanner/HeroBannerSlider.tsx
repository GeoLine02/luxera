"use client";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Banner from "./Banner";

const HeroBannerSlider = () => {
  return (
    <div>
      <Swiper modules={[Pagination]}>
        <SwiperSlide>
          <Banner />
        </SwiperSlide>
        <SwiperSlide>
          <Banner />
        </SwiperSlide>
        <SwiperSlide>
          <Banner />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroBannerSlider;
