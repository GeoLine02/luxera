import { CiHeart } from "react-icons/ci";
import OrderNowBtn from "./OrderNowBtn";
import AddToCartBtn from "./AddToCartBtn";
import ProductQuantity from "./ProductQuantity";

interface ProductInfoPanelProps {
  productName: string;
  productPrice: number;
}

const ProductInfoPanel = ({
  productName,
  productPrice,
}: ProductInfoPanelProps) => {
  return (
    <div className="w-full max-w-[548px]">
      <div className="flex justify-between items-center  w-full">
        <h1 className="text-[40px] font-bold">{productName}</h1>
        <div className="border border-gray-300 rounded-full p-1">
          <CiHeart />
        </div>
      </div>
      <h2 className="text-3xl font-bold">{productPrice} GEL</h2>

      <ProductQuantity />

      <div className="bg-light-gray rounded-lg py-[28px] text-[24px] w-full text-center font-bold">
        <h1>Personalise & Add to cart</h1>
      </div>
      <div className="flex gap-5 mt-11">
        <OrderNowBtn />
        <AddToCartBtn />
      </div>
    </div>
  );
};

export default ProductInfoPanel;
