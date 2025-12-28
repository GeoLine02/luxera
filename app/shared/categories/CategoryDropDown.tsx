import { CategoryType, SubCategoryType } from "@/app/types/categories";
import { Dropdown } from "@/app/ui/DropDown";
import Image from "next/image";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import CategoryImage from "@/public/giftbox.png";
import SubcateogryImage from "@/public/FlowerImage.png";

interface CategoryDropDownProps {
  category: CategoryType;
  label: string;
  handleChooseCatogery: (category: CategoryType) => void;
  handleChooseSubCategory: (category: SubCategoryType) => void;
  selectedCategory: null | CategoryType;
}

const CategoryDropDown = ({
  category,
  label,
  handleChooseCatogery,
  handleChooseSubCategory,
  selectedCategory,
}: CategoryDropDownProps) => {
  return (
    <Dropdown>
      <Dropdown.Trigger>
        <div
          onClick={() => handleChooseCatogery(category)}
          className="flex items-center justify-between p-3 border-b border-b-light-gray"
        >
          <div className="flex items-center gap-5">
            {category.category_image && (
              <Image width={40} height={40} src={CategoryImage} alt={label} />
            )}
            <h1 className="text-xl font-medium">{label}</h1>
          </div>
          {selectedCategory?.category_name === label ? (
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
            key={subCategory.sub_category_name}
          >
            <div className="flex gap-4 items-center">
              <Image
                width={40}
                height={40}
                src={SubcateogryImage}
                alt="subcategory image"
              />
              <h1 className="font-medium">{subCategory.sub_category_name}</h1>
            </div>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CategoryDropDown;
