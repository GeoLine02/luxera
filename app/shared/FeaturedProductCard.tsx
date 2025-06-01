import Image, { StaticImageData } from "next/image";

interface ProductCardProps {
  id: number;
  image: StaticImageData;
  price: number;
}

const FeaturedProductCard = ({ image, price }: ProductCardProps) => {
  return (
    <div className="select-none border-2 rounded-md border-ice-blue p-2 min-w-[310px] max-w-[310px] space-y-2 bg-white flex flex-col items-center">
      <div className="">
        <Image src={image} alt="product image" />
        <h1 className="font-semibold">{price} GEL</h1>
      </div>

      <button className="border-2 border-dirty-pink rounded-md py-2 w-full cursor-pointer transition-all duration-200 hover:bg-dirty-pink hover:text-white text-dirty-pink">
        Add to cart
      </button>
    </div>
  );
};

export default FeaturedProductCard;
