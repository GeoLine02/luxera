import { SubCategoryType } from "@/app/types/categories";
import Link from "next/link";
import GiftBoxImage from "@/public/giftbox.png";
import Image from "next/image";

const SubCategoryCard = ({ sub_category_name, id }: SubCategoryType) => {
  return (
    <Link
      href={`/products?subcategory=${sub_category_name}-${id}`}
      className={`bg-light-pink rounded-md px-2 flex items-center justify-around w-full box-border lg:max-w-full h-[90px] cursor-pointer`}
    >
      <h1 className="font-medium">{sub_category_name}</h1>

      <Image height={50} width={50} src={GiftBoxImage} alt={""} />
    </Link>
  );
};

export default SubCategoryCard;
