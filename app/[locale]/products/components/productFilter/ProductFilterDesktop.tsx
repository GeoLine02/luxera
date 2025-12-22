"use client";

import Button from "@/app/ui/Button";
import Input from "@/app/ui/Input";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";

const ProductFilterDesktop = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [priceFrom, setPriceFrom] = useState<string>(
    searchParams.get("priceFrom") || ""
  );
  const [priceTo, setPriceTo] = useState<string>(
    searchParams.get("priceTo") || ""
  );
  const params = new URLSearchParams(searchParams.toString());
  const subcateogryWithId = params.get("subcategory");
  const subcategory = subcateogryWithId?.split("-")[0] as string;

  const handleFilterProducts = () => {
    if (priceFrom) params.set("priceFrom", priceFrom.toString());
    else params.delete("priceFrom");
    if (priceTo) params.set("priceTo", priceTo.toString());
    else params.delete("priceTo");
    router.replace(`${window.location.pathname}?${params.toString()}`);
  };

  return (
    <div className="hidden md:block px-4">
      <div className="flex gap-2 items-center mb-6">
        <span>
          <FaLongArrowAltLeft size={25} />
        </span>
        <span className="font-medium text-xl">{subcategory}</span>
      </div>
      <div className="flex gap-5 items-center font-medium">
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
        className="py-2 font-medium mt-5"
        onClick={handleFilterProducts}
      />
    </div>
  );
};

export default ProductFilterDesktop;
