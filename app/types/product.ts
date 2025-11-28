import { CategoryType, SubCategoryType } from "./categories";
import { User } from "./user";

export interface ProductType {
  id: number;
  product_image: string;
  product_name: string;
  product_rating: number;
  product_price: number;
  produt_status: string;
  product_subcategory_id: number;
  product_owner_id: number;
}

export interface ProductDetailsType extends ProductType {
  variants: ProductVariantType[];
  images: ProductImageType[];
  owner: User;
  shop_id: number;
}

export interface ProductImageType {
  id: number;
  image: string;
  productId: number;
  variant_id: number;
}

export interface NewProductValues {
  productName: string;
  productPrice: number;
  productDescription: string;
  productSubCategory: SubCategoryType | null;
  productCategory: CategoryType | null;
  productPreviewImages: File[];
  productVariants: ProductVariantType[];
  productQuantity: number;
  productDiscount: number;
}

export type ProductVariantType = {
  id: number | string;
  variant_name: string;
  variant_price: number;
  variant_quantity: number;
  variant_discont: number;
  variant_images: File[];
};

export type SellerProductStatusType = "active" | "inactive" | "outOfStock";

export interface SellersProductType {
  title: string;
  id: string;
  views: string;
  sales: string;
  status: SellerProductStatusType;
}
