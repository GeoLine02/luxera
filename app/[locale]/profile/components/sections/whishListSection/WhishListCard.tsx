import Image from "next/image";
import CartItemImage from "@/public/CartItemImage.png";
import { IoCloseCircle } from "react-icons/io5";

interface WhishListCardProps {
  id: number;
  title: string;
  price: number;
  description: string;
}

const WhishListCard = ({ description, price, title }: WhishListCardProps) => {
  return (
    <div className="relative flex items-center gap-4 cursor-pointer bg-light-pink rounded-3xl p-4 shadow-md mt-4">
      {/* Product Image */}
      <div className="flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border">
        <Image
          src={CartItemImage}
          alt="wishlist product image"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col min-w-0 w-full pr-8">
        {" "}
        {/* pr-8 to give space for close icon */}
        <h1 className="text-base font-semibold text-gray-800">{title}</h1>
        <p className="text-sm text-gray-600 line-clamp-3 break-words overflow-hidden">
          {description}
        </p>
        <h2 className="text-sm font-bold text-gray-700 mt-1">{price} GEL</h2>
      </div>

      {/* Remove Button */}
      <button className="absolute top-2 right-2  hover:text-red-600">
        <IoCloseCircle size={25} />
      </button>
    </div>
  );
};

export default WhishListCard;
