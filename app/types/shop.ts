export interface ShopRegisterType {
  userId: string;
  shopName: string;
  password: string;
  repeatPassword: string;
}

export interface ShopCityType {
  id: number;
  city_name: string;
}

export interface ShopType {
  id: number;
  owner_id: number;
  shop_name: string;
  city_id: number;
  custom_city_name: string;
  city: ShopCityType;
}
