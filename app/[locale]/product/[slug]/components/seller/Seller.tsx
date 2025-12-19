import { User } from "@/app/types/user";
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
          Seller
        </div>
        <div>
          <span className="text-sm text-medium-gray">Seller</span>
          <h1>{shop.shop_name}</h1>
        </div>
      </div>
      <SellerPageButton shopId={shop.id} shopName={shop.shop_name} />
    </div>
  );
};

export default Seller;
