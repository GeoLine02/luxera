import Image, { StaticImageData } from "next/image";

interface CategoryCardProps {
  label: string;
  image: string | StaticImageData;
}

const CategoryCard = ({ image, label }: CategoryCardProps) => {
  return (
    <div
      className={`bg-light-pink rounded-md card px-2 flex items-center justify-around w-full  box-border lg:max-w-full h-[90px] cursor-pointer`}
    >
      <h1 className="w-min font-medium">{label}</h1>

      <Image height={50} width={50} src={image} alt={label + "image"} />
    </div>
  );
};

export default CategoryCard;
