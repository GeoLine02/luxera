"use client";

import { Dropdown } from "@/app/ui/DropDown";
import { FaArrowDown } from "react-icons/fa6";
import FilterModal from "./FilterModal";
import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ProductPriceDirectionType } from "@/app/types/product";

/* ================================
   Price direction options
================================ */
const priceDirectionOptions: ProductPriceDirectionType[] = [
  { accessorKey: "asc", label: "From low to high" },
  { accessorKey: "desc", label: "From high to low" },
  { accessorKey: "default", label: "Default" },
];

const ProductFilterMobile = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [priceFrom, setPriceFrom] = useState<string>(
    searchParams.get("priceFrom") ?? ""
  );

  const [priceTo, setPriceTo] = useState<string>(
    searchParams.get("priceTo") ?? ""
  );

  /* ================================
     Get direction from URL → object
  ================================ */
  const initialDirection = useMemo<ProductPriceDirectionType>(() => {
    const directionFromUrl = searchParams.get("priceDirection");

    return (
      priceDirectionOptions.find(
        (option) => option.accessorKey === directionFromUrl
      ) ?? priceDirectionOptions.find((o) => o.accessorKey === "default")!
    );
  }, [searchParams]);

  const [selectedDirection, setSelectedDirection] =
    useState<ProductPriceDirectionType>(initialDirection);

  console.log(isFilterOpen);

  /* ================================
     Apply filters → update URL
  ================================ */
  const handleFilterProducts = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (priceFrom) params.set("priceFrom", priceFrom);
    else params.delete("priceFrom");

    if (priceTo) params.set("priceTo", priceTo);
    else params.delete("priceTo");

    if (selectedDirection.accessorKey !== "default") {
      params.set("priceDirection", selectedDirection.accessorKey);
    } else {
      params.delete("priceDirection");
    }

    router.replace(`${window.location.pathname}?${params.toString()}`);
  };

  return (
    <div className="px-4 md:hidden">
      <Dropdown>
        <Dropdown.Trigger>
          <div
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center justify-between w-full rounded-lg bg-light-pink px-4 py-2"
          >
            <h1 className="text-xl">Filters</h1>
            <FaArrowDown className="p-1.5 rounded-full box-content border border-black" />
          </div>
        </Dropdown.Trigger>

        <Dropdown.Menu className="mt-4" expandMode="overlay">
          <FilterModal
            isModalOpen={isFilterOpen}
            setIsFilterOpen={setIsFilterOpen}
            priceFrom={priceFrom}
            priceTo={priceTo}
            setPriceFrom={setPriceFrom}
            setPriceTo={setPriceTo}
            handleFilterProducts={handleFilterProducts}
            priceDirections={priceDirectionOptions}
            selectedDirection={selectedDirection}
            setSelectedDirection={setSelectedDirection}
          />
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default ProductFilterMobile;
