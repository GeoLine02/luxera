import Image from "next/image";
import ShopNowButton from "./ShopNowButton";
import HeroPoster from "@/public/HeroPoster.png";

const Hero = () => {
  return (
    <div className="bg-light-pink flex flex-col md:items-center lg:flex-row justify-between relative">
      <div className="ml-5 lg:ml-14 mt-16 xs:max-w-[600px] max-w-[320px] md:mx-auto space-y-16 pb-7">
        <div className="space-y-6">
          <h1 className=" text-[40px] lg:text-6xl font-FRL font-medium">
            Personalized Greeting Cards & Gifts
          </h1>
          <p className="text-xl lg:text-2xl">
            Send love with custom cards, flowers, and more thoughtful gifts
          </p>
        </div>

        <ShopNowButton />
      </div>
      <Image className="hidden lg:block" src={HeroPoster} alt="Hero poster" />
    </div>
  );
};

export default Hero;
