import Image, { StaticImageData } from "next/image";
import CategoryImage from "@/public/giftbox.png";

interface CategoryModalCardProps {
  label: string;
  image: StaticImageData | string;
}

const CategoryModalCard = ({ label }: CategoryModalCardProps) => {
  return (
    <div
      className={`hover:bg-light-pink rounded-md  py-2 px-[9px] flex items-center gap-2 cursor-pointer`}
    >
      <Image
        width={40}
        height={40}
        src={CategoryImage}
        alt={label + " image"}
      />

      <h1 className="font-medium">{label}</h1>
    </div>
  );
};

export default CategoryModalCard;
