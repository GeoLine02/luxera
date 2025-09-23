import { StaticImageData } from "next/image";

export interface SubCategoryType {
  label: string;
  image: StaticImageData | string;
}

export interface CategoryType {
  label: string;
  image: StaticImageData | string;
  subCategories: SubCategoryType[];
}
