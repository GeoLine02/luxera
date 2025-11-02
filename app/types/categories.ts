import { StaticImageData } from "next/image";

export interface SubCategoryType {
  id: number;
  subCategoryName: string;
  subCategoryImage: StaticImageData | string;
  categoryId: number;
}

export interface CategoryType {
  id: number;
  categoryName: string;
  categoryImage: StaticImageData | string;
  subCategories: SubCategoryType[];
}
