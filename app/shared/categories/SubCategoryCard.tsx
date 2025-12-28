import { SubCategoryType } from "@/app/types/categories";
import Link from "next/link";
import GiftBoxImage from "@/public/giftbox.png";
import Image from "next/image";

const SubCategoryCard = ({ sub_category_name, id }: SubCategoryType) => {
  return (
    <div>
      <Link
        href={`/products?subcategory=${sub_category_name}-${id}`}
        className="bg-light-pink rounded-md px-4 flex items-center gap-4 h-[90px] cursor-pointer w-fit min-w-max whitespace-nowrap"
      >
        <h1 className="font-medium shrink-0">{sub_category_name}</h1>

        <Image
          height={50}
          width={50}
          src={GiftBoxImage}
          alt=""
          className="shrink-0"
        />
      </Link>
    </div>
  );
};

export default SubCategoryCard;
