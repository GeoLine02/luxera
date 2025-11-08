import { FaArrowRight, FaRegSmile } from "react-icons/fa";

const ReviewInput = () => {
  return (
    <div className="border-2 border-light-gray rounded-3xl px-2 py-3 md:px-4 md:py-3 flex">
      <input
        className="w-full font-medium"
        type="text"
        placeholder="Share your thoughts"
      />
      <div className="flex gap-3 md:gap-6 items-center">
        <div className="cursor-pointer">
          <FaRegSmile size={25} />
        </div>
        <button className="flex items-center justify-center gap-2 bg-black cursor-pointer rounded-full p-2 px-4 whitespace-nowrap">
          <span className="text-white font-medium">Post it!</span>
          <FaArrowRight color="white" size={15} />
        </button>
      </div>
    </div>
  );
};

export default ReviewInput;
