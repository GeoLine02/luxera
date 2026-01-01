import Modal from "@/app/ui/Modal";
import { IoCloseCircle } from "react-icons/io5";
import CategoryModalCard from "./CategoryModalCard";
import { CategoryType, SubCategoryType } from "@/app/types/categories";
import { useLocale } from "next-intl";

interface DesktopCategoriesModalProps {
  handleChooseCatogery: (category: CategoryType) => void;
  handleChooseSubCategory: (subcategory: SubCategoryType) => void;
  handleCloseModal: () => void;
  categories: CategoryType[];
  selectedCategory: null | CategoryType;
  selectedSubCategory: string | null;
}

const DesktopCategoriesModal = ({
  categories,
  handleChooseCatogery,
  selectedCategory,
  handleCloseModal,
  handleChooseSubCategory,
}: DesktopCategoriesModalProps) => {
  const locale = useLocale();

  return (
    <Modal>
      <div className="min-h-[calc(100vh-50px)] min-w-[calc(100vw-80px)] bg-white p-3 rounded-xl">
        {/* modal close button */}
        <div className="flex items-center justify-end">
          <IoCloseCircle
            className="cursor-pointer"
            onClick={handleCloseModal}
            size={35}
          />
        </div>

        <div className="flex gap-4">
          {/* Left: Main Categories */}
          <section className="max-w-1/2 lg:min-w-1/5 max-h-full overflow-y-auto border-r border-light-gray">
            <h1 className="text-xl font-medium ml-3 mb-2">
              {locale === "en" ? "Categories" : "კატეგორიები"}
            </h1>
            <div className="space-y-1 px-2">
              {categories.map((category) => (
                <div
                  onClick={() => handleChooseCatogery(category)}
                  key={category.id}
                >
                  <CategoryModalCard
                    image={category.category_image}
                    category_name={category.category_name}
                    category_name_ka={category.category_name_ka}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Right: Subcategories in two columns */}
          <section className="flex-2/3 flex-wrap w-full px-4">
            <h1 className="text-xl font-medium mb-2">
              {locale === "en"
                ? selectedCategory?.category_name
                : selectedCategory?.category_name_ka}
            </h1>
            <div className="grid grid-cols-2 gap-3">
              {selectedCategory?.subCategories.map((subcategory) => (
                <div
                  onClick={() => handleChooseSubCategory(subcategory)}
                  key={subcategory.id}
                >
                  <CategoryModalCard
                    category_name={subcategory.sub_category_name}
                    category_name_ka={subcategory.sub_category_name_ka}
                    image={subcategory.sub_category_image}
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Modal>
  );
};

export default DesktopCategoriesModal;
