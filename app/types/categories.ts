import { StaticImageData } from "next/image";

export interface SubCategoryType {
  label: string;
  image: StaticImageData;
}

export interface CategoryType {
  label: string;
  image: StaticImageData;
  subCategories: SubCategoryType[];
}
