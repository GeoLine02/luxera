export interface Order {
  id: number;
  date: string;
  status: "Delivered" | "Shipped";
  price: number;
}

export interface OrderPayload {
  city: string;
  streetAddress: string;
  postcode: string;
  state: string;
  country?: string;
  phoneNumber: string;
  email: string;
  payment_method: string;
  basket: BasketItem[];
  currency: string;
}

export interface BasketItem {
  productId: number;
  productQuantity: number;
  price: number;
  shopId: number;
  variantId: number;
}
