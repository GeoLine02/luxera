import Image from "next/image";
import CarIcon from "@/public/car.svg";
import { IoTimeOutline } from "react-icons/io5";
import { GoGift } from "react-icons/go";
import PiggyBankIcon from "@/public/PiggyBank.svg";
import HandHeartIcon from "@/public/HandHeartIcon.svg";
const WhyLuxera = () => {
  return (
    <div className="space-y-9 max-w-[350px]">
      <h1 className="font-Inknut-Antiqua">
        why <span className="font-bold">Luxera Gift ?</span>
      </h1>
      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <Image src={CarIcon} alt="" />
          <p> Free delivery everywhere, for a purchase of 50 GEL</p>
        </div>
        <div className="flex items-center gap-3">
          <IoTimeOutline size={25} />
          <p>Choose the time you want</p>
        </div>
        <div className="flex items-center gap-3">
          <GoGift size={25} />
          <p> Free gift wrapping</p>
        </div>
        <div className="flex items-center gap-3">
          <Image src={PiggyBankIcon} alt="" />
          <p>Discounted prices</p>
        </div>
        <div className="flex item-center gap-3">
          <Image src={HandHeartIcon} alt="" />
          <p>
            To support artisans and small businesses. Let&apos;s help them reach
            a wider audience!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyLuxera;
