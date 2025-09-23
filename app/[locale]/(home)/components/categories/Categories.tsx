import { fetchCategoriesData, type ApiCategory } from "@/data/categories";
import { getLocale } from "next-intl/server";
import CategoryCard from "./CategoryCard";

export default async function Categories() {
  const locale = await getLocale();
  const categories: ApiCategory[] = await fetchCategoriesData(locale);

  return (
    <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 px-4 card-container ">
      {categories.map((category) => (
        <CategoryCard
          key={category.label}
          label={category.label}
          image={category.image}
        />
      ))}
    </div>
  );
}
