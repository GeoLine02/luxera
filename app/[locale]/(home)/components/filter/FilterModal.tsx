"use client";

import useOutsideClick from "@/app/hooks/useOutSideClick";
import Input from "@/app/ui/Input";
import classNames from "classnames";

interface FilterModalProps {
  isModalOpen: boolean;
  setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterModal = ({ isModalOpen, setIsFilterOpen }: FilterModalProps) => {
  const modalToggleStyles = classNames("dropdown-animation", {
    "dropdown-open": isModalOpen,
    "dopdown-closed": !isModalOpen,
  });

  const filterRef = useOutsideClick<HTMLDivElement>(() =>
    setIsFilterOpen(false)
  );

  return (
    <div
      ref={filterRef}
      className={`${modalToggleStyles} bg-light-pink p-5 space-y-5`}
    >
      <h1 className="text-xl">Sort By</h1>
      <Input bgColor="white" name="sortBy" placeholder="Default" />
      <div className="flex gap-5 items-center">
        <div>
          <label htmlFor="PriceFrom">Price From</label>
          <Input bgColor="white" name="priceFrom" placeholder="100" />
        </div>
        <div>
          <label htmlFor="PriceFrom">Price To</label>
          <Input bgColor="white" name="priceTo" placeholder="100" />
        </div>
      </div>
      <h1>Showing 1-16 of 32 results</h1>
    </div>
  );
};

export default FilterModal;
