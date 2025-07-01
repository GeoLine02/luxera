import Image, { StaticImageData } from "next/image";
import { IoIosStar } from "react-icons/io";

interface ProductCardProps {
  id: number;
  image: StaticImageData;
  title: string;
  price: number;
}

const ProductCard = ({ image, price, title }: ProductCardProps) => {
  return (
    <div className="border-2 rounded-lg border-ice-blue max-w-[220px] p-2.5 space-y-1 bg-white flex flex-col items-center">
      <div className="space-y-1 md:space-y-1 w-full">
        <div className="flex justify-center">
          <Image
            className="h-[120px] md:h-full object-cover"
            src={image}
            alt="product image"
          />
        </div>
        <h1 className="font-semibold max-w-[310px] truncate">{title}</h1>
        <h1 className="font-semibold">{price} GEL</h1>
      </div>
      <div className="flex items-center gap-1 w-full">
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        (120)
      </div>
      <button className="border border-black rounded-md py-1.5 md:py-2 w-full cursor-pointer hover-transition hover:bg-black hover:text-white text-black">
        Add to cart
      </button>
    </div>
  );
};
export default ProductCard;
