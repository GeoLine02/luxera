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
      <div className="absolute top-[134px] left-[165px] flex gap-[79px]">
        <Image src={BannerImage} alt="banner image" />
        <div className="space-y-[69px] max-w-[414px] ">
          <h1 className="text-[64px] font-FRL font-semibold">
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
