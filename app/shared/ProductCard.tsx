import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { IoIosStar } from "react-icons/io";

interface ProductCardProps {
  id: number;
  image: StaticImageData;
  title: string;
  price: number;
}

const ProductCard = ({ image, price, title, id }: ProductCardProps) => {
  return (
    <Link
      href={`/${id}`}
      className="border-2 rounded-lg border-ice-blue p-2.5 space-y-1 bg-white flex flex-col items-center cursor-pointer"
    >
      <div className="space-y-1 md:space-y-1 w-full">
        <div className="flex justify-center">
          <Image
            className="h-[120px] md:h-full object-cover"
            src={image}
            alt="product image"
          />
        </div>
        <h1 className="font-semibold text-xs lg:text-base truncate">{title}</h1>
        <h1 className="font-semibold text-xs lg:text-base">{price} GEL</h1>
      </div>
      <div className="flex items-center gap-1 w-full">
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        (120)
      </div>
      <button className="border border-black rounded-md py-1 md:py-2 w-full cursor-pointer hover-transition hover:bg-black hover:text-white text-black text-sm md:text-base">
        Add to cart
      </button>
    </Link>
  );
};
export default ProductCard;
