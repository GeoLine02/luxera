import Image from "next/image";
import Link from "next/link";
import { IoIosStar } from "react-icons/io";

interface ProductCardProps {
  id: number;
  price: number;
  title: string;
  imageUrl: string;
}

const ProductCard = ({ price, title, id, imageUrl }: ProductCardProps) => {
  console.log("123123", imageUrl);
  return (
    <Link
      href={`/product/${title}-${id}`}
      className="border-2 rounded-lg border-ice-blue p-2 lg:p-4 space-y-1 bg-white flex flex-col items-center cursor-pointer hover:shadow-lg transition-shadow duration-200 w-full max-w-[300px]"
    >
      <div className="space-y-1 w-full">
        {/* Image Container */}
        <div className="flex justify-center w-full aspect-square relative overflow-hidden rounded-md sm:rounded-lg md:rounded-xl">
          {imageUrl ? (
            <Image
              className="object-cover w-full h-full"
              src={imageUrl}
              alt={title}
              width={256}
              height={256}
              sizes="256px"
            />
          ) : (
            <div
              className="w-full h-full bg-light-gray rounded"
              aria-hidden="true"
            />
          )}
        </div>

        {/* Title */}
        <h2 className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg truncate w-full">
          {title}
        </h2>

        {/* Price */}
        <p className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg text-gray-900">
          {price} GEL
        </p>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-0.5 sm:gap-1 w-full text-yellow-500 mb-2">
        <IoIosStar className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
        <IoIosStar className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
        <IoIosStar className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
        <IoIosStar className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
        <IoIosStar className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
        <span className="text-[10px] sm:text-xs md:text-sm text-gray-600 ml-1">
          (120)
        </span>
      </div>

      {/* Add to Cart Button */}
      <button className="border border-black rounded-md py-1.5 sm:py-2 md:py-2.5 lg:py-3 w-full cursor-pointer transition-all duration-200 hover:bg-black hover:text-white text-black text-xs sm:text-sm md:text-base font-medium">
        Add to cart
      </button>
    </Link>
  );
};

export default ProductCard;
