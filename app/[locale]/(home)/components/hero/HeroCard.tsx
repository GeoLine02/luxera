import { FaArrowRight } from "react-icons/fa6";

const HeroCard = ({ title }: { title: string }) => {
  return (
    <div className="border-2 rounded-lg border-dark-pink bg-warm-white flex flex-col justify-start items-center w-full max-w-[200px] lg:max-w-[333px]  px-6 text-center py-8">
      <div>
        <FaArrowRight size={25} />
      </div>
      <h1 className="text-xl lg:text-[40px] font-FRL font-medium">{title}</h1>
    </div>
  );
};

export default HeroCard;
