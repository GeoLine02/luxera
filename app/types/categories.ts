import { StaticImageData } from "next/image";

export interface SubCategoryType {
  id: number;
  subCategoryName: string;
  subCategoryImage: StaticImageData | string;
  categoryId: number;
}

export interface CategoryType {
  label: string;
  image: StaticImageData | string;
  subCategories: SubCategoryType[];
}
