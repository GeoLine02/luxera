import Image, { StaticImageData } from "next/image";

interface CategoryCardProps {
  label: string;
  image: StaticImageData;
}

const CategoryCard = ({ image, label }: CategoryCardProps) => {
  return (
    <div
      className={`bg-light-pink rounded-md card px-2 flex items-center justify-around w-full lg:max-w-full h-[120px] cursor-pointer`}
    >
      <h1 className="w-min font-medium text-sm lg:text-xl">{label}</h1>
      <div className="size-20">
        <Image src={image} alt={label + "image"} />
      </div>
    </div>
  );
};

export default CategoryCard;
