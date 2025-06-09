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

export type ProductTabsType = "description" | "reviews" | "hotDeal";

export interface ProductReviewType {
  id: number;
  senderImage: StaticImageData;
  senderName: string;
  reviewRating: number;
  reviewerComment: string;
  postTime: string;
}
