"use client";

import { ProductPriceDirectionType } from "@/app/types/product";
import Button from "@/app/ui/Button";
import { Dropdown } from "@/app/ui/DropDown";
import Input from "@/app/ui/Input";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";

/* ================================
   Price direction options
================================ */
const priceDirectionOptions: ProductPriceDirectionType[] = [
  { accessorKey: "asc", label: "From low to high" },
  { accessorKey: "desc", label: "From high to low" },
  { accessorKey: "default", label: "Default" },
];

const ProductFilterDesktop = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [priceFrom, setPriceFrom] = useState(
    searchParams.get("priceFrom") ?? ""
  );

  const [priceTo, setPriceTo] = useState(searchParams.get("priceTo") ?? "");

  /* ================================
     Subcategory title
  ================================ */
  const params = new URLSearchParams(searchParams.toString());
  const subcategoryWithId = params.get("subcategory");
  const subcategory = subcategoryWithId?.split("-")[0] ?? "";

  /* ================================
     Direction from URL → object
  ================================ */
  const initialDirection = useMemo<ProductPriceDirectionType>(() => {
    const directionFromUrl = searchParams.get("priceDirection");

    return (
      priceDirectionOptions.find((d) => d.accessorKey === directionFromUrl) ??
      priceDirectionOptions.find((d) => d.accessorKey === "default")!
    );
  }, [searchParams]);

  const [selectedDirection, setSelectedDirection] =
    useState<ProductPriceDirectionType>(initialDirection);

  /* ================================
     Apply filters
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
    <div className="hidden md:block px-4">
      {/* Header */}
      <div className="flex gap-2 items-center mb-6">
        <Link href="/" className="cursor-pointer">
          <FaLongArrowAltLeft size={25} />
        </Link>
        <span className="font-medium text-xl capitalize">{subcategory}</span>
      </div>

      {/* Price range */}
      <div className="flex gap-5 items-center font-medium">
        <div>
          <label htmlFor="priceFrom">Price From</label>
          <Input
            name="priceFrom"
            value={priceFrom}
            onChange={(e) => setPriceFrom(e.target.value)}
            bgcolor="white"
            placeholder="100"
          />
        </div>

        <div>
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

      {/* Price direction */}
      <div className="mt-2">
        <Dropdown>
          <label className="font-medium mb-1 block">Price Direction</label>

          <Dropdown.Trigger className="border-2 border-light-gray py-2 px-6 font-medium rounded-md">
            {selectedDirection.label}
          </Dropdown.Trigger>

          <Dropdown.Menu className="rounded-md" expandMode="absolute">
            {priceDirectionOptions.map((direction) => (
              <Dropdown.Item
                key={direction.accessorKey}
                className="font-medium"
                onSelect={() => setSelectedDirection(direction)}
              >
                {direction.label}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {/* Apply */}
      <Button
        rounded="lg"
        title="Filter"
        type="button"
        bgcolor="black"
        titleColor="white"
        className="py-2 font-medium mt-6"
        onClick={handleFilterProducts}
      />
    </div>
  );
};

export default ProductFilterDesktop;
