import Image from "next/image";
import FlowerImage from "@/public/FlowerImage.png";
import HelpCenterButton from "./HelpCenterButton";
import WhatIsLuxera from "./WhatIsLuxera";
import WhyLuxera from "./WhyLuxera";

const AboutLuxera = () => {
  return (
    <div className="bg-[#ECE0DE] py-[75px] px-[100px] flex flex-col w-full items-center gap-11 justify-center space-y-[11px]">
      <div className="flex justify-between w-full">
        <WhatIsLuxera />
        <Image src={FlowerImage} alt="Flower image" />
        <WhyLuxera />
      </div>
      <h1 className="text-2xl">Have a question? we can help you !</h1>
      <HelpCenterButton />
    </div>
  );
};

export default AboutLuxera;
