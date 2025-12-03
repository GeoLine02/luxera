import { SubCategoryType } from "./categories";
import { User } from "./user";

export interface ProductType {
  id: number;
  product_rating: number;
  product_price: number;
  produt_status: string;
  product_subcategory_id: number;
  product_description: string;
  product_owner_id: number;
  shop_id: number;
  variants: ProductVariantType[];
}

export interface ProductDetailsType extends ProductType {
  images: ProductImageType[];
  product_description: string;
  owner: User;
}

export interface ProductImageType {
  id: number;
  image: string;
  productId: number;
  variant_id: number;
}

// export interface ProductFormType {
//   product_description: string;
//   product_variants: ProductVariantType[];
//   product_category: Omit<CategoryType, "category_image"> | null;
//   product_sub_category: Omit<SubCategoryType, "sub_category_image"> | null;
// }

export interface ProductFormType {
  product_description: string;
  product_variants: ProductVariantType[];
  product_category: {
    id: number;
    category_name: string;
    subCategories: Omit<SubCategoryType, "sub_category_image">[];
  } | null;
  product_sub_category: Omit<SubCategoryType, "sub_category_image"> | null;
}

export type ProductVariantType = {
  id?: number | string;
  variant_name: string;
  variant_price: number;
  variant_quantity: number;
  variant_discount: number;
  product_id?: number;
  images: { id: number; image: string }[] | File[];
};

export type SellerProductStatusType = "active" | "inactive" | "outOfStock";

export interface SellersProductType {
  title: string;
  id: string;
  views: string;
  sales: string;
  status: SellerProductStatusType;
}
