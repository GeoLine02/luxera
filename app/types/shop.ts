export interface ShopRegisterType {
  userId: string;
  shopName: string;
  password: string;
  repeatPassword: string;
}

export interface ShopType {
  id: number;
  owner_id: number;
  shop_name: string;
}
