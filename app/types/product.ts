import { SubCategoryType } from "./categories";
import { ShopType } from "./shop";
import { User } from "./user";

export interface ProductType {
  id: number;
  product_rating: number;
  product_price: number;
  produt_status: string;
  product_subcategory_id: number;
  product_category_id: number;
  product_description: string;
  product_owner_id: number;
  shop_id: number;
  variants: ProductVariantType[];
}
export type ProductWithPrimaryVariant = Omit<ProductType, "variants"> & {
  primaryVariant: ProductVariantType & {
    image: string;
  };
};

export interface ProductDetailsType extends ProductType {
  images: ProductImageType[];
  product_description: string;
  owner: User;
  shop: ShopType;
}

export interface ProductImageType {
  id: number;
  imageUrl: string;
}

export interface ProductFormType {
  id?: number | undefined;
  product_description: string;
  product_variants: ProductVariantType[];
  product_category: {
    id: number;
    category_name: string;
    category_name_ka: string;
    subCategories: Omit<SubCategoryType, "sub_category_image">[];
  } | null;
  product_sub_category: Omit<SubCategoryType, "sub_category_image"> | null;
}

export interface UpdateProductFormType extends ProductFormType {
  deletedImageIds?: number[];
}

export type ProductVariantType = {
  id?: number | string;
  variant_name: string;
  variant_price: number;
  variant_quantity: number;
  variant_discount: number;
  product_id?: number;
  images: (ProductImageType | File)[];
};

export type SellerProductStatusType = "active" | "inactive" | "outOfStock";

export interface SellerProductType extends ProductType {
  title: string;
  id: number;
  views_per_day: number;
  views_per_month: number;
  sales_per_day: number;
  sales_per_month: number;
  product_status: SellerProductStatusType;
  product_subcategory_id: number;
  primaryVariant: ProductVariantType;
}

export interface ProductPriceDirectionType {
  accessorKey: string;
  label: string;
}
