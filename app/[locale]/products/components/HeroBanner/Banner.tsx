import Image from "next/image";
import BannerImage from "@/public/BannerImage.png";
import ProductsHeroBanner from "@/public/ProductHeroBanner.png";
import Button from "@/app/ui/Button";
const Banner = () => {
  return (
    <div className="relative">
      <Image
        className="w-full h-[580px]"
        src={ProductsHeroBanner}
        alt="banner"
      />
      <div className="absolute top-[40px] lg:top-[134px] left-0 right-0 lg:left-[165px] flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-[79px]">
        <Image className="w-[281px]" src={BannerImage} alt="banner image" />
        <div className="space-y-10 lg:space-y-[69px] max-w-[414px] flex flex-col items-center lg:justify-center">
          <h1 className="text-[50px] lg:text-[64px] font-FRL font-semibold px-9">
            Send love with gifts
          </h1>

          <div className="flex items-center gap-16">
            <Button
              rounded="xl"
              title="FOR HIM"
              type="button"
              bgColor="black"
              titleColor="white"
              className="p-3 px-6 !w-fit font-FRL"
            />
            <Button
              rounded="xl"
              title="FOR HER"
              type="button"
              bgColor="black"
              titleColor="white"
              className="p-3 px-6 !w-fit font-FRL"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
