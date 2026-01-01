import { CategoryType, SubCategoryType } from "@/app/types/categories";
import { Dropdown } from "@/app/ui/DropDown";
import Image from "next/image";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import CategoryImage from "@/public/giftbox.png";
import SubcateogryImage from "@/public/FlowerImage.png";
import { useLocale } from "next-intl";

interface CategoryDropDownProps {
  category: CategoryType;
  category_name: string;
  category_name_ka: string;
  handleChooseCatogery: (category: CategoryType) => void;
  handleChooseSubCategory: (category: SubCategoryType) => void;
  selectedCategory: null | CategoryType;
}

const CategoryDropDown = ({
  category,
  category_name,
  category_name_ka,
  handleChooseCatogery,
  handleChooseSubCategory,
  selectedCategory,
}: CategoryDropDownProps) => {
  const locale = useLocale();

  return (
    <Dropdown>
      <Dropdown.Trigger>
        <div
          onClick={() => handleChooseCatogery(category)}
          className="flex items-center justify-between p-3 border-b border-b-light-gray"
        >
          <div className="flex items-center gap-5">
            {category.category_image && (
              <Image
                width={40}
                height={40}
                src={CategoryImage}
                alt={category_name}
              />
            )}
            <h1 className="text-xl font-medium">
              {locale === "en" ? category_name : category_name_ka}
            </h1>
          </div>
          {selectedCategory?.category_name === category_name ||
          selectedCategory?.category_name_ka === category_name_ka ? (
            <IoIosArrowUp
              size={25}
              className="bg-light-gray rounded-full p-2 box-content stroke-medium-gray"
            />
          ) : (
            <IoIosArrowDown
              className="bg-light-gray rounded-full p-2 box-content stroke-medium-gray"
              size={25}
            />
          )}
        </div>
      </Dropdown.Trigger>
      <Dropdown.Menu expandMode="overlay">
        {selectedCategory?.subCategories.map((subCategory) => (
          <Dropdown.Item
            onSelect={() => handleChooseSubCategory(subCategory)}
            key={subCategory.id}
          >
            <div className="flex gap-4 items-center">
              <Image
                width={40}
                height={40}
                src={SubcateogryImage}
                alt="subcategory image"
              />
              <h1 className="font-medium">
                {locale === "en"
                  ? subCategory.sub_category_name
                  : subCategory.sub_category_name_ka}
              </h1>
            </div>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CategoryDropDown;
