"use client";

import { Dropdown } from "@/app/ui/DropDown";
import Input from "@/app/ui/Input";
import { FaArrowDown } from "react-icons/fa6";
import FilterModal from "./FilterModal";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/app/ui/Button";

const ProductFilter = () => {
  const searchParams = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const router = useRouter();
  const [priceFrom, setPriceFrom] = useState<string>(
    searchParams.get("priceFrom") || ""
  );
  const [priceTo, setPriceTo] = useState<string>(
    searchParams.get("priceTo") || ""
  );

  const handleFilterProducts = () => {
    const params = new URLSearchParams(searchParams.toString());
    if (priceFrom) params.set("priceFrom", priceFrom.toString());
    else params.delete("priceFrom");
    if (priceTo) params.set("priceTo", priceTo.toString());
    else params.delete("priceTo");
    router.replace(`${window.location.pathname}?${params.toString()}`);
  };

  return (
    <>
      <div className="px-4 md:hidden">
        <Dropdown>
          <Dropdown.Trigger>
            <div className="flex items-center justify-between w-ful rounded-lg bg-light-pink px-4 py-2">
              <h1 className="text-xl">Filters</h1>
              <FaArrowDown className="p-1.5 rounded-full box-content border border-black" />
            </div>
          </Dropdown.Trigger>
          <Dropdown.Menu className="mt-4" expandMode="overlay">
            <FilterModal
              setIsFilterOpen={setIsFilterOpen}
              isModalOpen={isFilterOpen}
              priceFrom={priceFrom}
              priceTo={priceTo}
              setPriceFrom={setPriceFrom}
              setPriceTo={setPriceTo}
              handleFilterProducts={handleFilterProducts}
            />
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="bg-light-pink w-full px-11 py-2 hidden items-center justify-between md:flex">
        <h1>Showing 1-18 of 32 results</h1>
        <div className="flex items-center gap-11">
          <div className="flex items-center gap-3">
            <label htmlFor="priceFrom">Price From</label>
            <Input
              bgColor="white"
              name="priceFrom"
              type="text"
              placeholder="0"
              className="max-w-[70px]"
              value={priceFrom}
              onChange={(e) => setPriceFrom(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-3">
            <label htmlFor="priceTo">Price To</label>
            <Input
              bgColor="white"
              name="priceTo"
              type="text"
              placeholder="100"
              className="max-w-[70px]"
              value={priceTo}
              onChange={(e) => setPriceTo(e.target.value)}
            />
          </div>
        </div>
        <Button
          rounded="lg"
          title="Filter"
          className="font-medium py-2 max-w-[100px]"
          type="button"
          bgColor="black"
          titleColor="white"
          onClick={handleFilterProducts}
        />
      </div>
    </>
  );
};

export default ProductFilter;
