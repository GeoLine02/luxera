import { CategoryType, SubCategoryType } from "./categories";

export interface ProductType {
  id: number;
  product_image: string;
  product_name: string;
  product_rating: number;
  product_price: number;
  produt_status: string;
  product_category_id: number;
  product_owner_id: number;
}

export interface NewProductValues {
  productName: string;
  productPrice: number;
  productDescription: string;
  productSubCategory: SubCategoryType | null;
  productCategory: CategoryType | null;
  productImages: File[];
  productVariants: ProductVariantType[];
  productQuantity: number;
  productDiscount: number;
}

export interface ProductVariantType {
  id: string;
  variantName: string;
}

export interface ProductImageType {
  source: string;
  id: number;
}

export type SellerProductStatusType = "active" | "inactive" | "outOfStock";

export interface SellersProductType {
  title: string;
  id: string;
  views: string;
  sales: string;
  status: SellerProductStatusType;
}
