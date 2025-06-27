import { CategoryType, SubCategoryType } from "@/app/types/categories";
import { Dropdown } from "@/app/ui/DropDown";
import Image from "next/image";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface CategoryDropDownProps {
  category: CategoryType;
  label: string;
  handleChooseCatogery: (category: CategoryType) => void;
  handleChooseSubCategory: (category: SubCategoryType) => void;
  selectedCategory: CategoryType;
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
            <Image width={40} height={40} src={category.image} alt={label} />
            <h1 className="text-xl font-medium">{label}</h1>
          </div>
          {selectedCategory ? (
            <IoIosArrowUp className="bg-light-gray rounded-full p-2 box-content stroke-medium-gray" />
          ) : (
            <IoIosArrowDown
              className="bg-light-gray rounded-full p-2 box-content stroke-medium-gray"
              size={25}
            />
          )}
        </div>
      </Dropdown.Trigger>
      <Dropdown.Menu expandMode="overlay">
        {selectedCategory.subCategories.map((subCategory) => (
          <Dropdown.Item
            onSelect={() => handleChooseSubCategory(subCategory)}
            key={subCategory.label}
          >
            {subCategory.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CategoryDropDown;
