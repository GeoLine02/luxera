"use client";

import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import { Dropdown } from "@/app/ui/DropDown";

interface CartItemProps {
  id: number;
  title: string;
  price: number;
  description: string;
  quantity: number;
  image: string;
  discount: number; // added
  selected: boolean;
  onSelectChange: (cartItemId: number, selected: boolean) => void;
  onQuantityChange: (cartItemId: number, quantity: number) => void;
  onItemDelete: (cartItemId: number) => void;
}

const quantityOptions = Array.from({ length: 99 }, (_, i) => i + 1);

const CartItem = ({
  id,
  description,
  price,
  quantity,
  title,
  image,
  discount,
  selected,
  onSelectChange,
  onQuantityChange,
  onItemDelete,
}: CartItemProps) => {
  const hasDiscount = discount > 0;
  const discountedPrice = hasDiscount ? price * (1 - discount / 100) : price;

  const savings = hasDiscount ? price - discountedPrice : 0;

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 border-b border-light-gray w-full">
      {/* LEFT SECTION */}
      <div className="flex items-start gap-4 w-full sm:w-auto">
        {/* Checkbox */}
        <input
          type="checkbox"
          checked={selected}
          onChange={(e) => onSelectChange(id, e.target.checked)}
          className="mt-1 w-5 h-5"
        />

        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="rounded-lg w-24 h-24 object-cover sm:w-28 sm:h-28"
        />

        <div className="space-y-1 flex-1">
          <h1 className="text-lg sm:text-xl font-semibold">{title}</h1>

          <p className="text-gray-600 text-sm max-w-[200px] truncate sm:max-w-full">
            {description}
          </p>

          {/* Price with discount */}
          <div className="flex items-center gap-3 flex-wrap mt-1">
            <span className="text-xl sm:text-2xl font-bold text-gray-900">
              {discountedPrice.toFixed(2)} GEL
            </span>

            {hasDiscount && (
              <>
                <span className="text-lg text-gray-400 line-through">
                  {price.toFixed(2)} GEL
                </span>
                <span className="bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded-md">
                  -{discount}%
                </span>
              </>
            )}
          </div>

          {hasDiscount && (
            <p className="text-sm text-green-600 font-medium mt-1">
              You save {savings.toFixed(2)} GEL
            </p>
          )}
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex sm:flex-col gap-4 items-center sm:items-end ml-auto">
        {/* Quantity Dropdown */}
        <Dropdown>
          <Dropdown.Trigger className="font-semibold px-4 py-2 border border-light-gray rounded-lg text-sm w-[90px] text-center">
            Qty {quantity}
          </Dropdown.Trigger>

          <Dropdown.Menu
            className="max-h-[250px] overflow-auto !top-11"
            expandMode="absolute"
          >
            {quantityOptions.map((option) => (
              <Dropdown.Item
                onSelect={() => onQuantityChange(id, option)}
                className="text-center cursor-pointer hover:bg-light-pink/20 px-2 py-1"
                key={option}
              >
                {option}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        {/* Delete */}
        <FaTrash
          onClick={() => onItemDelete(id)}
          size={22}
          className="text-light-pink cursor-pointer hover:text-pink-600 transition"
        />
      </div>
    </div>
  );
};

export default CartItem;
