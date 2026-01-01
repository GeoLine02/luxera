import Image, { StaticImageData } from "next/image";
import CategoryImage from "@/public/giftbox.png";
import { useLocale } from "next-intl";

interface CategoryModalCardProps {
  category_name: string;
  category_name_ka: string;
  image: StaticImageData | string;
}

const CategoryModalCard = ({
  category_name,
  category_name_ka,
}: CategoryModalCardProps) => {
  const locale = useLocale();

  return (
    <div
      className={`hover:bg-light-pink rounded-md  py-2 px-[9px] flex items-center gap-2 cursor-pointer`}
    >
      <Image
        width={40}
        height={40}
        src={CategoryImage}
        alt={(locale === "en" ? category_name : category_name_ka) + " image"}
      />

      <h1 className="font-medium">
        {locale === "en" ? category_name : category_name_ka}
      </h1>
    </div>
  );
};

export default CategoryModalCard;
