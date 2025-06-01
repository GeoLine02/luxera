import Image from "next/image";
import ShopNowButton from "./ShopNowButton";
import HeroPoster from "@/public/HeroPoster.png";
import HeroCard from "./HeroCard";

const Hero = () => {
  const cardTitles = ["Birthday", "Anniversary", "Personalized gifts"];

  return (
    <div className="bg-light-pink flex justify-between relative">
      <div className="ml-32 mt-16 max-w-[438px] space-y-16">
        <div className="space-y-6">
          <h1 className="max-w-sm text-[64px] font-FRL font-medium">
            Personalized Greetin Cards & Gifts
          </h1>
          <p className="text-2xl">
            Send love with custom cards , flowers, and more thoughtful gifts
          </p>
        </div>

        <ShopNowButton />
      </div>

      <Image src={HeroPoster} alt="Hero poster" />
      <div className="absolute -bottom-36 flex justify-evenly w-full">
        {cardTitles.map((cardTitle) => (
          <HeroCard key={cardTitle} title={cardTitle} />
        ))}
      </div>
    </div>
  );
};

export default Hero;
