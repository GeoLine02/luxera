"use client";

import Button from "@/app/ui/Button";
import { FaCartShopping } from "react-icons/fa6";

const AddToCartBtn = () => {
  const handleAddToCart = () => {};

  return (
    <Button
      rounded="full"
      title="Add to cart"
      type="button"
      bgColor="transparent"
      className="max-w-[141px] flex items-center gap-4 border-2 border-medium-gray px-3 py-2 text-medium-gray"
      titleColor="black"
      icon={<FaCartShopping />}
      onClick={handleAddToCart}
    />
  );
};

export default AddToCartBtn;
