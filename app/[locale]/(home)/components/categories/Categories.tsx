import { categoriesData } from "@/data/categories";
import CategoryCard from "./CategoryCard";
import { FaBars } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store/store";
import { openCategoiresModal } from "@/app/store/features/categoriesSlice";

const Categories = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleOpenCategoriesModal = () => {
    dispatch(openCategoiresModal());
  };

  return (
    <div className="container mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      <div
        onClick={handleOpenCategoriesModal}
        className="bg-black text-white rounded-md w-full h-[128px] cursor-pointer flex items-center justify-center gap-2 max-w-[202px] mx-auto"
      >
        <FaBars size={24} />
        <h1 className="font-medium text-sm sm:text-base lg:text-xl text-center">
          All Categories
        </h1>
      </div>

      {categoriesData.map((category) => (
        <CategoryCard
          key={category.label}
          label={category.label}
          image={category.image}
        />
      ))}
    </div>
  );
};

export default Categories;
