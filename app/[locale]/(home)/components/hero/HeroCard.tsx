import { FaArrowRight } from "react-icons/fa6";

const HeroCard = ({ title }: { title: string }) => {
  return (
    <div className="border-2 rounded-lg border-dark-pink bg-warm-white flex flex-col justify-start items-center w-full max-w-[333px] h-[191px] px-6 text-center pt-8">
      <div>
        <FaArrowRight size={25} />
      </div>
      <h1 className="text-[40px] font-FRL font-medium">{title}</h1>
    </div>
  );
};

export default HeroCard;
