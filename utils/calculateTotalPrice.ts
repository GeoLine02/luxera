import { CartType } from "@/app/types/cart";

export const calculateTotalPrice = (selectedCartItems: CartType[]) => {
  return selectedCartItems.reduce((total, item) => {
    const price = item.variant.variant_price;
    const discount = item.variant.variant_discount || 0;

    const finalPrice = price - (price * discount) / 100;

    return total + finalPrice * item.product_quantity;
  }, 0);
};
