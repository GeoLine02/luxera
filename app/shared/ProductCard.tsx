import Image, { StaticImageData } from "next/image";

interface ProductCardProps {
  id: number;
  image: StaticImageData;
  title: string;
  price: number;
}

const ProductCard = ({ image, price, title }: ProductCardProps) => {
  return (
    <div className="border-2 rounded-md border-ice-blue  max-w-[260px] md:min-w-[310px] p-2 lg:max-w-[310px] space-y-2 bg-white flex flex-col items-center">
      <div className="space-y-6 w-full">
        <div className="flex justify-center">
          <Image src={image} alt="product image" />
        </div>
        <h1 className="font-semibold max-w-[310px] truncate">{title}</h1>
        <h1 className="font-semibold">{price} GEL</h1>
      </div>
      <button className="border border-black rounded-md py-2 w-full cursor-pointer hover-transition hover:bg-black hover:text-white text-black">
        Add to cart
      </button>
    </div>
  );
};
export default ProductCard;
