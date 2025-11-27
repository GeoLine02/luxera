import { StaticImageData } from "next/image";

export interface SubCategoryType {
  id: number;
  sub_category_name: string;
  sub_category_image: StaticImageData | string;
  category_id: number;
}

export interface CategoryType {
  id: number;
  category_name: string;
  category_image: StaticImageData | string;
  subCategories: SubCategoryType[];
}
