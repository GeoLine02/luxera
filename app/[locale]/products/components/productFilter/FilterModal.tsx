"use client";

import useOutsideClick from "@/app/hooks/useOutSideClick";
import Button from "@/app/ui/Button";
import Input from "@/app/ui/Input";
import classNames from "classnames";

interface FilterModalProps {
  isModalOpen: boolean;
  setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setPriceFrom: React.Dispatch<React.SetStateAction<string>>;
  setPriceTo: React.Dispatch<React.SetStateAction<string>>;
  priceFrom: string;
  priceTo: string;
  handleFilterProducts: () => void;
}

const FilterModal = ({
  isModalOpen,
  setIsFilterOpen,
  setPriceFrom,
  setPriceTo,
  priceFrom,
  priceTo,
  handleFilterProducts,
}: FilterModalProps) => {
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
      className={`${modalToggleStyles} bg-light-pink p-5 space-y-5 rounded-md`}
    >
      <div className="flex gap-5 items-center">
        <div>
          <label htmlFor="PriceFrom">Price From</label>
          <Input
            onChange={(e) => setPriceFrom(e.target.value)}
            value={priceFrom}
            bgColor="white"
            name="priceFrom"
            placeholder="100"
          />
        </div>
        <div>
          <label htmlFor="PriceFrom">Price To</label>
          <Input
            onChange={(e) => setPriceTo(e.target.value)}
            value={priceTo}
            bgColor="white"
            name="priceTo"
            placeholder="100"
          />
        </div>
      </div>
      <Button
        rounded="lg"
        title="Filter"
        type="button"
        bgColor="black"
        titleColor="white"
        className="py-2 font-medium"
        onClick={handleFilterProducts}
      />
    </div>
  );
};

export default FilterModal;
