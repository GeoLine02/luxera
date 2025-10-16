import { SubCategoryType } from "@/app/types/categories";
import Image from "next/image";

const SubCategoryCard = ({
  subCategoryImage,
  subCategoryName,
}: SubCategoryType) => {
  // const backendUrl = process.env.NEXT_PUBLIC_API_URL; // e.g., http://localhost:4000
  // const imageUrl = `${backendUrl}${
  //   subCategoryImage.startsWith("/") ? "" : "/"
  // }${subCategoryImage}`;

  return (
    <div
      className={`bg-light-pink rounded-md card px-2 flex items-center justify-around w-full  box-border lg:max-w-full h-[90px] cursor-pointer`}
    >
      <h1 className="w-min font-medium">{subCategoryName}</h1>

      {/* <Image
        height={50}
        width={50}
        src={subCategoryImage}
        alt={subCategoryName + "image"}
      /> */}
    </div>
  );
};

export default SubCategoryCard;
