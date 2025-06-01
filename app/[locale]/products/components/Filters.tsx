import { BsGridFill, BsSliders } from "react-icons/bs";
import { PiSlideshow } from "react-icons/pi";

const Filters = () => {
  return (
    <div className="flex items-center justify-between px-[100px] py-6 bg-light-pink">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <div className="cursor-pointer">
            <BsSliders size={25} />
          </div>
          <span>Filter</span>
        </div>
        <div className="cursor-pointer">
          <BsGridFill size={25} />
        </div>
        <div className="cursor-pointer">
          <PiSlideshow size={25} />
        </div>

        <div className="w-[1px] h-full border-l border-medium-gray"></div>

        <p>Showing 1–16 of 32 results</p>
      </div>
      <div className="flex gap-7">
        <div className="flex items-center gap-3 text-lg">
          <span className="">Show</span>
          <input
            className="bg-white w-[55px] aspect-square focus:border-none outline-none text-center"
            placeholder="16"
          />
        </div>
        <div className="flex items-center gap-3 text-lg">
          <span>Sort by</span>
          <input
            className="bg-white focus:border-none max-w-[188px] h-[55px] px-4 outline-none"
            placeholder="Default"
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
