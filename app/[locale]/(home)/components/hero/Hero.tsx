import Image from "next/image";
import ShopNowButton from "./ShopNowButton";
import HeroPoster from "@/public/HeroPoster.png";

type HeroProps = {
  title?: string;
  desc?: string;
  imageUrl?: string;
  href?: string;
};

const Hero = ({ title, desc, imageUrl, href }: HeroProps) => {
  const heading = title;
  const sub = desc;
  return (
    <div className="bg-light-pink flex flex-col md:items-center lg:flex-row justify-between relative">
      <div className="ml-5 lg:ml-14 mt-16 xs:max-w-[600px] max-w-[320px] md:mx-auto space-y-16 pb-7">
        <div className="space-y-6">
          <h1 className=" text-[40px] lg:text-6xl font-medium">{heading}</h1>
          <p className="text-xl lg:text-2xl">{sub}</p>
        </div>

        <ShopNowButton href={href} />
      </div>
      {imageUrl ? (
        <Image
          className="hidden lg:block"
          src={imageUrl}
          alt="Hero poster"
          width={700}
          height={520}
          priority
        />
      ) : (
        <Image className="hidden lg:block" src={HeroPoster} alt="Hero poster" />
      )}
    </div>
  );
};

export default Hero;
