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
  onQuantityChange,
  onItemDelete,
}: CartItemProps) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 border-b border-light-gray w-full">
      {/* LEFT SECTION */}
      <div className="flex items-start gap-4 w-full sm:w-auto">
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

          <h2 className="text-xl sm:text-2xl font-medium">{price} GEL</h2>
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
