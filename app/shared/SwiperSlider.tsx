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
  titleFont?: "FRL" | "default";
  titleWeight: "normal" | "semibold" | "bold" | "extraBold" | "medium";
  data: T[];
  renderCard: (item: T) => React.ReactNode;
}

const SwiperSlider = <T,>({
  title,
  titleFont = "default",
  data,
  renderCard,
  titleWeight,
}: SwiperSliderProps<T>) => {
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  const fontStyles = classNames("title", {
    "font-FRL": titleFont === "FRL",
    "": titleFont === "default",
  });

  const titleWeightStyles = classNames({
    "font-bold": titleWeight === "bold",
    "font-extrabold": titleWeight === "extraBold",
    "font-medium": titleWeight === "medium",
    "font-normal": titleWeight === "normal",
  });

  return (
    <div>
      <div className="flex justify-between items-center w-full mb-4">
        <h1
          className={`text-xl md:text-3xl lg:text-[40px] ${titleWeightStyles} ${fontStyles}`}
        >
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
        spaceBetween={20}
        slidesPerView="auto"
        draggable={true}
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
          <SwiperSlide
            key={idx}
            className="!max-w-[165px] md:!min-w-[260px] lg:!min-w-[300px]"
          >
            {renderCard(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
