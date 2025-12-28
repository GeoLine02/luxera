"use client";

import useOutsideClick from "@/app/hooks/useOutSideClick";
import Button from "@/app/ui/Button";
import { Dropdown } from "@/app/ui/DropDown";
import Input from "@/app/ui/Input";
import classNames from "classnames";
import { ProductPriceDirectionType } from "@/app/types/product";

interface FilterModalProps {
  isModalOpen: boolean;
  setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;

  priceFrom: string;
  priceTo: string;
  setPriceFrom: React.Dispatch<React.SetStateAction<string>>;
  setPriceTo: React.Dispatch<React.SetStateAction<string>>;

  priceDirections: ProductPriceDirectionType[];
  selectedDirection: ProductPriceDirectionType;
  setSelectedDirection: React.Dispatch<
    React.SetStateAction<ProductPriceDirectionType>
  >;

  handleFilterProducts: () => void;
}

const FilterModal = ({
  setIsFilterOpen,
  priceFrom,
  priceTo,
  setPriceFrom,
  setPriceTo,
  priceDirections,
  selectedDirection,
  setSelectedDirection,
  handleFilterProducts,
}: FilterModalProps) => {
  const filterRef = useOutsideClick<HTMLDivElement>(() =>
    setIsFilterOpen(false)
  );

  return (
    <div ref={filterRef} className={`bg-light-pink p-5 space-y-5 rounded-md`}>
      {/* Price inputs */}
      <div className="flex gap-5 items-center">
        <div className="flex-1">
          <label htmlFor="priceFrom">Price From</label>
          <Input
            name="priceFrom"
            value={priceFrom}
            onChange={(e) => setPriceFrom(e.target.value)}
            bgcolor="white"
            placeholder="100"
          />
        </div>

        <div className="flex-1">
          <label htmlFor="priceTo">Price To</label>
          <Input
            name="priceTo"
            value={priceTo}
            onChange={(e) => setPriceTo(e.target.value)}
            bgcolor="white"
            placeholder="100"
          />
        </div>
      </div>

      {/* Price direction dropdown */}
      <div>
        <Dropdown>
          <Dropdown.Trigger>
            <div className="px-3 py-2 bg-white rounded-md">
              {selectedDirection.label}
            </div>
          </Dropdown.Trigger>

          <Dropdown.Menu className="!top-11" expandMode="absolute">
            {priceDirections.map((direction) => (
              <Dropdown.Item
                key={direction.accessorKey}
                onSelect={() => setSelectedDirection(direction)}
              >
                {direction.label}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {/* Apply filter */}
      <Button
        rounded="lg"
        title="Filter"
        type="button"
        bgcolor="black"
        titleColor="white"
        className="py-2 font-medium w-full"
        onClick={handleFilterProducts}
      />
    </div>
  );
};

export default FilterModal;
