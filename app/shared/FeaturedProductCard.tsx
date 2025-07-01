import Image, { StaticImageData } from "next/image";

interface ProductCardProps {
  id: number;
  image: StaticImageData;
  price: number;
}

const FeaturedProductCard = ({ image, price }: ProductCardProps) => {
  return (
    <div className="select-none border-2 rounded-lg border-ice-blue p-2.5 min-w-[220px] max-w-[220px] space-y-2 bg-white flex flex-col items-center">
      <div className=" flex flex-col items-center space-y-1 md:space-y-2">
        <Image src={image} alt="product image" />
        <p className="line-clamp-1 md:line-clamp-2 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odit
          maxime obcaecati fuga odio alias, error placeat dolores unde neque
          corrupti consequatur blanditiis architecto, ut consectetur officia
          velit exercitationem nihil.
        </p>

        <h1 className="font-semibold w-full">{price} GEL</h1>
      </div>

      <button className="border-2 border-dirty-pink rounded-md py-2 w-full cursor-pointer transition-all duration-200 hover:bg-dirty-pink hover:text-white text-dirty-pink">
        Add to cart
      </button>
    </div>
  );
};

export default FeaturedProductCard;
