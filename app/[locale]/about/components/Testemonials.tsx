"use client";
import { FaUser } from "react-icons/fa";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";

interface TestemonialCardProps {
  //   image: StaticImageData;
  rating: number;
  text: string;
}

const testemonialData = [
  {
    id: 1,
    rating: 4,
    text: "I honestly didn’t expect something so beautiful. The packaging was perfect, and the handwritten note made it feel so personal.",
  },
  {
    id: 2,
    rating: 4,
    text: "I honestly didn’t expect something so beautiful. The packaging was perfect, and the handwritten note made it feel so personal.",
  },
  {
    id: 3,
    rating: 4,
    text: "I honestly didn’t expect something so beautiful. The packaging was perfect, and the handwritten note made it feel so personal.",
  },
];

const Testemonialcard = ({ rating, text }: TestemonialCardProps) => {
  return (
    <div className="max-w-full md:max-w-[300px] space-y-5">
      <div className="flex h-[160px] bg-light-gray justify-center items-center text-dirty-pink">
        <FaUser size={30} />
      </div>
      <div>{rating}</div>
      <p>{text}</p>
    </div>
  );
};

const Testemonials = () => {
  return (
    <>
      {/* Mobile */}
      <div className="md:hidden px-4 mt-[90px] space-y-11">
        <h1 className="text-4xl text-center font-semibold">Testemonials</h1>

        <Swiper
          className="[&_.swiper-pagination]:!bottom-[20px] !z-50"
          pagination={true}
          modules={[Pagination]}
        >
          {testemonialData.map((card) => (
            <SwiperSlide className="px-3 mb-14" key={card.id}>
              <Testemonialcard rating={card.rating} text={card.text} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop */}
      <div className="hidden space-y-[50px] mt-[90px] md:flex flex-col items-center px-4">
        <h1 className="text-[36px] font-bold">Testemonials</h1>
        <div className="flex gap-5 items-center">
          <Testemonialcard
            rating={4}
            text="I honestly didn’t expect something so beautiful. The packaging was perfect, and the handwritten note made it feel so personal."
          />
          <Testemonialcard
            rating={4}
            text="I honestly didn’t expect something so beautiful. The packaging was perfect, and the handwritten note made it feel so personal."
          />
          <Testemonialcard
            rating={4}
            text="I honestly didn’t expect something so beautiful. The packaging was perfect, and the handwritten note made it feel so personal."
          />
        </div>
      </div>
    </>
  );
};

export default Testemonials;
