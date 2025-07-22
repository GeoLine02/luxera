import Image from "next/image";
import PinkFlowerImage from "@/public/PinkFlowerImage.png";

const Heading = () => {
  return (
    <div>
      <div className="bg-light-pink w-full p-5 flex items-center justify-between">
        <div className="flex h-full justify-end">
          <Image src={PinkFlowerImage} alt="" />
        </div>
        <h1 className="font-FRL text-[64px]">About Us</h1>
        <div>
          <Image src={PinkFlowerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Heading;
