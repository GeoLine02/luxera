// import { StaticImageData } from "next/image";
import { FaUser } from "react-icons/fa";
interface TestemonialCardProps {
  //   image: StaticImageData;
  rating: number;
  text: string;
}

const Testemonialcard = ({ rating, text }: TestemonialCardProps) => {
  return (
    <div className="max-w-[300px] space-y-5">
      <div className="flex h-[160px] bg-light-gray justify-center items-center text-dirty-pink">
        <FaUser size={30} />
      </div>
      <div>{rating}</div>
      <p>{text}</p>
    </div>
  );
};

const Testemonials = () => {
  return (
    <div className="space-y-[50px] mt-[90px] flex flex-col items-center">
      <h1 className="text-[36px] font-bold">Testemonials</h1>
      <div className="flex gap-5 items-center">
        <Testemonialcard
          rating={4}
          text="I honestly didn’t expect something so beautiful. The packaging was perfect, and the handwritten note made it feel so personal."
        />
        <Testemonialcard
          rating={4}
          text="I honestly didn’t expect something so beautiful. The packaging was perfect, and the handwritten note made it feel so personal."
        />
        <Testemonialcard
          rating={4}
          text="I honestly didn’t expect something so beautiful. The packaging was perfect, and the handwritten note made it feel so personal."
        />
      </div>
    </div>
  );
};

export default Testemonials;
