import SellerPageButton from "./SellerPageButton";
import { ShopType } from "@/app/types/shop";

interface SellerProps {
  shop: ShopType;
}

const Seller = ({ shop }: SellerProps) => {
  console.log("shop", shop);
  return (
    <div className="bg-light-pink rounded-xl p-4 flex items-center justify-between mt-4 max-w-[570px]">
      <div className="flex items-center gap-4">
        <div className="bg-dark-pink border-2 border-white rounded-full w-14 aspect-square flex items-center justify-center">
          <span>Seller</span>
        </div>
        <div>
          <h1 className="font-semibold">{shop.shop_name}</h1>
          <span className="text-sm">
            Location:{" "}
            {shop.city_id ? shop.city.city_name : shop.custom_city_name}
          </span>
        </div>
      </div>
      <SellerPageButton shopId={shop.id} shopName={shop.shop_name} />
    </div>
  );
};

export default Seller;
