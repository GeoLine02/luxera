"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useRef } from "react";
import classNames from "classnames";

interface SwiperSliderProps<T> {
  title: string;
  titleFont?: "FRL" | "default" | "bold";
  data: T[];
  renderCard: (item: T) => React.ReactNode;
}

const SwiperSlider = <T,>({
  title,
  titleFont = "default",
  data,
  renderCard,
}: SwiperSliderProps<T>) => {
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  const fontStyles = classNames("title", {
    "font-FRL": titleFont === "FRL",
    "": titleFont === "default",
    "font-bold": titleFont === "bold",
  });

  return (
    <div>
      <div className="flex justify-between items-center w-full mb-4">
        <h1 className={`text-xl md:text-3xl lg:text-[40px] ${fontStyles}`}>
          {title}
        </h1>
        <div className="flex gap-4 items-center">
          <div
            ref={prevRef}
            className="cursor-pointer border-2 border-ice-blue rounded-full p-1.5 lg:p-3"
          >
            <FaArrowLeftLong size={25} />
          </div>
          <div
            ref={nextRef}
            className="cursor-pointer border-2 border-ice-blue rounded-full p-1.5 lg:p-3"
          >
            <FaArrowRightLong size={25} />
          </div>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView="auto"
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
      >
        {data.map((item, idx) => (
          <SwiperSlide key={idx} className="!w-[300px]">
            {renderCard(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
