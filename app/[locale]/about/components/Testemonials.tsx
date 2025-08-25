"use client";
import { FaUser } from "react-icons/fa";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import SwiperSlider from "@/app/shared/SwiperSlider";

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
  {
    id: 4,
    rating: 4,
    text: "I honestly didn’t expect something so beautiful. The packaging was perfect, and the handwritten note made it feel so personal.",
  },
  {
    id: 5,
    rating: 4,
    text: "I honestly didn’t expect something so beautiful. The packaging was perfect, and the handwritten note made it feel so personal.",
  },
  {
    id: 6,
    rating: 4,
    text: "I honestly didn’t expect something so beautiful. The packaging was perfect, and the handwritten note made it feel so personal.",
  },
  {
    id: 7,
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
    <div className="px-4 mt-[90px] space-y-11 max-w-[1000px] mx-auto">
      <SwiperSlider
        data={testemonialData}
        renderCard={(data) => (
          <Testemonialcard rating={data.rating} text={data.text} />
        )}
        title="Testemonials"
        titleWeight="medium"
        titleFont="default"
      />
    </div>
  );
};

export default Testemonials;
