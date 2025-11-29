import { ProductType, ProductVariantType } from "./product";

export interface CartType {
  id: number;
  product: ProductType;
  product_quantity: number;
  variant: ProductVariantType;
}
