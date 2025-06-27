import { CategoryType, SubCategoryType } from "@/app/types/categories";
import CategoryDropDown from "./CategoryDropDown";
import Modal from "@/app/ui/Modal";
import { IoCloseCircle } from "react-icons/io5";

interface MobileCategoriesModalProps {
  handleChooseCatogery: (category: CategoryType) => void;
  handleChooseSubCategory: (category: SubCategoryType) => void;
  handleCloseModal: () => void;
  categories: CategoryType[];
  selectedCategory: CategoryType;
  selectedSubCategory: string | null;
}

const MobileCategoriesModal = ({
  categories,
  handleChooseCatogery,
  handleChooseSubCategory,
  handleCloseModal,
  selectedCategory,
}: MobileCategoriesModalProps) => {
  return (
    <Modal>
      <div className="bg-white w-screen h-screen">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-xl font-medium">All Categories</h1>
          <IoCloseCircle
            className="cursor-pointer"
            onClick={handleCloseModal}
            size={35}
          />
        </div>
        {categories.map((category) => (
          <CategoryDropDown
            selectedCategory={selectedCategory}
            category={category}
            key={category.label}
            label={category.label}
            handleChooseCatogery={handleChooseCatogery}
            handleChooseSubCategory={handleChooseSubCategory}
          />
        ))}
      </div>
    </Modal>
  );
};

export default MobileCategoriesModal;
