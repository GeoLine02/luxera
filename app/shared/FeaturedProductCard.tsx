import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface ProductCardProps {
  id: number;
  image: StaticImageData;
  price: number;
}

const FeaturedProductCard = ({ id, image, price }: ProductCardProps) => {
  return (
    <Link
      href={`/${id}`}
      className="border-2 rounded-lg border-ice-blue p-2.5 space-y-1 bg-white flex flex-col items-center cursor-pointer w-full"
    >
      <div className="space-y-1 w-full max-w-[190px]">
        <div className="flex justify-center">
          <Image
            src={image}
            alt="product image"
            className="h-[120px] md:h-full object-cover"
          />
        </div>
        <p className="line-clamp-1 md:line-clamp-2 text-xs lg:text-base font-semibold truncate">
          Lorem ipsum dolor sit amet
        </p>
        <h1 className="font-semibold text-xs lg:text-base">{price} GEL</h1>
      </div>
      <button className="border border-black rounded-md py-1 md:py-2 w-full hover:bg-black hover:text-white text-black text-sm md:text-base transition-all">
        Add to cart
      </button>
    </Link>
  );
};

export default FeaturedProductCard;
