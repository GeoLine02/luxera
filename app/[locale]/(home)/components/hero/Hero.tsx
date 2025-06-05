import Image from "next/image";
import ShopNowButton from "./ShopNowButton";
import HeroPoster from "@/public/HeroPoster.png";
import HeroCard from "./HeroCard";
import MobileTiles from "./MobileTiles";

const Hero = () => {
  const cardTitles = ["Birthday", "Anniversary", "Personalized gifts"];

  return (
    <div className="bg-light-pink flex flex-col  lg:flex-row justify-between relative">
      <div className="ml-7 lg:ml-32 mt-16 xs:max-w-[600px] max-w-[320px] xl:max-w-[438px] space-y-16 pb-7">
        <div className="space-y-6">
          <h1 className="max-w-sm text-[40px] lg:text-[64px] font-FRL font-medium">
            Personalized Greeting Cards & Gifts
          </h1>
          <p className="text-xl lg:text-2xl">
            Send love with custom cards, flowers, and more thoughtful gifts
          </p>
        </div>

        <ShopNowButton />
        <MobileTiles />
      </div>

      {/* Only visible on large screens */}
      <Image className="hidden lg:block" src={HeroPoster} alt="Hero poster" />

      {/* HeroCards for lg+ only, absolutely positioned */}
      <div className="hidden md:flex lg:absolute md:pb-8 lg:-bottom-36 justify-evenly w-full">
        {cardTitles.map((cardTitle) => (
          <HeroCard key={cardTitle} title={cardTitle} />
        ))}
      </div>
    </div>
  );
};

export default Hero;
