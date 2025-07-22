import Image from "next/image";
import PinkFlowerImage from "@/public/PinkFlowerImage.png";

const Heading = () => {
  return (
    <div>
      <div className="bg-light-pink w-full p-5 relative">
        <Image
          className="absolute bottom-4 left-4"
          src={PinkFlowerImage}
          alt=""
        />

        <h1 className="font-FRL text-center text-[32px] md:text-[64px]">
          About Us
        </h1>

        <Image
          className="absolute top-4 right-4"
          src={PinkFlowerImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default Heading;
