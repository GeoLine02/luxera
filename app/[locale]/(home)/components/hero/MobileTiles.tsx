"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import HeroCard from "./HeroCard";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const cardTitles = ["Birthday", "Anniversary", "Personalized gifts"];

const MobileTiles = () => {
  return (
    <div className="md:hidden">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView="auto"
        draggable={true}
      >
        {cardTitles.map((tile) => (
          <SwiperSlide className="!max-w-[174px] whitespace-nowrap" key={tile}>
            <HeroCard title={tile} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MobileTiles;
