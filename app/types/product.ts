import { StaticImageData } from "next/image";

export interface ProductType {
  id: number;
  image: StaticImageData;
  title: string;
  price: number;
}

export interface FeatureProductType {
  id: number;
  image: StaticImageData;
  price: number;
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
