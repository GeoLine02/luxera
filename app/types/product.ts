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
