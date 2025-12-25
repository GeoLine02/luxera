import { SubCategoryType } from "@/app/types/categories";
import Link from "next/link";

const SubCategoryCard = ({ sub_category_name, id }: SubCategoryType) => {
  return (
    <Link
      href={`/products?subcategory=${sub_category_name}-${id}`}
      className={`bg-light-pink rounded-md card px-2 flex items-center justify-around w-full  box-border lg:max-w-full h-[90px] cursor-pointer`}
    >
      <h1 className="w-min font-medium">{sub_category_name}</h1>

      {/* <Image
        height={50}
        width={50}
        src={subCategoryImage}
        alt={subCategoryName + "image"}
      /> */}
    </Link>
  );
};

export default SubCategoryCard;
