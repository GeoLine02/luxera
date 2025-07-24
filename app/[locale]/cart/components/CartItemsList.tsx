import Input from "@/app/ui/Input";
import CartItem from "./CartItem";

const CartItemsList = () => {
  return (
    <div className="w-full">
      <div className="py-2 pl-4 border-b flex items-center gap-2 border-medium-gray">
        <Input type="checkbox" name="selectAll" checked={false} />
        <label className="text-xl font-medium" htmlFor="selectAll">
          Select All (3)
        </label>
      </div>
      <div>
        <CartItem description="dasd" price={54} qunatity={1} title="dsasdasd" />
        <CartItem description="dasd" price={54} qunatity={1} title="dsasdasd" />
        <CartItem description="dasd" price={54} qunatity={1} title="dsasdasd" />
      </div>
    </div>
  );
};

export default CartItemsList;
