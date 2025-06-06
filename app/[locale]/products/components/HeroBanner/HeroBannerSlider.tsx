"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Banner from "./Banner";

const HeroBannerSlider = () => {
  return (
    <div>
      <Swiper slidesPerView={"auto"}>
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
