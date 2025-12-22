"use client";

import { Dropdown } from "@/app/ui/DropDown";
import { FaArrowDown } from "react-icons/fa6";
import FilterModal from "./FilterModal";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const ProductFilterMobile = () => {
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
    </>
  );
};

export default ProductFilterMobile;
