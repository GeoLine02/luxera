"use client";

import { categoriesData } from "@/data/categories";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 px-4 card-container ">
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
