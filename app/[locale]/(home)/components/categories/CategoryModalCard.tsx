import Image, { StaticImageData } from "next/image";

interface CategoryModalCardProps {
  label: string;
  image: StaticImageData | string;
}

const CategoryModalCard = ({ image, label }: CategoryModalCardProps) => {
  return (
    <div
      className={`hover:bg-light-pink rounded-md  py-2 px-[9px] flex items-center gap-2 cursor-pointer`}
    >
      <Image width={40} height={40} src={image} alt={label + " image"} />
      <h1 className="font-medium">{label}</h1>
    </div>
  );
};

export default CategoryModalCard;
