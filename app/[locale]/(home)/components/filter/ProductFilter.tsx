import { Dropdown } from "@/app/ui/DropDown";
import Input from "@/app/ui/Input";
import { FaArrowDown } from "react-icons/fa6";
import FilterModal from "./FilterModal";
import { useState } from "react";

const ProductFilter = () => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  return (
    <>
      <Dropdown>
        <Dropdown.Trigger>
          <div className="flex items-center justify-between w-full bg-light-pink px-4 py-2 md:hidden">
            <h1 className="text-xl">Filters</h1>
            <FaArrowDown className="p-1.5 rounded-full box-content border border-black" />
          </div>
        </Dropdown.Trigger>
        <Dropdown.Menu expandMode="absolute">
          <FilterModal
            setIsFilterOpen={setIsFilterOpen}
            isModalOpen={isFilterOpen}
          />
        </Dropdown.Menu>
      </Dropdown>

      <div className="bg-light-pink w-full px-11 py-2 hidden items-center justify-between md:flex">
        <h1>Showing 1-18 of 32 results</h1>
        <div className="flex items-center gap-11">
          <div className="flex items-center gap-3">
            <label htmlFor="priceFrom">Price From</label>
            <Input
              bgColor="lightGray"
              name="priceFrom"
              type="text"
              placeholder="0"
              className="max-w-[70px]"
            />
          </div>
          <div className="flex items-center gap-3">
            <label htmlFor="priceTo">Price To</label>
            <Input
              bgColor="lightGray"
              name="priceTo"
              type="text"
              placeholder="100"
              className="max-w-[70px]"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <label htmlFor="sortBy">Sort By</label>
          <Input
            bgColor="lightGray"
            name="sortBy"
            type="text"
            placeholder="Default"
            className="max-w-[120px]"
          />
        </div>
      </div>
    </>
  );
};

export default ProductFilter;
