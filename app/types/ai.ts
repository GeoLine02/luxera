export interface MessageType {
  id: string;
  content: string;
  role: "user" | "assistant";
  product_cards?: MessageProductType[];
}

export interface MessageProductType {
  description: string;
  imageUrl: string;
  link: string;
  productId: number;
  variantDiscount: number;
  variantId: number;
  variantName: string;
  variantPrice: number;
}

export interface ChatType {
  id: string;
  title: string;
}
