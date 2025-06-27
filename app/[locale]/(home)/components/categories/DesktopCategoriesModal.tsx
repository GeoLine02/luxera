import Modal from "@/app/ui/Modal";
import { IoCloseCircle } from "react-icons/io5";
import CategoryModalCard from "./CategoryModalCard";
import { CategoryType, SubCategoryType } from "@/app/types/categories";

interface DesktopCategoriesModalProps {
  handleChooseCatogery: (category: CategoryType) => void;
  handleChooseSubCategory: (category: SubCategoryType) => void;
  handleCloseModal: () => void;
  categories: CategoryType[];
  selectedCategory: CategoryType;
  selectedSubCategory: string | null;
}

const DesktopCategoriesModal = ({
  categories,
  handleChooseCatogery,
  selectedCategory,
  handleCloseModal,
  handleChooseSubCategory,
}: DesktopCategoriesModalProps) => {
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
          <section className="max-w-1/2 lg:min-w-1/5 max-h-full overflow-y-auto space-y-1 border-r border-light-gray">
            <h1 className="text-xl font-medium ml-3">Categoires</h1>

            {categories.map((category) => (
              <div
                onClick={() => handleChooseCatogery(category)}
                key={category.label}
              >
                <CategoryModalCard
                  image={category.image}
                  label={category.label}
                />
              </div>
            ))}
          </section>
          <section className="flex-2/3 flex-wrap ">
            <h1 className="text-xl font-medium">{selectedCategory.label}</h1>
            {selectedCategory.subCategories.map((category) => (
              <div
                onClick={() => handleChooseSubCategory(category)}
                key={category.label}
              >
                <CategoryModalCard
                  label={category.label}
                  image={category.image}
                />
              </div>
            ))}
          </section>
        </div>
      </div>
    </Modal>
  );
};

export default DesktopCategoriesModal;
