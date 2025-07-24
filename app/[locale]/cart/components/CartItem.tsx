"use client";

import Input from "@/app/ui/Input";
import Image from "next/image";
import CartItemImage from "@/public/CartItemImage.png";
import { FaTrash } from "react-icons/fa";
import { Dropdown } from "@/app/ui/DropDown";
import { IoIosArrowDown } from "react-icons/io";

interface CartItemProps {
  title: string;
  price: number;
  description: string;
  qunatity: number;
}

const quantities = Array.from({ length: 99 }, (_, i) => i + 1);

const CartItem = ({ description, price, qunatity, title }: CartItemProps) => {
  return (
    <div className="flex items-center gap-4 p-4">
      <div>
        <Input type="checkbox" checked={false} name={title} />
      </div>
      <div className="flex gap-4 w-full">
        <div>
          <Image src={CartItemImage} alt={title} />
        </div>
        <div className="w-full">
          <div className="flex justify-between pr-4">
            <h1 className="text-xl">{title}</h1>
            <div>
              <FaTrash
                size={20}
                className="text-medium-gray hover:text-red-500 transition-all duration-300 cursor-pointer"
              />
            </div>
          </div>
          <p>{description}</p>

          <div className="flex items-center justify-between">
            <h1 className="text-xl font-medium">{price} GEL</h1>
            <Dropdown>
              <Dropdown.Trigger>
                <div className="flex items-center border border-medium-gray p-1 px-3 rounded-xl justify-between w-fit gap-2 ">
                  <span>Qty {qunatity}</span>
                  <IoIosArrowDown />
                </div>
              </Dropdown.Trigger>
              <Dropdown.Menu
                className="max-h-[300px] overflow-y-auto"
                expandMode="absolute"
              >
                {quantities.map((quantity) => (
                  <Dropdown.Item key={quantity}>{quantity}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
